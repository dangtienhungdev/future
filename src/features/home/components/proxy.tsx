import NonHeading from "@/components/non-heading";
import ProxyCard from "@/components/proxy-card";

const pricingData = [
	{
		title: "1 Proxy\nTháng",
		price: "",
		isSpecial: true,
	},
	{
		title: "Proxy",
		desc: "Dân Cư",
		price: "22.000đ",
	},
	{
		title: "Proxy",
		desc: "Datacenter",
		price: "16.000đ",
	},
	{
		title: "Proxy",
		desc: "US",
		price: "9.500đ",
	},
	{
		title: "Proxy",
		desc: "Dùng Riêng",
		price: "45.000đ",
	},
];

const Proxy = () => {
	return (
		<div className="container mx-auto px-4 py-16">
			{/* Main Title */}
			<h1 className="text-center text-4xl font-bold text-white mb-20 md:text-5xl lg:text-6xl">
				Bảng Giá Proxy
			</h1>

			{/* Subtitle */}
			<NonHeading
				title="Bảng Giá Proxy"
				classNames={{
					title: "text-transparent text-[#003e3f] text-xl lg:text-2xl",
					container: "w-full text-center lg:w-1/3",
				}}
			></NonHeading>

			{/* Cards Grid */}
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 mt-[54px]">
				{pricingData.map((item, index) => {
					if (index === 0) {
						return (
							<ProxyCard
								key={index}
								classNames={{
									container: "bg-cyan-500 w-full lg:w-64",
									content: "flex items-center justify-center",
								}}
							>
								<div className="h-36 w-full relative text-3xl font-semibold">
									<span className="text-white absolute top-4 right-6">
										1 Proxy
									</span>
									<div className="absolute top-0 bottom-0 h-[150px] w-[1px] left-1/2 bg-white -rotate-[60deg]" />
									<span className="text-white absolute bottom-4 left-6">
										Tháng
									</span>
								</div>
							</ProxyCard>
						);
					}
					return (
						<ProxyCard
							key={index}
							classNames={{ container: "bg-cyan-500 w-full lg:w-64" }}
						>
							<div className="relative flex flex-col items-center space-y-4 p-6 uppercase h-full justify-around">
								<div className="text-center space-y-6">
									<h2 className="text-center text-3xl font-bold tracking-wider text-white">
										{item.title}
									</h2>
									<span className="text-white text-xl font-semibold">
										{item.desc}
									</span>
								</div>

								<div className="w-1/2 h-[1px] bg-primary" />

								<div className="text-3xl font-bold text-white">
									{item.price}
								</div>

								<button
									className="w-full rounded bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 font-medium text-white transition-transform hover:scale-105 active:scale-95"
									style={{
										background:
											"linear-gradient(to right, rgb(254, 167, 0), rgb(248, 54, 0))",
									}}
								>
									MUA NGAY
								</button>
							</div>
						</ProxyCard>
					);
				})}
			</div>
		</div>
	);
};

export default Proxy;
