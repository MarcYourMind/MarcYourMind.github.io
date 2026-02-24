import { getArticleBySlug, getAllArticleSlugs } from "@/lib/articles"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import rehypeSlug from "rehype-slug"
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

    const renderedContent = (
        <MDXRemote
            source={article.content}
            options={{
                mdxOptions: {
                    remarkPlugins: [],
                    rehypePlugins: [rehypeSlug],
                },
            }}
        />
    )

    return (
        <ArticleShell article={article}>
            {renderedContent}
        </ArticleShell>
    )
}
