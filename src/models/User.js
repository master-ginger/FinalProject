// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  progress: {
    type: Map,
    of: Number,
    default: {},
  },
}, { timestamps: true,collection: "userdetails" });

export default mongoose.models.User || mongoose.model("User", UserSchema);
