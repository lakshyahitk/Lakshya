import mongoose from "mongoose";

const RegistrationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    department: { type: String, required: true, trim: true },
    sport: { type: String, required: true },
    entryMode: { type: String, enum: ["Individual", "Team Play"], default: "Individual" },
  },
  { timestamps: true }
);

export default mongoose.models.Registration ||
  mongoose.model("Registration", RegistrationSchema);
