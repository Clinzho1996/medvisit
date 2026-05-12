"use client";

import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandX,
	IconCaretRightFilled,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

const MedVisitFooter = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-[#05213A] text-white font-sans selection:bg-[#F4911E]/30">
			<div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
				{/* --- Hero Call to Action Card --- */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="relative overflow-hidden rounded-3xl main-footer border-[1.33px] border-[#FFFFFF1A] p-8 md:p-16 mb-20 group">
					<div className="relative z-10 max-w-4xl">
						<h2 className="text-2xl md:text-4xl font-semibold leading-tight tracking-tighter mb-8">
							Experience healthcare innovation with MedVisit. <br />
							Your partner in accessible global expertise.
						</h2>

						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="flex items-center gap-2 bg-[#F4911E] text-white px-6 py-3 rounded-lg font-bold shadow-[#F7931E70] shadow-lg transition-transform">
							Speak to a Consultant
							<IconCaretRightFilled size={18} stroke={3} />
						</motion.button>
					</div>
				</motion.div>

				{/* --- Footer Content Grid --- */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-30 text-sm text-gray-300 leading-relaxed">
					{/* About Us */}
					<div className="space-y-6">
						<h3 className="text-white font-bold tracking-wider uppercase">
							About Us
						</h3>
						<p className="text-[#FFFFFFB2] text-lg">
							Through years of experience, we have evolved a system that
							guarantees patients get the very best of treatment. From India to
							UAE to Israel, every hospital in our network stands out as a
							leader in its field.
						</p>
						<div className="flex items-center gap-4 pt-2">
							<span className="text-white font-bold">Follow us:</span>
							<div className="flex items-center gap-3">
								<Link href="https://www.facebook.com/Medvisitcare/">
									{" "}
									<div className="bg-white p-1 rounded text-white hover:bg-[#F4911E] cursor-pointer transition-colors">
										<IconBrandFacebook color="#05213A" size={12} />
									</div>{" "}
								</Link>

								<Link href="https://twitter.com/Medvisitng">
									<div className="bg-white p-1 rounded text-white hover:bg-[#F4911E] cursor-pointer transition-colors">
										<IconBrandX color="#05213A" size={12} />
									</div>
								</Link>
								<Link href="https://www.instagram.com/medvisit.ng?igsh=ejlsNDMyejZiMHNl">
									<div className="bg-white p-1 rounded text-white hover:bg-[#F4911E] cursor-pointer transition-colors">
										<IconBrandInstagram color="#05213A" size={12} />
									</div>
								</Link>
							</div>
						</div>
					</div>

					{/* Latest Blog */}
					<div className="space-y-6">
						<h3 className="text-white font-bold tracking-wider uppercase">
							Latest Blog
						</h3>
						<ul className="space-y-4 text-lg text-[#FFFFFFB2]">
							<li className="hover:text-white cursor-pointer transition-colors">
								COVID-19 Guidelines for International Patients Arriving in India
								For Medical Treatment
							</li>
							<li className="hover:text-white cursor-pointer transition-colors">
								Travelling to India for Eye Surgery (2020 Update)
							</li>
							<li className="hover:text-white cursor-pointer transition-colors">
								How much Does a Standard Medical Checkup Cost in Checkup Cost in
								India, Dubai, and Israel
							</li>
						</ul>
					</div>

					{/* Get In Touch */}
					<div className="space-y-6">
						<h3 className="text-white font-extrabold tracking-wider uppercase">
							Get In Touch
						</h3>
						<div className="space-y-4 text-lg">
							<p>
								<span className="block font-semibold text-[#FFFFFFB2]">
									Tel: +23481 825 22015
								</span>
								<span className="block font-semibold text-[#FFFFFFB2]">
									Tel: +91983 668 7899
								</span>
							</p>
							<p className="text-[#FFFFFFB2]">
								<strong className="text-white">Nigeria Address:</strong> 1
								Fawole Lane, Off Ikorodu Road, Obanikoro, Lagos.
							</p>
							<p className="text-[#FFFFFFB2]">
								<strong className="text-white">India Address:</strong> S.P.
								Mukherjee Road, DumDum Cantonment Kolkata - 700028
							</p>
							<p className="text-[#FFFFFFB2]">
								<strong className="text-white block">Email:</strong>
								<a
									href="mailto:care@medvisit.com.ng"
									className="hover:text-[#F4911E] transition-colors">
									care@medvisit.com.ng
								</a>
							</p>
						</div>
					</div>
				</div>

				{/* --- Bottom Copyright --- */}
				<div className="mt-20 pt-8 border-t border-white/10 text-center text-[#FFFFFFB2] text-xs sm:text-lg">
					© {currentYear} Medvisit
				</div>
			</div>
		</footer>
	);
};

export default MedVisitFooter;
