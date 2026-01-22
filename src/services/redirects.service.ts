"use server";

import { Redirects301 } from "@/interfaces/301redirects";
import { connectToDatabase } from "@/lib/mongodb";
import Redirects from "@/models/Redirects";

export const getAll301Redirects = async () => {
    try {
      await connectToDatabase();
      const redirects = await Redirects.find()
        .sort({ createdAt: -1 }) // Sorts by createdAt in descending order
        .lean();
  
      const sanitizedItems = redirects.map((redirect: any) => ({
        ...redirect,
        _id: redirect._id.toString(),
        createdAt: redirect.createdAt?.toISOString(),
        updatedAt: redirect.updatedAt?.toISOString(),
      }));
  
      return sanitizedItems;
    } catch (error) {
      throw new Error("Failed to fetch 301 redirects.");
    }
  };


export const getRedirectById = async (id: string): Promise<Redirects301 | null> => {
    try {
      await connectToDatabase();
  
      const redirect301 = await Redirects.findById(id, { password: 0 }).lean<Redirects301>();
  
      if (!redirect301) {
        throw new Error("User not found");
      }
  
      return {
        ...redirect301,
        _id: redirect301._id?.toString(),
        createdAt: redirect301.createdAt?.toISOString(),
        updatedAt: redirect301.updatedAt?.toISOString(),
      };
    } catch (error) {
      throw new Error("Failed to fetch 301 redirect details.");
    }
  };
  
  export const addRedirect = async (redirectData: any) => {
    try {
  
      await connectToDatabase();
      await Redirects.create({
        source: redirectData.source,
        destination: redirectData.destination,
      });
  
      return true;
    } catch (error) {
      throw new Error("Failed to create 301 redirect.");
    }
  };
  
  export const updateRedirect = async (
    id: string,
    redirectData: any,
  ) => {
    try {
      await connectToDatabase();
      const redirect = await Redirects.findById(id);
      if (!redirect) {
        throw new Error("301 redirect not found.");
      }
  
      const updateFields: Partial<{
        source: string;
        destination: string;
      }> = {
        source: redirectData.source,
        destination: redirectData.destination,
      };
  
      await Redirects.findByIdAndUpdate(id, { $set: updateFields }, { new: true });
  
      return true;
    } catch (error) {
      throw new Error("Error updating redirect.");
    }
  };
  
  export const deleteRedirect = async (id: string) => {
    try {
      await connectToDatabase();
  
      const redirect = await Redirects.findByIdAndDelete(id);
      if (!redirect) {
        throw new Error("301 redirect not found.");
      }
  
      return true;
    } catch (error) {
      throw new Error("Error deleting 301 redirect.");
    }
  };
  