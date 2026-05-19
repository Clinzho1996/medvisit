import Breadcrumb from "@/components/medical-tourism/Breadcrumb";
import Mentions from "@/components/medical-tourism/Mentions";
import MedicalProceduresSection from "@/components/medical-tourism/Procedures";

function Services() {
	return (
		<div>
			<Breadcrumb
				subtitle="Services"
				title="The medical procedures
our hospitals provide"
			/>
			<MedicalProceduresSection />
			<Mentions />
		</div>
	);
}

export default Services;
