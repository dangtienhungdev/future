"use client";

import { Button } from "@/components/button-v2";

export default function PaymentSection() {
	return (
		<div className="relative overflow-hidden py-20">
			{/* Background tech pattern */}
			<div className="absolute inset-0" />

			{/* Content Container */}
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto relative">
					{/* Top Banner */}
					<div className="relative mb-16">
						<div className="relative flex items-center justify-center">
							<Button
								variant="cta"
								skew="none"
								size="lg"
								className="shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[300px] uppercase font-bold text-white text-4xl"
							>
								Chốt đơn hàng
							</Button>
						</div>
					</div>

					{/* Main Content */}
					<div className="flex flex-col md:flex-row items-center mb-16">
						{/* Device Image */}
						<div className="w-full md:w-1/2 relative">
							<div className="relative transform hover:scale-105 transition-transform duration-500">
								<img
									src="https://res.cloudinary.com/dcwdrvxdg/image/upload/v1740209289/cs-portal/download_4_jukqmn.png"
									alt="Payment Device"
									className="w-full h-auto"
								/>
							</div>
						</div>

						{/* Text Content */}
						<div className="w-full md:w-1/2">
							<h3 className="text-primary ml-12 text-3xl md:text-4xl font-bold mb-8 drop-shadow-[0_0_10px_rgba(64,224,255,0.5)] whitespace-nowrap">
								HỖ TRỢ THANH TOÁN ĐA DẠNG
							</h3>
							<ul className="space-y-4 text-primary text-2xl md:text-2xl mb-12 font-bold">
								<li className="text-2xl ml-8">- Crypto</li>
								<li className="text-2xl ml-6">- Banking</li>
							</ul>

							<Button
								variant="cta"
								skew="none"
								size="lg"
								className="shadow-lg hover:shadow-xl transition-shadow duration-300 w-full uppercase font-bold text-white text-4xl"
							>
								<p>Mua ngay</p>
								<p className="text-xl">Nhận proxy tức thì</p>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
