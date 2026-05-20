import AbtPhysician from "@/components/second-opinion/AbtPhysician";
import Breadcrumb from "@/components/second-opinion/Breadcrumb";
import FAQInner from "@/components/second-opinion/FaqInner";
import InfoPhysician from "@/components/second-opinion/InfoPhysician";

function ReferringPhysicians() {
	return (
		<div>
			<Breadcrumb title="Referring Physicians" />
			<AbtPhysician />
			<InfoPhysician />
			<FAQInner />
		</div>
	);
}

export default ReferringPhysicians;
