import { getAllArticleMeta } from "@/lib/articles"
import { HomeClient } from "./HomeClient"

export default function Home() {
    // Fetch latest 3 articles to show instead of testimonials
    const articles = getAllArticleMeta().slice(0, 3)

    return <HomeClient articles={articles} />
}
