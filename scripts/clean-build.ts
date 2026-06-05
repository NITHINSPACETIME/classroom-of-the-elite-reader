import fs from 'fs';
import path from 'path';

const OUT_DIR = path.join(process.cwd(), 'out', 'images', 'books');

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
                fs.rmdirSync(fullPath);
            }
        } else {
            const ext = path.extname(file).toLowerCase();
            const isOriginalImage = ['.jpg', '.jpeg', '.png'].includes(ext);
            const isTinySpacer = file.startsWith('index-');

            if (isOriginalImage || isTinySpacer) {
                try {
                    fs.unlinkSync(fullPath);
                } catch (err) {
                    console.error(`Failed to delete redundant file ${fullPath}:`, err);
                }
            }
        }
    }
}

console.log('Cleaning build output to reduce file count for Cloudflare Pages (20k limit)...');
walkAndPrune(OUT_DIR);
console.log('Build cleanup complete! Redundant images and spacers pruned.');
