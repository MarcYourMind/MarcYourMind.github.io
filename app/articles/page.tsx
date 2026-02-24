import { getAllArticleMeta } from "@/lib/articles"
import ArticlesClient from "./ArticlesClient"

export default function ArticlesPage() {
    const articles = getAllArticleMeta()
    return <ArticlesClient articles={articles} />
}
