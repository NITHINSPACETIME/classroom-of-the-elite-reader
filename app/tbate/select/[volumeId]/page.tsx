import { tbateVolumes, tbateSideStories } from "@/data/tbate";
import { VolumePageClient } from "./VolumePageClient";

export const revalidate = 2592000; // Cache for 30 days

export async function generateStaticParams() {
    const allVols = [...tbateVolumes, ...tbateSideStories];
    return allVols.map((vol) => ({
        volumeId: vol.id,
    }));
}

export default async function VolumePage({ params }: { params: Promise<{ volumeId: string }> }) {
    const { volumeId } = await params;
    return <VolumePageClient volumeId={volumeId} />;
}
