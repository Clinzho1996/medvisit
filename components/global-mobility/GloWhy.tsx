"use client";

import {
	IconBriefcase,
	IconCaretRightFilled,
	IconPlane,
	IconSchool,
	IconShieldCheck,
	IconUsers,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const GloWhy = () => {
	const features = [
		{
			title: "Family Inclusion",
			icon: <IconUsers className="text-[#F4911E] shrink-0" size={24} />,
			description: "Spouses, children, and sometimes parents included",
		},
		{
			title: "Education",
			icon: <IconSchool className="text-[#F4911E] shrink-0" size={24} />,
			description: "Access international schools and universities",
		},
		{
			title: "No Minimum Stay",
			icon: <IconPlane className="text-[#F4911E] shrink-0" size={24} />,
			description: "Some programs require no physical presence",
		},
		{
			title: "Path to Citizenship",
			icon: <IconShieldCheck className="text-[#F4911E] shrink-0" size={24} />,
			description: "Clear path to second passport after qualifying period",
		},
		{
			title: "Business Access",
			icon: <IconBriefcase className="text-[#F4911E] shrink-0" size={24} />,
			description: "Open businesses, bank accounts, invest locally",
		},
	];

	return (
		<section className="flex flex-col lg:flex-row min-h-[700px] w-full overflow-hidden mt-6">
			{/* Left Content Column */}
			<div className="w-full lg:w-[50%] bg-[#0A1E33] p-12 md:p-20 flex flex-col justify-center">
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 tracking-tight">
						Why Golden Visas?
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 mb-16">
						{features.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="flex gap-4 items-start">
								{item.icon}
								<div className="flex-1">
									<h4 className="text-white font-bold text-xl mb-2 tracking-tight">
										{item.title}
									</h4>
									<p className="text-gray-300 text-sm leading-snug">
										{item.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>

					<div className="flex">
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="flex items-center gap-2 bg-[#F4911E] text-white px-8 py-4 rounded-xl text-md font-semibold shadow-[#F4911E30] shadow-2xl hover:bg-[#e08113] transition-all">
							Book Free Consultation
							<IconCaretRightFilled size={18} />
						</motion.button>
					</div>
				</motion.div>
			</div>

			{/* Right Image Column */}
			<div className="w-full lg:w-[50%] relative min-h-[500px] lg:min-h-full">
				<img
					src="/glo.png" // Ensure this matches your local asset path
					alt="Happy Nigerian couple traveling"
					className="absolute inset-0 w-full h-full object-cover"
				/>

				{/* Gradient Overlay to soften the transition to the dark panel */}
				<div className="absolute inset-0 bg-gradient-to-r from-[#051C2C]/20 via-transparent to-transparent hidden lg:block" />
			</div>
		</section>
	);
};

export default GloWhy;
