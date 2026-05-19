import BlogGridSection from "@/components/medical-tourism/Blog";
import Breadcrumb from "@/components/medical-tourism/Breadcrumb";

function Blog() {
	return (
		<div>
			<Breadcrumb
				subtitle="Resources"
				title="The best treatment
centers in the world"
			/>

			<BlogGridSection />
		</div>
	);
}

export default Blog;
