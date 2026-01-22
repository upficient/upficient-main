import mongoose, { Document, Schema } from "mongoose";

// Define the Redirects interface (document structure)
export interface IRedirects extends Document {
    source: string;
    destination: string;
}

const RedirectsSchema = new Schema<IRedirects>(
    {
        source: {
            type: String,
            required: true,
        },
        destination: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const Redirects = mongoose.models.Redirects || mongoose.model<IRedirects>("Redirects", RedirectsSchema);

export default Redirects;
