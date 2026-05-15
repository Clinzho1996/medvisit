"use client";

import { IconCircleCheckFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";

const GloOverview = () => {
	const highlights = [
		"No minimum stay requirements (select programs).`",
		"Family inclusion included.",
	];

	return (
		<div className="bg-[#F9F9F9] py-10 px-6 md:px-24 space-y-32">
			{/* 1. Overview Section */}
			<section className="max-w-7xl mx-auto">
				<div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
					<div className="lg:w-1/2">
						<div className="flex items-center gap-2 mb-6">
							<span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
							<span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
								Overview
							</span>
						</div>
						<h2 className="text-2xl md:text-3xl font-bold text-[#0F2331] tracking-tighter leading-tight mb-6 pr-0 sm:pr-20">
							Strategic solutions to protect your wealth and expand your
							family&apos;s horizons in an unpredictable world. Strategic
							solutions to protect your wealth and expand your family&apos;s
							horizons in an unpredictable world.
						</h2>
					</div>
					<div className="lg:w-1/2 rounded-[2rem] overflow-hidden shadow-xl">
						<img
							src="/glob.png"
							alt="Family"
							className="w-full h-70 object-cover"
						/>
					</div>
				</div>

				{/* Highlight Bubbles Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{highlights.map((text, idx) => (
						<motion.div
							key={idx}
							whileHover={{ y: -5 }}
							className={`p-6 rounded-2xl border-r-2 border-[#F7931E] bg-white  flex items-start gap-3 ${idx >= 3 ? "md:col-span-1.5" : ""}`}>
							<IconCircleCheckFilled
								size={18}
								color="#F7931E"
								className=" shrink-0 mt-0.5"
							/>
							<p className="text-lg tracking-tighter font-medium text-[#1F1F1F] leading-snug">
								{text}
							</p>
						</motion.div>
					))}
				</div>
			</section>

			{/* 2. Problem/Solution Section */}
		</div>
	);
};

export default GloOverview;
