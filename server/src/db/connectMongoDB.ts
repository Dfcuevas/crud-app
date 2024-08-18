import mongoose from "mongoose";
import { fetchAndSaveUsers } from "../controllers/populateDb.controller.js";

const connectMongoDB = async (): Promise<void> => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI!);
    console.log(`MongoDB connected: ${connect.connection.host}`);
    fetchAndSaveUsers();
  } catch (error: any) {
    console.log("Error connecting to MongoDB -", error.message);
    process.exit(1);
  }
};

export default connectMongoDB;
