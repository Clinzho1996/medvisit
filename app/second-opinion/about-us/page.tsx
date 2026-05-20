import MedicalConsultation from "@/components/second-opinion/About";
import Breadcrumb from "@/components/second-opinion/Breadcrumb";
import FAQInner from "@/components/second-opinion/FaqInner";
import WhyMedvisitSection from "@/components/second-opinion/WhyMedvisit";

function About() {
	return (
		<div>
			<Breadcrumb title="About Us" />
			<MedicalConsultation />
			<WhyMedvisitSection />
			<FAQInner />
		</div>
	);
}

export default About;
