"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface BlogPost {
	id: number;
	image?: string;
	author: string;
	date: string;
	title: string;
	excerpt?: string;
	isCustomCard?: boolean;
	customBanners?: string[];
}

const blogData: BlogPost[] = [
	{
		id: 1,
		image: "/blog-1.jpg", // Replace with your public path or external image url
		author: "ADMIN",
		date: "NOVEMBER 9, 2021",
		title:
			"COVID-19 Guidelines For International Patients Arriving In India For Medical Treatment",
		excerpt:
			"Patients and their family members travelling through international flights should follow the below-mentioned covid-19 guidelines:",
	},
	{
		id: 2,
		image: "/blog-2.jpg",
		author: "ADMIN",
		date: "APRIL 17, 2020",
		title:
			"How Much Does A Standard Medical Checkup Cost In Checkup Cost In India, Dubai, And Israel",
		excerpt:
			"Medical checkups are a series of thorough physical examinations that include a variety of tests depending on the age, sex and health of the person...",
	},
	{
		id: 3,
		image: "/blog-3.jpg",
		author: "ADMIN",
		date: "OCTOBER 24, 2020",
		title: "Travelling To India For Eye Surgery (2020 Update)",
		excerpt:
			"Eye surgery, orogolomicician surgery or ocular surgery is a surgery performed on the eye by an ophthalmologist. eyes are among the most sensitive organs in the body...",
	},
	{
		id: 4,
		image: "/blog-4.jpg",
		author: "ADMIN",
		date: "OCTOBER 28, 2019",
		title: "Hip Replacement Surgery Abroad In 6 Easy Steps",
		excerpt:
			"The term hip replacement or surgery will definitely strike fear in the mind of even the bravest amongst us, however, the process of hip replacement is not as...",
	},
	{
		id: 5,
		image: "/blog-5.jpg",
		author: "ADMIN",
		date: "OCTOBER 28, 2019",
		title: "How To Get Medical Treatment In Dubai",
		excerpt:
			"Dubai is one of the fastest-growing destinations for nigerians seeking medical treatment abroad, the availability of internationally accredited specialist hospitals...",
	},
	{
		id: 6,
		image: "/blog-6.jpg",
		author: "ADMIN",
		date: "OCTOBER 28, 2019",
		title: "Factors To Consider When Seeking Medical Treatment Abroad",
		excerpt:
			"Medical tourism is on the rise in nigeria, with estimates suggesting the industry is growing by 15-25% each year. nigerians travel abroad for medical care for...",
	},
	{
		id: 7,
		image: "/blog-7.jpg",
		author: "ADMIN",
		date: "NOVEMBER 18, 2016",
		title: "How To Apply For Medical Visa To India",
		excerpt:
			"It is no longer that news that more than fifty percent (50%) of nigerians applying for visas to india are applying for medical purposes...",
	},
	{
		id: 8,
		image: "/blog-8.jpg",
		author: "ADMIN",
		date: "DECEMBER 16, 2016",
		title: "How To Choose Best Hospital In India For Medical Treatment",
		excerpt:
			"India is the top destination for patients from around the world seeking quality and affordable treatment for a wide variety of ailments...",
	},
	{
		id: 9,
		isCustomCard: true,
		author: "ADMIN",
		date: "DECEMBER 14, 2016",
		title: "15 Amazing Facts About The Human Kidney",
		excerpt:
			"the human kidney is one of the most important parts of the human body, the kidney is bean shaped and is located at the back of the abdomen...",
		customBanners: ["15 Amazing Facts", "About the", "HUMAN KIDNEY"],
	},
];

export default function BlogGridSection() {
	return (
		<section className="w-full bg-[#FAFBFC] py-20 px-6 font-sans">
			<div className="max-w-6xl mx-auto w-full space-y-12">
				{/* --- GRID MATRIX HANDLER --- */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{blogData.map((post) => (
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
							<div>
								{!post.isCustomCard ? (
									<div className="w-full h-48 bg-gray-100 overflow-hidden relative">
										{/* Placeholder fallback container color matching post theme */}
										<img
											src={post.image}
											alt={post.title}
											className="w-full h-full object-cover object-center"
											onError={(e) => {
												// Fallback handling to visual block color matching style guide if images missing
												(e.target as HTMLElement).style.display = "none";
											}}
										/>
									</div>
								) : (
									/* Custom Asymmetric Facts Block matching block 9 */
									<div className="w-full h-48 bg-white px-6 pt-6 flex flex-col justify-center space-y-2 select-none">
										{post.customBanners?.map((text, i) => (
											<div
												key={i}
												className={`w-full py-2.5 text-center text-sm font-bold rounded-md tracking-wide shadow-sm
                          ${i === 2 ? "bg-[#F7931E] text-white" : "bg-[#FBB03B]/80 text-white"}
                        `}>
												{text}
											</div>
										))}
									</div>
								)}

								{/* Main Content Body */}
								<div className="p-6 space-y-3">
									<div className="flex items-center space-x-1.5 text-[10px] sm:text-sm tracking-wider font-normal">
										<span className="text-[#00000080]">BY</span>
										<span className="text-[#F7931E]">{post.author}</span>
										<span className="text-[#00000080]">•</span>
										<span className="text-[#00000080]">{post.date}</span>
									</div>

									<h3 className="text-[#05213A] font-extrabold text-sm sm:text-lg leading-snug tracking-tighter hover:text-[#F7931E] cursor-pointer transition-colors line-clamp-3">
										{post.title}
									</h3>

									<p className="text-[#00000080] font-normal tracking-tighter text-xs sm:text-base leading-relaxed line-clamp-3 pt-1">
										{post.excerpt}
									</p>
								</div>
							</div>

							{/* Read More Trigger Bar */}
							<div className="p-6 pt-0 mt-auto">
								<motion.a
									href="#"
									className="inline-flex items-center space-x-1 text-[#F7931E] text-xs font-bold group">
									<span>Read More</span>
									<motion.div
										variants={{
											hover: { x: 4 },
										}}
										whileHover="hover"
										className="transition-transform duration-200">
										<ArrowRight
											size={13}
											strokeWidth={2.5}
											className="ml-0.5"
										/>
									</motion.div>
								</motion.a>
							</div>
						</motion.div>
					))}
				</div>

				{/* --- GLOBAL PAGINATION TRIGGER --- */}
				<motion.div className="pt-2 sm:pt-8 text-center">
					<motion.button
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.98 }}
						className="border border-[#F7931E] hover:bg-[#F7931E] hover:text-white text-[#F7931E]  text-sm font-bold px-12 py-2.5 cursor-pointer rounded-md transition-colors duration-200">
						Learn More
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
}
