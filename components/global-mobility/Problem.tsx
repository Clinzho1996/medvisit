"use client";

import { IconCircleX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

function Problem() {
	const painPoints = [
		"Lengthy visa applications for travel",
		"Denied opportunities for business expansion",
		"Limited educational pathways for children",
		"Uncertainty when seeking global mobility",
	];
	return (
		<div className="bg-[#F3F3F3] p-[6%]">
			<section className="max-w-7xl  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				{/* Left: The Problem */}
				<div className="space-y-6">
					<div className="flex items-center gap-2">
						<span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
						<span className="text-[10px] font-bold tracking-tight uppercase text-gray-500">
							The Problem We Solve
						</span>
					</div>
					<h3 className="text-3xl sm:text-4xl font-bold text-[#0F2331] tracking-tighter">
						The Nigerian Passport Limitation
					</h3>
					<p className="text-[#05213A] text-lg leading-tight max-w-3xl tracking-tighter">
						The Nigerian passport ranks approximately 90th globally, offering
						visa-free access to only 45 countries. For business owners,
						professionals, and families, this means:
					</p>
					<div className="space-y-4 pt-2">
						{painPoints.map((point, i) => (
							<div key={i} className="flex items-center gap-2">
								<IconCircleX size={18} color="#D64545" stroke={2} />
								<span className="text-base text-[#05213A] font-medium tracking-tighter">
									{point}
								</span>
							</div>
						))}
					</div>
				</div>

				{/* Right: The Solution Card */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					className="bg-[#05213A] rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden text-white">
					{/* Decorative Background Circles */}
					<div className="absolute right-0 top-1/2 -translate-y-1/2 ">
						<Image
							src="/prob.png"
							alt="Decorative Circle"
							width={200}
							height={200}
						/>
					</div>

					<div className="relative z-10">
						<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 ">
							<Image
								src="/spid.png"
								alt="Solution Icon"
								width={50}
								height={50}
							/>
						</div>
						<h3 className="text-3xl font-bold mb-6 tracking-tighter">
							The Medvisit Solution
						</h3>
						<p className="text-blue-100/80 text-lg leading-relaxed tracking-tighter max-w-sm">
							Chilean birth citizenship delivers a world-class passport for less
							than 10% of the cost of Caribbean CBI programs.
						</p>
					</div>
				</motion.div>
			</section>
		</div>
	);
}

export default Problem;
