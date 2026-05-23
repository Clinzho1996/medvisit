"use client";

import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Category {
	id: string;
	name: string;
	created_at: string;
	updated_at: string;
}

interface BlogPost {
	id: string;
	title: string;
	slug: string;
	category_id: string;
	meta: {
		name: string;
		desc: string;
	};
	content: string;
	status: string;
	image: string;
	image_alt: string | null;
	created_at: string;
	updated_at: string;
	category: Category;
}

interface ApiResponse {
	status: string;
	message: string;
	data: BlogPost[];
	pagination: {
		prev_page_url: string | null;
		next_page_url: string | null;
		current_page: number;
		total: number;
	};
}

export default function MedicalVisitFooter() {
	const currentYear = new Date().getFullYear();
	const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchLatestPosts = async () => {
			try {
				const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`);
				const data: ApiResponse = await response.json();

				if (data.status === "success") {
					// Get the latest 3 posts (sort by created_at descending)
					const sorted = [...data.data].sort(
						(a, b) =>
							new Date(b.created_at).getTime() -
							new Date(a.created_at).getTime(),
					);
					setLatestPosts(sorted.slice(0, 3));
				}
			} catch (error) {
				console.error("Error fetching latest posts:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchLatestPosts();
	}, []);

	// Truncate text to a certain length
	const truncateText = (text: string, maxLength: number) => {
		if (text.length <= maxLength) return text;
		return text.substring(0, maxLength) + "...";
	};

	return (
		<footer className="w-full bg-[#f8fafc] text-[#334155] font-sans px-[6%]">
			{/* --- MAIN FOOTER LINK GRID --- */}
			<div className="grid bg-[#FAFCFE] px-[2%] py-[6%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-30 text-sm text-gray-300 leading-relaxed">
				{/* About Us */}
				<div className="space-y-6">
					<h3 className="text-[#002B3B] font-bold tracking-wider uppercase">
						About Us
					</h3>
					<p className="text-[#000000B2] text-lg">
						Through years of experience, we have evolved a system that
						guarantees patients get the very best of treatment. From India to
						UAE to Israel, every hospital in our network stands out as a leader
						in its field.
					</p>
					<div className="flex items-center gap-4 pt-2">
						<span className="text-[#002B3B] font-bold">Follow us:</span>
						<div className="flex items-center gap-3">
							<Link href="https://www.facebook.com/Medvisitcare/">
								<div className="bg-[#002B3B] p-1 rounded text-white hover:bg-[#F4911E] cursor-pointer transition-colors">
									<IconBrandFacebook color="#fff" size={12} />
								</div>
							</Link>

							<Link href="https://twitter.com/Medvisitng">
								<div className="bg-[#002B3B] p-1 rounded text-white hover:bg-[#F4911E] cursor-pointer transition-colors">
									<IconBrandX color="#fff" size={12} />
								</div>
							</Link>
							<Link href="https://www.instagram.com/medvisit.ng?igsh=ejlsNDMyejZiMHNl">
								<div className="bg-[#002B3B] p-1 rounded text-white hover:bg-[#F4911E] cursor-pointer transition-colors">
									<IconBrandInstagram color="#fff" size={12} />
								</div>
							</Link>
						</div>
					</div>
				</div>

				{/* Latest Blog */}
				<div className="space-y-6">
					<h3 className="text-[#002B3B] font-bold tracking-wider uppercase">
						Latest Blog
					</h3>
					{isLoading ? (
						<div className="space-y-4">
							<div className="h-5 bg-gray-200 rounded animate-pulse"></div>
							<div className="h-5 bg-gray-200 rounded animate-pulse w-3/4"></div>
							<div className="h-5 bg-gray-200 rounded animate-pulse w-5/6"></div>
						</div>
					) : latestPosts.length > 0 ? (
						<ul className="space-y-4 text-lg text-[#000000B2]">
							{latestPosts.map((post) => (
								<li key={post.id}>
									<Link
										href={`/medical-tourism/blog/${post.slug}`}
										className="hover:text-[#F4911E] cursor-pointer transition-colors block">
										{truncateText(post.title, 80)}
									</Link>
								</li>
							))}
						</ul>
					) : (
						<p className="text-[#000000B2] text-lg">No blog posts available</p>
					)}
				</div>

				{/* Get In Touch */}
				<div className="space-y-6">
					<h3 className="text-[#002B3B] font-extrabold tracking-wider uppercase">
						Get In Touch
					</h3>
					<div className="space-y-4 text-lg">
						<p>
							<span className="block font-semibold text-[#000000B2]">
								Tel: +23481 825 22015
							</span>
							<span className="block font-semibold text-[#000000B2]">
								Tel: +91983 668 7899
							</span>
						</p>
						<p className="text-[#000000B2]">
							<strong className="text-[#002B3B]">Nigeria Address:</strong> 1
							Fawole Lane, Off Ikorodu Road, Obanikoro, Lagos.
						</p>
						<p className="text-[#000000B2]">
							<strong className="text-[#002B3B]">India Address:</strong> S.P.
							Mukherjee Road, DumDum Cantonment Kolkata - 700028
						</p>
						<p className="text-[#002B3B]">
							<strong className="text-[#002B3B] block">Email:</strong>
							<a
								href="mailto:care@medvisit.com.ng"
								className="hover:text-[#F4911E] transition-colors">
								care@medvisit.com.ng
							</a>
						</p>
					</div>
				</div>
			</div>

			{/* --- COPYRIGHT FOOTNOTE --- */}
			<div className="w-full border-t border-gray-200 py-4 text-center text-[#000000B2] text-lg font-light bg-white">
				© {currentYear} Hospitals in India, Dubai, Israel, UK & Germany for
				Nigerians.
			</div>
		</footer>
	);
}
