import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

async function fetchContent(url: string) {
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);
    
    // Remove unwanted elements
    $('style').remove();
    $('script').remove();
    $('svg').remove();
    $('button').remove();
    
    // Fix image URLs
    $('img').each((i, el) => {
        $(el).removeAttr('srcset');
        $(el).removeAttr('data-nimg');
        $(el).removeAttr('decoding');
        $(el).removeAttr('loading');
        
        let src = $(el).attr('src');
        if (src && src.startsWith('/_next/image?url=')) {
            const urlMatch = src.match(/url=([^&]+)/);
            if (urlMatch) {
                $(el).attr('src', decodeURIComponent(urlMatch[1]));
            }
        }
    });

    let contentHtml = '';
    const container = $('div.group').first().parent();
    
    container.children().each((i, el) => {
        const text = $(el).text();
        
        // Skip navigation and comments sections
        if (text.includes('Prev Chapter') || text.includes('Next Chapter')) return;
        if (text.includes('Comments')) return;
        if ($(el).attr('class') && $(el).attr('class')!.includes('flex flex-row justify-between')) return;
        
        // Strip all formatting attributes (class, style, id) to get pure clean HTML
        $(el).removeAttr('class');
        $(el).removeAttr('style');
        $(el).removeAttr('id');
        $(el).find('*').removeAttr('class').removeAttr('style').removeAttr('id');

        contentHtml += $.html(el) + '\n';
    });

    return contentHtml;
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
