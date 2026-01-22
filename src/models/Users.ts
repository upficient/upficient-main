import mongoose, { Document, Schema } from "mongoose";

// Define the Users interface (document structure)
interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  role: "customer" | "admin" | "manager";
  image: string;
}

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      enum: ["customer", "admin", "manager"],
      default: "customer",
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.models.Users || mongoose.model<IUser>("Users", userSchema);

export default Users;
