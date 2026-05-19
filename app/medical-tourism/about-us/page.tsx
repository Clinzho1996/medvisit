import AboutInner from "@/components/medical-tourism/AboutInner";
import Breadcrumb from "@/components/medical-tourism/Breadcrumb";
import Mentions from "@/components/medical-tourism/Mentions";
import UniqueOfferings from "@/components/medical-tourism/Offerings";
import Prefooter from "@/components/medical-tourism/Prefooter";
import WhyMedvisitSection from "@/components/medical-tourism/WhyMedvisit";

function AboutUs() {
	return (
		<div>
			<Breadcrumb
				subtitle="About Medvisit"
				title="Everything you need
to know about us"
			/>
			<AboutInner />
			<WhyMedvisitSection />
			<UniqueOfferings />
			<Mentions />
			<Prefooter />
		</div>
	);
}

export default AboutUs;
