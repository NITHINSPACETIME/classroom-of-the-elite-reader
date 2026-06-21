import { orvVolumes } from "@/data/orv";
import { VolumePageClient } from "./VolumePageClient";
import fs from 'fs';
import path from 'path';

export const revalidate = 2592000; // Cache for 30 days

interface PageProps {
  params: Promise<{ volumeId: string }>;
}

export async function generateStaticParams() {
  return orvVolumes.map((vol) => ({
    volumeId: vol.id,
  }));
}

export default async function VolumePage({ params }: PageProps) {
  const { volumeId } = await params;
  
  // Load summary.json on server side
  const summaryPath = path.join(process.cwd(), 'public', 'assets', 'orv', 'summary.json');
  let summary = { mainChapters: [], contChapters: [], sideChapters: [] };
  if (fs.existsSync(summaryPath)) {
    summary = JSON.parse(fs.readFileSync(summaryPath, 'utf-8'));
  }

  return <VolumePageClient volumeId={volumeId} summary={summary} />;
}
