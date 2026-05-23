import GlobalSection from "@/components/global-mobility/Breadcrumb";
import ComparisonTable from "@/components/global-mobility/ComparionTable";
import CpMobilityFooter from "@/components/global-mobility/CpFooter";

function ComparePlans() {
	return (
		<div>
			<div className="px-[8%] py-6 bg-white">
				<GlobalSection
					badgeText="Compare All Programs"
					title="Find the Perfect  Mobility Pathways"
					subtitle="Compare our premium citizenship and residency programs to find the right fit for your family's future, budget, and timeline."
					bgColor="bg-[#E2E4F5]"
					img="/right.png"
					isCentered={true}
				/>
			</div>
			<ComparisonTable />
			<CpMobilityFooter />
		</div>
	);
}

export default ComparePlans;
