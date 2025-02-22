"use client";

interface FAQItem {
	question: string;
	image: string;
	imagePosition: "left" | "right";
}

export default function FAQSection() {
	const faqItems: FAQItem[] = [
		{
			question: "Proxy dùng cho mục đích gì?",
			image: "https://picsum.photos/536/354",
			imagePosition: "left",
		},
		{
			question: "Làm sao để mua Proxy?",
			image: "https://picsum.photos/536/354",
			imagePosition: "right",
		},
		{
			question: "Cách thiết lập nhanh chóng?",
			image: "https://picsum.photos/536/354",
			imagePosition: "left",
		},
	];

	return (
		<div className="relative overflow-hidden py-20">
			{/* Content */}
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-20">
					<h2 className="text-white text-6xl font-bold mb-4">FAQ</h2>
					<p className="text-2xl text-white">Câu hỏi thường gặp</p>
				</div>

				{/* FAQ Items */}
				<div className="max-w-6xl mx-auto space-y-12">
					{faqItems.map((item, index) => (
						<div
							key={index}
							className={`flex flex-col ${
								item.imagePosition === "right"
									? "md:flex-row-reverse"
									: "md:flex-row"
							}
                items-center group`}
						>
							{/* Image Container */}
							<div className="relative w-full md:w-1/3 aspect-[4/3]">
								{/* Octagonal clip path for image */}
								<div className="absolute inset-0 bg-[#40E0FF]/20 blur-xl" />
								<div
									className="relative overflow-hidden h-full"
									style={{
										clipPath:
											"polygon(15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0% 15%)",
									}}
								>
									<img
										src={item.image || "/placeholder.svg"}
										alt={item.question}
										className="w-full h-full object-cover"
									/>
									{/* Blue overlay */}
									<div className="absolute inset-0 bg-[#40E0FF]/10" />
								</div>
								{/* Glow effect */}
								<div
									className="absolute inset-0 bg-[#40E0FF]/20 blur-md -z-10"
									style={{
										clipPath:
											"polygon(15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0% 15%)",
									}}
								/>
							</div>

							{/* Question Box */}
							<div className="w-full md:w-2/3">
								<div className="relative">
									{/* Glow effect */}
									<div
										className="relative bg-[#40E0FF] py-6 px-8"
										style={{
											clipPath:
												item.imagePosition === "left"
													? "polygon(0 0, 100% 0, 100% calc(100% - 2rem), calc(100% - 2rem) 100%, 0 100%)"
													: "polygon(0 0, 100% 0, 100% 100%, 2rem 100%, 0 calc(100% - 2rem))",
										}}
									>
										<h3 className="text-2xl md:text-3xl font-bold text-[#001524]">
											{item.question}
										</h3>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
