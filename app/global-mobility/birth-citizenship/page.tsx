import BcFAQSection from "@/components/global-mobility/BcFaq";
import BcMobilityFooter from "@/components/global-mobility/BcFooter";
import BcWhy from "@/components/global-mobility/BcWhy";
import GlobalSection from "@/components/global-mobility/Breadcrumb";
import InfoPage from "@/components/global-mobility/Info";
import OverviewAndProblemSection from "@/components/global-mobility/Overview";
import Problem from "@/components/global-mobility/Problem";

function BirthCitizenship() {
	return (
		<div>
			<div className="px-[8%] py-6 bg-white">
				<GlobalSection
					badgeText="Chilean Birth Citizenship"
					title="Give Your Child a Top-14 Global Passport — From $22,000 Total Family Cost"
					subtitle="Legally Confirmed 2026 — Chile's jus soli law grants automatic citizenship to children born to tourists. Fully legal, government-recognized, and used by hundreds of international families."
					buttonText="Get Your Free Estimate"
					bgColor="bg-[#E2E4F5]"
					img="/right.png"
					isCentered={true}
				/>
			</div>

			<OverviewAndProblemSection />
			<Problem />
			<InfoPage />
			<BcWhy />
			<BcFAQSection />
			<BcMobilityFooter />
		</div>
	);
}

export default BirthCitizenship;
