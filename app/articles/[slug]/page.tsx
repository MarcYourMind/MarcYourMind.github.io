import ArticleDetailClient from "./ArticleDetailClient"

export function generateStaticParams() {
    return [
        { slug: "building-low-latency-trading-systems" },
        { slug: "smart-contract-security-exploits" },
        { slug: "data-design-patterns" },
        { slug: "machine-learning-pipelines-production" },
        { slug: "transformer-trading-systems" },
        { slug: "automated-market-making-solana" },
        { slug: "cervantes-ai-storyteller" },
        { slug: "event-driven-trading-design" },
    ]
}

export default function ArticleDetailPage() {
    return <ArticleDetailClient />
}
