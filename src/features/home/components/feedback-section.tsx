"use client";

import Image from "next/image";

interface Testimonial {
	name: string;
	title: string;
	image: string;
	content: string;
}

export default function FeedbackSection() {
	const testimonials: Testimonial[] = [
		{
			name: "NGUYỄN MINH QUÂN",
			title: "- Chuyên gia MMO, Facebook Ads -",
			image: "https://picsum.photos/536/354",
			content: `"Mình đã dùng thử nhiều dịch vụ proxy khác nhau nhưng chỉ đến khi sử dụng proxy tại HD Future, mình mới thực sự hài lòng. Tốc độ siêu nhanh, IP sạch 100%, không bị blacklist, giúp mình chạy ads an toàn mà không lo checkpoint hay tài khoản bị vô hiệu hóa. Đặc biệt, proxy ổn định ngay cả khi scale nhiều tài khoản cùng lúc. Support cực nhanh, nhiệt tình. Đây chắc chắn là dịch vụ proxy top đầu dành cho anh em làm MMO!"`,
		},
		{
			name: "LÊ THÙY LINH",
			title: "- Airdrop Hunter, Crypto Enthusiast -",
			image: "https://picsum.photos/536/354",
			content: `"Với những ai làm airdrop hoặc crypto trading, việc có proxy ổn định và không bị phát hiện là điều cực kỳ quan trọng. Proxy ở đây có độ ẩn danh cao, tránh được fingerprint tracking, giúp mình tạo và quản lý nhiều tài khoản mà không lo bị flag hay ban. Ngoài ra, hệ thống quản lý proxy cực kỳ dễ dùng, có API hỗ trợ sẵn, mình có thể tích hợp vào tool automation một cách nhanh chóng. Quá tuyệt vời!"`,
		},
		{
			name: "TRẦN HOÀNG NAM",
			title: "- Pro Scraper, Data Mining -",
			image: "https://picsum.photos/536/354",
			content: `"Mình cần proxy tốc độ cao, IP sạch và không bị chặn khi scraping dữ liệu. Proxy ở đây đáp ứng hoàn hảo: proxy dân cư giúp vượt qua anti-bot, proxy datacenter cho băng thông lớn, proxy US để bypass giới hạn địa lý, và proxy private đảm bảo độ ẩn định tuyệt đối. Hỗ trợ API sẵn, dễ tích hợp tool automation. Dịch vụ chất lượng, support nhanh - quá hài lòng!"`,
		},
	];

	return (
		<div className="relative overflow-hidden py-20">
			{/* Background tech pattern */}
			<div className="absolute inset-0 opacity-10" />

			{/* Content */}
			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-20">
					<h2 className="text-white text-6xl font-bold mb-4">Feedback</h2>
					<p className="text-2xl text-white">
						Từ khách hàng đã sử dụng dịch vụ
					</p>
				</div>

				{/* Testimonials */}
				<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className={`relative ${index === 1 ? "md:mt-12" : ""}`}
						>
							{/* Card */}
							<div className="relative bg-white rounded-3xl shadow-lg border-[10px] border-[#a7fdff]">
								{/* Content */}
								<div className="relative bg-white rounded-3xl">
									{/* Profile Image */}
									<div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
										<div className="relative w-24 h-24">
											{/* Image glow */}
											<div className="absolute inset-0 rounded-full bg-primary blur-sm h-24 w-24" />
											{/* Image container */}
											<div className="relative rounded-full overflow-hidden border-4 border-primary h-24 w-24">
												<Image
													src={testimonial.image || "/placeholder.svg"}
													alt={testimonial.name}
													className="w-full h-full object-cover"
													height={100}
													width={100}
												/>
											</div>
										</div>
									</div>

									{/* Name and Title */}
									<div className="text-center pt-14 pb-6 bg-[#002738] rounded-t-xl">
										<h3 className="text-3xl font-bold text-white whitespace-nowrap">
											{testimonial.name}
										</h3>
										<p className="text-white">{testimonial.title}</p>
									</div>

									{/* Testimonial Text */}
									<p className="text-gray-700 leading-relaxed px-6 py-4">
										{testimonial.content}
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
