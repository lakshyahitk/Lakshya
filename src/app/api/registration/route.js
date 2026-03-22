import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Registration from "@/models/Registration";

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { name, department, sport, entryMode } = body;

    if (!name || !department || !sport) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const registration = await Registration.create({ name, department, sport, entryMode });
    return NextResponse.json({ success: true, data: registration }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const registrations = await Registration.find().sort({ createdAt: -1 }).limit(50);
    return NextResponse.json({ success: true, data: registrations });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
