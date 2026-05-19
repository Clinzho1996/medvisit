import Breadcrumb from "@/components/medical-tourism/Breadcrumb";
import MentionsProcess from "@/components/medical-tourism/MentionsProcess";
import Prefooter from "@/components/medical-tourism/Prefooter";
import MedicalProcessSteps from "@/components/medical-tourism/Steps";

function Process() {
	return (
		<div>
			<Breadcrumb
				subtitle="How we work"
				title="The process of getting
treatment abroad"
			/>
			<MedicalProcessSteps />
			<MentionsProcess />
			<Prefooter />
		</div>
	);
}

export default Process;
