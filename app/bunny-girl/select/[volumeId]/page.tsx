import { bunnyGirlVolumes, bunnyGirlSideStories } from "@/data/bunny-girl";
import { VolumePageClient } from "./VolumePageClient";

export const revalidate = 2592000; // Cache for 30 days

interface PageProps {
    params: Promise<{ volumeId: string }>;
}

export async function generateStaticParams() {
    const allVols = [...bunnyGirlVolumes, ...bunnyGirlSideStories];
    return allVols.map((vol) => ({
        volumeId: vol.id,
    }));
}

export default async function VolumePage({ params }: PageProps) {
    const { volumeId } = await params;
    return <VolumePageClient volumeId={volumeId} />;
}
