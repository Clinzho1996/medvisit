"use client";

import { motion } from "framer-motion";

function Breadcrumb({ subtitle, title }: { subtitle: string; title: string }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
			className="bread-bg w-full h-90 mx-auto p-16 sm:p-20 justify-center items-center space-y-2">
			<div className="max-w-3xl mx-auto justify-center items-center">
				<motion.p
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					className="text-sm sm:text-lg text-center uppercase font-bold text-[#F7931E] tracking-tighter">
					{subtitle}
				</motion.p>

				<motion.h2
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
					className="text-white text-center capitalize font-black text-2xl md:text-6xl tracking-tighter leading-tight">
					{title}
				</motion.h2>
			</div>
		</motion.div>
	);
}

export default Breadcrumb;
