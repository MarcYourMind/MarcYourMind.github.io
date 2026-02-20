import { projects } from "@/data/projects"
import ProjectDetailClient from "./ProjectDetailClient"

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export default function ProjectDetail() {
    return <ProjectDetailClient />
}
