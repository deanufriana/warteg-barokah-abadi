import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Parse command line arguments
const args = process.argv.slice(2);
const help = args.includes('--help') || args.includes('-h');

if (help || args.length === 0) {
    console.log(`
Usage: node scripts/compress-images.mjs <input-dir> [options]

Arguments:
  <input-dir>    Directory containing images to compress

Options:
  --output, -o   Output directory (default: <input-dir>_compressed)
  --quality, -q  Compression quality (1-100, default: 80)
  --format, -f   Output format (webp, avif, jpeg, png, default: webp)
  --width, -w    Resize width (optional, maintains aspect ratio)
  --recursive    Search recursively (default: true)

Example:
  node scripts/compress-images.mjs ./public/images --quality 75 --format webp
  `);
    process.exit(0);
}

const inputDir = path.resolve(args[0]);
const outputDirArg = args.indexOf('--output') > -1 ? args[args.indexOf('--output') + 1] : (args.indexOf('-o') > -1 ? args[args.indexOf('-o') + 1] : null);
const outputDir = outputDirArg ? path.resolve(outputDirArg) : `${inputDir}_compressed`;

const qualityIdx = args.indexOf('--quality') > -1 ? args.indexOf('--quality') : args.indexOf('-q');
const quality = qualityIdx > -1 ? parseInt(args[qualityIdx + 1]) : 80;

const formatIdx = args.indexOf('--format') > -1 ? args.indexOf('--format') : args.indexOf('-f');
const format = formatIdx > -1 ? args[formatIdx + 1] : 'webp';

const widthIdx = args.indexOf('--width') > -1 ? args.indexOf('--width') : args.indexOf('-w');
const width = widthIdx > -1 ? parseInt(args[widthIdx + 1]) : null;

// Supported extensions to look for
const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.tiff', '.gif']);

async function processDirectory (currentPath, currentOutputPath) {
    try {
        await fs.mkdir(currentOutputPath, { recursive: true });

        const entries = await fs.readdir(currentPath, { withFileTypes: true });

        for (const entry of entries) {
            const srcPath = path.join(currentPath, entry.name);
            const destPath = path.join(currentOutputPath, entry.name);

            if (entry.isDirectory()) {
                // Recursive call
                await processDirectory(srcPath, destPath);
            } else if (entry.isFile()) {
                const ext = path.extname(entry.name).toLowerCase();

                if (EXTENSIONS.has(ext)) {
                    const filename = path.basename(entry.name, ext);
                    const finalFormat = format === 'same' ? ext.slice(1) : format;
                    const finalDest = path.join(currentOutputPath, `${filename}.${finalFormat}`);

                    console.log(`Processing: ${entry.name} -> ${path.basename(finalDest)}`);

                    try {
                        let pipeline = sharp(srcPath);

                        if (width) {
                            pipeline = pipeline.resize(width);
                        }

                        const sharpFormat = finalFormat === 'jpg' ? 'jpeg' : finalFormat;
                        
                        if (sharpFormat === 'webp') {
                            pipeline = pipeline.webp({ quality });
                        } else if (sharpFormat === 'avif') {
                            pipeline = pipeline.avif({ quality });
                        } else if (sharpFormat === 'jpeg') {
                            pipeline = pipeline.jpeg({ quality });
                        } else if (sharpFormat === 'png') {
                            pipeline = pipeline.png({ quality, compressionLevel: 9 });
                        }

                        await pipeline.toFile(finalDest);

                        // Calculate savings
                        const originalStats = await fs.stat(srcPath);
                        const newStats = await fs.stat(finalDest);
                        const savings = ((originalStats.size - newStats.size) / originalStats.size * 100).toFixed(2);

                        console.log(`  Saved ${savings}% (${(originalStats.size / 1024).toFixed(1)}kb -> ${(newStats.size / 1024).toFixed(1)}kb)`);
                    } catch (err) {
                        console.error(`  Error processing ${entry.name}:`, err.message);
                    }
                }
            }
        }
    } catch (err) {
        console.error(`Error processing directory ${currentPath}:`, err);
    }
}

console.log(`
----------------------------------------
Image Compression Script
----------------------------------------
Input:   ${inputDir}
Output:  ${outputDir}
Quality: ${quality}
Format:  ${format}
----------------------------------------
`);

// Check if input directory exists
try {
    await fs.access(inputDir);
} catch (e) {
    console.error(`Error: Input directory "${inputDir}" does not exist.`);
    process.exit(1);
}

await processDirectory(inputDir, outputDir);

console.log('\nDone! ✨');
