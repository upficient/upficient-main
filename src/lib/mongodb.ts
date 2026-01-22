/* eslint-disable */
import { config } from "dotenv";
import mongoose from "mongoose";

config(); // Load environment variables

// Construct the MongoDB URI
const uri = `${process.env.DATABASE_CONNECTION}://${process.env.DATABASE_INSTANCE}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;

if (!uri) {
  throw new Error("MongoDB URI is not defined. Please check your .env.local file.");
}

// Global cache to prevent multiple connections during hot reload
let cached = (global as any).mongoose as { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectToDatabase(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, { bufferCommands: false }).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
