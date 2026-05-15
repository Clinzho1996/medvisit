import GlobalSection from "@/components/global-mobility/Breadcrumb";
import GloFAQSection from "@/components/global-mobility/GloFaq";
import GloInfoPage from "@/components/global-mobility/GloInfo";
import GloOverview from "@/components/global-mobility/GloOverview";
import GloWhy from "@/components/global-mobility/GloWhy";

function GoldenVisas() {
	return (
		<div>
			<div className="px-[8%] py-6 bg-white">
				<GlobalSection
					badgeText="Golden Visas & Residency Programs"
					title="Secure Long-Term Residency in Europe, UAE, and Beyond — From $250,000"
					subtitle="Golden Visas offer a clear path to permanent residency and citizenship in some of the world's most desirable destinations. "
					buttonText="Explore Golden Visa Options"
					bgColor="bg-[#DDECE5]"
					img="/gold.png"
					link="/"
					isCentered={true}
				/>
			</div>
			<GloOverview />
			<GloInfoPage />
			<GloWhy />
			<GloFAQSection />
		</div>
	);
}

export default GoldenVisas;
