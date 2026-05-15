import GlobalSection from "@/components/global-mobility/Breadcrumb";

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
					isCentered={true}
				/>
			</div>
		</div>
	);
}

export default GoldenVisas;
