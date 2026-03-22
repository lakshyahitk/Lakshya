import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import ScheduleMatch from "@/models/ScheduleMatch";

const seedData = [
  { time: "14:00", team1: "BULLS", team2: "EAGLES", category: "Football", venue: "North Field Stadium", status: "completed", date: "Today" },
  { time: "15:30", team1: "VIPERS", team2: "COBRAS", category: "Volleyball", venue: "Sports Hall A", status: "live", date: "Today" },
  { time: "17:45", team1: "SHARKS", team2: "ORCAS", category: "Swimming", venue: "Aquatic Center", status: "upcoming", date: "Today" },
  { time: "19:00", team1: "LYNX", team2: "LEOPARDS", category: "Tennis", venue: "Court Complex", status: "upcoming", date: "Today" },
];

export async function GET() {
  try {
    await connectDB();
    let matches = await ScheduleMatch.find().sort({ time: 1 }).limit(50);
    if (matches.length === 0) {
      await ScheduleMatch.insertMany(seedData);
      matches = await ScheduleMatch.find().sort({ time: 1 }).limit(50);
    }
    return NextResponse.json({ success: true, data: matches });
  } catch (error) {
    console.error("Schedule error:", error);
    return NextResponse.json({ success: true, data: seedData });
  }
}
