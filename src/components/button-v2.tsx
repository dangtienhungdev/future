"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";
import { forwardRef } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
	variant?: "default" | "primary" | "cta";
	skew?: "left" | "right" | "none";
	size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant = "default",
			skew = "right",
			size = "md",
			children,
			...props
		},
		ref
	) => {
		const baseStyles =
			"relative font-medium transition-all duration-200 !-skew-x-12";

		const variants = {
			default: "bg-[#97eeff] text-[#001119] hover:bg-[#97eeff]/90",
			primary: "bg-[#001119] text-[#97eeff] border-[#97eeff] border",
			cta: "text-white",
		};

		const sizes = {
			sm: "px-4 py-1.5 text-sm",
			md: "px-6 py-2 text-lg",
			lg: "px-8 py-3 text-xl",
		};

		const skewStyles = {
			left: "-skew-x-12",
			right: "skew-x-12",
			none: "",
		};

		const getBackground = () => {
			if (variant === "cta") {
				return {
					background: "linear-gradient(to right, #fea700, #f83600)",
				};
			}
			return {};
		};

		return (
			<motion.button
				ref={ref}
				className={cn(
					baseStyles,
					variants[variant],
					sizes[size],
					skewStyles[skew],
					className
				)}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				style={{
					boxShadow:
						variant === "primary" ? "6px 6px 1px rgba(151,238,255,1)" : "none",
					...getBackground(),
				}}
				{...props}
			>
				<span
					className={cn(
						"inline-block",
						skewStyles[skew] === "skew-x-12"
							? "-skew-x-12"
							: skewStyles[skew] === "-skew-x-12"
							? "skew-x-12"
							: ""
					)}
				>
					{children as React.ReactNode}
				</span>
			</motion.button>
		);
	}
);
Button.displayName = "Button";

export { Button };
