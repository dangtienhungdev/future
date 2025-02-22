"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Testimonial {
	name: string;
	title: string;
	image: string;
	content: string;
}

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
		content: `"Với những ai làm airdrop hoặc crypto trading, việc có proxy ổn định và không bị phát hiện là điều cực kỳ quan trọng. Proxy ở đây có độ ẩn danh cao, tránh được fingerprint tracking, giúp mình tạo và quản lý nhiều tài khoản mà không lo bị flag hay ban. Ngoài ra, hệ thống quản lý proxy cực kỳ dễ dùng, mình có thể tích hợp vào tool automation một cách nhanh chóng. Quá tuyệt vời!"`,
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
		content: `"Với những ai làm airdrop hoặc crypto trading, việc có proxy ổn định và không bị phát hiện là điều cực kỳ quan trọng. Proxy ở đây có độ ẩn danh cao, tránh được fingerprint tracking, giúp mình tạo và quản lý nhiều tài khoản mà không lo bị flag hay ban. Ngoài ra, hệ thống quản lý proxy cực kỳ dễ dùng, mình có thể tích hợp vào tool automation một cách nhanh chóng. Quá tuyệt vời!"`,
	},
	{
		name: "TRẦN HOÀNG NAM",
		title: "- Pro Scraper, Data Mining -",
		image: "https://picsum.photos/536/354",
		content: `"Mình cần proxy tốc độ cao, IP sạch và không bị chặn khi scraping dữ liệu. Proxy ở đây đáp ứng hoàn hảo: proxy dân cư giúp vượt qua anti-bot, proxy datacenter cho băng thông lớn, proxy US để bypass giới্মান địa lý, và proxy private đảm bảo độ ẩn định tuyệt đối. Hỗ trợ API sẵn, dễ tích hợp tool automation. Dịch vụ chất lượng, support nhanh - quá hài lòng!"`,
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
		content: `"Với những ai làm airdrop hoặc crypto trading, việc có proxy ổn định và không bị phát hiện là điều cực kỳ quan trọng. Proxy ở đây có độ ẩn danh cao, tránh được fingerprint tracking, giúp mình tạo và quản lý nhiều tài khoản mà không lo bị flag hay ban. Ngoài ra, hệ thống quản lý proxy cực kỳ dễ dùng, mình có thể tích hợp vào tool automation một cách nhanh chóng. Quá tuyệt vời!"`,
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
		content: `"Với những ai làm airdrop hoặc crypto trading, việc có proxy ổn định và không bị phát hiện là điều cực kỳ quan trọng. Proxy ở đây có độ ẩn danh cao, tránh được fingerprint tracking, giúp mình tạo và quản lý nhiều tài khoản mà không lo bị flag hay ban. Ngoài ra, hệ thống quản lý proxy cực kỳ dễ dùng, mình có thể tích hợp vào tool automation một cách nhanh chóng. Quá tuyệt vời!"`,
	},
	{
		name: "TRẦN HOÀNG NAM",
		title: "- Pro Scraper, Data Mining -",
		image: "https://picsum.photos/536/354",
		content: `"Mình cần proxy tốc độ cao, IP sạch và không bị chặn khi scraping dữ liệu. Proxy ở đây đáp ứng hoàn hảo: proxy dân cư giúp vượt qua anti-bot, proxy datacenter cho băng thông lớn, proxy US để bypass giới hạn địa lý, và proxy private đảm bảo độ ẩn định tuyệt đối. Hỗ trợ API sẵn, dễ tích hợp tool automation. Dịch vụ chất lượng, support nhanh - quá hài lòng!"`,
	},
];

export default function TestimonialSlider() {
	const [maxHeight, setMaxHeight] = useState(0);
	const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

	const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

	useEffect(() => {
		const updateMaxHeight = () => {
			const heights = cardsRef.current.map((card) => card?.offsetHeight ?? 0);
			setMaxHeight(Math.max(...heights));
		};

		updateMaxHeight();
		window.addEventListener("resize", updateMaxHeight);

		return () => window.removeEventListener("resize", updateMaxHeight);
	}, []);

	return (
		<div className="relative overflow-visible pt-16">
			<Carousel
				opts={{
					align: "start",
					loop: true,
					skipSnaps: false,
					slidesToScroll: 1,
				}}
				plugins={[plugin.current]}
				className="w-full max-w-7xl mx-auto"
			>
				<CarouselContent className="-ml-4">
					{testimonials.map((testimonial, index) => (
						<CarouselItem
							key={index}
							className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
						>
							<div
								className="relative pt-16"
								style={{ height: maxHeight ? `${maxHeight}px` : "auto" }}
							>
								{/* Avatar */}
								<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
									<div className="relative w-24 h-24">
										<div className="absolute inset-0 rounded-full bg-[#40E0FF] blur-md opacity-70" />
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
								<div
									ref={(el) => {
										if (el) {
											cardsRef.current[index] = el;
										}
									}}
									className="relative bg-[#002738] rounded-3xl border-[10px] border-[#a7fdff] overflow-hidden h-full flex flex-col"
								>
									{/* Name and Title */}
									<div className="pt-16 pb-6 text-center flex-shrink-0">
										<h3 className="text-2xl font-bold text-white">
											{testimonial.name}
										</h3>
										<p className="text-white mt-1">{testimonial.title}</p>
									</div>

									{/* Content */}
									<div className="bg-white p-6 rounded-b-xl flex-grow">
										<p className="text-gray-700 leading-relaxed">
											{testimonial.content}
										</p>
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="hidden md:flex -left-12 text-[#40E0FF] hover:text-white hover:bg-[#40E0FF]/20" />
				<CarouselNext className="hidden md:flex -right-12 text-[#40E0FF] hover:text-white hover:bg-[#40E0FF]/20" />
			</Carousel>
		</div>
	);
}
