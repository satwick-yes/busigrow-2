const fs = require('fs');
const path = require('path');

const directories = [
  path.join(__dirname, 'frontend/app'),
  path.join(__dirname, 'frontend/components')
];

const replacements = [
  { regex: /text-slate-900/g, replacement: 'text-foreground' },
  { regex: /text-slate-800/g, replacement: 'text-primary' },
  { regex: /text-slate-500/g, replacement: 'text-muted-foreground' },
  { regex: /text-slate-400/g, replacement: 'text-muted-foreground' },
  { regex: /text-slate-300/g, replacement: 'text-muted-foreground' },
  { regex: /text-slate-200/g, replacement: 'text-muted' },
  { regex: /bg-slate-900/g, replacement: 'bg-primary' },
  { regex: /bg-slate-800/g, replacement: 'bg-primary' },
  { regex: /bg-blue-600/g, replacement: 'bg-primary' },
  { regex: /bg-blue-500/g, replacement: 'bg-primary' },
  { regex: /text-blue-600/g, replacement: 'text-primary' },
  { regex: /text-blue-500/g, replacement: 'text-primary' },
  { regex: /border-slate-200/g, replacement: 'border-border' },
  { regex: /border-slate-800/g, replacement: 'border-primary' },
  { regex: /font-instrument-serif/g, replacement: 'font-heading' },
  { regex: /font-inter/g, replacement: 'font-sans' },
  { regex: /bg-blue-300\/30/g, replacement: 'bg-fuchsia-300/30' },
  { regex: /bg-orange-500/g, replacement: 'bg-accent' },
  { regex: /bg-orange-600/g, replacement: 'bg-accent' },
  { regex: /text-orange-500/g, replacement: 'text-accent' },
  { regex: /text-orange-600/g, replacement: 'text-accent' }
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  for (const { regex, replacement } of replacements) {
    content = content.replace(regex, replacement);
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated: ${filePath}`);
  }
}

function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

directories.forEach(processDirectory);
console.log('Palette replacement complete.');
