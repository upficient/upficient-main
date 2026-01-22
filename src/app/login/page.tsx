"use client"; // Mark this as a client-side component

import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginUser } from "../../services/user.service";
import "./login.scss";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const router = useRouter();

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		try {
			const user = await loginUser(username, password);
			if (user) {
				router.push("/dashboard");
			} else {
				setError("Invalid username or password.");
			}
		} catch (err) {
			setError("An error occurred. Please try again.");
		}
	};

	return (
		<div className="login-main-wrapper d-flex align-items-center justify-content-center">
			<div className="login-container">
				<div className="headerLogo">
					<Image
						src={getImagePath('logo.webp')}
						width={500}
						height={500}
						alt="Picture of the author"
						className="img-contain"
						loading="lazy"
					/>
				</div>
				<h1>Admin Login</h1>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							name="username"
							placeholder="Enter your username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="Enter your password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					{error && <div className="error-message">{error}</div>}
					<button type="submit" className="login-button">
						Login
					</button>
				</form>
				<div className="forgot-password">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	);
};

export default Login;
