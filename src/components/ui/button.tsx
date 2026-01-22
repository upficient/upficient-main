"use client";

import React from "react";
import Loader from "../Icons/Loader";

interface ButtonProps {
	id?: string;
	message?: string;
	className?: string;
	icon?: React.ReactNode;
	size?: "sm" | "md" | "lg";
	full?: boolean;
	type?: "button" | "submit" | "reset";
	handleClick?: any;
	onClick?: () => void;
	disabled?: boolean;
	loading?: boolean;
	childRef?: any
}

const Button: React.FC<ButtonProps> = ({
	id,
	message,
	className,
	icon,
	size,
	full,
	type = "button",
	handleClick,
	disabled,
	loading = false,
	childRef = null
}) => {
	return (
		<button
			id={id}
			ref={childRef}
			type={type}
			className={`btn ${className || "btn-primary"} ${size && `${size}`} ${full ? "w-full justify-center" : ""} ${loading ? "loading" : ""}`}
			onClick={handleClick}
			disabled={disabled}
		>
			{icon ?? ""}
			{message && <span>{message}</span>}
			{loading ? (
				<div className="loader">
					<Loader />
				</div>
			) : ''}
		</button>
	);
};

export default Button;
