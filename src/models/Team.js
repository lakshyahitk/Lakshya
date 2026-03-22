import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
  rank: { type: Number, required: true },
  name: { type: String, required: true },
  department: { type: String, required: true },
  points: { type: Number, required: true },
  trend: { type: String, enum: ["up", "down", "neutral"], default: "neutral" },
  avatar: { type: String, default: "" },
});

export default mongoose.models.Team || mongoose.model("Team", TeamSchema);
