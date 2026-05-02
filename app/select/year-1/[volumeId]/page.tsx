import { VolumePageClient } from "./VolumePageClient";
import { volumes, shortStories } from "@/data/year1";

export const runtime = 'edge';

interface PageProps {
    params: Promise<{ volumeId: string }>;
}

export default async function VolumePage({ params }: PageProps) {
    const { volumeId } = await params;
    return <VolumePageClient volumeId={volumeId} />;
}
