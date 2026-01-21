import { volumes as y1v, shortStories as y1s } from "@/data/year1";
import { volumes as y2v, shortStories as y2s } from "@/data/year2";
import { volumes as y3v, shortStories as y3s } from "@/data/year3";

export interface VolumeData {
    id: string;
    title: string;
    coverImage: string;
    volumeNumber: string;
    releaseDateJP?: string;
    releaseDateEN?: string;
}

export const allVolumes = [...y1v, ...y1s, ...y2v, ...y2s, ...y3v, ...y3s];

export function getVolumeById(id: string): VolumeData | undefined {
    return allVolumes.find(v => v.id === id);
}
