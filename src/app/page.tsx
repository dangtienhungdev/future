import { Banner } from "@/features/home/components/banner";
import Navbar from "@/features/home/components/navbar";

export default function Home() {
	return (
		<div className="relative min-h-screen">
			<div
				className="absolute inset-0 opacity-20"
				style={{
					backgroundImage:
						"linear-gradient(45deg, #97eeff 1px, transparent 1px), linear-gradient(-45deg, #97eeff 1px, transparent 1px)",
					backgroundSize: "40px 40px",
				}}
			/>
			<main className="container mx-auto relative min-h-screen">
				{/* Background Pattern */}

				{/* Navbar */}
				<Navbar />

				{/* banner */}
				<div className="relative">
					<Banner />
				</div>
			</main>
		</div>
	);
}
