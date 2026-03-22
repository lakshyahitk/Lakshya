import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Team from "@/models/Team";

// Seed data returned when DB is empty
const seedData = [
  { rank: 1, name: "CYBER HAWKS", department: "Dept. of Computing", points: 3120, trend: "up" },
  { rank: 2, name: "STORM RAIDERS", department: "Dept. of Engineering", points: 2840, trend: "up" },
  { rank: 3, name: "TITAN LIONS", department: "School of Business", points: 2610, trend: "neutral" },
  { rank: 4, name: "PHANTOM KNIGHTS", department: "Fine Arts", points: 2450, trend: "up" },
  { rank: 5, name: "VELOCITY CORES", department: "Physics", points: 2280, trend: "down" },
  { rank: 6, name: "IRON REBELS", department: "Mechanical Eng", points: 2110, trend: "neutral" },
  { rank: 7, name: "ALPHA LEGION", department: "Humanities", points: 1940, trend: "up" },
  { rank: 8, name: "NEBULA BLASTERS", department: "Aerospace", points: 1720, trend: "up" },
];

export async function GET() {
  try {
    await connectDB();
    let teams = await Team.find().sort({ rank: 1 }).limit(20);
    if (teams.length === 0) {
      // Auto-seed if empty
      await Team.insertMany(seedData);
      teams = await Team.find().sort({ rank: 1 }).limit(20);
    }
    return NextResponse.json({ success: true, data: teams });
  } catch (error) {
    console.error("Leaderboard error:", error);
    // Return static data even without DB
    return NextResponse.json({ success: true, data: seedData });
  }
}
