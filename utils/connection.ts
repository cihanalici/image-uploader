import mongoose from "mongoose";

const { MONGO_URL } = process.env;

export const connect = async () => {
  const conn = await mongoose
    .connect(MONGO_URL as string)
    .catch((err) => console.log(err));
  console.log(`MongoDB Connected: ${conn?.connection.host}`);
};
