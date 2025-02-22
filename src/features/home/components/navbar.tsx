"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavLink = ({ href, children }: { href: string; children: string }) => {
	return (
		<Link href={href} className="group relative">
			<motion.div
				className="relative z-10 px-6 py-2 text-[#97eeff] font-medium text-lg bg-[#001119] rounded-[12px] border-transparent border"
				style={{
					boxShadow: "6px 6px 1px rgba(151,238,255,1)",
				}}
				whileHover={{ scale: 1.05 }}
				transition={{ type: "spring", stiffness: 400, damping: 10 }}
			>
				{children}
			</motion.div>
		</Link>
	);
};

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<motion.nav
			className="py-6 relative flex items-center justify-center px-4 md:px-8"
			style={{ backgroundColor: "#001119" }}
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			{/* Mobile Menu Button */}
			<motion.button
				className="md:hidden text-[#97eeff] absolute left-4"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
			>
				<AnimatePresence mode="wait">
					<motion.div
						key={isMenuOpen ? "close" : "open"}
						initial={{ opacity: 0, rotate: -90 }}
						animate={{ opacity: 1, rotate: 0 }}
						exit={{ opacity: 0, rotate: 90 }}
						transition={{ duration: 0.2 }}
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</motion.div>
				</AnimatePresence>
			</motion.button>

			{/* Desktop Navigation */}
			<div className="hidden md:flex items-center justify-center gap-[28px]">
				<NavLink href="/">TRANG CHỦ</NavLink>
				<NavLink href="/products">SẢN PHẨM</NavLink>

				{/* Logo */}
				<motion.div
					className="mx-[54px]"
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.5,
						type: "spring",
						stiffness: 260,
						damping: 20,
					}}
				>
					<Link href="/">
						<Image
							src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yS30aeHwhfq4O54ihStmVMQ4pjvrg8.png"
							alt="HD FutureTech Logo"
							width={100}
							height={40}
							className="object-contain"
						/>
					</Link>
				</motion.div>

				<NavLink href="/news">TIN TỨC</NavLink>
				<NavLink href="/about">GIỚI THIỆU</NavLink>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						className="absolute top-[54px] left-0 right-0 bg-[#001119] border-t border-[#97eeff]/20 md:hidden"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
					>
						<motion.div
							className="flex flex-col items-center p-4 gap-4"
							initial="closed"
							animate="open"
							exit="closed"
							variants={{
								open: {
									transition: { staggerChildren: 0.1 },
								},
								closed: {
									transition: { staggerChildren: 0.05, staggerDirection: -1 },
								},
							}}
						>
							{[
								{ href: "/", text: "TRANG CHỦ" },
								{ href: "/products", text: "SẢN PHẨM" },
								{ href: "/news", text: "TIN TỨC" },
								{ href: "/about", text: "GIỚI THIỆU" },
							].map((item) => (
								<motion.div
									key={item.href}
									variants={{
										open: { opacity: 1, y: 0 },
										closed: { opacity: 0, y: -20 },
									}}
									className="w-full max-w-[200px]"
								>
									<NavLink href={item.href}>{item.text}</NavLink>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}
