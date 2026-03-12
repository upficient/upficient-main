import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import path from "path";

const publicFolder = path.resolve("public");

const MIME_TYPES: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  gif: "image/gif",
  webp: "image/webp",
  svg: "image/svg+xml",
  ico: "image/x-icon",
  avif: "image/avif",
  pdf: "application/pdf",
  mp4: "video/mp4",
  webm: "video/webm",
};

export async function GET(request: Request, { params }: any) {
  try {
    const { slug } = (await params) || [];
    const filePath = slug ? path.join(publicFolder, ...slug) : null;
    if (!filePath) throw new Error();

    const fileContent = await fs.readFile(filePath);
    if (!fileContent) throw new Error();

    const ext = path.extname(filePath).toLowerCase().replace(".", "");
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    return new NextResponse(fileContent, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": "inline",
      },
    });
  } catch (err) {
    return new NextResponse(null, { status: 404 });
  }
}
