import FAQSection from "@/components/global-mobility/Faq";
import Hero from "@/components/global-mobility/Hero";
import ImmigrationServices from "@/components/global-mobility/ImmigrationServices";
import WhyChooseMedvisit from "@/components/global-mobility/WhyMed";
import GlobalMobilityUI from "@/components/global-mobility/WhyUs";
import MobilityFooter from "@/components/GlobalMobilityFooter";

function GlobalMobility() {
	return (
		<div>
			<Hero />
			<GlobalMobilityUI />
			<ImmigrationServices />
			<WhyChooseMedvisit />
			<FAQSection />
			<MobilityFooter />
		</div>
	);
}

export default GlobalMobility;
