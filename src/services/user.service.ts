"use server";
import { createSession, sendMail } from "@/app/lib";
import { Users as userType } from "@/interfaces/users";
import { connectToDatabase } from "@/lib/mongodb";
import Contacts, { IContacts } from "@/models/Contacts";
import Users from "@/models/Users";
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";

export const getUsers = async (): Promise<userType[]> => {
  try {
    await connectToDatabase();
    const users = await Users.find({}, { password: 0 }).lean();
    const serializedUsers = users.map((user) => ({
      ...user,
      _id: user._id?.toString(),
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
    }));

    return serializedUsers;
  } catch (error) {
    throw new Error("Failed to get users.");
  }
};

export const getUserById = async (id: string): Promise<userType | null> => {
  try {
    await connectToDatabase();

    const user = await Users.findById(id, { password: 0 }).lean<userType>();

    if (!user) {
      throw new Error("User not found");
    }

    return {
      ...user,
      _id: user._id?.toString(),
      createdAt: user.createdAt?.toISOString(),
      updatedAt: user.updatedAt?.toISOString(),
    };
  } catch (error) {
    throw new Error("Failed to fetch user details.");
  }
};

export const addUser = async (userData: any, image?: File | null) => {
  try {
    let imagePath = "";
    if (image) {
      const uploadsDir = path.join(process.cwd(), "public/uploads");

      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }

      const fileExtension = path.extname(image?.name);
      const fileName = `${Date.now()}${fileExtension}`;
      imagePath = path.join(uploadsDir, fileName);
      const fileStream = fs.createWriteStream(imagePath);
      const fileData = await image?.arrayBuffer();
      fileStream.write(Buffer.from(fileData));
      fileStream.end();
    }

    await connectToDatabase();
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    await Users.create({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      phone: userData.phone,
      password: hashedPassword,
      role: userData.role || "customer",
      image: imagePath.replace(path.join(process.cwd(), "public"), ""),
    });

    return true;
  } catch (error) {
    throw new Error("Failed to create user.");
  }
};

export const updateUser = async (
  id: string,
  userData: any,
  image?: File | null,
  hasImage?: boolean
) => {
  try {
    await connectToDatabase();
    const user = await Users.findById(id);
    if (!user) {
      throw new Error("User not found.");
    }

    let imagePath = user.image;
    const uploadsDir = path.join(process.cwd(), "public/uploads");

    if (image || !hasImage) {
      if (imagePath) {
        const oldImagePath = path.join(process.cwd(), "public", imagePath);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
        imagePath = "";
      }
    }
    if (image) {
      const fileExtension = path.extname(image.name);
      const fileName = `${Date.now()}${fileExtension}`;
      imagePath = path.join(uploadsDir, fileName);
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }

      const fileStream = fs.createWriteStream(imagePath);
      const fileData = await image.arrayBuffer();
      fileStream.write(Buffer.from(fileData));
      fileStream.end();
      imagePath = imagePath.replace(path.join(process.cwd(), "public"), "");
    }
    const updateFields: Partial<{
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      password: string;
      role: string;
      image: string;
    }> = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      phone: userData.phone,
      role: userData.role || "customer",
      image: imagePath,
    };

    if (userData.password) {
      updateFields.password = await bcrypt.hash(userData.password, 10);
    }

    await Users.findByIdAndUpdate(id, { $set: updateFields }, { new: true });

    return true;
  } catch (error) {
    throw new Error("Error updating user.");
  }
};

export const deleteUser = async (id: string) => {
  try {
    await connectToDatabase();

    const user = await Users.findByIdAndDelete(id);
    if (!user) {
      throw new Error("User not found.");
    }

    if (user.image) {
      const imagePath = path.join(process.cwd(), user.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    return true;
  } catch (error) {
    throw new Error("Error deleting user.");
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    // Ensure database connection
    await connectToDatabase();

    // Use `lean()` to return plain JavaScript objects
    const user: any = await Users.findOne({ email }).lean();

    if (!user) {
      throw new Error("Invalid credentials.");
    }

    // Validate the password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid credentials.");
    }

    // Create a session for the user
    const session = await createSession(user._id.toString());
    return session;
  } catch (error) {
    throw new Error("Failed to login user.");
  }
};

export const contactUs = async (form: Partial<IContacts>) => {
  try {
    await connectToDatabase();

    await Contacts.create({
      name: form.name,
      email: form.email,
      subject: form.subject,
      about: form.about || "",
    });

    sendMail({
      email: form.email || "",
      subject: form.subject || "",
      text: form.about || "",
      html: `<html>
	<head>
		<meta name="viewport" content="width=device-width" />
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	</head>
	<body>
		<table
			bgcolor="#fafafa"
			style="
				width: 100% !important;
				height: 100%;
				background-color: #fafafa;
				padding: 20px;
				font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, 'Lucida Grande', sans-serif;
				font-size: 100%;
				line-height: 1.6;
			"
		>
			<tr>
				<td></td>
				<td
					bgcolor="#FFFFFF"
					style="
						border: 1px solid #eeeeee;
						background-color: #ffffff;
						border-radius: 5px;
						display: block !important;
						max-width: 600px !important;
						margin: 0 auto !important;
						clear: both !important;
					"
				>
					<div style="padding: 20px; max-width: 600px; margin: 0 auto; display: block">
						<table style="width: 100%">
							<tr>
								<td>
									<p
										style="
											text-align: center;
											display: block;
											padding-bottom: 20px;
											margin-bottom: 20px;
											border-bottom: 1px solid #dddddd;
										"
									>
										<img src="https://www.upficient.com/wp-content/uploads/2022/02/Upficient-Logo-1-1.png" />
									</p>
									<h1
										style="font-weight: 200; font-size: 36px; margin: 20px 0 30px 0; color: #333333"
									>
										${form.name} Has Contacted you!!
									</h1>
									<p
										style="
											margin-bottom: 10px;
											font-weight: normal;
											font-size: 16px;
											color: #333333;
										"
									>
										Name: <b>${form.name}</b>
									</p>
									<p
										style="
											margin-bottom: 10px;
											font-weight: normal;
											font-size: 16px;
											color: #333333;
										"
									>
										Email: <b>${form.email}</b>
									</p>
									<p
										style="
											margin-bottom: 10px;
											font-weight: normal;
											font-size: 16px;
											color: #333333;
										"
									>
										Subject: <b>${form.subject}</b>
									</p>
									<p
										style="
											margin-bottom: 10px;
											font-weight: normal;
											font-size: 16px;
											color: #333333;
										"
									>
										About Project: <b>${form?.about}</b>
									</p>
									
									<p
										style="
											text-align: center;
											display: block;
											padding-top: 20px;
											font-weight: bold;
											margin-top: 30px;
											color: #666666;
											border-top: 1px solid #dddddd;
										"
									>
										<a href='https://www.upficient.com/'>Upficient</a>
									</p>
								</td>
							</tr>
						</table>
					</div>
				</td>
				<td></td>
			</tr>
		</table>
	</body>
</html>
`,
    });
    return true;
  } catch (error) {
    throw new Error("Failed to contact us.");
  }
};
