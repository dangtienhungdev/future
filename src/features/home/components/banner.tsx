"use client";

import { Button } from "@/components/button-v2";
import { motion } from "framer-motion";
import { DollarSign, Gauge, Shield } from "lucide-react";
import Image from "next/image";

export function Banner() {
	return (
		<div className="relative pb-20 w-full overflow-hidden">
			{/* Top Navigation */}
			<div className="relative z-10 flex flex-wrap justify-center gap-2 md:gap-4 p-4 md:p-6">
				<Button variant="default" skew="left" size="sm" className="md:size-md">
					Bảng giá Proxy
				</Button>
				<Button variant="default" skew="left" size="sm" className="md:size-md">
					WHY US?
				</Button>
				<Button variant="default" skew="left" size="sm" className="md:size-md">
					Feedback
				</Button>
				<Button variant="default" skew="left" size="sm" className="md:size-md">
					FAQ
				</Button>
				<Button variant="cta" skew="left" size="sm" className="md:size-md">
					MUA NGAY
				</Button>
			</div>

			{/* Main Content */}
			<div className="relative z-10 container mx-auto px-4 pt-8 md:pt-20">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="text-center md:text-right" // Đã sẵn có text-center cho mobile
					>
						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4 italic">
							PROXY TỐC ĐỘ CAO
						</h1>
						<h2 className="text-xl sm:text-2xl md:text-3xl text-white mb-6 md:mb-8 italic md:mr-2">
							KHÔNG GIỚI HẠN BĂNG THÔNG
						</h2>

						<div className="space-y-4 md:space-y-6 mb-6 md:mb-8 text-center md:text-right">
							<div className="flex items-center justify-center md:justify-end space-x-4 text-[#97eeff] md:mr-6">
								<span className="text-sm md:text-base">Proxy Tốc Độ Cao</span>
								<Gauge className="w-5 h-5 md:w-6 md:h-6" />
							</div>
							<div className="flex items-center justify-center md:justify-end space-x-4 text-[#97eeff] md:mr-8">
								<span className="text-sm md:text-base">Ẩn danh tuyệt đối</span>
								<Shield className="w-5 h-5 md:w-6 md:h-6" />
							</div>
							<div className="flex items-center justify-center md:justify-end space-x-4 text-[#97eeff] md:mr-10">
								<span className="text-sm md:text-base">
									Sử dụng cho FACEBOOK ADS, MMO, AIRDROP, SCRAPING...
								</span>
								<DollarSign className="w-5 h-5 md:w-6 md:h-6" />
							</div>
						</div>

						<div className="flex justify-center md:justify-end md:mr-14">
							<Button
								variant="cta"
								skew="none"
								size="lg"
								className="shadow-lg hover:shadow-xl transition-shadow duration-300"
							>
								MUA NGAY
							</Button>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="flex justify-center order-first md:order-last"
					>
						<div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
							<Image
								src="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1740214892/cs-portal/download_6_xpyrfs.png"
								alt="HD Shield"
								fill
								className="object-contain"
								priority
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
