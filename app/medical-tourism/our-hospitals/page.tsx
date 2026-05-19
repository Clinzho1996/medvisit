import Breadcrumb from "@/components/medical-tourism/Breadcrumb";
import ExploreHospitalsSection from "@/components/medical-tourism/Hospitals";
import Prefooter from "@/components/medical-tourism/Prefooter";

function Hospitals() {
	return (
		<div>
			<Breadcrumb
				subtitle="Our Hospitals"
				title="The best treatment
centers in the world"
			/>
			<ExploreHospitalsSection />
			<Prefooter />
		</div>
	);
}

export default Hospitals;
