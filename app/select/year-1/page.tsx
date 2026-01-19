import { volumes, shortStories, VolumeData } from "@/data/year1";
import Year1Client from "./Year1Client";
import { Suspense } from "react";

export default function Year1Page() {
    const accurateVolumes: VolumeData[] = [
        volumes[0],
        volumes[1],
        volumes[2],
        volumes[3],
        volumes[4],
        volumes[5],
        volumes[6],
        volumes[7],
        volumes[8],
        volumes[9],
        volumes[10],
        volumes[11],
        volumes[12],
        volumes[13],
    ];

    // Strip heavy content (customChapters text) to prevent bloating the client bundle
    const stripContent = (vol: VolumeData): VolumeData => {
        const { customChapters, ...rest } = vol;
        return rest;
    };

    const lightVolumes = accurateVolumes.map(stripContent);
    const lightShortStories = shortStories.map(stripContent);

    return (
        <Year1Client volumes={lightVolumes} shortStories={lightShortStories} />
    );
}
