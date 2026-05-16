"use client";

import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandX,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function MedicalVisitFooter() {
	const currentYear = new Date().getFullYear();

	// Animation variants
	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	return (
		<footer className="w-full bg-[#f8fafc] text-[#334155] font-sans px-[6%]">
			{/* --- HERO BANNER --- */}
			<div className="relative  max-w-[95%] mx-auto bg-[#05213A] overflow-hidden min-h-[340px] flex items-center px-[5%]">
				{/* Background decorative accent */}
				<div className="absolute right-0 bottom-0 sm:right-0 sm:top-0">
					<Image
						src="/circ.png"
						alt="Background"
						width={300}
						height={300}
						className="w-50 sm:w-fit  bottom-0 sm:right-0  object-cover"
					/>
				</div>

				<div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-2 py-12 md:py-0">
					{/* Left Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7 }}
						className="space-y-4 z-10">
						<h2 className="text-4xl md:text-[42px] font-extrabold text-white tracking-tighter">
							Ready for a medical visit?
						</h2>
						<p className="text-white text-base md:text-base font-light">
							We're known for providing high-quality health care and more!
						</p>
						<motion.button
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.98 }}
							className="mt-8 bg-[#F7931E] hover:bg-[#e27222] text-white text-xs md:text-sm font-bold px-6 py-3 rounded shadow-lg transition-colors duration-200">
							Click Here To Get Started
						</motion.button>
					</motion.div>

					{/* Right Image/Graphic Area */}
					<div className="relative flex justify-center md:justify-end h-full items-end self-end">
						{/* Orange Circle Backdrop */}
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ delay: 0.2, duration: 0.6 }}
							className="hidden sm:block absolute bottom-0 right-4 md:right-12 w-64 h-64 md:w-72 md:h-72 bg-[#F7931E] rounded-full -z-0"
						/>

						{/* Doctor Image Placeholder */}
						{/* Replace src with your actual asset path */}
						<motion.img
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.6 }}
							src="/medfoot.png"
							alt="Doctor smiling"
							className="hidden sm:block relative z-10 max-h-[345px]  object-contain object-bottom select-none filter drop-shadow-xl"
						/>
					</div>
				</div>
			</div>

			{/* --- MAIN FOOTER LINK GRID --- */}
			<div className="grid bg-[#FAFCFE] px-[2%] py-[6%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-30 text-sm text-gray-300 leading-relaxed">
				{/* About Us */}
				<div className="space-y-6">
					<h3 className="text-[#002B3B] font-bold tracking-wider uppercase">
						About Us
					</h3>
					<p className="text-[#000000B2] text-lg">
						Through years of experience, we have evolved a system that
						guarantees patients get the very best of treatment. From India to
						UAE to Israel, every hospital in our network stands out as a leader
						in its field.
					</p>
					<div className="flex items-center gap-4 pt-2">
						<span className="text-[#002B3B] font-bold">Follow us:</span>
						<div className="flex items-center gap-3">
							<Link href="https://www.facebook.com/Medvisitcare/">
								{" "}
								<div className="bg-[#002B3B] p-1 rounded text-white hover:bg-[#F4911E] cursor-pointer transition-colors">
									<IconBrandFacebook color="#fff" size={12} />
								</div>{" "}
							</Link>

							<Link href="https://twitter.com/Medvisitng">
								<div className="bg-[#002B3B] p-1 rounded text-white hover:bg-[#F4911E] cursor-pointer transition-colors">
									<IconBrandX color="#fff" size={12} />
								</div>
							</Link>
							<Link href="https://www.instagram.com/medvisit.ng?igsh=ejlsNDMyejZiMHNl">
								<div className="bg-[#002B3B] p-1 rounded text-white hover:bg-[#F4911E] cursor-pointer transition-colors">
									<IconBrandInstagram color="#fff" size={12} />
								</div>
							</Link>
						</div>
					</div>
				</div>

				{/* Latest Blog */}
				<div className="space-y-6">
					<h3 className="text-[#002B3B] font-bold tracking-wider uppercase">
						Latest Blog
					</h3>
					<ul className="space-y-4 text-lg text-[#000000B2]">
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
					<h3 className="text-[#002B3B] font-extrabold tracking-wider uppercase">
						Get In Touch
					</h3>
					<div className="space-y-4 text-lg">
						<p>
							<span className="block font-semibold text-[#000000B2]">
								Tel: +23481 825 22015
							</span>
							<span className="block font-semibold text-[#000000B2]">
								Tel: +91983 668 7899
							</span>
						</p>
						<p className="text-[#000000B2]">
							<strong className="text-[#002B3B]">Nigeria Address:</strong> 1
							Fawole Lane, Off Ikorodu Road, Obanikoro, Lagos.
						</p>
						<p className="text-[#000000B2]">
							<strong className="text-[#002B3B]">India Address:</strong> S.P.
							Mukherjee Road, DumDum Cantonment Kolkata - 700028
						</p>
						<p className="text-[#002B3B]">
							<strong className="text-[#002B3B] block">Email:</strong>
							<a
								href="mailto:care@medvisit.com.ng"
								className="hover:text-[#F4911E] transition-colors">
								care@medvisit.com.ng
							</a>
						</p>
					</div>
				</div>
			</div>

			{/* --- COPYRIGHT FOOTNOTE --- */}
			<div className="w-full border-t border-gray-200 py-4 text-center text-[#000000B2] text-lg font-light bg-white">
				© {currentYear} Hospitals in India, Dubai, Israel, UK & Germany for
				Nigerians.
			</div>
		</footer>
	);
}
