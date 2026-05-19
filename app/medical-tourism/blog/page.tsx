import BlogGridSection from "@/components/medical-tourism/Blog";
import Breadcrumb from "@/components/medical-tourism/Breadcrumb";
import Prefooter from "@/components/medical-tourism/Prefooter";

function Blog() {
	return (
		<div>
			<Breadcrumb
				subtitle="Resources"
				title="The best treatment
centers in the world"
			/>

			<BlogGridSection />
			<Prefooter />
		</div>
	);
}

export default Blog;
