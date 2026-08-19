import { ContactData } from "@/models/Contacts";

export interface Contacts extends ContactData {
  _id: string;
  createdAt: string;
  updatedAt: string;
}