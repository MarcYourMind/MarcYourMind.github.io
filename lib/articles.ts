import fs from "fs"
import path from "path"
import matter from "gray-matter"

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles")

export interface ArticleMeta {
    slug: string
    title: string
    date: string
    readTime: string
    tags: string[]
    excerpt: string
}

export interface TocEntry {
    id: string
    text: string
    level: number
}

export interface Article extends ArticleMeta {
    content: string
    toc: TocEntry[]
}

/** Convert a heading string to a URL-safe id */
function slugifyHeading(text: string): string {
    return text
        .toLowerCase()
        .replace(/[`*_~\[\]()]/g, "")       // strip markdown formatting chars
        .replace(/[^\w\s-]/g, "")            // strip remaining non-word chars
        .trim()
        .replace(/\s+/g, "-")
}

/** Extract TOC entries (h2 and h3) from raw markdown content */
function extractToc(content: string): TocEntry[] {
    const toc: TocEntry[] = []
    const headingRegex = /^(#{2,3})\s+(.+)$/gm
    let match: RegExpExecArray | null
    const seen = new Map<string, number>()

    while ((match = headingRegex.exec(content)) !== null) {
        const level = match[1].length
        const rawText = match[2].trim()
        const baseId = slugifyHeading(rawText)

        // Handle duplicate heading ids
        const count = seen.get(baseId) ?? 0
        seen.set(baseId, count + 1)
        const id = count === 0 ? baseId : `${baseId}-${count}`

        toc.push({ id, text: rawText, level })
    }

    return toc
}

/** Format a date string like "2024-03-10" → "Mar 10, 2024" */
function formatDate(dateStr: string): string {
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
    })
}

/** Get sorted list of all article slugs */
export function getAllArticleSlugs(): string[] {
    if (!fs.existsSync(ARTICLES_DIR)) return []
    return fs
        .readdirSync(ARTICLES_DIR)
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => file.replace(/\.mdx$/, ""))
}

/** Get metadata for all articles (for the listing page), sorted by date desc */
export function getAllArticleMeta(): ArticleMeta[] {
    const slugs = getAllArticleSlugs()
    const articles = slugs.map((slug) => {
        const fullPath = path.join(ARTICLES_DIR, `${slug}.mdx`)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data } = matter(fileContents)

        return {
            slug,
            title: data.title ?? slug,
            rawDate: data.date ?? "1970-01-01",
            date: data.date ? formatDate(data.date) : "",
            readTime: data.readTime ?? "",
            tags: data.tags ?? [],
            excerpt: data.excerpt ?? "",
        }
    })

    // Sort newest first using rawDate
    return articles
        .sort((a, b) => {
            const dateA = new Date(a.rawDate).getTime()
            const dateB = new Date(b.rawDate).getTime()
            return dateB - dateA
        })
        .map(({ rawDate, ...rest }) => rest)
}

/** Get a single article (meta + content + toc) by slug */
export function getArticleBySlug(slug: string): Article | null {
    const fullPath = path.join(ARTICLES_DIR, `${slug}.mdx`)
    if (!fs.existsSync(fullPath)) return null

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    const toc = extractToc(content)

    return {
        slug,
        title: data.title ?? slug,
        date: data.date ? formatDate(data.date) : "",
        readTime: data.readTime ?? "",
        tags: data.tags ?? [],
        excerpt: data.excerpt ?? "",
        content,
        toc,
    }
}
