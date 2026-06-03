import { rezeroVolumes, RezeroVolumeData } from "@/data/rezero";
import RezeroSelectClient from "./RezeroSelectClient";

export const dynamic = 'force-static';

export default function RezeroSelectPage() {
    // Strip heavy customChapters HTML to keep the dynamic bundle size highly optimized
    const stripContent = (vol: RezeroVolumeData): RezeroVolumeData => {
        const { customChapters: _, ...rest } = vol;
        return rest;
    };

    const lightVolumes = rezeroVolumes.map(stripContent);

    return (
        <RezeroSelectClient volumes={lightVolumes} />
    );
}
