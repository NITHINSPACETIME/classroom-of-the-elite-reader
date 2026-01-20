
const toc = [
    { "label": "Table of Contents", "href": "Text/TableOfContents.html#tableofcontents", "index": 2 },
    { "label": "Character Gallery", "href": "Text/section-0001.html#auto_bookmark_toc_top", "index": 3 },
    { "label": "Chapter 1 - Prologue : The Structure of Japanese Society", "href": "Text/section-0005.html#auto_bookmark_toc_top", "index": 7 },
    { "label": "Chapter 2: Welcome to the School Life of Your Dreams", "href": "Text/section-0006.html#auto_bookmark_toc_top", "index": 8 }
];

const chapters = [
    "Prologue: The Structure of Japanese Society",
    "Chapter 1: Welcome to the School Life of your Dreams"
];

function testMatch(chapterIndex: number) {
    const expectedTitle = chapters[chapterIndex - 1];
    console.log(`\nTesting Chapter Index: ${chapterIndex}`);
    console.log(`Expected: "${expectedTitle}"`);

    const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const expectedSimple = normalize(expectedTitle);
    console.log(`Normalized Expected: "${expectedSimple}"`);

    const match = toc.find(t => {
        const labelSimple = normalize(t.label);
        console.log(`  Comparing with TOC: "${t.label}" -> "${labelSimple}"`);

  
        if (labelSimple.includes(expectedSimple) || expectedSimple.includes(labelSimple)) {
            console.log("    -> MATCH (Direct)");
            return true;
        }

        if (expectedSimple.includes('prologue') && labelSimple.includes('prologue')) {
            console.log("    -> MATCH (Prologue keyword)");
            return true;
        }
        if (expectedSimple.includes('epilogue') && labelSimple.includes('epilogue')) {
            console.log("    -> MATCH (Epilogue keyword)");
            return true;
        }

        const chNumMatch = expectedTitle.match(/Chapter\s+(\d+)/i);
        if (chNumMatch) {
            const num = chNumMatch[1];
            // Check if TOC label is "Chapter X" or "X. Title"
            if (t.label.match(new RegExp(`Chapter\\s+${num}`, 'i'))) {
                console.log(`    -> MATCH (Regex Chapter ${num})`);
                return true;
            }
            if (t.label.match(new RegExp(`^${num}\\.`, 'i'))) {
                console.log("    -> MATCH (Regex Num.)");
                return true;
            }
            // Handle "1. Title" format
            if (normalize(t.label).startsWith(`${num}`)) {
                console.log("    -> MATCH (StartsWith Num)");
                return true;
            }
        }

        return false;
    });

    if (match) {
        console.log(`RESULT: Found match at Index ${match.index} ("${match.label}")`);
    } else {
        console.log("RESULT: NO MATCH FOUND");
    }
}

testMatch(1);
testMatch(2);
