"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

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
		// Add more testimonials here to have at least 15 items
		// ... (repeat the above 3 testimonials 4 more times to reach 15)
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

	const [currentIndex, setCurrentIndex] = useState(0);
	const [slidesToShow, setSlidesToShow] = useState(2);

	const updateSlidesToShow = useCallback(() => {
		if (typeof window !== "undefined") {
			if (window.innerWidth >= 1280) {
				setSlidesToShow(4);
			} else if (window.innerWidth >= 1024) {
				setSlidesToShow(3);
			} else if (window.innerWidth >= 768) {
				setSlidesToShow(2);
			} else {
				setSlidesToShow(1);
			}
		}
	}, []);

	useEffect(() => {
		updateSlidesToShow();
		window.addEventListener("resize", updateSlidesToShow);
		return () => window.removeEventListener("resize", updateSlidesToShow);
	}, [updateSlidesToShow]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(
				(prevIndex) =>
					(prevIndex + 1) % (testimonials.length - slidesToShow + 1)
			);
		}, 5000); // Change slide every 5 seconds

		return () => clearInterval(interval);
	}, [slidesToShow]);
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
				{/* <TestimonialSlider /> */}

				<div className="relative overflow-hidden pt-16">
					{" "}
					{/* Added pt-16 for avatar space */}
					<div className="max-w-7xl mx-auto relative">
						<div
							className="flex transition-transform duration-500 ease-in-out h-full"
							style={{
								transform: `translateX(-${
									currentIndex * (100 / slidesToShow)
								}%)`,
							}}
						>
							{testimonials.map((testimonial, index) => (
								<div
									key={index}
									className={`flex-shrink-0 px-4 transition-all duration-300 h-full`}
									// style={{ width: `${100 / slidesToShow}%` }}
									style={{ width: "33%" }}
								>
									<div className="relative pt-12 h-full">
										{/* Container for card with space for avatar */}
										{/* Avatar - Positioned absolutely relative to card */}
										<div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
											<div className="relative w-24 h-24">
												<div className="absolute inset-0 rounded-full bg-[#40E0FF] blur-md" />
												<div className="relative rounded-full overflow-hidden border-4 border-[#40E0FF]">
													<Image
														src={testimonial.image || "/placeholder.svg"}
														alt={testimonial.name}
														className="w-24 h-24 object-cover"
														width={96}
														height={96}
													/>
												</div>
											</div>
										</div>
										{/* Card */}
										<div className="relative bg-[#002738] rounded-3xl border-[10px] border-[#a7fdff] overflow-hidden h-full">
											{/* Name and Title */}
											<div className="pt-16 pb-6 text-center">
												<h3 className="text-3xl font-bold text-white whitespace-nowrap">
													{testimonial.name}
												</h3>
												<p className="text-white">{testimonial.title}</p>
											</div>

											{/* Content */}
											<div className="bg-white p-6 rounded-b-xl max-h-[250px] overflow-y-auto scrollbar-hide">
												<p className="text-gray-700 leading-relaxed">
													{testimonial.content}
												</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
