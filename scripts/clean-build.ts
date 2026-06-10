import fs from 'fs';
import path from 'path';

const OUT_DIR = path.join(process.cwd(), 'out');
const IMAGES_DIR = path.join(process.cwd(), 'out', 'images', 'books');

let deletedPrefetchCount = 0;
let deletedImageCount = 0;
let deletedDirCount = 0;

function pruneNextPrefetchFiles(dir: string) {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            // Skip the framework _next directory
            if (file === '_next') continue;
            
            pruneNextPrefetchFiles(fullPath);
            
            // Delete the directory if it is empty now
            if (fs.readdirSync(fullPath).length === 0) {
                try {
                    fs.rmdirSync(fullPath);
                    deletedDirCount++;
                } catch (err) {
                    // Ignore directory deletion error
                }
            }
        } else {
            // Check if file is a Next.js prefetch chunk
            if (file.includes('__next.') || file.startsWith('__next.')) {
                try {
                    fs.unlinkSync(fullPath);
                    deletedPrefetchCount++;
                } catch (err) {
                    console.error(`Failed to delete prefetch file ${fullPath}:`, err);
                }
            }
        }
    }
}

function walkAndPrune(dir: string) {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            walkAndPrune(fullPath);
            // If the directory is now empty, delete it
            if (fs.readdirSync(fullPath).length === 0) {
                try {
                    fs.rmdirSync(fullPath);
                    deletedDirCount++;
                } catch (err) {
                    // Ignore directory deletion error
                }
            }
        } else {
            const ext = path.extname(file).toLowerCase();
            const isOriginalImage = ['.jpg', '.jpeg', '.png'].includes(ext);
            const isTinySpacer = file.startsWith('index-');

            if (isOriginalImage || isTinySpacer) {
                try {
                    fs.unlinkSync(fullPath);
                    deletedImageCount++;
                } catch (err) {
                    console.error(`Failed to delete redundant file ${fullPath}:`, err);
                }
            }
        }
    }
}

console.log('Cleaning build output to reduce file count for Cloudflare Pages (20k limit)...');

// 1. Walk and prune redundant images/spacers in out/images/books
if (fs.existsSync(IMAGES_DIR)) {
    walkAndPrune(IMAGES_DIR);
}

// 2. Walk and prune __next.* prefetch files in out/
if (fs.existsSync(OUT_DIR)) {
    pruneNextPrefetchFiles(OUT_DIR);
}

console.log('Build cleanup complete!');
console.log(`- Pruned images/spacers: ${deletedImageCount}`);
console.log(`- Pruned __next.* prefetch files: ${deletedPrefetchCount}`);
console.log(`- Pruned empty directories: ${deletedDirCount}`);
