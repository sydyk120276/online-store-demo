import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    roles: [{ type: String, ref: "Role" }],
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

export default mongoose.model("users", userSchema);
