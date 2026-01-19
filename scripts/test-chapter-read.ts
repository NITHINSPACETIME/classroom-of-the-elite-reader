
import { getChapterContent } from '../lib/epub-parser';

async function test() {
    console.log("Testing Chapter Read...");
    const start = Date.now();
    // Assuming v1 is available in public/books/year1/v1.epub (or cached)
    // Note: In dev/local environment, if the file isn't in public/books, it might fail if cache is empty.
    // However, we expect at least one volume to be testable.
    const result = await getChapterContent('v1', 1);
    const time = Date.now() - start;

    if (result && result.content) {
        console.log(`[SUCCESS] Read Chapter 1 in ${time}ms`);
        console.log(`Title: ${result.title}`);
        console.log(`Content Length: ${result.content.length}`);
    } else {
        console.error("[FAILED] Could not read chapter content.");
    }
}

test();
