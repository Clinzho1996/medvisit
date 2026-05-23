"use client";

import { IconCaretRightFilled, IconCircleCheck } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

const WhyChooseMedvisit = () => {
	const features = [
		{
			title: "Trusted Partnerships",
			description:
				"Authorized partner for Chile Kids (8+ years, 200+ families) and Waveris (global CBI specialists)",
		},
		{
			title: "Competitive Pricing",
			description:
				"Transparent fee structures. No hidden charges. See exactly what you pay before you commit.",
		},
		{
			title: "End-to-End Concierge",
			description:
				"From consultation to completion — we handle visa support, travel arrangements, accommodation, translation, and follow-up.",
		},
	];

	const countries = [
		{ name: "Portugal", flag: "🇵🇹" },
		{ name: "Chile", flag: "🇨🇱" },
		{ name: "Mexico", flag: "🇲🇽" },
		{ name: "Dominica", flag: "🇩🇲" },
		{ name: "Vanuatu", flag: "🇻🇺" },
		{ name: "Dubai", flag: "🇦🇪" },
		{ name: "São Tomé & Príncipe", flag: "🇸🇹" },
		{ name: "Uruguay", flag: "🇺🇾" },
	];

	return (
		<section className="flex flex-col lg:flex-row min-h-[600px] w-full overflow-hidden">
			{/* Left Content Column */}
			<div className="w-full lg:w-[45%] bg-[#05213A] p-12 md:p-20 flex flex-col justify-center">
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
						Why Choose Medvisit
					</h2>
					<p className="text-[#F9F9F9] tracking-tighter text-sm md:text-base leading-relaxed mb-12 max-w-md">
						We understand the unique needs of Nigerian families and
						professionals. Our expert team ensures a seamless journey from
						consultation to passport delivery.
					</p>

					<div className="space-y-10 mb-12">
						{features.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="flex gap-4">
								<IconCircleCheck
									color="#F7931E"
									className="0 shrink-0 `mt-0.5`"
									size={22}
								/>
								<div>
									<h4 className="text-white font-bold text-lg mb-1">
										{item.title}
									</h4>
									<p className="text-[#F9F9F9] text-xs md:text-sm leading-relaxed max-w-sm">
										{item.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>

					<div className="flex flex-wrap gap-4">
						<Link href="/second-opinion/contact-us">
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="flex items-center gap-2 bg-[#F4911E] text-white px-6 py-3 rounded-lg text-xs font-bold shadow-[#F7931E70] shadow-lg transition-transform">
								Book Free Consultation
								<IconCaretRightFilled size={18} stroke={3} />
							</motion.button>
						</Link>
						<Link href="/second-opinion/contact-us">
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-7 py-3.5 border border-white/30 text-white text-xs font-bold rounded-lg hover:bg-white/10 transition-colors">
								Talk to an Expert
							</motion.button>
						</Link>
					</div>
				</motion.div>
			</div>

			{/* Right Image Column */}
			<div className="w-full lg:w-[55%] relative min-h-[400px] lg:min-h-full">
				<img
					src="/man.png"
					alt="Happy travelers"
					className="absolute inset-0 w-full h-full object-cover"
				/>

				{/* Country Floating Badges */}
				<div className="absolute bottom-10 left-6 right-6 flex flex-wrap gap-1 pointer-events-none max-w-sm  justify-start">
					{countries.map((country, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.5 + idx * 0.05 }}
							className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-xl border border-white/50">
							<span className="text-sm">{country.flag}</span>
							<span className="text-[10px] font-bold text-gray-800 whitespace-nowrap">
								{country.name}
							</span>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseMedvisit;
