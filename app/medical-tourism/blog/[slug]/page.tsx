"use client";
import Prefooter from "@/components/medical-tourism/Prefooter";
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandLinkedinFilled,
	IconBrandX,
} from "@tabler/icons-react";
import axios from "axios";
import { Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

// BlogPost type definition
interface Category {
	id: string;
	name: string;
	created_at: string;
	updated_at: string;
}

interface Meta {
	name: string;
	desc: string;
}

interface BlogPost {
	id: string;
	title: string;
	slug: string;
	category_id: string;
	meta: Meta;
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

export default function ArticlePage({
	params,
}: {
	params: Promise<{ slug: string }> | { slug: string };
}) {
	const [post, setPost] = useState<BlogPost | null>(null);
	const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
	const [loading, setLoading] = useState(true);
	const [copySuccess, setCopySuccess] = useState(false);
	const [slug, setSlug] = useState<string>("");

	// Unwrap params promise
	useEffect(() => {
		const unwrapParams = async () => {
			const unwrappedParams = await params;
			setSlug(unwrappedParams.slug);
		};
		unwrapParams();
	}, [params]);

	useEffect(() => {
		if (!slug) return;

		const fetchData = async () => {
			try {
				// Fetch all posts
				const response = await axios.get<ApiResponse>(
					`${process.env.NEXT_PUBLIC_API_URL}/post`,
				);

				if (response.data.status === "success") {
					// Find the specific post by slug
					const foundPost = response.data.data.find((p) => p.slug === slug);

					if (foundPost) {
						setPost(foundPost);
					} else {
						toast.error("Post not found");
					}

					// Get recent posts (filter out current post and limit to 3)
					const filtered = response.data.data
						.filter((p) => p.slug !== slug)
						.slice(0, 3);
					setRecentPosts(filtered);
				} else {
					toast.error("Failed to load posts");
				}
			} catch (err) {
				console.error("Error fetching data:", err);
				toast.error("Failed to load article");
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [slug]);

	// Social Share Functions
	const shareOnFacebook = () => {
		const url = encodeURIComponent(window.location.href);
		window.open(
			`https://www.facebook.com/sharer/sharer.php?u=${url}`,
			"_blank",
			"width=600,height=400",
		);
	};

	const shareOnTwitter = () => {
		const url = encodeURIComponent(window.location.href);
		const title = encodeURIComponent(post?.title || "");
		window.open(
			`https://twitter.com/intent/tweet?url=${url}&text=${title}`,
			"_blank",
			"width=600,height=400",
		);
	};

	const shareOnLinkedIn = () => {
		const url = encodeURIComponent(window.location.href);
		const title = encodeURIComponent(post?.title || "");
		window.open(
			`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`,
			"_blank",
			"width=600,height=400",
		);
	};

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(window.location.href);
			setCopySuccess(true);
			toast.success("Link copied to clipboard!");
			setTimeout(() => setCopySuccess(false), 2000);
		} catch (err) {
			toast.error("Failed to copy link");
		}
	};

	const formatDate = (dateString: string) => {
		if (!dateString) return "Recent";
		return new Date(dateString).toLocaleDateString("en-US", {
			month: "long",
			day: "numeric",
			year: "numeric",
		});
	};

	const calculateReadTime = (content: string) => {
		if (!content) return "5 Min Read";
		const wordsPerMinute = 200;
		const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
		const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
		return `${minutes} Min Read`;
	};

	const extractCategory = (post: BlogPost) => {
		return post.category?.name || "Article";
	};

	if (loading)
		return (
			<div className="min-h-screen bg-white">
				<div className="flex items-center justify-center h-screen">
					<div className="w-16 h-16 border-4 border-gray-300 border-t-[#F7931E] rounded-full animate-spin"></div>
				</div>
			</div>
		);

	if (!post)
		return (
			<div className="min-h-screen bg-white flex items-center justify-center text-gray-600">
				<div className="text-center">
					<h2 className="text-2xl font-bold mb-4">Post not found</h2>
					<Link href="/blog" className="text-[#F7931E] hover:underline">
						Return to Blog
					</Link>
				</div>
			</div>
		);

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative bread-bg from-[#05213A] to-[#0a3558] w-full pt-36 pb-16 px-6 overflow-hidden">
				<div className="max-w-7xl md:max-w-6xl lg:max-w-6xl sm:max-w-6xl mx-auto relative z-10 text-center">
					<nav className="text-[10px] uppercase tracking-widest text-gray-300 mb-6 flex gap-2 justify-center">
						<Link href="/" className="hover:text-white transition-colors">
							Home
						</Link>
						<span>/</span>
						<Link href="/blog" className="hover:text-white transition-colors">
							Blog
						</Link>
						<span>/</span>
						<span className="text-white truncate max-w-[200px]">
							{post.title}
						</span>
					</nav>

					<h1 className="text-4xl md:text-5xl capitalize lg:text-6xl font-bold text-white leading-tight mb-8">
						{post.title}
					</h1>

					<div className="flex flex-wrap items-center gap-4 text-[11px] uppercase font-bold tracking-wider text-gray-300 justify-center">
						<span className="bg-white/10 px-3 py-1 rounded-full">
							{extractCategory(post)}
						</span>
						<span>• {calculateReadTime(post.content)}</span>
						<span>• {formatDate(post.created_at)}</span>
					</div>
				</div>
			</section>

			{/* Main Content Layout */}
			<section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12">
				{/* Left: Sticky Social Sidebar */}
				<aside className="hidden lg:block w-12 sticky top-24 h-fit space-y-6">
					<p className="text-[10px] font-bold uppercase text-gray-400 rotate-0 mb-4">
						Share
					</p>
					<div className="flex flex-col gap-4">
						<div className="bg-[#F9F9FF] rounded-full p-2 w-fit hover:bg-gray-100 transition-colors cursor-pointer">
							<IconBrandLinkedinFilled
								size={18}
								className="text-gray-600 hover:text-[#0077B5] transition-colors"
								onClick={shareOnLinkedIn}
							/>
						</div>
						<div className="bg-[#F9F9FF] rounded-full p-2 w-fit hover:bg-gray-100 transition-colors cursor-pointer">
							<IconBrandFacebook
								size={18}
								className="text-gray-600 hover:text-[#1877F2] transition-colors"
								onClick={shareOnFacebook}
							/>
						</div>
						<div className="bg-[#F9F9FF] rounded-full p-2 w-fit hover:bg-gray-100 transition-colors cursor-pointer">
							<IconBrandX
								size={18}
								className="text-gray-600 hover:text-[#000000] transition-colors"
								onClick={shareOnTwitter}
							/>
						</div>
						<div className="bg-[#F9F9FF] rounded-full p-2 w-fit hover:bg-gray-100 transition-colors cursor-pointer">
							<LinkIcon
								size={18}
								className={`transition-colors ${copySuccess ? "text-green-500" : "text-gray-600 hover:text-[#F7931E]"}`}
								onClick={copyToClipboard}
							/>
						</div>
					</div>
				</aside>

				{/* Center: Article Body */}
				<article className="flex-1 max-w-3xl">
					{post.image && (
						<div className="mb-8">
							<div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg">
								<Image
									src={post.image}
									alt={post.image_alt || post.title}
									fill
									className="object-cover"
									priority
								/>
							</div>
						</div>
					)}

					<div
						className="prose prose-lg prose-slate max-w-none 
            prose-headings:font-bold prose-headings:text-[#05213A] 
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-[#F7931E] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-[#05213A]
            prose-ul:text-gray-700 prose-li:text-gray-700
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-img:rounded-xl prose-img:shadow-md"
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>

					{/* Author Footer */}
					<div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
						<div className="flex items-center gap-4">
							<div className="w-12 h-12 capitalize rounded-full bg-gradient-to-r from-[#F7931E] to-[#FBB03B] flex items-center justify-center text-white font-bold text-lg">
								{post.category?.name?.charAt(0) || "M"}
							</div>
							<div>
								<p className="text-xs text-gray-500">
									Published on {formatDate(post.created_at)}
								</p>
								<p className="text-sm font-bold text-[#05213A]">
									MedVisit Team
								</p>
								<p className="text-xs font-normal text-gray-500">
									Medical Tourism Experts
								</p>
							</div>
						</div>
						<div className="flex gap-3">
							<Link
								href="https://www.instagram.com/medvisit.ng?igsh=ejlsNDMyejZiMHNl"
								target="_blank"
								rel="noopener noreferrer"
								className="border border-gray-200 p-2 rounded-full hover:border-[#0077B5] transition-colors">
								<IconBrandInstagram
									size={16}
									className="text-gray-600 hover:text-[#0077B5]"
								/>
							</Link>
						</div>
					</div>
				</article>

				{/* Right: Sidebar Widgets */}
				<aside className="w-full lg:w-80 space-y-10">
					<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 sticky top-24">
						<div className="flex justify-between items-center mb-6">
							<h4 className="font-bold text-[#05213A] text-lg">Recent Posts</h4>
						</div>

						<div className="space-y-4">
							{recentPosts.length > 0 ? (
								recentPosts.map((recentPost) => (
									<Link
										key={recentPost.id}
										href={`/medical-tourism/blog/${recentPost.slug}`}
										className="group cursor-pointer block bg-white border border-gray-100 shadow-sm rounded-xl p-4 transition-all hover:shadow-md">
										{recentPost.image && (
											<div className="aspect-video rounded-lg mb-3 overflow-hidden relative bg-gray-100">
												<Image
													src={recentPost.image}
													alt={recentPost.image_alt || recentPost.title}
													fill
													className="object-cover group-hover:scale-105 transition-transform duration-300"
												/>
											</div>
										)}
										<div className="flex justify-between text-[9px] uppercase font-bold text-gray-400 mb-2">
											<span className="text-[#F7931E]">
												{extractCategory(recentPost)}
											</span>
											<span>{formatDate(recentPost.created_at)}</span>
										</div>
										<p className="text-xs font-bold text-[#05213A] leading-snug line-clamp-2 group-hover:text-[#F7931E] transition-colors">
											{recentPost.title}
										</p>
									</Link>
								))
							) : (
								<p className="text-sm text-gray-500 text-center py-8">
									No recent posts
								</p>
							)}
						</div>
					</div>
				</aside>
			</section>
			<Prefooter />
		</div>
	);
}
