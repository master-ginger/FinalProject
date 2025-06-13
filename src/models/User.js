// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    age: String,
    phone: String,
    location: String,
    description: String,
    currentSavings: String,
    monthlyIncome: String,
    financialGoals: String,
    experienceLevel: String,
    profileImage: String,
  }, { timestamps: true,collection: "userdetails" });

export default mongoose.models.User || mongoose.model("User", UserSchema);
