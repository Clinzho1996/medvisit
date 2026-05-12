"use client";

import { IconCaretRightFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";

const HeroSection = () => {
	return (
		<section className="relative min-h-[100vh] flex flex-col items-center justify-start pt-10 overflow-hidden hero-bg">
			{/* Subtle Grid Overlay Effect */}

			<div className="container mx-auto px-4 relative z-10 text-center">
				{/* Main Heading with 3-color Gradient */}
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tighter tracking-tight mb-8">
					<span className="text-gradient-custom block">
						Your Gateway to <br className="hidden sm:block" /> Global Healthcare{" "}
						<br className="hidden sm:block" /> & Mobility
					</span>
				</motion.h1>

				{/* CTA Button */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.4, duration: 0.5 }}>
					<button className="group relative inline-flex items-center gap-2 bg-gradient-to-b from-[#F4911E] to-[#e0831a] text-white px-8 py-3 rounded-md font-bold text-sm shadow-[#F7931E70] shadow-lg transition-all hover:brightness-110 active:scale-95 ">
						Get Started
						<IconCaretRightFilled
							size={16}
							stroke={3}
							className="transition-transform group-hover:translate-x-1"
						/>
					</button>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
