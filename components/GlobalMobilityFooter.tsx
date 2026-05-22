"use client";

import { IconCaretRightFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

const MobilityFooter = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-[#05213A] text-white font-sans selection:bg-[#F4911E]/30">
			<div className="max-w-7xl mx-auto px-6 py-12 lg:pt-20">
				{/* --- Hero Call to Action Card --- */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="relative footer-bg overflow-hidden rounded-3xl main-footer border-[1.33px] border-[#FFFFFF1A] p-8 md:p-16 mb-20 group">
					<div className="relative z-10 max-w-4xl">
						<h2 className="text-2xl md:text-4xl font-semibold leading-tight tracking-tighter mb-4">
							Ready to Unlock Global Freedom?
						</h2>

						<p className="text-[#F9F9F9] text-lg tracking-tight mb-4">
							Schedule a confidential consultation with our immigration experts
							today.{" "}
						</p>

						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="flex items-center gap-2 bg-[#F4911E] text-white px-6 py-3 rounded-lg font-bold shadow-[#F7931E70] shadow-lg transition-transform">
							Book Free Consultation
							<IconCaretRightFilled size={18} stroke={3} />
						</motion.button>
					</div>
				</motion.div>

				{/* --- Footer Content Grid --- */}
				<div className="flex flex-col justify-center items-center gap-5">
					<h2 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tighter mb-2">
						For More Information:
					</h2>

					<p className="text-lg md:text-xl text-center">
						Call{" "}
						<span className="font-bold text-[#F7931E] pr-0 sm:pr-6">
							+234 805 807 1257
						</span>
						<br className="block sm:hidden" />
						Email:{" "}
						<span className="font-bold text-[#F7931E]">
							care@medvisit.com.ng
						</span>
					</p>
				</div>

				{/* --- Bottom Copyright --- */}
				<div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between">
					<div className=" text-[#FFFFFFB2] text-xs sm:text-lg">
						Copyright © {currentYear} Medvisit Nigeria
					</div>

					<div className="gap-5 flex flex-row text-[#FFFFFFB2] text-xs sm:text-lg">
						<Link href="/">Privacy Policy</Link>
						<Link href="/">Terms & Condition</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default MobilityFooter;
