import { reverendInsanityVolumes } from "@/data/reverend-insanity";
import { VolumePageClient } from "./VolumePageClient";

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return reverendInsanityVolumes.map((vol) => ({
    volumeId: vol.id,
  }));
}

interface PageProps {
  params: Promise<{ volumeId: string }>;
}

export default async function ReverendInsanityVolumePage({ params }: PageProps) {
  const { volumeId } = await params;
  return <VolumePageClient volumeId={volumeId} />;
}
