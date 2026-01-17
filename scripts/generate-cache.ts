
import { allVolumes } from "@/lib/volumes";
import { getChapterContent, isStoryChapter } from "@/lib/epub-parser";

async function generateCache() {


    for (const vol of allVolumes) {

        const firstChapter = await getChapterContent(vol.id, 1, true);

        if (!firstChapter) {
            continue;
        }

        if (!firstChapter.toc) {
            continue;
        }

        const storyChapters = firstChapter.toc.filter(item => isStoryChapter(item.label));
        const totalChapters = storyChapters.length;

        const chaptersToCache = [];
        for (let i = 2; i <= totalChapters; i++) {
            chaptersToCache.push(i);
        }

        const BATCH_SIZE = 20;
        for (let i = 0; i < chaptersToCache.length; i += BATCH_SIZE) {
            const batch = chaptersToCache.slice(i, i + BATCH_SIZE);
            await Promise.all(batch.map(async (chapterIndex) => {
                try {
                    await getChapterContent(vol.id, chapterIndex, true);
                } catch (err) {

                }
            }));
        }
    }

}

generateCache().catch(() => { });
