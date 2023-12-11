import { serialize } from "cookie";
import mongoose from "mongoose";
import Jwt from "jsonwebtoken";
import { User } from "@/models/user";

export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URI, {
    dbName: "NextTodo",
  });

  console.log(`Dataabase connected on ${connection.host}`);
};

export const cookieSetter = async (res, token, set) => {
  res.setHeader(
    "Set-Cookie",
    serialize("token", set ? token : "", {
      path: "/",
      httpOnly: true,
      maxAge: set ? 1000 * 60 * 60 * 24 * 15 : 0,
    })
  );
};

export const generateToken = (_id) => {
  return Jwt.sign({ _id }, process.env.JWT_SECRET);
};

export const checkAuth = async (req) => {
  const cookie = req.headers.cookie;

  // console.log(cookie);

  if (!cookie) return null;

  const token = cookie.split("=")[1];

  const decoded = Jwt.verify(token, process.env.JWT_SECRET);

  // console.log(decoded);

  return await User.findById(decoded._id);
};
