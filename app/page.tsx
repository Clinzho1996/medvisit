import AboutSection from "@/components/About";
import HeroSection from "@/components/Hero";
import MedVisitFooter from "@/components/MainFooter";
import Navbar from "@/components/MainHeader";
import FAQInner from "@/components/second-opinion/FaqInner";
import ServicesSection from "@/components/Services";
import Image from "next/image";
import "./globals.css";

function HomePage() {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<AboutSection />
			<div className="border-t border-[#E8E8E8]">
				<Image
					src="/ruler.png"
					width={1000}
					height={500}
					alt="rule"
					className="w-full"
				/>
			</div>
			<ServicesSection />
			<div className="mb-20">
				<FAQInner />
			</div>
			<MedVisitFooter />
		</div>
	);
}

export default HomePage;
