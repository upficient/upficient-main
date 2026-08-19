import { Schema, model, models, Document } from "mongoose";

export interface ContactData {
  name: string;
  email: string;
  subject: string;
  about?: string;
}

export interface IContacts extends Document, ContactData {}

const ContactSchema = new Schema<IContacts>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    about: { type: String },
  },
  { timestamps: true }
);

const Contacts = models.Contacts || model<IContacts>("Contacts", ContactSchema);

export default Contacts;