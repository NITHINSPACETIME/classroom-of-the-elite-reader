import { VolumePageClient } from "./VolumePageClient";
import { rezeroVolumes } from "@/data/rezero";

export const revalidate = 2592000; // Cache for 30 days

interface PageProps {
    params: Promise<{ volumeId: string }>;
}

export async function generateStaticParams() {
    return rezeroVolumes.map((vol) => ({
        volumeId: vol.id,
    }));
}

export default async function VolumePage({ params }: PageProps) {
    const { volumeId } = await params;
    return <VolumePageClient volumeId={volumeId} />;
}
