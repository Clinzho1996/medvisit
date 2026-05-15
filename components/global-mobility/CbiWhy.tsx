"use client";

import {
	IconBriefcase,
	IconCaretRightFilled,
	IconPlaneTilt,
	IconSchool,
	IconShieldCheck,
	IconUsers,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const CbiWhy = () => {
	const features = [
		{
			title: "Travel Freedom",
			icon: <IconPlaneTilt className="text-[#F4911E] shrink-0" size={24} />,
			description: "Visa-free access to 125-160+ countries globally.",
		},
		{
			title: "Education Access",
			icon: <IconSchool className="text-[#F4911E] shrink-0" size={24} />,
			description: "International schools and university options.",
		},
		{
			title: "Business Expansion",
			icon: <IconBriefcase className="text-[#F4911E] shrink-0" size={24} />,
			description: "Open global bank accounts, access new markets.",
		},
		{
			title: "Wealth Protection",
			icon: <IconShieldCheck className="text-[#F4911E] shrink-0" size={24} />,
			description: "Second citizenship for asset protection.",
		},
		{
			title: "Family Protection",
			icon: <IconUsers className="text-[#F4911E] shrink-0" size={24} />,
			description: "Citizenship inheritable by future generations.",
		},
	];

	return (
		<section className="flex flex-col lg:flex-row min-h-[700px] w-full overflow-hidden mt-6">
			{/* Left Content Column */}
			<div className="w-full lg:w-[50%] bg-[#051C2C] p-12 md:p-20 flex flex-col justify-center">
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h2 className="text-3xl sm:text-4xl font-bold text-white mb-16 leading-tight">
						Why Choose CBI?
					</h2>

					{/* Feature Grid matching UI */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mb-16">
						{features.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="flex gap-4">
								{item.icon}
								<div className="flex-1">
									<h4 className="text-white font-bold text-lg mb-2">
										{item.title}
									</h4>
									<p className="text-gray-300 text-sm leading-relaxed max-w-[240px]">
										{item.description}
									</p>
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
			<div className="w-full lg:w-[50%] relative min-h-[500px] lg:min-h-full">
				<img
					src="/cbiwhy.png"
					alt="Professional businessman traveling"
					className="absolute inset-0 w-full h-full object-cover"
				/>

				{/* Subtle overlay for visual depth */}
				<div className="absolute inset-0 bg-gradient-to-r from-[#051C2C]/30 via-transparent to-transparent hidden lg:block" />
			</div>
		</section>
	);
};

export default CbiWhy;
