import fs from 'fs';
import path from 'path';
import { orvVolumes } from "@/data/orv";
import OrvSelectClient from "./OrvSelectClient";

export const dynamic = 'force-static';

export default function OrvSelectPage() {
  const summaryPath = path.join(process.cwd(), 'public', 'assets', 'orv', 'summary.json');
  let summary = { mainChapters: [], contChapters: [], sideChapters: [] };
  if (fs.existsSync(summaryPath)) {
    summary = JSON.parse(fs.readFileSync(summaryPath, 'utf-8'));
  }

  return (
    <OrvSelectClient volumes={orvVolumes} summary={summary} />
  );
}
