import AboutInner from "@/components/second-opinion/AboutInner";
import Breadcrumb from "@/components/second-opinion/Breadcrumb";
import FAQInner from "@/components/second-opinion/FaqInner";
import WhyMedvisitSection from "@/components/second-opinion/WhyMedvisit";

function About() {
	return (
		<div>
			<Breadcrumb title="About Us" />
			<AboutInner />
			<WhyMedvisitSection />
			<FAQInner />
		</div>
	);
}

export default About;
