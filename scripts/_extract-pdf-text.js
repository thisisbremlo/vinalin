const fs = require("fs");
const zlib = require("zlib");
const path = require("path");

function ascii85Decode(input) {
  const cleaned = input.replace(/\s/g, "").replace(/z/g, "!!!!!");
  const out = [];
  let tuple = 0;
  let count = 0;
  for (const ch of cleaned) {
    if (ch === "~") break;
    tuple = tuple * 85 + (ch.charCodeAt(0) - 33);
    count += 1;
    if (count === 5) {
      out.push((tuple >> 24) & 255, (tuple >> 16) & 255, (tuple >> 8) & 255, tuple & 255);
      tuple = 0;
      count = 0;
    }
  }
  if (count > 0) {
    for (let i = count; i < 5; i += 1) tuple = tuple * 85 + 84;
    for (let i = 0; i < count - 1; i += 1) out.push((tuple >> (24 - i * 8)) & 255);
  }
  return Buffer.from(out);
}

function decodeStream(stream) {
  try {
    return zlib.inflateSync(ascii85Decode(stream)).toString("utf8");
  } catch {
    try {
      return zlib.inflateSync(Buffer.from(stream, "latin1")).toString("utf8");
    } catch {
      return "";
    }
  }
}

function extractText(filePath) {
  const text = fs.readFileSync(filePath).toString("latin1");
  const streams = [];
  let cursor = 0;
  while (true) {
    const start = text.indexOf("stream", cursor);
    if (start === -1) break;
    const end = text.indexOf("endstream", start);
    if (end === -1) break;
    const body = text.slice(start + 6, end).replace(/^\r?\n/, "").replace(/\r?\n$/, "");
    streams.push(body);
    cursor = end + 9;
  }

  const chunks = [];
  for (const stream of streams) {
    const decoded = decodeStream(stream);
    const tjRe = /\((?:\\.|[^\\)])*\)\s*Tj/g;
    let match;
    while ((match = tjRe.exec(decoded))) {
      const inner = match[0].replace(/\)\s*Tj$/, "").slice(1);
      chunks.push(
        inner
          .replace(/\\n/g, "\n")
          .replace(/\\r/g, "\r")
          .replace(/\\\(/g, "(")
          .replace(/\\\)/g, ")")
          .replace(/\\\\/g, "\\")
          .replace(/\\337/g, "ß")
      );
    }
  }
  return chunks.join("\n");
}

for (const file of process.argv.slice(2)) {
  console.log(`\n=== ${path.basename(file)} ===\n`);
  console.log(extractText(file));
}
