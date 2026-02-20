import { resumeData } from "@/data/resume"
import ResumeTrackClient from "./ResumeTrackClient"

export function generateStaticParams() {
    return Object.keys(resumeData).map((track) => ({
        track: track.toLowerCase(),
    }))
}

export default function ResumeTrack() {
    return <ResumeTrackClient />
}
