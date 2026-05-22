import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "..", "index.html"), "utf8");

const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
if (!styleMatch) throw new Error("no style block");

let css = styleMatch[1];
css = css.replace(/url\("assets\//g, 'url("/assets/');
css = css.replace(/url\('assets\//g, "url('/assets/");

const overflowFix = `
    html { overflow-x: clip; max-width: 100%; }
    body { overflow-x: clip; width: 100%; max-width: 100%; }
    body { overflow-wrap: break-word; word-break: break-word; }
    .site-header, .hero, main, .site-footer, section { max-width: 100%; min-width: 0; }
    .brand-text, .brand-title, .header-inner { min-width: 0; }
    .brand-title { overflow-wrap: anywhere; }
    .hero-media { transform: none; }
    .theme-panel { width: min(360px, calc(100% - 28px)); }
    .refs li, .refs li p, .ht-media-cap, .ht-media-cap a { overflow-wrap: anywhere; word-break: break-word; }
    .dropcap { overflow: hidden; }
    @media (max-width: 600px) {
      .dropcap:first-letter { font-size: 3rem; padding-right: 8px; }
    }
`;

css = css.replace(
  "html { scroll-behavior: smooth; }",
  "html { scroll-behavior: smooth; }" + overflowFix
);

const outDir = path.join(root, "app", "mandaya");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "mandaya.css"), css.trim());
console.log("Wrote mandaya.css", css.length, "bytes");
