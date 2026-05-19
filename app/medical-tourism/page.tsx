import AboutAndQuoteSection from "@/components/medical-tourism/About";
import FeaturesSection from "@/components/medical-tourism/Features";
import MedicalTourismHero from "@/components/medical-tourism/Hero";
import MedicalServicesSection from "@/components/medical-tourism/Services";
import TestimonialCarousel from "@/components/medical-tourism/Testimonial";
import WorldCoverageSection from "@/components/medical-tourism/WorldCoverage";

function MedicalTourism() {
	return (
		<div>
			<MedicalTourismHero />
			<AboutAndQuoteSection />
			<MedicalServicesSection />
			<FeaturesSection />
			<TestimonialCarousel />
			<WorldCoverageSection />
		</div>
	);
}

export default MedicalTourism;
