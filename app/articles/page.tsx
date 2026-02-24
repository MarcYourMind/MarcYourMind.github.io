import { getAllArticleMeta } from "@/lib/articles"
import ArticlesClient from "./ArticlesClient"

export default function ArticlesPage() {
    const articlesMap = {
        en: getAllArticleMeta("en"),
        es: getAllArticleMeta("es"),
        fr: getAllArticleMeta("fr")
    };
    return <ArticlesClient articles={articlesMap.en} articlesMap={articlesMap} />
}
