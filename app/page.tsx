import AboutSection from "@/components/About";
import HeroSection from "@/components/Hero";
import ServicesSection from "@/components/Services";
import Image from "next/image";

function HomePage() {
	return (
		<div>
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
		</div>
	);
}

export default HomePage;
