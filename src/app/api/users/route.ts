import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/Users";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<Response> {
	try {
		await connectToDatabase();
		const userData = await request.json();
		const { firstName, lastName, email, phone, password, role } = userData;

		if (!firstName || !lastName || !email || !password) {
			return NextResponse.json({ error: "All fields are required" }, { status: 400 });
		}

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return NextResponse.json({ error: "User already exists" }, { status: 409 });
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = await User.create({
			firstName,
			lastName,
			email,
			phone,
			password: hashedPassword,
			role: role || "customer",
		});

		return NextResponse.json(newUser, { status: 201 });
	} catch (error) {
		console.error("Error creating user:", error);
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
	}
}
