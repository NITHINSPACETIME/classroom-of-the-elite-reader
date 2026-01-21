import { volumes, shortStories, VolumeData } from "@/data/year2";
import Year2Client from "./Year2Client";
import { Suspense } from "react";

export const dynamic = 'force-static';

export default function Year2Page() {
    // Strip heavy content (customChapters text)
    const stripContent = (vol: VolumeData): VolumeData => {
        const { customChapters, ...rest } = vol;
        return rest;
    };

    const lightVolumes = volumes.map(stripContent);
    const lightShortStories = shortStories.map(stripContent);

    return (
        <Year2Client volumes={lightVolumes} shortStories={lightShortStories} />
    );
}
