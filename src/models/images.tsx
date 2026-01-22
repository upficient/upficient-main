import mongoose, { Document, Schema } from "mongoose";

// Define the Images interface (document structure)
export interface IImages extends Document {
  image: string;
}

const imagesSchema = new Schema<IImages>(
  {
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Images = mongoose.models?.Images || mongoose.model<IImages>("Images", imagesSchema);

export default Images;