"use client";

import NonHeading from "@/components/non-heading";
import ProxyPriceCard from "@/components/proxy-price-card";
import { ThumbsUp } from "lucide-react";

export default function PriceTable() {
	const proxyPackages = [
		{ size: 10, originalPrice: 220000, discountedPrice: 209000, discount: 5 },
		{
			size: 50,
			originalPrice: 1100000,
			discountedPrice: 990000,
			discount: 10,
		},
		{
			size: 100,
			originalPrice: 2200000,
			discountedPrice: 1540000,
			discount: 30,
		},
		{
			size: 200,
			originalPrice: 4400000,
			discountedPrice: 2860000,
			discount: 35,
		},
		{
			size: 300,
			originalPrice: 6600000,
			discountedPrice: 3960000,
			discount: 40,
		},
	];

	return (
		<div className="mt-20 px-4 lg:px-0">
			{/* Content */}
			<div className="relative ">
				{/* Header */}
				<div className="flex flex-col lg:flex-row items-center gap-4 mb-12">
					<NonHeading
						title="Bảng Giá Gói"
						classNames={{
							title: "text-transparent text-[#003e3f] text-xl lg:text-2xl",
							container: "w-full text-center lg:w-1/3",
						}}
					></NonHeading>
					<div className="flex items-center gap-2">
						<ThumbsUp className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-400" />
						<span className="text-xl lg:text-2xl xl:text-3xl font-bold text-yellow-400">
							NHIỀU ƯU ĐÃI HƠN!
						</span>
					</div>
				</div>

				<div className="grid lg:grid-cols-2 grid-cols-1 gap-x-8 lg:gap-x-20 gap-y-10">
					<ProxyPriceCard
						title="PROXY DÂN CƯ VN"
						basePrice="1 PROXY: 22.000Đ"
						packages={proxyPackages}
					/>
					<ProxyPriceCard
						title="PROXY DÂN CƯ VN"
						basePrice="1 PROXY: 22.000Đ"
						packages={proxyPackages}
					/>
					<ProxyPriceCard
						title="PROXY DÂN CƯ VN"
						basePrice="1 PROXY: 22.000Đ"
						packages={proxyPackages}
					/>
					<ProxyPriceCard
						title="PROXY DÂN CƯ VN"
						basePrice="1 PROXY: 22.000Đ"
						packages={proxyPackages}
					/>
				</div>
			</div>
		</div>
	);
}
