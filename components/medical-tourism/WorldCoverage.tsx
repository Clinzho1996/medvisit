"use client";

import { motion } from "framer-motion";

interface FlagBadgeProps {
	country: string;
	flagUrl: string;
	top: string; // Percentage position (e.g., '45%')
	left: string; // Percentage position (e.g., '22%')
	delay: number; // Staggered start time for the heartbeat animation
}

// Sub-component for individual animated map pins
const FlagPin = ({ country, flagUrl, top, left, delay }: FlagBadgeProps) => {
	return (
		<motion.div
			className="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
			style={{ top, left }}
			initial={{ opacity: 0, scale: 0 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: delay * 0.1 }}>
			{/* Heartbeat pulse scale effect */}
			<motion.div
				animate={{
					scale: [1, 1.12, 1],
				}}
				transition={{
					duration: 2,
					repeat: Infinity,
					repeatType: "reverse",
					ease: "easeInOut",
					delay: delay * 0.3, // Offsets the animations so they pulse separately
				}}
				whileHover={{ scale: 1.25, zIndex: 20 }}
				className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-white p-0.5 sm:p-1 rounded-md shadow-md border border-gray-100 flex items-center justify-center transition-shadow hover:shadow-lg">
				<img
					src={flagUrl}
					alt={`${country} Flag`}
					className="w-full h-full object-cover rounded-sm"
				/>
			</motion.div>
		</motion.div>
	);
};

export default function WorldCoverageSection() {
	// Precision coordinates mapped against the container background coordinates
	const partners = [
		{
			country: "United States",
			flagUrl: "https://flagcdn.com/us.svg",
			top: "61%",
			left: "22%",
			delay: 1,
		},
		{
			country: "Spain",
			flagUrl: "https://flagcdn.com/es.svg",
			top: "60%",
			left: "46%",
			delay: 4,
		},
		{
			country: "United Kingdom",
			flagUrl: "https://flagcdn.com/gb.svg",
			top: "48%",
			left: "51%",
			delay: 2,
		},
		{
			country: "Egypt",
			flagUrl: "https://flagcdn.com/eg.svg",
			top: "67%",
			left: "52%",
			delay: 6,
		},
		{
			country: "Germany",
			flagUrl: "https://flagcdn.com/de.svg",
			top: "56%",
			left: "55%",
			delay: 3,
		},
		{
			country: "Israel",
			flagUrl: "https://flagcdn.com/il.svg",
			top: "65%",
			left: "56%",
			delay: 5,
		},
		{
			country: "UAE",
			flagUrl: "https://flagcdn.com/ae.svg",
			top: "63%",
			left: "61%",
			delay: 7,
		},
		{
			country: "India",
			flagUrl: "https://flagcdn.com/in.svg",
			top: "67%",
			left: "66%",
			delay: 8,
		},
		{
			country: "Thailand",
			flagUrl: "https://flagcdn.com/th.svg",
			top: "55%",
			left: "81%",
			delay: 10,
		},
		{
			country: "China",
			flagUrl: "https://flagcdn.com/cn.svg",
			top: "62%",
			left: "73%",
			delay: 9,
		},
		{
			country: "South Korea",
			flagUrl: "https://flagcdn.com/kr.svg",
			top: "73%",
			left: "76%",
			delay: 11,
		},
	];

	return (
		<section className="w-full bg-white py-20 px-6 font-sans overflow-hidden">
			<div className="max-w-5xl mx-auto w-full space-y-12">
				{/* --- HEADER BLOCK --- */}
				<div className="text-center space-y-3">
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="text-[#F7931E] text-xs font-bold uppercase tracking-widest block">
						Our Coverage
					</motion.span>

					<motion.h2
						initial={{ opacity: 0, y: -10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#05213A] tracking-tight max-w-2xl mx-auto leading-tight">
						We Have Partnership With Hospitals Across The Globe
					</motion.h2>
				</div>

				{/* --- MAP HARNESS FRAME --- */}
				<div className="relative w-full aspect-[16/10] max-w-4xl mx-auto">
					{/* Main Dotted World Map Asset Background */}
					{/* Replace src path with your static background dotted map canvas vector */}
					<img
						src="/dotted-world-map.png"
						alt="World Map Graphics Vector"
						className="w-full h-full object-contain opacity-90 select-none pointer-events-none"
					/>

					{/* Optional Arc Connection Lines SVG Overlay to mock global routes */}
					<svg
						className="absolute inset-0 w-full h-full pointer-events-none z-0 text-[#F7931E]/40"
						viewBox="0 0 800 500"
						fill="none">
						{/* Arcs routing out across regions */}
						<path
							d="M176,305 Q240,220 368,300"
							stroke="currentColor"
							strokeWidth="1"
							strokeDasharray="3 3"
						/>
						<path
							d="M408,300 Q440,200 408,240"
							stroke="currentColor"
							strokeWidth="1"
							strokeDasharray="3 3"
						/>
						<path
							d="M440,280 Q520,200 584,315"
							stroke="currentColor"
							strokeWidth="1"
							strokeDasharray="3 3"
						/>
						<path
							d="M448,325 Q480,240 528,325"
							stroke="currentColor"
							strokeWidth="1"
							strokeDasharray="3 3"
						/>
						<path
							d="M528,325 Q550,260 588,310"
							stroke="currentColor"
							strokeWidth="1"
							strokeDasharray="3 3"
						/>
						<path
							d="M528,325 Q580,280 648,310"
							stroke="currentColor"
							strokeWidth="1"
							strokeDasharray="3 3"
						/>
					</svg>

					{/* --- ACTIVE STAGGERED FLAGGING BADGES LAYER --- */}
					{partners.map((partner) => (
						<FlagPin
							key={partner.country}
							country={partner.country}
							flagUrl={partner.flagUrl}
							top={partner.top}
							left={partner.left}
							delay={partner.delay}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
