"use client";

export default function TechCard() {
	return (
		<div className="p-8 bg-[#001524] min-h-screen flex items-center justify-center">
			{/* Card Container */}
			<div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden">
				{/* Background with tech lines */}
				<div
					className="absolute inset-0 bg-[#001524]/90"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.8 8.544 15.214 9.96l9.9-9.9h-2.77zM32 0l-3.657 3.657 1.414 1.414L35.143 0H32zm-6.485 0L20.657 4.858 22.07 6.272 29.97 0h-4.455zm12.97 0l4.858 4.858-1.414 1.414L29.97 0h8.485zm16.485 0L51.8 3.657 53.214 5.07 58.284 0H54.97zM32 0l1.414 1.414 1.415-1.414h-2.83zM0 0l4.858 4.858-1.415 1.414L0 2.828V0zm0 5.373l6.485 6.485-1.414 1.415L0 8.2V5.374zm0 5.656l8.544 8.544-1.414 1.414L0 13.86v-2.83zm0 5.657l11.03 11.03-1.415 1.414L0 19.514v-2.828zm0 5.657L13.857 28l-1.414 1.414L0 25.17v-2.828zm0 5.657L16.686 28l-1.415 1.414L0 30.83v-2.83zm0 5.657l19.514 19.514-1.414 1.414L0 36.485v-2.828zm0 5.657l22.343 22.343-1.414 1.414L0 42.143v-2.83zm0 5.657l25.172 25.172-1.414 1.414L0 47.8v-2.83zm0 5.657l28 28-1.414 1.414L0 53.456v-2.83zM54.627 60L30.83 36.204l1.414-1.414L60 62.627v-2.83zM22.343 60L0 37.657v-2.828l22.343 22.343-1.414 1.414L0 37.657v-2.828l22.343 22.343-1.414 1.414zM32 60l-4.858-4.858 1.414-1.414L32 57.172V60zm-6.485 0l-4.858-4.858 1.414-1.414L28.544 60h-2.83zm12.97 0l-4.858-4.858 1.415-1.414L35.143 60h2.83zM16.686 60L0 43.314v-2.83l16.686 16.687-1.415 1.414L0 43.314v-2.83l16.686 16.687-1.415 1.414zM48.97 60L0 11.03v-2.83L48.97 57.173l-1.414 1.414L0 11.03v-2.83L48.97 57.173l-1.414 1.414z' fill='%230EA5E9' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
					}}
				/>

				{/* Card Content */}
				<div className="relative h-full flex flex-col items-center justify-center p-8">
					{/* Gears */}
					<div className="relative w-48 h-24 mb-8">
						{/* First Gear */}
						<div className="absolute left-4 top-0 w-20 h-20">
							<div className="relative w-full h-full">
								{/* Metallic base */}
								<div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600">
									{/* Gear teeth */}
									<div className="absolute inset-0 animate-spin-slow">
										{[...Array(12)].map((_, i) => (
											<div
												key={i}
												className="absolute w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-500"
												style={{
													top: "50%",
													left: "50%",
													transform: `rotate(${i * 30}deg) translateY(-150%)`,
													clipPath:
														"polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
												}}
											/>
										))}
									</div>
									{/* Inner ring with glow */}
									<div className="absolute inset-4 rounded-full bg-[#40E0FF] opacity-80 blur-[2px]" />
									<div className="absolute inset-4 rounded-full border-4 border-gray-300" />
								</div>
							</div>
						</div>

						{/* Second Gear - Slightly offset and rotated */}
						<div className="absolute right-4 top-0 w-20 h-20">
							<div className="relative w-full h-full">
								{/* Metallic base */}
								<div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600">
									{/* Gear teeth */}
									<div className="absolute inset-0 animate-spin-slow-reverse">
										{[...Array(12)].map((_, i) => (
											<div
												key={i}
												className="absolute w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-500"
												style={{
													top: "50%",
													left: "50%",
													transform: `rotate(${i * 30}deg) translateY(-150%)`,
													clipPath:
														"polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
												}}
											/>
										))}
									</div>
									{/* Inner ring with glow */}
									<div className="absolute inset-4 rounded-full bg-[#40E0FF] opacity-80 blur-[2px]" />
									<div className="absolute inset-4 rounded-full border-4 border-gray-300" />
								</div>
							</div>
						</div>

						{/* Glow effect behind gears */}
						<div className="absolute inset-0 bg-[#40E0FF] opacity-20 blur-xl rounded-full" />
					</div>

					{/* Text */}
					<div className="text-center space-y-2">
						<p
							className="text-[#40E0FF] text-2xl font-bold leading-tight tracking-wide
              drop-shadow-[0_0_10px_rgba(64,224,255,0.7)]"
						>
							TÍCH HỢP DỄ DÀNG
						</p>
						<p
							className="text-[#40E0FF] text-2xl font-bold leading-tight tracking-wide
              drop-shadow-[0_0_10px_rgba(64,224,255,0.7)]"
						>
							VỚI MỌI NỀN TẢNG
						</p>
					</div>
				</div>

				{/* Card border glow */}
				<div className="absolute inset-0 rounded-3xl border border-[#40E0FF]/30" />
			</div>
		</div>
	);
}
