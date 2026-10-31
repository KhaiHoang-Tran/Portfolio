import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

// A tiny valid PDF placeholder. Replace public/sample-cv.pdf with your real CV.
const lines = [
  "Alex Morgan - Sample CV",
  "Frontend Developer & Creative Technologist",
  "Ho Chi Minh City, Vietnam | hello@alexmorgan.dev",
  "",
  "This is placeholder content. Replace with your real resume before publishing.",
  "",
  "Experience",
  "Frontend Developer - Studio North (sample), 2024-Present",
  "Web Developer - Independent (sample), 2022-2024",
  "",
  "Education",
  "B.Sc. Computer Science - Example University (sample), 2018-2022",
  "",
  "Skills: TypeScript, React, Next.js, Tailwind CSS, accessibility",
];
const escaped = (value) => value.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
const stream = `BT /F1 18 Tf 50 790 Td (${escaped(lines[0])}) Tj /F1 10 Tf 0 -27 Td ${lines.slice(1).map((line) => `(${escaped(line)}) Tj 0 -20 Td`).join(" ")} ET`;
const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  `<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream`,
];
let pdf = "%PDF-1.4\n";
const offsets = [0];
for (const [index, object] of objects.entries()) { offsets.push(Buffer.byteLength(pdf)); pdf += `${index + 1} 0 obj\n${object}\nendobj\n`; }
const xref = Buffer.byteLength(pdf);
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n${offsets.slice(1).map((offset) => `${String(offset).padStart(10, "0")} 00000 n \n`).join("")}trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
await mkdir(join(process.cwd(), "public"), { recursive: true });
await writeFile(join(process.cwd(), "public", "sample-cv.pdf"), pdf);
