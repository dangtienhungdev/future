import ProxyCard from "./proxy-card";

interface ProxyPackage {
	size: number;
	originalPrice: number;
	discountedPrice: number;
	discount: number;
}

interface ProxyCardProps {
	title: string;
	basePrice: string;
	packages: ProxyPackage[];
}

export default function ProxyPriceCard({
	title,
	basePrice,
	packages,
}: ProxyCardProps) {
	return (
		<div className="w-full">
			{/* Header */}
			<div className="mb-2">
				<h2 className="text-[#40E0FF] text-xl md:text-2xl font-bold drop-shadow-[0_0_10px_rgba(64,224,255,0.7)]">
					{title}
				</h2>
				<p className="text-[#40E0FF]/90 text-base md:text-lg">{basePrice}</p>
			</div>

			{/* Price Table */}
			<div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
				{/* Left Column - Package Sizes */}
				<div className="relative w-full sm:w-auto">
					{/* Glow effect */}
					<div className="absolute inset-0 bg-[#40E0FF]/20 blur-[20px]" />

					{/* Content */}
					<ProxyCard
						classNames={{
							container: "bg-cyan-500 w-full sm:w-40 lg:w-64",
							content: "flex items-center justify-center flex-col",
						}}
					>
						<div className="text-[#40E0FF] text-lg md:text-xl font-bold text-center">
							GÓI PROXY
						</div>
						<div className="divide-y divide-[#40E0FF]/30 w-full sm:w-2/3">
							{packages.map((pkg, i) => (
								<div key={i} className="py-2 sm:py-3">
									<div
										className="text-white text-2xl sm:text-3xl font-bold text-center"
										style={{ fontFamily: "Arial", letterSpacing: "0.05em" }}
									>
										{pkg.size}
									</div>
								</div>
							))}
						</div>
					</ProxyCard>
				</div>

				{/* Right Column - Prices */}
				<ProxyCard
					classNames={{
						container: "bg-cyan-500 w-full flex-1",
						content: "flex items-center justify-center flex-col",
					}}
				>
					<div
						className="relative bg-[#001524]/80 px-6 py-4 w-full"
						style={{
							clipPath:
								"polygon(0 0, 100% 0, 100% 85%, 100% 100%, 0 100%, 0 0)",
						}}
					>
						<div className="text-[#40E0FF] text-xl font-bold mb-6 text-center border-b border-[#40E0FF]/50 pb-2">
							GIÁ GÓI
						</div>
						<div className="divide-y divide-[#40E0FF]/30">
							{packages.map((pkg, i) => (
								<div key={i} className="py-3">
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-2">
											<span className="text-gray-500 line-through text-sm">
												{pkg.originalPrice.toLocaleString()}Đ
											</span>
											<span className="text-yellow-400 font-bold text-xl">
												{pkg.discountedPrice.toLocaleString()}Đ
											</span>
										</div>
										<span className="text-red-500 font-bold">
											-{pkg.discount}%
										</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</ProxyCard>
			</div>
		</div>
	);
}
