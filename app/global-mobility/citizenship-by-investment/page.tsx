import GlobalSection from "@/components/global-mobility/Breadcrumb";
import CbiFAQSection from "@/components/global-mobility/CbiFaq";
import CbiInfoPage from "@/components/global-mobility/CbiInfo";
import CbiOverview from "@/components/global-mobility/CbiOverview";
import CbiWhy from "@/components/global-mobility/CbiWhy";

function CBI() {
	return (
		<div>
			<div className="px-[8%] py-6 bg-white">
				<GlobalSection
					badgeText="Citizenship by Investment (CBI)"
					title="Acquire a Second Passport Through Qualified Investment — From $90,000"
					subtitle="Unlock visa-free travel to 125-160+ countries, protect your wealth, and secure your family's future with a second citizenship."
					buttonText="Compare Programs"
					link="/global-mobility/compare-plans"
					bgColor="bg-[#F6DDCF]"
					img="/slash.png"
					isCentered={true}
				/>
			</div>
			<CbiOverview />
			<CbiInfoPage />
			<CbiWhy />
			<CbiFAQSection />
		</div>
	);
}

export default CBI;
