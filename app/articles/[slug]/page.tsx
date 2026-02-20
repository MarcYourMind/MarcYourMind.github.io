import ArticleDetailClient from "./ArticleDetailClient"

export function generateStaticParams() {
    return [
        { slug: "building-low-latency-trading-systems" },
        { slug: "smart-contract-security" },
    ]
}

export default function ArticleDetailPage() {
    return <ArticleDetailClient />
}
