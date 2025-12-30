import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const distDir = join(process.cwd(), 'dist');
const indexHtmlPath = join(distDir, 'index.html');
const notFoundHtmlPath = join(distDir, '404.html');

if (existsSync(indexHtmlPath)) {
  const indexHtml = readFileSync(indexHtmlPath, 'utf-8');
  writeFileSync(notFoundHtmlPath, indexHtml, 'utf-8');
  console.log('✓ Copied index.html to 404.html for GitHub Pages routing');
} else {
  console.warn('⚠ index.html not found in dist directory');
}

