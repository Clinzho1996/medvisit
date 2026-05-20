"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function Breadcrumb({ title }: { title: string }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
			className="bread2-bg w-full h-50 sm:h-90 mx-auto py-16 px-[9%]  sm:py-20 justify-center items-center space-y-2">
			<div className="mx-auto flex flex-row justify-between items-center">
				<motion.h2
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
					className="text-white text-center capitalize font-black text-2xl md:text-6xl tracking-tighter leading-tight">
					{title}
				</motion.h2>
				<Image src="/block.png" alt="logo" width={100} height={300} />
			</div>
		</motion.div>
	);
}

export default Breadcrumb;
