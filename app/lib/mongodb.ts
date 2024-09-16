import mongoose from "mongoose";

const uri = process.env.MONGODB_URI; // ดึง URI จาก environment variable

let cachedDb: mongoose.Connection | null = null;

export async function connectToDatabase() {
  if (cachedDb) return cachedDb;
  if (uri) {
    const opts = { dbName: "Todo-app" };
    const conn = await mongoose.connect(uri, opts);
    cachedDb = conn.connection;
    return cachedDb;
  }
  return null;
}
