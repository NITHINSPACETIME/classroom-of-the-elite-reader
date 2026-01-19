
import { volumes as year1Volumes, shortStories as year1ShortStories } from "@/data/year1";
import { volumes as year2Volumes, shortStories as year2ShortStories } from "@/data/year2";
import { volumes as year3Volumes, shortStories as year3ShortStories } from "@/data/year3";

export const allVolumes = [
    ...year1Volumes,
    ...year2Volumes,
    ...year3Volumes,
    ...year1ShortStories,
    ...year2ShortStories,
    ...year3ShortStories
];

export function findVolumeByUrl(url: string | null) {
    if (!url) return null;
    let decodedUrl = url;
    try {
        decodedUrl = decodeURIComponent(url);
    } catch (e) { }


    let found = allVolumes.find(vol => vol.epubSource === decodedUrl);


    if (!found) found = allVolumes.find(vol => vol.epubSource === url);


    if (!found) {
        const cleanUrl = decodedUrl.split('?')[0];
        found = allVolumes.find(vol => vol.epubSource?.split('?')[0] === cleanUrl);
    }


    if (!found) {
        const targetFilename = decodedUrl.split('?')[0].split('/').pop();
        if (targetFilename) {
            found = allVolumes.find(vol => {
                const volFilename = vol.epubSource?.split('?')[0].split('/').pop();
                return volFilename === targetFilename;
            });
            if (found) { }
        }
    }

    if (!found) {

    } else {

    }

    return found;
}

export function findVolumeById(id: string | null) {
    if (!id) return null;
    return allVolumes.find(vol => vol.id === id);
}
