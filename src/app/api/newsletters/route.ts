import { NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/db";

export async function GET() {
  try {
    const db = await connectToDatabase();
    const newsletters = await db.collection("newsletters").find({}).toArray();

    return NextResponse.json(newsletters);
  } catch (error) {
    console.error("❌ Error fetching newsletters:", error);
    return NextResponse.json({ error: "Failed to fetch newsletters" }, { status: 500 });
  }
}
