import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(path.join(__dirname, "..", "..", "index.html"), "utf8");
const start = html.indexOf('<div id="cultureSpreadPool"');
const end = html.indexOf("</div>\n        </div>\n        </div>\n        <div class=\"culture-progress\"");
let chunk = html.slice(start, end);
chunk = chunk.replace(/src="assets\//g, 'src="/assets/');
chunk = chunk.replace(/class=/g, "className=");
chunk = chunk.replace(/style="([^"]*)"/g, (_, s) => {
  const parts = s.split(";").filter(Boolean);
  const obj = parts
    .map((p) => {
      const [k, v] = p.split(":").map((x) => x.trim());
      const camel = k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      const val = v.endsWith("px") || /^\d+$/.test(v) ? v : `"${v}"`;
      return `${camel}: ${val}`;
    })
    .join(", ");
  return `style={{ ${obj} }}`;
});
chunk = chunk.replace(/<img([^>]*)\/>/g, "<img$1 />");
chunk = chunk.replace(/&amp;/g, "&");
chunk = chunk.replace(/&ldquo;/g, '"').replace(/&rdquo;/g, '"');

const out = `/* Auto-generated from index.html culture spreads */
export function CultureSpreadPool() {
  return (
    <div id="cultureSpreadPool" hidden aria-hidden="true">
${chunk.replace('<div id="cultureSpreadPool" hidden aria-hidden="true">', "").trim()}
    </div>
  );
}
`;

const outPath = path.join(
  __dirname,
  "..",
  "app",
  "components",
  "mandaya",
  "culture-spread-pool.tsx"
);
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, out);
console.log("Wrote", outPath);
