import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ0_jopQSE6TpH9JKcUsm_9ctOQPM9hwq_EQ&s",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
