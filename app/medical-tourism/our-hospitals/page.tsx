import Breadcrumb from "@/components/medical-tourism/Breadcrumb";
import ExploreHospitalsSection from "@/components/medical-tourism/Hospitals";

function Hospitals() {
	return (
		<div>
			<Breadcrumb
				subtitle="Our Hospitals"
				title="The best treatment
centers in the world"
			/>
			<ExploreHospitalsSection />
		</div>
	);
}

export default Hospitals;
