import GlobalSection from "@/components/global-mobility/Breadcrumb";

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
		</div>
	);
}

export default Residency;
