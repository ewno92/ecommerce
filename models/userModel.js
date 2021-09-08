import { Mongoose } from "mongoose";

const userSchema = new Mongoose.userSchema(
  {
    name: {
      type: String,
      required: true,
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
    role: {
      type: String,
      default: "user",
    },
    root: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/ewno92/image/upload/v1631084101/avatar_drqolo.svg",
    },
  },
  { timestamps: true }
);

let Dataset = mongoose.models.user || mongoose.model("user", userSchema);
export default Dataset;
