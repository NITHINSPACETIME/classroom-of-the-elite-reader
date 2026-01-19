
import { getChapterContent } from '../lib/epub-parser';

async function test() {
    console.log("Testing Chapter Read Performance...");


    const tests = [
        { vol: 'v11.5', ch: 3 },
        { vol: 'v1', ch: 1 },
        { vol: 'y2v1', ch: 1 },
        { vol: 'y2v5', ch: 4 }
    ];

    for (const t of tests) {
        const start = Date.now();
        console.log(`\nReading ${t.vol} Chapter ${t.ch}...`);
        try {
            const result = await getChapterContent(t.vol, t.ch);
            const time = Date.now() - start;
            if (result && result.content) {
                console.log(`[SUCCESS] Read in ${time}ms`);
                console.log(`Size: ${result.content.length} chars`);
                if (result.content.includes("data:image")) {
                    console.error("⚠️  WARNING: Base64 images detected! Static image replacement failed.");
                    console.log("Sample Base64 start:", result.content.match(/src="data:image[^"]+"/)![0].substring(0, 50) + "...");
                } else {
                    console.log("✅ No Base64 images detected (Static linking working)");
                }
            } else {
                console.log(`[SKIPPED] Content not found (might be missing epub or index out of bounds)`);
            }
        } catch (e) {
            console.error(`[ERROR] Failed:`, e);
        }
    }
}

test();

