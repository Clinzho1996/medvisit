import Mentions from "@/components/medical-tourism/Mentions";
import TestimonialCarousel from "@/components/medical-tourism/Testimonial";
import MedicalConsultation from "@/components/second-opinion/About";
import HeroSection from "@/components/second-opinion/Hero";
import OurServices from "@/components/second-opinion/Services";
import MedicalSpecializations from "@/components/second-opinion/Specialization";
import TopHospitals from "@/components/second-opinion/TopHospitals";

function SecondOpinion() {
	return (
		<div>
			<HeroSection />
			<MedicalConsultation />
			<OurServices />
			<MedicalSpecializations />
			<TopHospitals />
			<TestimonialCarousel />
			<div className="mt-10 sm:mt-20">
				<Mentions />
			</div>
		</div>
	);
}

export default SecondOpinion;
