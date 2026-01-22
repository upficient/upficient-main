import mongoose, { Document, Schema } from "mongoose";

// Define the Contacts interface (document structure)
export interface IContacts extends Document {
	name: string;
	email: string;
	subject: string;
	about?: string;
}

const contactsSchema = new Schema<IContacts>(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			lowercase: true,
		},
		subject: {
			type: String,
			required: true,
		},
		about: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

const Contacts = mongoose.models.Contacts || mongoose.model<IContacts>("Contacts", contactsSchema);

export default Contacts;
