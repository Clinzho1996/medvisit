"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

interface Hospital {
	id: number;
	name: string;
	location: string;
	imagePath: string;
}

const hospitalsData: Hospital[] = [
	{
		id: 1,
		name: "University College Hospitals London",
		location: "London, UK",
		imagePath: "/ucl.png",
	},
	{
		id: 2,
		name: "Institut Gustave Roussy",
		location: "Paris, France",
		imagePath: "/gus.png",
	},
	{
		id: 3,
		name: "Advocate Sherman Hospital",
		location: "Paris, France",
		imagePath: "/adv.png",
	},
	{
		id: 4,
		name: "Oxford University Hospitals",
		location: "Oxford, UK",
		imagePath: "/ox.png",
	},
];

export default function TopHospitals() {
	const trackRef = useRef<HTMLDivElement>(null);
	const [isHovered, setIsHovered] = useState(false);
	const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

	const scrollTrack = useCallback((direction: "left" | "right") => {
		if (trackRef.current) {
			const scrollValue = 380;
			trackRef.current.scrollBy({
				left: direction === "left" ? -scrollValue : scrollValue,
				behavior: "smooth",
			});
		}
	}, []);

	// Auto-scroll functionality
	const startAutoScroll = useCallback(() => {
		if (autoScrollIntervalRef.current) {
			clearInterval(autoScrollIntervalRef.current);
		}

		autoScrollIntervalRef.current = setInterval(() => {
			if (trackRef.current && !isHovered) {
				const container = trackRef.current;
				const maxScrollLeft = container.scrollWidth - container.clientWidth;
				const currentScroll = container.scrollLeft;

				// If we're at the end, scroll back to start
				if (currentScroll >= maxScrollLeft - 10) {
					container.scrollTo({
						left: 0,
						behavior: "smooth",
					});
				} else {
					container.scrollBy({
						left: 300,
						behavior: "smooth",
					});
				}
			}
		}, 4000); // Scroll every 4 seconds
	}, [isHovered]);

	const stopAutoScroll = useCallback(() => {
		if (autoScrollIntervalRef.current) {
			clearInterval(autoScrollIntervalRef.current);
			autoScrollIntervalRef.current = null;
		}
	}, []);

	// Handle hover state changes
	useEffect(() => {
		if (isHovered) {
			stopAutoScroll();
		} else {
			startAutoScroll();
		}

		return () => {
			stopAutoScroll();
		};
	}, [isHovered, startAutoScroll, stopAutoScroll]);

	// Initialize auto-scroll on mount
	useEffect(() => {
		startAutoScroll();

		return () => {
			stopAutoScroll();
		};
	}, [startAutoScroll, stopAutoScroll]);

	return (
		<section className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-24">
			{/* --- Section Title Heading --- */}
			<div className="mx-auto max-w-3xl text-center">
				<h2 className="text-2xl font-black tracking-tighter text-[#0A2540] sm:text-3xl md:text-4xl md:leading-[1.25]">
					Our Experts Work At Top Hospitals In{" "}
					<br className="hidden sm:inline" />
					UK, Europe And America
				</h2>
			</div>

			{/* --- Carousel Grid Track Context Wrapper --- */}
			<div
				className="relative mt-12 flex items-center"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}>
				{/* Left Arrow Button Control */}
				<button
					onClick={() => scrollTrack("left")}
					className="absolute -left-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#F39223] shadow-md transition-all hover:scale-105 hover:bg-[#F39223] hover:text-white active:scale-95 lg:-left-6"
					aria-label="Scroll Left">
					<ChevronLeft size={24} strokeWidth={2.5} />
				</button>

				{/* Masked Horizontal Content Frame */}
				<div
					ref={trackRef}
					className="flex w-full gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
					style={{ scrollbarWidth: "none" }}>
					{hospitalsData.map((hospital) => (
						<div
							key={hospital.id}
							className="w-full shrink-0 snap-start overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
							{/* Card Image Wrapper Asset */}
							<div className="relative aspect-[16/10] w-full bg-gray-50">
								<Image
									src={hospital.imagePath}
									alt={hospital.name}
									fill
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
									className="object-cover"
								/>
							</div>

							{/* Card Information Subtitle Area */}
							<div className="p-4">
								<div className="flex flex-row gap-2">
									{/* Vertical Blue/Orange Multi-Accent Indicator Block - FIXED */}
									<div className="flex flex-row justify-start items-center gap-0.5">
										<div className="h-full w-1 bg-[#0A2540]" />
										<div className="h-full w-1 bg-[#F7931E]" />
									</div>

									<div>
										<h3 className="text-sm font-bold leading-4 tracking-tight text-[#0A2540] sm:text-base">
											{hospital.name}
										</h3>
										<p className="mt-1 text-sm font-bold tracking-tight text-[#0A2540] sm:text-base">
											{hospital.location}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Right Arrow Button Control */}
				<button
					onClick={() => scrollTrack("right")}
					className="absolute -right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#F39223] shadow-md transition-all hover:scale-105 hover:bg-[#F39223] hover:text-white active:scale-95 lg:-right-6"
					aria-label="Scroll Right">
					<ChevronRight size={24} strokeWidth={2.5} />
				</button>
			</div>

			{/* --- Bottom Dual Call to Action Button Array --- */}
			<div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
				<Link
					href="#get-started"
					className="w-full text-center sm:w-auto rounded-md bg-[#F39223] px-8 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-[#d97d1a] hover:scale-105 active:scale-[0.98] shadow-sm">
					Get Started
				</Link>

				<Link
					href="#more-hospitals"
					className="w-full text-center sm:w-auto rounded-md border border-[#F39223] bg-white px-8 py-3 text-sm font-bold text-[#F39223] transition-all duration-200 hover:bg-orange-50 hover:scale-105 active:scale-[0.98]">
					See More Hospitals
				</Link>
			</div>
		</section>
	);
}
