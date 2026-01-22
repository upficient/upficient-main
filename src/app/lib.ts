"use server";

import { cookies } from "next/headers";
import nodemailer from "nodemailer";
import { encrypt } from "../lib/session";

export const createSession = async (userId: string) => {
	const expiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
	const session = await encrypt({ userId, expiresAt });
	const cookieStore = await cookies();
	cookieStore.set("session", session, {
		secure: false,
		httpOnly: true,
		expires: expiresAt,
		sameSite: "lax",
		path: "/",
	});

	return session;
};

export const getCookie = async (name: string) => {
	const cookieStore = await cookies();
	return cookieStore.get(name);
};

export const deleteCookie = async () => {
	const cookieStore = await cookies();
	return cookieStore.delete("session");
};

export const sendMail = async ({
	email,
	subject,
	text,
	html,
}: {
	email: string;
	subject: string;
	text: string;
	html?: string;
}) => {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		host: process.env.EMAIL_HOST,
		port: 587,
		secure: true,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});
	try {
		const isVerified = await transporter.verify();
	} catch (error) {
		console.error("Something Went Wrong", process.env.EMAIL_USER, process.env.EMAIL_PASS, error);
		return;
	}
	const info = await transporter.sendMail({
		from: {
			name: "Upficient",
			address: email,
		},
		to: process.env.SENT_EMAIL,
		subject,
		text,
		html: html ? html : "",
	});
	console.log("Mail sent to", process.env.SENT_EMAIL);
	return info;
};
