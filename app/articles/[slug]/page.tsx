import ArticleDetailClient from "./ArticleDetailClient"

export function generateStaticParams() {
    return [
        { slug: "building-low-latency-trading-systems" },
        { slug: "smart-contract-security-exploits" },
        { slug: "scaling-backend-event-driven" },
        { slug: "machine-learning-pipelines-production" },
        { slug: "automated-market-making-solana" },
        { slug: "cervantes-ai-storyteller" },
    ]
}

export default function ArticleDetailPage() {
    return <ArticleDetailClient />
}
