import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import path from "path";

const publicFolder = path.resolve("public");

export async function GET(request: Request, { params }: any) {
	try {
		const { slug } = (await params) || [];
		const filePath = slug ? path.join(publicFolder, ...slug) : null;
		if (!filePath) throw new Error();

		const fileContent = await fs.readFile(filePath);
		if (!fileContent) throw new Error();

		return new NextResponse(fileContent);
	} catch (err) {
		return new NextResponse(null);
	}
}
