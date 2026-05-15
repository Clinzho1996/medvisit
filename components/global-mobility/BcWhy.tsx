"use client";

import {
	IconBellRinging,
	IconCaretRightFilled,
	IconHeart,
	IconUsers,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const BcWhy = () => {
	const features = [
		{
			title: "Trusted Partnerships",
			icon: <IconUsers className="text-[#F4911E] shrink-0" size={24} />,
			description:
				"Authorized partner for Chile Kids — 8+ years experience, 200+ families assisted. We don't just resell services; we are your direct connection and boots on the ground in Chile.",
		},
		{
			title: "End-to-End Concierge",
			icon: <IconBellRinging className="text-[#F4911E] shrink-0" size={24} />,
			description:
				"Transparent fee structures. No hidden charges. See exactly what you pay before you commit.",
			isList: true,
			listItems: [
				"Visa support",
				"Medical coordination",
				"Flights and accommodation",
				"Translation services",
				"Airport transfers",
				"Document delivery",
			],
		},
		{
			title: "Nigerian-Focused Support",
			icon: <IconHeart className="text-[#F4911E] shrink-0" size={24} />,
			description:
				"We understand Nigerian clients' needs. Our team speaks your language, understands your concerns, and provides guidance every step of the way.",
		},
	];

	return (
		<section className="flex flex-col lg:flex-row min-h-[700px] w-full overflow-hidden mt-6">
			{/* Left Content Column */}
			<div className="w-full lg:w-[45%] bg-[#051C2C] p-12 md:p-20 flex flex-col justify-center">
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
						The Medvisit Difference
					</h2>

					<div className="space-y-12 mb-12">
						{features.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="flex gap-5">
								{item.icon}
								<div className="flex-1">
									<h4 className="text-white font-bold text-xl mb-2">
										{item.title}
									</h4>
									<p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-lg">
										{item.description}
									</p>

									{item.isList && (
										<div className="grid grid-cols-2 gap-y-2 max-w-md">
											{item.listItems?.map((li, i) => (
												<div key={i} className="flex items-center gap-2">
													<span className="text-[#F4911E] text-[10px]">✓</span>
													<span className="text-gray-300 text-xs">{li}</span>
												</div>
											))}
										</div>
									)}
								</div>
							</motion.div>
						))}
					</div>

					<div className="flex flex-wrap gap-4">
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="flex items-center gap-2 bg-[#F4911E] text-white px-7 py-3.5 rounded-lg text-xs font-bold shadow-[#F7931E40] shadow-xl transition-all">
							Book Free Consultation
							<IconCaretRightFilled size={16} />
						</motion.button>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="px-7 py-3.5 border border-white/30 text-white text-xs font-bold rounded-lg hover:bg-white/10 transition-colors">
							Talk to an Expert
						</motion.button>
					</div>
				</motion.div>
			</div>

			{/* Right Image Column */}
			<div className="w-full lg:w-[55%] relative min-h-[500px] lg:min-h-full">
				<img
					src="/bcwhy.png" // Ensure this matches your local asset path
					alt="Happy Nigerian couple traveling"
					className="absolute inset-0 w-full h-full object-cover"
				/>

				{/* Gradient Overlay to soften the transition to the dark panel */}
				<div className="absolute inset-0 bg-gradient-to-r from-[#051C2C]/20 via-transparent to-transparent hidden lg:block" />
			</div>
		</section>
	);
};

export default BcWhy;
