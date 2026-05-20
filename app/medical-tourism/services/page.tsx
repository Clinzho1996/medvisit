import Breadcrumb from "@/components/medical-tourism/Breadcrumb";
import Mentions from "@/components/medical-tourism/Mentions";
import Prefooter from "@/components/medical-tourism/Prefooter";
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
			<div className="mt-10 sm:mt-20">
				<Mentions />
			</div>
			<Prefooter />
		</div>
	);
}

export default Services;
