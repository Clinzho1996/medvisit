import GlobalSection from "@/components/global-mobility/Breadcrumb";
import ResFAQSection from "@/components/global-mobility/ResFaq";
import ResInfoPage from "@/components/global-mobility/ResInfo";
import CitizenshipPath from "@/components/global-mobility/ResPath";
import ResWhy from "@/components/global-mobility/ResWhy";

function Residency() {
	return (
		<div>
			<div className="px-[8%] py-6 bg-white">
				<GlobalSection
					badgeText="Chilean Residency"
					title="Live, Work, and Build a Future in Chile — From $2,750"
					subtitle="Parents of Chilean-born children qualify for expedited residency under the 'Chilean Relative' track. 
Get permanent residency in 2 years and Chilean citizenship in 5 years."
					buttonText="Get Your Free Estimate"
					bgColor="bg-[#E0E0E0]"
					img="/box.png"
					isCentered={true}
				/>
			</div>
			<ResInfoPage />
			<ResWhy />
			<CitizenshipPath />
			<ResFAQSection />
		</div>
	);
}

export default Residency;
