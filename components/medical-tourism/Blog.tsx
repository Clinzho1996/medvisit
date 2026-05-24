"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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

export default function BlogGridSection() {
	const [posts, setPosts] = useState<BlogPost[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetchPosts();
	}, []);

	const fetchPosts = async () => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`);
			const data: ApiResponse = await response.json();

			if (data.status === "success") {
				setPosts(data.data);
			} else {
				setError(data.message || "Failed to fetch posts");
			}
		} catch (error) {
			console.error("Error fetching posts:", error);
			setError("Network error. Please check your connection.");
		} finally {
			setIsLoading(false);
		}
	};

	// Format date to a more readable format
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date
			.toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			})
			.toUpperCase();
	};

	// Truncate text to a certain length
	const truncateText = (text: string, maxLength: number) => {
		if (text.length <= maxLength) return text;
		return text.substring(0, maxLength) + "...";
	};

	if (isLoading) {
		return (
			<section className="w-full bg-[#FAFBFC] py-20 px-6 font-sans">
				<div className="max-w-6xl mx-auto w-full">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[1, 2, 3].map((i) => (
							<div
								key={i}
								className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
								<div className="w-full h-48 bg-gray-200"></div>
								<div className="p-6 space-y-3">
									<div className="h-4 bg-gray-200 rounded w-3/4"></div>
									<div className="h-6 bg-gray-200 rounded w-full"></div>
									<div className="h-4 bg-gray-200 rounded w-full"></div>
									<div className="h-4 bg-gray-200 rounded w-5/6"></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		);
	}

	if (error) {
		return (
			<section className="w-full bg-[#FAFBFC] py-20 px-6 font-sans">
				<div className="max-w-6xl mx-auto w-full text-center">
					<div className="bg-red-50 text-red-800 p-4 rounded-lg mb-6">
						{error}
					</div>
					<button
						onClick={fetchPosts}
						className="bg-[#F7931E] text-white px-6 py-2 rounded-lg hover:bg-[#e0831a] transition-colors">
						Try Again
					</button>
				</div>
			</section>
		);
	}

	return (
		<section className="w-full bg-[#FAFBFC] py-20 px-6 font-sans">
			<div className="max-w-6xl mx-auto w-full space-y-12">
				{/* --- GRID MATRIX HANDLER --- */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{posts.map((post) => (
						<motion.div
							key={post.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5 }}
							whileHover={{
								y: -6,
								boxShadow: "0 12px 24px -10px rgba(0,0,0,0.08)",
							}}
							className="bg-white rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg shadow-[#00000026] transition-all duration-300">
							{/* Card Header Media area */}
							<Link href={`/medical-tourism/blog/${post.slug}`}>
								<div>
									<div className="w-full h-48 bg-gray-100 overflow-hidden relative cursor-pointer">
										{post.image &&
										post.image !== "http://127.0.0.1:8000/storage" ? (
											<img
												src={post.image}
												alt={post.image_alt || post.title}
												className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
												onError={(e) => {
													(e.target as HTMLImageElement).style.display = "none";
													(
														e.target as HTMLImageElement
													).parentElement!.style.backgroundColor = "#F7931E";
												}}
											/>
										) : (
											<div className="w-full h-full bg-gradient-to-br from-[#F7931E] to-[#FBB03B] flex items-center justify-center">
												<span className="text-white text-lg font-bold text-center px-4">
													{post.category.name.toUpperCase()}
												</span>
											</div>
										)}
									</div>

									{/* Main Content Body */}
									<div className="p-6 space-y-3">
										<div className="flex items-center space-x-1.5 text-[10px] sm:text-sm tracking-wider font-normal">
											<span className="text-[#F7931E]">
												{post?.category?.name.toUpperCase()}
											</span>
											<span className="text-[#00000080]">•</span>
											<span className="text-[#00000080]">
												{formatDate(post?.created_at)}
											</span>
										</div>

										<h3 className="text-[#05213A] font-extrabold text-sm sm:text-lg leading-snug tracking-tighter hover:text-[#F7931E] cursor-pointer transition-colors line-clamp-3">
											{post?.title}
										</h3>

										<p
											className="text-[#00000080] font-normal tracking-tighter text-xs sm:text-base leading-relaxed line-clamp-3 pt-1"
											dangerouslySetInnerHTML={{
												__html: truncateText(
													post?.meta?.desc || post?.content || "",
													120,
												),
											}}
										/>
									</div>
								</div>
							</Link>

							{/* Read More Trigger Bar */}
							<div className="p-6 pt-0 mt-auto">
								<Link href={`/medical-tourism/blog/${post.slug}`}>
									<motion.div
										className="inline-flex items-center space-x-1 text-[#F7931E] text-xs font-bold group cursor-pointer"
										whileHover="hover"
										variants={{
											hover: { x: 4 },
										}}>
										<span>Read More</span>
										<ArrowRight
											size={13}
											strokeWidth={2.5}
											className="ml-0.5 transition-transform duration-200 group-hover:translate-x-1"
										/>
									</motion.div>
								</Link>
							</div>
						</motion.div>
					))}
				</div>

				{/* --- GLOBAL PAGINATION TRIGGER --- */}
				{posts.length === 0 && !isLoading && (
					<div className="text-center text-gray-500 py-12">
						No blog posts found.
					</div>
				)}
			</div>
		</section>
	);
}
