import { VolumePageClient } from "./VolumePageClient";
import { volumes, shortStories } from "@/data/year1";

export const revalidate = 2592000; // Cache for 30 days



interface PageProps {
    params: Promise<{ volumeId: string }>;
}

export async function generateStaticParams() {
    return [...volumes, ...shortStories].map((vol) => ({
        volumeId: vol.id,
    }));
}

export default async function VolumePage({ params }: PageProps) {
    const { volumeId } = await params;
    return <VolumePageClient volumeId={volumeId} />;
}
