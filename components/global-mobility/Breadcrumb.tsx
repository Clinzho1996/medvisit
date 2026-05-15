"use client";

import { IconCaretRightFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CustomSectionProps {
	badgeText?: string;
	title: string;
	subtitle: string;
	buttonText?: string;
	bgColor?: string;
	titleColor?: string;
	isCentered?: boolean;
	img?: string;
	link?: string;
}

const GlobalSection: React.FC<CustomSectionProps> = ({
	badgeText,
	title,
	subtitle,
	buttonText,
	bgColor = "bg-[#E2E4F5]",
	titleColor = "text-[#0F2331]",
	isCentered = true,
	img,
	link,
}) => {
	return (
		<section
			className={`relative overflow-hidden rounded-[2.5rem] p-8 md:p-16 ${bgColor} transition-all duration-500`}>
			{img && (
				<Image
					src={img}
					alt="Global Mobility"
					width={0}
					height={0}
					sizes="100vw"
					className="absolute top-0 right-0 w-[200px] h-full object-cover"
				/>
			)}

			<div
				className={`relative z-10 max-w-5xl mx-auto flex flex-col ${isCentered ? "items-center text-center" : "items-start text-left lg:flex-row lg:items-center lg:justify-between"}`}>
				<div className="w-full sm:max-w-5xl">
					{/* Badge */}
					{badgeText && (
						<div
							className={`flex items-center gap-2 mb-6 ${isCentered ? "justify-center" : ""}`}>
							<span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
							<span className="text-[12px] font-bold tracking-tight text-[#05213A]">
								{badgeText}
							</span>
						</div>
					)}

					{/* Title */}
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className={`text-3xl pr-0 sm:px-20 md:text-5xl font-extrabold tracking-tighter leading-[1.1] mb-6 ${titleColor}`}>
						{title}
					</motion.h2>

					{/* Subtitle */}
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="text-gray-600 tracking-tighter text-sm md:text-[15px] leading-relaxed mb-10 max-w-3xl mx-auto">
						{subtitle}
					</motion.p>

					{/* Button */}
					{buttonText && (
						<Link
							href={link || "#"}
							className="w-full  mx-auto flex flex-row justify-center items-center">
							<motion.button
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.98 }}
								className="flex flex-row cursor-pointer items-center gap-2 px-8 py-3.5 justify-center bg-gradient-to-r from-[#F2B05E] to-[#EA9444] text-white text-[13px] font-bold rounded-xl shadow-lg shadow-orange-300/40 transition-all">
								{buttonText}
								<IconCaretRightFilled size={18} stroke={3} />
							</motion.button>
						</Link>
					)}
				</div>
			</div>
		</section>
	);
};

// --- Example Implementation of the Centered Screenshot ---

export default GlobalSection;
