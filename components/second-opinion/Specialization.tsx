"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

interface Specialty {
	id: string;
	name: string;
	iconPath: string;
}

const specialtiesData: Specialty[] = [
	{ id: "1", name: "Audiology", iconPath: "/audiology.png" },
	{ id: "2", name: "Bariatric Surgery", iconPath: "/bariatric.png" },
	{ id: "3", name: "Cardiology", iconPath: "/cardiology.png" },
	{ id: "4", name: "Dermatology", iconPath: "/dermatology.png" },
	{ id: "5", name: "Endocrinology", iconPath: "/endocrinology.png" },
	{ id: "6", name: "Fertility", iconPath: "/fertility.png" },
	{ id: "8", name: "ENT", iconPath: "/ent.png" },
	{ id: "9", name: "Nephrology", iconPath: "/neph.png" },
];

export default function MedicalSpecializations() {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [isHovered, setIsHovered] = useState(false);

	// Manual Arrow Navigation Controls
	const handleScroll = (direction: "left" | "right") => {
		if (scrollContainerRef.current) {
			const scrollAmount = 240;
			scrollContainerRef.current.scrollBy({
				left: direction === "left" ? -scrollAmount : scrollAmount,
				behavior: "smooth",
			});
		}
	};

	return (
		<section className="w-full bg-[#031429] px-[9%] py-16 text-white md:px-[9%] lg:py-24">
			<div className="mx-auto w-full">
				{/* --- Section Title Header --- */}
				<div className="mb-12">
					<h2 className="text-3xl font-black tracking-tighter sm:text-5xl">
						Medical Specializations
					</h2>
					<p className="mt-3 text-sm sm:text-lg tracking-tighter text-gray-400">
						Our experts cover a wide range of medical specialities:
					</p>
				</div>

				{/* --- Carousel Track Wrapper Zone --- */}
				<div className="relative flex items-center group">
					{/* Left Navigation Arrow Button */}
					<button
						onClick={() => handleScroll("left")}
						className="absolute left-0 z-30 hidden h-12 w-12 items-center justify-center rounded-full bg-[#031429]/80 text-white backdrop-blur-sm border border-gray-800 transition-all hover:bg-white hover:text-[#031429] md:flex"
						aria-label="Scroll Left">
						<ChevronLeft size={24} strokeWidth={2.5} />
					</button>

					{/* Masked Slider Windows Container */}
					<div
						ref={scrollContainerRef}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						className="relative w-full overflow-hidden overflow-x-auto scrollbar-none py-4"
						style={{ scrollbarWidth: "none" }}>
						{/* Flex row container holding mirrored node elements side by side */}
						<div
							className={`flex gap-6 w-max ${
								isHovered ? "animate-none" : "animate-marquee"
							}`}>
							{/* Loop 1: Core Initial Elements Array */}
							{specialtiesData.map((item, idx) => (
								<div
									key={`orig-${item.id}-${idx}`}
									className="flex h-[130px] w-[100px] sm:w-[180px] sm:h-[200px] shrink-0 flex-col items-center justify-center rounded-none bg-white p-6 text-center shadow-lg transition-transform duration-300 hover:scale-[1.03]">
									<div className="relative h-20 w-20">
										<Image
											src={item.iconPath}
											alt={item.name}
											fill
											sizes="80px"
											className="object-contain"
										/>
									</div>
									<h3 className="mt-4 text-xs font-bold leading-tight text-[#0A2540] sm:text-lg tracking-tighter">
										{item.name}
									</h3>
								</div>
							))}

							{/* Loop 2: Cloned Mirror Elements Array */}
							{specialtiesData.map((item, idx) => (
								<div
									key={`clone-${item.id}-${idx}`}
									className="flex h-[130px] w-[100px] sm:w-[180px] sm:h-[200px] shrink-0 flex-col items-center justify-center rounded-none bg-white p-6 text-center shadow-lg transition-transform duration-300 hover:scale-[1.03]">
									<div className="relative h-20 w-20">
										<Image
											src={item.iconPath}
											alt={item.name}
											fill
											sizes="80px"
											className="object-contain"
										/>
									</div>
									<h3 className="mt-4 text-xs font-bold leading-tight text-[#0A2540] sm:text-lg tracking-tighter">
										{item.name}
									</h3>
								</div>
							))}
						</div>
					</div>

					{/* Right Navigation Arrow Button */}
					<button
						onClick={() => handleScroll("right")}
						className="absolute right-0 z-30 hidden h-12 w-12 items-center justify-center rounded-full bg-[#031429]/80 text-white backdrop-blur-sm border border-gray-800 transition-all hover:bg-white hover:text-[#031429] md:flex"
						aria-label="Scroll Right">
						<ChevronRight size={24} strokeWidth={2.5} />
					</button>
				</div>

				{/* --- Footer Anchor Action Link --- */}
				<div className="mt-12 text-center">
					<Link
						href="/second-opinion/specialties"
						className="inline-block tracking-tighter border-b-2 border-[#F39223] pb-1 text-sm sm:text-lg font-bold text-[#F39223] transition-colors duration-200 hover:text-[#d97d1a] hover:border-[#d97d1a]">
						Explore Our Specialties
					</Link>
				</div>
			</div>

			<style jsx>{`
				@keyframes marquee {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}
				.animate-marquee {
					animation: marquee 25s linear infinite;
				}
			`}</style>
		</section>
	);
}
