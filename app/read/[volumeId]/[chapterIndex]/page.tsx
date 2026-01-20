import { getChapterContent } from "@/lib/epub-parser";
import { HtmlReader } from "@/components/reader/HtmlReader";
import { notFound } from "next/navigation";
import { allVolumes } from "@/lib/volumes";
import { volumes as y1, shortStories as y1ss } from "@/data/year1";
import { volumes as y2, shortStories as y2ss } from "@/data/year2";
import { volumes as y3, shortStories as y3ss } from "@/data/year3";




export async function generateStaticParams() {
    const params: { volumeId: string, chapterIndex: string }[] = [];

    for (const volume of allVolumes) {
        const chapterCount = volume.chapters.length || 50;
        for (let i = 1; i <= chapterCount; i++) {
            params.push({
                volumeId: volume.id,
                chapterIndex: i.toString(),
            });
        }
    }

    return params;
}

export const revalidate = 86400; // 1 day
export const dynamicParams = true;

export default async function ReadPage({ params, searchParams }: { params: Promise<{ volumeId: string, chapterIndex: string }>, searchParams: Promise<{ logical?: string }> }) {
    const { volumeId, chapterIndex } = await params;
    const { logical } = await searchParams;
    const index = parseInt(chapterIndex);
    const isLogical = logical === 'true';

    if (isNaN(index)) notFound();

    const volume = allVolumes.find(v => v.id === volumeId);


    if (volume?.customChapters && volume.customChapters[index]) {
        const customContent = volume.customChapters[index];
        const chapterTitle = volume.chapters[index - 1] || `Chapter ${index}`;


        let detailsLink = "/select";
        if (y1ss.some(v => v.id === volumeId)) {
            detailsLink = `/select/year-1/${volumeId}`;
        } else if (y2ss.some(v => v.id === volumeId)) {
            detailsLink = `/select/year-2/${volumeId}`;
        } else if (y3ss.some(v => v.id === volumeId)) {
            detailsLink = `/select/year-3/${volumeId}`;
        }


        // Convert plain text to HTML paragraphs
        const htmlContent = customContent
            .split('\n')
            .filter((line: string) => line.trim())
            .map((line: string) => `<p>${line}</p>`)
            .join('');

        return (
            <HtmlReader
                content={htmlContent}
                title={chapterTitle}
                volumeId={volumeId}
                chapterIndex={index}
                prevChapter={index > 1 && volume.customChapters[index - 1] ? { volumeId, chapter: index - 1, title: volume.chapters[index - 2] } : undefined}
                nextChapter={volume.customChapters[index + 1] ? { volumeId, chapter: index + 1, title: volume.chapters[index] } : undefined}
                toc={volume.chapters.map((ch, i) => ({ label: ch, href: `/read/${volumeId}/${i + 1}?logical=true`, index: i + 1 }))}
                volumeTitle={volume.title}
                epubSource={undefined}
                detailsLink={detailsLink}
                returnLink="/select"
                currentSpineIndex={index}
                nextVolumeLink={undefined}
                nextVolumeTitle={undefined}
            />
        );
    }

    const data = await getChapterContent(volumeId, index, isLogical);

    let detailsLink = "/select";
    let returnLink = "/select";
    if (volume) {
        if (y1.some(v => v.id === volume.id)) {
            detailsLink = `/select/year-1/${volume.id}`;
            returnLink = `/select`;
        }
        else if (y2.some(v => v.id === volume.id)) {
            detailsLink = `/select/year-2/${volume.id}`;
            returnLink = `/select`;
        }
        else if (y3.some(v => v.id === volume.id)) {
            detailsLink = `/select/year-3/${volume.id}`;
            returnLink = `/select`;
        }
    }

    if (!data) {
        notFound();
    }


    let nextVolumeLink = undefined;
    let nextVolumeTitleVal = undefined;
    if (volume) {
        const currentVolIndex = allVolumes.findIndex(v => v.id === volume.id);
        if (currentVolIndex !== -1 && currentVolIndex < allVolumes.length - 1) {
            const nextVol = allVolumes[currentVolIndex + 1];


            const isY1 = y1.some(v => v.id === volume.id);
            const isY2 = y2.some(v => v.id === volume.id);
            const isY3 = y3.some(v => v.id === volume.id);

            const nextIsY1 = y1.some(v => v.id === nextVol.id);
            const nextIsY2 = y2.some(v => v.id === nextVol.id);
            const nextIsY3 = y3.some(v => v.id === nextVol.id);


            if (isY1 && nextIsY1) {
                nextVolumeLink = `/select/year-1/${nextVol.id}`;
                nextVolumeTitleVal = nextVol.title;
            } else if (isY2 && nextIsY2) {
                nextVolumeLink = `/select/year-2/${nextVol.id}`;
                nextVolumeTitleVal = nextVol.title;
            } else if (isY3 && nextIsY3) {
                nextVolumeLink = `/select/year-3/${nextVol.id}`;
                nextVolumeTitleVal = nextVol.title;
            }
        }
    }

    return (
        <HtmlReader
            content={data.content}
            title={data.title}
            volumeId={volumeId}
            chapterIndex={index}
            prevChapter={data.prevChapter}
            nextChapter={data.nextChapter}
            toc={data.toc}
            volumeTitle={volume?.title || volumeId}
            epubSource={volume?.epubSource}
            detailsLink={detailsLink}
            returnLink={returnLink}
            currentSpineIndex={data.currentSpineIndex}
            nextVolumeLink={nextVolumeLink}
            nextVolumeTitle={nextVolumeTitleVal}
        />
    );
}

