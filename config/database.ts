import mongoose from "mongoose";
import "dotenv/config";
const db = process.env.MONGO_URL as string;

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
