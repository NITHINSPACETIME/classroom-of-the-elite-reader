import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

async function fetchContent(url: string) {
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);
    
    // Remove all style, script, and SVG tags so they don't pollute the text
    $('style').remove();
    $('script').remove();
    $('svg').remove();
    $('button').remove();
    
    let paragraphs: string[] = [];
    $('p').each((i, el) => {
        let text = $(el).text().trim();
        if (text && text.length > 20 && !text.includes('Be the first one to comment') && !text.includes('Next Chapter')) {
            // Also clean up any lingering css strings just in case
            text = text.replace(/\.css-[a-zA-Z0-9_-]+{[^}]+}/g, '');
            text = text.replace(/;}/g, '');
            paragraphs.push(text);
        }
    });

    return paragraphs.join('\n');
}

async function main() {
    console.log('Fetching Prologue...');
    const prologue = await fetchContent('https://animeanyway.com/y3v4/prologue');
    
    console.log('Fetching Chapter 1...');
    const ch1 = await fetchContent('https://animeanyway.com/y3v4/ch1');
    
    console.log('Fetching Chapter 2...');
    const ch2 = await fetchContent('https://animeanyway.com/y3v4/ch2');
    
    const output = {
        1: prologue.replace(/Prologue Ends\. Join our Discord.*?$/i, '').trim(),
        2: ch1.replace(/Chapter \d+ Ends\. Join our Discord.*?$/i, '').trim(),
        3: ch2.replace(/Chapter \d+ Ends\. Join our Discord.*?$/i, '').trim()
    };

    const tsCode = `export const y3v4Chapters: Record<number, string> = ${JSON.stringify(output, null, 4)};`;
    fs.mkdirSync('data/custom', { recursive: true });
    fs.writeFileSync('data/custom/y3v4.ts', tsCode);
    console.log('Done! Overwrote data/custom/y3v4.ts');
}

main().catch(console.error);
