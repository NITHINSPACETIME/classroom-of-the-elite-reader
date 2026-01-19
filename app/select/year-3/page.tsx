import { volumes, shortStories, VolumeData } from "@/data/year3";
import Year3Client from "./Year3Client";
import { Suspense } from "react";

export default function Year3Page() {
    // Strip heavy content (customChapters text)
    const stripContent = (vol: VolumeData): VolumeData => {
        const { customChapters, ...rest } = vol;
        return rest;
    };

    const lightVolumes = volumes.map(stripContent);
    const lightShortStories = shortStories.map(stripContent);

    return (
        <Year3Client volumes={lightVolumes} shortStories={lightShortStories} />
    );
}
