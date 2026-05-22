"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function MedicalTourism() {
	// Shared text slide animation configurations
	const textAnimation: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	const imageAnimation: Variants = {
		hidden: { opacity: 0, scale: 0.98 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.7, ease: "easeOut" },
		},
	};

	return (
		<section className="w-full bg-white border-b py-20 sm:py-30 px-[9%] font-sans space-y-32 overflow-hidden">
			<div className="mx-auto w-full">
				{/* --- ROW 01 --- */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
					{/* Left Block: Image Composition 01 */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={imageAnimation}
						className="lg:col-span-6 relative flex justify-center lg:justify-start">
						<img
							src="/medv.png"
							alt="World Class Hospitals Showcase"
							className="w-full  h-auto object-contain drop-shadow-md"
						/>
					</motion.div>

					{/* Right Block: Content 01 */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={textAnimation}
						className="lg:col-span-6 space-y-5 text-left">
						<span className="text-[#F7931E] text-xs font-bold uppercase tracking-widest block">
							Medical Tourism
						</span>
						<h2 className="text-2xl md:text-5xl font-extrabold text-[#05213A] tracking-tighter leading-[1.2]">
							We Connect Africans With Quality Medical Facilities and experts
							abroad.
						</h2>
						<div className="space-y-4 text-[#000000B2] font-normal text-xs md:text-lg leading-relaxed">
							<p>
								Medvisit is a Nigeria based medical tourism agency that connects
								Nigerian patients with quality and affordable medical facilities
								abroad.
							</p>
							<p>
								Medvisit is a Nigeria based medical tourism agency that connects
								Nigerian patients with quality and affordable medical facilities
								abroad.
							</p>
						</div>
						<div className="pt-2">
							<Link href="/medical-tourism" passHref>
								<motion.button
									whileHover={{ scale: 1.03 }}
									whileTap={{ scale: 0.98 }}
									className=" bg-[#F7931E] text-white   text-sm font-bold px-12 py-2.5 cursor-pointer rounded-md transition-colors duration-200">
									Learn More
								</motion.button>
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
