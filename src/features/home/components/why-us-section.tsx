"use client";

import Image from "next/image";

export default function WhyUsSection() {
	const features = [
		{
			title: "KHÔNG GIỚI HẠN Băng thông",
			subtitle: "BĂNG THÔNG",
			icon: "https://res.cloudinary.com/dcwdrvxdg/image/upload/v1740204514/cs-portal/download_tqov4o.png",
		},
		{
			title: "IP SẠCH, không blacklist",
			subtitle: "KHÔNG BLACKLIST",
			icon: "https://res.cloudinary.com/dcwdrvxdg/image/upload/v1740204604/cs-portal/download_1_cjkf0n.png",
		},
		{
			title: "HỖ TRỢ 24/7, bảo hành full-time",
			subtitle: "BẢO HÀNH FULL-TIME",
			icon: "https://res.cloudinary.com/dcwdrvxdg/image/upload/v1740204639/cs-portal/download_2_bzg8lm.png",
		},
		{
			title: "TÍCH HỢP DỄ DÀNg với mọi nền tảng",
			subtitle: "VỚI MỌI NỀN TẢNG",
			icon: "https://res.cloudinary.com/dcwdrvxdg/image/upload/v1740204680/cs-portal/download_3_zory2u.png",
		},
	];

	return (
		<div className="relative overflow-hidden">
			{/* Background tech pattern */}
			<div className="absolute inset-0 opacity-10" />

			{/* Content */}
			<div className="container mx-auto px-4 py-20">
				{/* Heading */}
				<div className="text-center mb-20">
					<h2 className="text-white text-6xl font-bold mb-4">WHY US?</h2>
					<p className="text-2xl">
						<span className="text-white">Tại sao nên chọn </span>
						<span className="text-[#40E0FF] font-bold">HD FUTURETECH</span>
					</p>
				</div>

				{/* Features Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
					{features.map((feature, index) => (
						<div
							key={index}
							className="relative group p-6 rounded-3xl"
							style={{
								background: "rgba(0, 42, 63, 0.5)",
							}}
						>
							<div className="relative z-10 flex flex-col items-center text-center space-y-6">
								{/* Icon */}
								<div className="h-[200px] w-[200px] flex items-center flex-shrink-0 justify-center">
									<Image
										src={feature.icon}
										height={200}
										width={200}
										alt="image"
										className="object-contain flex-shrink-0"
									/>
								</div>

								{/* Text */}
								<div className="space-y-1 mt-auto uppercase">
									<p className="text-[#40E0FF] text-2xl leading-tight drop-shadow-[0_0_10px_rgba(64,224,255,0.7)]">
										{feature.title}
									</p>
									<p className="text-[#40E0FF] text-2xl leading-tight drop-shadow-[0_0_10px_rgba(64,224,255,0.7)]">
										{feature.subtitle}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
