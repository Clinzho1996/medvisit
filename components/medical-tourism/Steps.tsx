"use client";

import { motion, Variants } from "framer-motion";

interface Step {
	number: number;
	title: string;
	description: string;
	imageSrc: string; // Dynamic path matching the individual step card asset
	textColor: string; // Brand orange or navy alignment
}

export default function MedicalProcessImages() {
	const steps: Step[] = [
		{
			number: 1,
			title: "Register",
			description:
				"Provide the necessary information or details for your medical query.",
			imageSrc: "/Group-12024.png",
			textColor: "text-[#F7931E]",
		},
		{
			number: 2,
			title: "Send Query",
			description: "You send a query/medical report and outline your needs.",
			imageSrc: "/Group-12025.png", // Navy border card image assets
			textColor: "text-[#05213A]",
		},
		{
			number: 3,
			title: "Get Budget",
			description:
				"Our care team will provide you with a preliminary treatment plan and estimated treatment costs.",
			imageSrc: "/Group-12026.png",
			textColor: "text-[#F7931E]",
		},
		{
			number: 4,
			title: "Confirmation",
			description:
				"Once you confirm your decision to travel for the treatment, the visa facilitation letter is issued.",
			imageSrc: "/Group-12028.png",
			textColor: "text-[#F7931E]",
		},
		{
			number: 5,
			title: "Travel Facilitation",
			description:
				"Medvisit helps you experience effortless travel processing.",
			imageSrc: "/Group-12027.png",
			textColor: "text-[#05213A]",
		},
		{
			number: 6,
			title: "Travel",
			description:
				"You travel abroad, where we provide you with all the needed support and care.",
			imageSrc: "/Group-12029.png",
			textColor: "text-[#F7931E]",
		},
	];

	// Animation configuration parameters
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.08 },
		},
	};

	const cardVariants: Variants = {
		hidden: { opacity: 0, scale: 0.92, y: 20 },
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: { type: "spring", stiffness: 260, damping: 22 },
		},
	};

	return (
		<section className="w-full bg-white py-24 px-[9%] font-sans overflow-hidden">
			<div className="mx-auto w-full space-y-16">
				{/* --- SECTION TITLE HEADER --- */}
				<div className="text-center">
					<motion.h2
						initial={{ opacity: 0, y: -10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-2xl sm:text-5xl font-extrabold text-[#05213A] tracking-tighter leading-snug">
						What to expect as a medical traveler in
						<br className="hidden sm:block" />
						easy steps:
					</motion.h2>
				</div>

				{/* --- CARD MIGRATION MATRIX GRID --- */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-60px" }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8 justify-items-center items-stretch">
					{steps.map((step) => (
						<motion.div
							key={step.number}
							variants={cardVariants}
							whileHover={{ y: -6, scale: 1.02 }}
							className="relative w-full max-w-[300px] aspect-[280/310] flex items-center justify-center select-none">
							{/* Card Silhouette Image Wrapper */}
							<img
								src={step.imageSrc}
								alt={`Step ${step.number} Background Frame`}
								className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-sm"
							/>

							{/* --- INNER FLOATING DATA COMPONENT --- */}
							<div className="absolute inset-0 z-10 flex flex-col items-center justify-start text-center pl-7 pr-7 pb-10 pt-40">
								<div className="space-y-2 w-full">
									{/* Step Action Header */}
									<h3
										className={`text-[16px] sm:text-lg font-extrabold tracking-tighter uppercase ${step.textColor}`}>
										{step.title}
									</h3>

									{/* Step Explanatory String Block */}
									<p className="text-[#000000B2] font-normal text-sm leading-relaxed max-w-[240px] mx-auto">
										{step.description}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
