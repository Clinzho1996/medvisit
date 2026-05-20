import AbtPaients from "@/components/second-opinion/AbtPatient";
import Breadcrumb from "@/components/second-opinion/Breadcrumb";
import FAQInner from "@/components/second-opinion/FaqInner";
import InfoPatient from "@/components/second-opinion/InfoPatient";

function Patients() {
	return (
		<div>
			<Breadcrumb title="Patients & Families" />
			<AbtPaients />
			<InfoPatient />
			<FAQInner />
		</div>
	);
}

export default Patients;
