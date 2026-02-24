import { getArticleBySlug, getAllArticleSlugs } from "@/lib/articles"
import { notFound } from "next/navigation"
import { compileMDX } from "next-mdx-remote/rsc"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
import { MDXComponents } from "@/components/MDXComponents"
import ArticleShell from "./ArticleShell"

export async function generateStaticParams() {
    const slugs = getAllArticleSlugs()
    return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const article = getArticleBySlug(slug)
    if (!article) return {}
    return {
        title: article.title,
        description: article.excerpt,
    }
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const article = getArticleBySlug(slug)
    if (!article) notFound()

    const { content } = await compileMDX({
        source: article.content,
        components: MDXComponents,
        options: {
            mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug],
            },
            parseFrontmatter: false, // We already parsed it with gray-matter
        },
    })

    return (
        <ArticleShell article={article}>
            <div className="article-content">
                {content}
            </div>
        </ArticleShell>
    )
}
