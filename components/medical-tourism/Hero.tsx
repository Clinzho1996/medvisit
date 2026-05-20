"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function MedicalTourismHero() {
	// Stagger variants for the text content
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	return (
		<section className="relative w-full bg-white overflow-hidden min-h-[550px] flex items-center">
			<div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 items-stretch">
				{/* --- LEFT SIDE: CONTENT --- */}
				<div className="relative flex flex-col justify-start px-8 sm:px-12 md:pl-[16%] py-16 lg:py-24 z-10 max-w-3xl mx-auto lg:mx-0">
					{/* Top-left subtle dotted swirl pattern */}
					<div className="absolute bottom-0 left-4 w-48 h-28  pointer-events-none hidden md:block">
						<Image
							src="/circ2.png"
							alt="Background"
							width={300}
							height={300}
							className="w-full h-full"
						/>
					</div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						className="space-y-6">
						<motion.span
							variants={itemVariants}
							className="text-[#F7931E] text-xs font-bold uppercase tracking-widest block">
							Medical Tourism
						</motion.span>

						<motion.h1
							variants={itemVariants}
							className="text-3xl sm:text-4xl md:text-[54px] font-extrabold text-[#05213A] leading-[1.15] tracking-tighter">
							We connect Africans with quality medical facilities and experts
							abroad.
						</motion.h1>

						<motion.p
							variants={itemVariants}
							className="text-gray-500 font-normal text-sm md:text-base leading-relaxed max-w-xl">
							Medvisit is a Nigeria based medical tourism agency that connects
							Nigerian patients with quality and affordable medical facilities
							abroad.
						</motion.p>

						<motion.div variants={itemVariants} className="pt-2">
							<Link href="/medical-tourism/#form">
								<motion.button
									whileHover={{ scale: 1.03 }}
									whileTap={{ scale: 0.98 }}
									className="border-2 border-[#F7931E] hover:bg-[#F7931E] hover:text-white text-[#F7931E]  text-sm font-bold px-12 py-2.5 cursor-pointer rounded-md transition-colors duration-200">
									Get a Free Quote
								</motion.button>
							</Link>
						</motion.div>
					</motion.div>
				</div>

				{/* --- RIGHT SIDE: COMPOSITE IMAGE LAYOUT --- */}
				<div className="relative min-h-[400px] lg:min-h-[600px] w-full flex items-stretch">
					{/* Main Integrated Image Frame */}
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="relative w-full h-full min-h-[450px]">
						{/* Replace this placeholder with your combined doctors image */}
						<img
							src="/mdhero.png"
							alt="Medical experts smiling and collaborating"
							className="w-full h-full object-cover object-center lg:object-left"
						/>

						{/* Soft gradient overlay on the left edge to cleanly transition into the text on large screens */}
						<div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent hidden lg:block pointer-events-none" />
					</motion.div>
				</div>
			</div>
		</section>
	);
}
