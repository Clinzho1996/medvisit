import FAQSection from "@/components/global-mobility/Faq";
import Hero from "@/components/global-mobility/Hero";
import ImmigrationServices from "@/components/global-mobility/ImmigrationServices";
import WhyChooseMedvisit from "@/components/global-mobility/WhyMed";
import GlobalMobilityUI from "@/components/global-mobility/WhyUs";

function GlobalMobility() {
	return (
		<div>
			<Hero />
			<GlobalMobilityUI />
			<ImmigrationServices />
			<WhyChooseMedvisit />
			<FAQSection />
		</div>
	);
}

export default GlobalMobility;
