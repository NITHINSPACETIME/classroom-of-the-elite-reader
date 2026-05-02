import { VolumePageClient } from "./VolumePageClient";
import { volumes, shortStories } from "@/data/year3";

export const revalidate = 2592000; // Cache for 30 days



interface PageProps {
    params: Promise<{ volumeId: string }>;
}

export default async function VolumePage({ params }: PageProps) {
    const { volumeId } = await params;
    return <VolumePageClient volumeId={volumeId} />;
}
