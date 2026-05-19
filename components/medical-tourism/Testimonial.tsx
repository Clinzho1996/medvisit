"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface Testimonial {
	id: number;
	text: string;
	author: string;
}

const testimonialsData: Testimonial[] = [
	{
		id: 1,
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel adipiscing vitae dolor eu odio nibh eget. Velit eros ullamcorper in dui sit. Tristique arcu ipsum.",
		author: "Mr. Kolawole Johnson",
	},
	{
		id: 2,
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel adipiscing vitae dolor eu odio nibh eget. Velit eros ullamcorper in dui sit. Tristique arcu ipsum.",
		author: "Mrs. Abimbola Ogunlesi",
	},
	{
		id: 3,
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel adipiscing vitae dolor eu odio nibh eget. Velit eros ullamcorper in dui sit. Tristique arcu ipsum.",
		author: "Dr. Michael Adebayo",
	},
	{
		id: 4,
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel adipiscing vitae dolor eu odio nibh eget. Velit eros ullamcorper in dui sit. Tristique arcu ipsum.",
		author: "Chief Mrs. Funmilayo Ransome-Kuti",
	},
];

export default function TestimonialCarousel() {
	const [activeIndex, setActiveIndex] = useState(1);
	const [isAutoScrolling, setIsAutoScrolling] = useState(true);

	// Get the 3 items to display: previous, active, next (with wrap-around)
	const getVisibleItems = () => {
		const items = [];
		const total = testimonialsData.length;

		const prevIndex = (activeIndex - 1 + total) % total;
		const nextIndex = (activeIndex + 1) % total;

		items.push(testimonialsData[prevIndex]);
		items.push(testimonialsData[activeIndex]);
		items.push(testimonialsData[nextIndex]);

		return items;
	};

	const handlePrev = useCallback(() => {
		setIsAutoScrolling(false);
		setActiveIndex(
			(prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length,
		);
		// Resume auto-scroll after 5 seconds of inactivity
		setTimeout(() => setIsAutoScrolling(true), 5000);
	}, []);

	const handleNext = useCallback(() => {
		setIsAutoScrolling(false);
		setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
		// Resume auto-scroll after 5 seconds of inactivity
		setTimeout(() => setIsAutoScrolling(true), 5000);
	}, []);

	// Auto-scroll functionality
	useEffect(() => {
		if (!isAutoScrolling) return;

		const interval = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
		}, 4000); // Change slide every 4 seconds

		return () => clearInterval(interval);
	}, [isAutoScrolling]);

	// Pause auto-scroll when hovering over carousel
	const handleMouseEnter = () => setIsAutoScrolling(false);
	const handleMouseLeave = () => setIsAutoScrolling(true);

	const visibleItems = getVisibleItems();

	return (
		<section className="w-full bg-[#FAFBFC] py-24 px-4 font-sans overflow-hidden">
			<div className="max-w-6xl mx-auto relative">
				{/* --- HEADER BLOCK --- */}
				<div className="text-left space-y-2 mb-16 px-4 md:px-12">
					<span className="text-[#F7931E] text-xs font-bold uppercase tracking-widest block">
						Testimonial
					</span>
					<h2 className="text-3xl md:text-4xl font-extrabold text-[#05213A] tracking-tight">
						Medvisit Medical Services
					</h2>
					<p className="text-gray-400 text-xs md:text-sm font-light">
						We're known for providing high-quality health care and more!
					</p>
				</div>

				{/* --- CAROUSEL TRACK HUB --- */}
				<div
					className="relative flex items-center justify-center min-h-[380px] w-full px-4 md:px-12"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					{/* Left Navigation Arrow */}
					<motion.button
						whileHover={{ scale: 1.05, backgroundColor: "#f5f5f5" }}
						whileTap={{ scale: 0.95 }}
						onClick={handlePrev}
						className="absolute left-0 md:-left-4 z-30 w-10 h-10 rounded-full border border-[#E2E4E9] bg-white flex items-center justify-center text-[#F7931E] shadow-sm cursor-pointer hover:shadow-md transition-shadow"
						aria-label="Previous testimonial">
						<ArrowLeft size={18} strokeWidth={2.5} />
					</motion.button>

					{/* Carousel Window - 3 column grid */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center w-full max-w-5xl">
						{visibleItems.map((testimonial, idx) => {
							const isActive = idx === 1; // Center card is active

							return (
								<motion.div
									key={`${testimonial.id}-${activeIndex}`}
									layout
									initial={false}
									animate={{
										scale: isActive ? 1.08 : 0.92,
										y: isActive ? -8 : 0,
										opacity: 1,
									}}
									transition={{
										type: "spring",
										stiffness: 400,
										damping: 30,
										mass: 0.8,
										layout: { duration: 0.3 },
									}}
									className={`bg-white border rounded-2xl p-6 md:p-8 relative shadow-sm flex flex-col justify-between min-h-[280px] cursor-pointer
                                        ${
																					isActive
																						? "border-[#F7931E]/30 shadow-xl ring-1 ring-[#F7931E]/20 z-10"
																						: "border-[#E2E4E9]/80 shadow-sm hidden md:flex opacity-70 hover:opacity-100"
																				}
                                    `}
									onClick={() => {
										if (!isActive) {
											setIsAutoScrolling(false);
											// Find the actual index of clicked testimonial
											const actualIndex = testimonialsData.findIndex(
												(t) => t.id === testimonial.id,
											);
											setActiveIndex(actualIndex);
											setTimeout(() => setIsAutoScrolling(true), 5000);
										}
									}}>
									{/* Testimonial Core Content */}
									<div className="space-y-4 flex-1">
										<p className="text-gray-600 font-light text-sm leading-relaxed line-clamp-5">
											{testimonial.text}
										</p>
									</div>

									{/* Card Bottom Meta Segment */}
									<div className="flex items-end justify-between mt-6 pt-4 border-t border-gray-100">
										<div className="space-y-2">
											<h4 className="text-sm font-bold text-[#05213A]">
												{testimonial.author}
											</h4>
											{/* Five-Star Rating Row */}
											<div className="flex items-center space-x-0.5">
												{[...Array(5)].map((_, i) => (
													<Star
														key={i}
														size={14}
														fill="#F7931E"
														stroke="none"
														className="text-[#F7931E]"
													/>
												))}
											</div>
										</div>

										{/* Vector Giant Quotation Mark Icon */}
										<div className="text-gray-100 font-serif text-6xl leading-none font-bold select-none absolute bottom-4 right-6 pointer-events-none">
											”
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>

					{/* Right Navigation Arrow */}
					<motion.button
						whileHover={{ scale: 1.05, backgroundColor: "#e27222" }}
						whileTap={{ scale: 0.95 }}
						onClick={handleNext}
						className="absolute right-0 md:-right-4 z-30 w-10 h-10 rounded-full bg-[#F7931E] flex items-center justify-center text-white shadow-md cursor-pointer hover:shadow-lg transition-shadow"
						aria-label="Next testimonial">
						<ArrowRight size={18} strokeWidth={2.5} />
					</motion.button>
				</div>

				{/* --- CAROUSEL DOT INDICATORS --- */}
				<div className="flex items-center justify-center space-x-2.5 mt-12">
					{testimonialsData.map((_, idx) => (
						<button
							key={idx}
							onClick={() => {
								setIsAutoScrolling(false);
								setActiveIndex(idx);
								setTimeout(() => setIsAutoScrolling(true), 5000);
							}}
							className={`h-2 transition-all duration-300 rounded-full cursor-pointer
                                ${
																	idx === activeIndex
																		? "w-10 bg-[#F7931E]"
																		: "w-2 bg-gray-300 hover:bg-gray-400"
																}
                            `}
							aria-label={`Go to testimonial ${idx + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
