"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Prefooter() {
	const currentYear = new Date().getFullYear();

	// Animation variants
	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	return (
		<footer className="w-full bg-[#f8fafc] text-[#334155] font-sans px-[6%]">
			{/* --- HERO BANNER --- */}
			<div className="relative  max-w-[95%] mx-auto bg-[#05213A] overflow-hidden min-h-[340px] flex items-center px-[5%]">
				{/* Background decorative accent */}
				<div className="absolute right-0 bottom-0 sm:right-0 sm:top-0">
					<Image
						src="/circ.png"
						alt="Background"
						width={300}
						height={300}
						className="w-50 sm:w-fit  bottom-0 sm:right-0  object-cover"
					/>
				</div>

				<div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-2 py-12 md:py-0">
					{/* Left Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7 }}
						className="space-y-4 z-10">
						<h2 className="text-4xl md:text-[42px] font-extrabold text-white tracking-tighter">
							Ready for a medical visit?
						</h2>
						<p className="text-white text-base md:text-base font-light">
							We're known for providing high-quality health care and more!
						</p>
						<Link href="/medical-tourism/contact-us">
							<motion.button
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.98 }}
								className="mt-8 cursor-pointer bg-[#F7931E] hover:bg-[#e27222] text-white text-xs md:text-sm font-bold px-6 py-3 rounded shadow-lg transition-colors duration-200">
								Click Here To Get Started
							</motion.button>
						</Link>
					</motion.div>

					{/* Right Image/Graphic Area */}
					<div className="relative flex justify-center md:justify-end h-full items-end self-end">
						{/* Orange Circle Backdrop */}
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ delay: 0.2, duration: 0.6 }}
							className="hidden sm:block absolute bottom-0 right-4 md:right-12 w-64 h-64 md:w-72 md:h-72 bg-[#F7931E] rounded-full -z-0"
						/>

						{/* Doctor Image Placeholder */}
						{/* Replace src with your actual asset path */}
						<motion.img
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.6 }}
							src="/medfoot.png"
							alt="Doctor smiling"
							className="hidden sm:block relative z-10 max-h-[345px]  object-contain object-bottom select-none filter drop-shadow-xl"
						/>
					</div>
				</div>
			</div>
		</footer>
	);
}
