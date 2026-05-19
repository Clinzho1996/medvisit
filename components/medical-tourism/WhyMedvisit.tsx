"use client";
import { motion } from "framer-motion";

interface FeatureCardProps {
	title: string;
	description: string;
	index: number;
}

// Reusable Feature Card utilizing your exact design system specs
const FeatureCard = ({ title, description, index }: FeatureCardProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
			whileHover={{
				y: -6,
				boxShadow:
					"0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)",
			}}
			className="bg-white rounded-xl p-8 flex flex-col border border-[#0000000F] items-start space-y-4 transition-all duration-300 group shadow-2xl shadow-[#0000000F] relative overflow-hidden">
			{/* Title Block with Specified Orange Checkmark Indicator */}
			<div className="flex items-center space-x-3">
				<div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#F7931E] shrink-0">
					<svg
						className="w-3 h-3 text-white"
						fill="none"
						stroke="currentColor"
						strokeWidth="3"
						viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M5 13l4 4L19 7"
						/>
					</svg>
				</div>
				<h3 className="text-lg sm:text-xl font-bold text-[#05213A] tracking-tight">
					{title}
				</h3>
			</div>

			{/* Custom Description Typography */}
			<p className="text-[#000000B2] font-normal text-xs md:text-lg tracking-tight leading-relaxed pt-1">
				{description}
			</p>

			{/* Accent Orange Underline Active State Bar (Only applies to first index item as per image design specs) */}
			{index === 0 && (
				<div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#F7931E]" />
			)}
		</motion.div>
	);
};

export default function WhyMedvisitSection() {
	// Exact structural text dataset mapped cleanly from the interface reference
	const features = [
		{
			title: "Partnership",
			description:
				"We partner with leading hospitals and expert doctors in three countries to ensure you receive the best positive treatment.",
		},
		{
			title: "Cooperation",
			description:
				"Seamless cooperation with local doctor in Nigeria to ensure patients get good follow-up care",
		},
		{
			title: "The Best",
			description:
				"We only work with the best hospitals with international accreditation and pedigree of excellence.",
		},
		{
			title: "Seasoned",
			description:
				"All our hospitals have dedicated international patients service teams that help the patients as well as companions throughout their stay.",
		},
		{
			title: "Personalized Care",
			description:
				"Personalized care by one of the most reliable medical travel company in Nigeria",
		},
		{
			title: "Price",
			description:
				"The lowest possible cost for medical care and treatment abroad.",
		},
	];

	return (
		<section className="w-full bg-[#FAFCFE] py-20 px-[9%] font-sans overflow-hidden">
			<div className="mx-auto w-full space-y-12 relative z-10">
				{/* --- HEADLINE SECTION HEADER --- */}
				<div className="text-center">
					<motion.h2
						initial={{ opacity: 0, y: -10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-2xl md:text-4xl font-extrabold text-[#05213A] tracking-tighter">
						Why Medvisit ?
					</motion.h2>
				</div>

				{/* --- RESPONSIVE GRID GRID DISPLAY PLATFORM (3x2 Matrix Structure) --- */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{features.map((feature, index) => (
						<FeatureCard
							key={`${feature.title}-${index}`}
							title={feature.title}
							description={feature.description}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
