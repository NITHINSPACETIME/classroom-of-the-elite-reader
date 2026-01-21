import { VolumePageClient } from "./VolumePageClient";
import { volumes, shortStories } from "@/data/year3";

export const dynamic = 'force-static';

export async function generateStaticParams() {
    return [...volumes, ...shortStories].map((vol) => ({
        volumeId: vol.id,
    }));
}

interface PageProps {
    params: Promise<{ volumeId: string }>;
}

export default async function VolumePage({ params }: PageProps) {
    const { volumeId } = await params;
    return <VolumePageClient volumeId={volumeId} />;
}
