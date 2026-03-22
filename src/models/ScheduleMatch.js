import mongoose from "mongoose";

const ScheduleMatchSchema = new mongoose.Schema({
  time: { type: String, required: true },
  team1: { type: String, required: true },
  team2: { type: String, required: true },
  category: { type: String, required: true },
  venue: { type: String, required: true },
  status: { type: String, enum: ["upcoming", "live", "completed"], default: "upcoming" },
  date: { type: String, default: "Today" },
});

export default mongoose.models.ScheduleMatch ||
  mongoose.model("ScheduleMatch", ScheduleMatchSchema);
