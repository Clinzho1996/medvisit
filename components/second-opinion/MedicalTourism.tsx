"use client";

import { motion, Variants } from "framer-motion";

export default function MedicalTourism() {
	// Shared text slide animation configurations
	const textAnimation: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	const imageAnimation: Variants = {
		hidden: { opacity: 0, scale: 0.98 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.7, ease: "easeOut" },
		},
	};

	return (
		<section className="w-full bg-white py-20 px-[9%] font-sans space-y-32 overflow-hidden">
			<div className="mx-auto w-full">
				{/* --- ROW 01 --- */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
					{/* Left Block: Image Composition 01 */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={imageAnimation}
						className="lg:col-span-6 relative flex justify-center lg:justify-start">
						<img
							src="/ab.png"
							alt="World Class Hospitals Showcase"
							className="w-full  h-auto object-contain drop-shadow-md"
						/>
					</motion.div>

					{/* Right Block: Content 01 */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={textAnimation}
						className="lg:col-span-6 space-y-5 text-left">
						<h2 className="text-2xl md:text-5xl font-extrabold text-[#05213A] tracking-tighter leading-[1.2]">
							Nigeria&apos;s <span className="text-[#F7931E]">First</span> Full
							Service
							<br className="hidden md:block" />
							Medical Tourism Agency
						</h2>
						<div className="space-y-4 text-[#000000B2] font-normal text-xs md:text-lg leading-relaxed">
							<p>
								MedVisit is a Nigeria based medical tourism agency that connects
								Nigerian patients with quality and affordable medical facilities
								abroad. We ensure a rewarding and positive outcome to our
								clients through our personalized service and partnership with
								some of the world&apos;s leading medical facilities in India,
								UAE, Germany, the United Kingdom Israel etc.
							</p>
							<p>
								From initial consultation to hospital selection and specialists
								medical diagnosis or line of treatment, visa processing to
								travel planning and hotel booking, Medvisit stands by you at
								every step of the way.
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
