import Breadcrumb from "@/components/second-opinion/Breadcrumb";
import ChooseMedicalSpecialty from "@/components/second-opinion/ChooseSpecialty";
import FAQInner from "@/components/second-opinion/FaqInner";

function Specialties() {
	return (
		<div>
			<Breadcrumb title="Specialties" />
			<ChooseMedicalSpecialty />
			<FAQInner />
		</div>
	);
}

export default Specialties;
