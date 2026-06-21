import { mushokuTenseiVolumes, mushokuTenseiSideStories, mushokuTenseiRedundancy } from "@/data/mushoku-tensei";
import { VolumePageClient } from "./VolumePageClient";

export const revalidate = 2592000; // Cache for 30 days

interface PageProps {
    params: Promise<{ volumeId: string }>;
}

export async function generateStaticParams() {
    const allVols = [...mushokuTenseiVolumes, ...mushokuTenseiSideStories, ...mushokuTenseiRedundancy];
    return allVols.map((vol) => ({
        volumeId: vol.id,
    }));
}

export default async function VolumePage({ params }: PageProps) {
    const { volumeId } = await params;
    return <VolumePageClient volumeId={volumeId} />;
}
