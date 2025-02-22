import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-[#001524] text-[#40E0FF] py-12">
			<div className="container mx-auto px-4 flex items-center lg:flex-row flex-col gap-10">
				{/* Left Side - Company Info */}
				<div className="space-y-6 mb-8 md:mb-0">
					{/* Logo and Company Name */}
					<Image
						src={
							"https://res.cloudinary.com/dcwdrvxdg/image/upload/v1740214715/cs-portal/download_5_hmda1d.png"
						}
						alt="Logo"
						width={200}
						height={200}
					/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
					{/* Company Details */}
					<div className="space-y-4 max-w-xl">
						<div>
							<h3 className="text-xl mb-2">
								Giải pháp Công nghệ số HD FutureTech
							</h3>
							<p className="text-[#40E0FF]/80">
								Trụ sở chính: Số 33 Ngõ 91, Phường Cầu Diễn,
								<br />
								Quận Nam Từ Liêm, Thành phố Hà Nội
							</p>
						</div>

						<div>
							<p className="text-[#40E0FF]/80">
								Số điện thoại:{" "}
								<a
									href="tel:0916183847"
									className="hover:text-white transition-colors"
								>
									0916183847
								</a>
							</p>
							<p className="text-[#40E0FF]/80">
								contact:{" "}
								<a
									href="mailto:hdfuturetech@gmail.com"
									className="hover:text-white transition-colors"
								>
									hdfuturetech@gmail.com
								</a>
							</p>
						</div>

						<div className="text-[#40E0FF]/80">
							<p>8h30 - 17h30 thứ 2 - thứ 6</p>
							<p>9h - 12h thứ 7</p>
						</div>
					</div>

					{/* Right Side - Links and Copyright */}
					<div className="space-y-8">
						{/* Links */}
						<div className="space-y-2 text-left lg:text-right">
							<a href="#" className="block hover:text-white transition-colors">
								Chính Sách Bảo Mật
							</a>
							<a href="#" className="block hover:text-white transition-colors">
								Xử Lí Khiếu Nại
							</a>
							<a href="#" className="block hover:text-white transition-colors">
								Chính Sách Hoàn Tiền
							</a>
							<a href="#" className="block hover:text-white transition-colors">
								Hướng dẫn Thanh Toán
							</a>
						</div>

						{/* Copyright */}
						<div className="text-left lg:text-right">
							<p className="text-[#40E0FF]/80">
								Copyright 2025 ©{" "}
								<span className="text-[#40E0FF]">HD - FutureTech</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
