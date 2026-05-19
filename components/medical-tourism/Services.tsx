"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface ServiceCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	index: number;
}

// Reusable Service Card Component with Hover and In-View Animations
const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
			whileHover={{
				y: -8,
				boxShadow:
					"0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)",
			}}
			className="bg-white  rounded-xl p-8 flex flex-col border border-[#0000000F] items-start space-y-4 transition-all duration-300 group shadow-2xl shadow-[#0000000F]">
			{/* Outlined Icon Container */}
			<div className="flex items-center justify-start w-20 h-20 ">{icon}</div>

			{/* Card Typography */}
			<h3 className="text-lg sm:text-xl font-bold text-[#05213A] tracking-tight pt-2">
				{title}
			</h3>

			<p className="text-[#000000B2] font-normal text-xs md:text-sm leading-relaxed">
				{description}
			</p>
		</motion.div>
	);
};

export default function MedicalServicesSection() {
	const services = [
		{
			title: "Heart",
			description:
				"Heart disease covers a range of conditions that affect the heart.",
			icon: <Image src="/heart.png" alt="Heart" width={80} height={80} />,
		},
		{
			title: "Cancer",
			description:
				"Cancer is a disease in which cells anywhere in the body begin to divide uncontrollably.",
			icon: <Image src="/cancer.png" alt="Cancer" width={80} height={80} />, // Alternately use a micro cell/DNA icon variants
		},
		{
			title: "Bones / Joints",
			description:
				"The bone also protects and support our organs and make it possible for us to move.",
			icon: <Image src="/bones.png" alt="Bones" width={80} height={80} />,
		},
		{
			title: "Brain & Spine",
			description:
				"Disorders that affect the brain, spinal cord and nerves are called neurological disorders.",
			icon: <Image src="/brain.png" alt="Brain" width={80} height={80} />,
		},
	];

	return (
		<section className="relative w-full bg-[#FAFCFE] py-20 px-[9%] font-sans overflow-hidden">
			{/* Bottom Left Background Wave Grid Accent */}
			<div className="absolute bottom-0 left-0 w-44 h-44 opacity-20 pointer-events-none select-none hidden md:block">
				<svg
					viewBox="0 0 200 200"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="w-full h-full text-gray-400">
					<path
						d="M0,200 Q40,160 80,140 T160,100"
						stroke="currentColor"
						strokeWidth="1"
						strokeLinecap="round"
						strokeDasharray="4 4"
					/>
					<path
						d="M0,190 Q50,150 90,130 T170,90"
						stroke="currentColor"
						strokeWidth="1"
						strokeLinecap="round"
						strokeDasharray="4 4"
					/>
					<path
						d="M0,180 Q60,140 100,120 T180,80"
						stroke="currentColor"
						strokeWidth="1"
						strokeLinecap="round"
						strokeDasharray="4 4"
					/>
				</svg>
			</div>

			<div className=" mx-auto w-full space-y-16 relative z-10">
				{/* --- HEADER BLOCK --- */}
				<div className="text-center space-y-3">
					<motion.span
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="text-[#F7931E] text-xs sm:text-lg tracking-tighter font-semibold uppercase  block">
						Services
					</motion.span>

					<motion.h2
						initial={{ opacity: 0, y: -10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-3xl md:text-5xl font-extrabold text-[#05213A] tracking-tighter">
						Medvisit Medical Services
					</motion.h2>

					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="text-[#000000B2] text-xs md:text-lg font-normal">
						We're known for providing high-quality health care and more!
					</motion.p>
				</div>

				{/* --- CARDS GRID FLOW --- */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{services.map((service, index) => (
						<ServiceCard
							key={service.title}
							title={service.title}
							description={service.description}
							icon={service.icon}
							index={index}
						/>
					))}
				</div>

				{/* --- FOOTER SELECTION ACTION --- */}
				<motion.div className="pt-2 text-center">
					<motion.button
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.98 }}
						className="border border-[#F7931E] hover:bg-[#F7931E] hover:text-white text-[#F7931E]  text-sm font-bold px-12 py-2.5 cursor-pointer rounded-md transition-colors duration-200">
						View More Services
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
}
