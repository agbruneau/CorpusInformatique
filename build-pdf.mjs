import { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync } from 'fs';
import { execSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const MD_FILE = join(__dirname, 'MS-HIS.md');
const OUTPUT_PDF = join(__dirname, 'MS-HIS.pdf');
const IMAGES_DIR = join(__dirname, 'images');
const TEMP_MD = join(__dirname, 'MS-HIS-rendered.md');
const TITLE_PAGE = join(__dirname, 'titlepage.tex');

// Ensure images directory exists
if (!existsSync(IMAGES_DIR)) {
  mkdirSync(IMAGES_DIR, { recursive: true });
}

console.log('Reading MS-HIS.md...');
let markdown = readFileSync(MD_FILE, 'utf-8');

// Normalize line endings to LF for consistent regex matching
markdown = markdown.replace(/\r\n/g, '\n');

// Find all mermaid code blocks
const mermaidRegex = /```mermaid\n([\s\S]*?)```/g;
let match;
let index = 0;
const replacements = [];

while ((match = mermaidRegex.exec(markdown)) !== null) {
  index++;
  const mermaidContent = match[1];
  const fullMatch = match[0];
  const paddedIndex = String(index).padStart(2, '0');
  const mmdFile = join(IMAGES_DIR, `diagram-${paddedIndex}.mmd`);
  const pngFile = join(IMAGES_DIR, `diagram-${paddedIndex}.png`);

  console.log(`  Rendering diagram ${paddedIndex}...`);

  // Write .mmd file
  writeFileSync(mmdFile, mermaidContent, 'utf-8');

  // Render with mmdc
  try {
    execSync(
      `mmdc -i "${mmdFile}" -o "${pngFile}" -b white -w 1200 -s 2`,
      { stdio: 'pipe', timeout: 60000 }
    );
    console.log(`    -> diagram-${paddedIndex}.png created`);
  } catch (err) {
    console.error(`    ERROR rendering diagram ${paddedIndex}:`, err.stderr?.toString() || err.message);
    // Try without scale factor as fallback
    try {
      execSync(
        `mmdc -i "${mmdFile}" -o "${pngFile}" -b white -w 1200`,
        { stdio: 'pipe', timeout: 60000 }
      );
      console.log(`    -> diagram-${paddedIndex}.png created (fallback)`);
    } catch (err2) {
      console.error(`    FATAL: Could not render diagram ${paddedIndex}`);
      continue;
    }
  }

  // Store replacement info
  replacements.push({
    original: fullMatch,
    replacement: `![Diagramme ${paddedIndex}](images/diagram-${paddedIndex}.png){ width=100% }`
  });

  // Clean up .mmd file
  try { unlinkSync(mmdFile); } catch {}
}

console.log(`\n${index} diagrams rendered.`);

// Apply replacements
for (const { original, replacement } of replacements) {
  markdown = markdown.replace(original, replacement);
}

// Write modified markdown
writeFileSync(TEMP_MD, markdown, 'utf-8');
console.log('Wrote MS-HIS-rendered.md');

// Generate PDF with pandoc
console.log('\nGenerating PDF with pandoc + xelatex...');
try {
  execSync(
    `pandoc "${TEMP_MD}" -o "${OUTPUT_PDF}" --pdf-engine=xelatex -V geometry:margin=2.5cm -V mainfont="Segoe UI" --toc --toc-depth=3 --include-before-body="${TITLE_PAGE}"`,
    { stdio: 'inherit', timeout: 300000, cwd: __dirname }
  );
  console.log(`\nPDF generated: ${OUTPUT_PDF}`);
} catch (err) {
  console.error('Error generating PDF:', err.message);
  process.exit(1);
}

// Clean up temp markdown
try { unlinkSync(TEMP_MD); } catch {}

console.log('Done!');
