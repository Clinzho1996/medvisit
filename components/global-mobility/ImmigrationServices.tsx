"use client";

import { IconCaretRightFilled, IconCheck } from "@tabler/icons-react";
import { motion, Variants } from "framer-motion";

const ImmigrationServices = () => {
	const services = [
		{
			title: "Chilean Birth Citizenship",
			price: "From $22,000 Total Family Cost",
			priceColor: "bg-blue-600",
			bgColor: "birth-bg",
			description:
				"Your child receives one of the world's most powerful passports, ranked #14 globally and simply by being born in Chile. No investment requirement. No language test. No minimum stay beyond 2 months.",
			stats: [
				"175+ visa-free countries (USA, UK, EU, Japan, Canada)",
				"Inheritable by future generations",
				"Fully legal under Chile's jus soli law",
			],
		},
		{
			title: "Chilean Residency",
			price: "From $2,750 + Fees",
			priceColor: "bg-slate-700",
			bgColor: "reside-bg",
			description:
				'Live, work, and build a future in one of South America\'s most stable economies. Parents of Chilean-born children qualify for expedited residency under the "Chilean Relative" track.',
			stats: [
				"Path to permanent residency in 2 years",
				"Full work rights included",
				"Option to apply for Chilean citizenship after 5 years",
			],
		},
		{
			title: "Citizenship by Investment (CBI)",
			price: "From $90,000 Investment",
			priceColor: "bg-orange-600",
			bgColor: "cbi-bg",
			description:
				"Acquire a second passport through qualified investment programs across several countries, including Caribbean CBI.",
			stats: [
				"Visa-free access to 125-160+ countries",
				"Processing: 8-24 months",
				"Programs starting at $90,000 (São Tomé)",
			],
		},
		{
			title: "Golden Visas & Residency Programs",
			price: "From $250,000 Investment",
			priceColor: "bg-emerald-600",
			bgColor: "visa-bg",
			description:
				"Secure long-term residency in Europe, UAE, or the Americas with a clear path to citizenship. Perfect for families seeking education access, business expansion, or a safe haven.",
			stats: [
				"UAE Golden Visa: 10-year residency",
				"Portugal: Path to EU passport",
				"No minimum stay requirements (select programs)",
			],
		},
	];

	// Animation variants
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.1,
			},
		},
	};

	const headerVariants: Variants = {
		hidden: { opacity: 0, y: -30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	const cardVariants: Variants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};

	const buttonVariants: Variants = {
		hover: {
			scale: 1.05,
			transition: { duration: 0.2, ease: "easeInOut" },
		},
		tap: { scale: 0.95 },
	};

	const badgeVariants: Variants = {
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.4, delay: 0.2 },
		},
	};

	const statItemVariants: Variants = {
		hidden: { opacity: 0, x: -20 },
		visible: (i: number) => ({
			opacity: 1,
			x: 0,
			transition: { delay: 0.3 + i * 0.1, duration: 0.4 },
		}),
	};

	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			variants={containerVariants}
			className="py-20 px-6 md:px-12 bg-gray-50/50 border-t">
			<div className="max-w-7xl mx-auto">
				{/* Top Header Row */}
				<motion.div
					variants={headerVariants}
					className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
					<div className="max-w-2xl">
						<motion.h2
							variants={headerVariants}
							className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0F2331] mb-4">
							Our Immigration & Residency Services
						</motion.h2>
						<motion.p
							variants={headerVariants}
							className="text-[#05213A] tracking-tighter text-sm md:text-base leading-relaxed">
							Tailored pathways designed for high-net-worth individuals and
							ambitious professionals.
							<br />
							We'll help you find the perfect program tailored to your unique
							goals.
						</motion.p>
					</div>
					<motion.button
						variants={buttonVariants}
						whileHover="hover"
						whileTap="tap"
						className="flex items-center gap-2 px-5 py-2.5 bg-[#F4911E] text-white text-xs font-bold rounded-lg shadow-lg shadow-orange-200 transition-transform active:scale-95">
						Compare All Programs
						<IconCaretRightFilled size={14} stroke={3} />
					</motion.button>
				</motion.div>

				{/* Card Grid */}
				<motion.div
					variants={containerVariants}
					className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							whileHover={{ y: -5 }}
							transition={{ duration: 0.2 }}
							className={`relative overflow-hidden rounded-[2rem] p-8 md:p-10 ${service.bgColor} min-h-[420px] flex flex-col justify-between`}>
							{/* Badge */}
							<motion.div
								variants={badgeVariants}
								className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full flex items-center gap-2 border border-white/50">
								<motion.div
									whileHover={{ scale: 1.2 }}
									className={`w-2 h-2 rounded-full ${service.priceColor}`}
								/>
								<span className="text-[10px] font-bold text-gray-700 tracking-tight">
									{service.price}
								</span>
							</motion.div>

							{/* Content */}
							<div className="mt-5 max-w-full sm:max-w-[65%] relative z-10  sm:mt-20">
								<motion.h3
									variants={headerVariants}
									className="text-2xl font-bold text-[#0F2331] mb-4 leading-tight">
									{service.title}
								</motion.h3>
								<motion.p
									variants={headerVariants}
									className="text-[13px] text-gray-700 mb-6 leading-relaxed">
									{service.description}
								</motion.p>

								<div className="space-y-3 mb-8">
									<motion.p
										variants={headerVariants}
										className="text-[10px] font-black uppercase tracking-widest text-gray-800">
										Key Stats
									</motion.p>
									{service.stats.map((stat, i) => (
										<motion.div
											key={i}
											custom={i}
											variants={statItemVariants}
											initial="hidden"
											whileInView="visible"
											viewport={{ once: true }}
											className="flex items-start gap-2">
											<motion.div
												whileHover={{ scale: 1.2, rotate: 90 }}
												transition={{ duration: 0.2 }}>
												<IconCheck
													size={14}
													className="text-blue-500 mt-0.5 shrink-0"
													stroke={3}
												/>
											</motion.div>
											<span className="text-[12px] text-gray-600 leading-tight">
												{stat}
											</span>
										</motion.div>
									))}
								</div>

								<motion.button
									variants={buttonVariants}
									whileHover="hover"
									whileTap="tap"
									className="px-6 py-2 border border-gray-400 rounded-full text-xs font-bold text-gray-800 hover:bg-white/50 transition-colors">
									Learn More
								</motion.button>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</motion.section>
	);
};

export default ImmigrationServices;
