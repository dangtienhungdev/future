import { Banner } from "@/features/home/components/banner";
import FAQSection from "@/features/home/components/faq-section";
import FeedbackSection from "@/features/home/components/feedback-section";
import Footer from "@/features/home/components/footer";
import Navbar from "@/features/home/components/navbar";
import PaymentSection from "@/features/home/components/payment-section";
import Proxy from "@/features/home/components/proxy";
import WhyUsSection from "@/features/home/components/why-us-section";

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

				<Banner />

				<Proxy />

				{/* ahihi */}
				<WhyUsSection />

				<FeedbackSection />

				<FAQSection />

				<PaymentSection />
			</main>
			<Footer />
		</div>
	);
}
