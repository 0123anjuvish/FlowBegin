import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
      return NextResponse.json({ success: false, message: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save to public/uploads
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Generate unique filename
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const filename = `${uniqueSuffix}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "")}`;
    const filePath = path.join(uploadDir, filename);

    await writeFile(filePath, buffer);

    return NextResponse.json({ 
      success: true, 
      imageUrl: `/uploads/${filename}` 
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const folders = ["uploads", "work", "carousel"];
    let allImages: string[] = [];

    for (const folder of folders) {
      const dirPath = path.join(process.cwd(), "public", folder);
      if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath);
        const images = files
          .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
          .map(file => `/${folder}/${file}`);
        allImages = [...allImages, ...images];
      }
    }

    return NextResponse.json({ images: allImages });
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json({ images: [] });
  }
}
