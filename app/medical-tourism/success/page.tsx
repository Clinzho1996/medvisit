"use client";

import { IconArrowLeft, IconCheck } from "@tabler/icons-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SuccessPage() {
	// Animation configurations
	const containerVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
				staggerChildren: 0.15,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 15 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};

	return (
		<div className="relative min-h-screen w-full bg-[#FDFDFD] flex flex-col items-center justify-center overflow-hidden px-4">
			{/* ================= LEFT SIDE ABSTRACT GRAPHICS ================= */}
			<div className="absolute left-6 md:left-12 lg:left-30 top-[35%] -translate-y-1/2 hidden sm:flex items-center gap-4 select-none pointer-events-none">
				{/* Dot Grid */}
				<div className="grid grid-cols-4 gap-x-3 gap-y-4 opacity-30">
					{[...Array(48)].map((_, i) => (
						<div key={i} className="w-2 h-2 rounded-full bg-gray-400" />
					))}
				</div>
				{/* Orange Accent Rectangle */}
				<div className="w-16 h-32 bg-[#F4911E]  shadow-sm absolute left-10" />
			</div>

			{/* ================= RIGHT SIDE ABSTRACT GRAPHICS ================= */}
			<div className="absolute right-6 md:right-12 lg:right-20 top-[35%] -translate-y-1/2 hidden sm:flex flex-col gap-0 select-none pointer-events-none">
				{/* Top Grey Quarter Circle Shape */}
				<div className="w-24 h-24 bg-[#D1D5DB] rounded-bl-full opacity-70" />
				{/* Bottom Orange Square */}
				<div className="w-24 h-24 bg-[#F4911E]" />
			</div>

			{/* ================= CENTRAL CONTENT CARD ================= */}
			<motion.div
				initial="hidden"
				animate="visible"
				variants={containerVariants}
				className="w-full max-w-xl text-center flex flex-col items-center z-10">
				{/* Logo Placeholder - Replace /logo.png with your local asset */}
				<motion.div variants={itemVariants} className="mb-8 relative w-44 h-12">
					<Image
						src="/logo.png"
						alt="Medvisit Logo"
						fill
						className="object-contain"
						priority
					/>
				</motion.div>

				{/* Success Icon Badge */}
				<motion.div
					variants={itemVariants}
					className="w-16 h-16 bg-[#E6F9EE] rounded-full flex items-center justify-center mb-8 shadow-inner">
					<div className="w-10 h-10 bg-[#D4F5E2] rounded-full flex items-center justify-center text-[#10B981]">
						<IconCheck size={22} stroke={3} />
					</div>
				</motion.div>

				{/* Main Header Text */}
				<motion.h1
					variants={itemVariants}
					className="text-[#05213A] text-3xl sm:text-4xl font-bold tracking-tight mb-4">
					Form submitted successfully
				</motion.h1>

				{/* Supporting Description Context */}
				<motion.p
					variants={itemVariants}
					className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md mb-10 font-normal">
					Thank you for reaching out. A dedicated member of our team will review
					your submission details and follow up with you shortly.
				</motion.p>

				{/* Action Button Link */}
				<motion.div variants={itemVariants} className="w-full max-w-xs mb-8">
					<Link href="/" passHref legacyBehavior>
						<motion.a
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className="w-full flex items-center justify-center gap-2 bg-[#051C2C] text-white py-3.5 px-6 rounded-lg text-sm font-semibold tracking-wide transition-colors hover:bg-[#0c2b42] shadow-md cursor-pointer">
							<IconArrowLeft size={16} stroke={2.5} />
							Back to homepage
						</motion.a>
					</Link>
				</motion.div>

				{/* Support Footnote */}
				<motion.p
					variants={itemVariants}
					className="text-gray-500 text-xs sm:text-sm font-medium">
					If you require further assistance, contact{" "}
					<a
						href="mailto:info@medvisit.com.ng"
						className="text-[#F4911E] font-bold hover:underline transition-all">
						info@medvisit.com.ng
					</a>
				</motion.p>
			</motion.div>

			{/* Subtle Vertical Linear Background Strips to replicate screenshot theme grids */}
			<div className="absolute inset-0 grid grid-cols-6 pointer-events-none opacity-[0.02] z-0">
				{[...Array(6)].map((_, i) => (
					<div key={i} className="border-r border-black h-full" />
				))}
			</div>
		</div>
	);
}
