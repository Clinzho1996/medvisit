"use client";

import { motion, Variants } from "framer-motion";

export default function FeaturesSection() {
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
						{/* Replace src with your composite image for Row 1 */}
						<img
							src="/ab1.png"
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
						<span className="text-[#F7931E] text-xs font-bold uppercase tracking-widest block">
							Explore
						</span>
						<h2 className="text-2xl md:text-5xl font-extrabold text-[#05213A] tracking-tighter leading-[1.2]">
							Get Treatment From
							<br className="hidden md:block" />
							World-Class Hospitals
						</h2>
						<div className="space-y-4 text-[#000000B2] font-normal text-xs md:text-lg leading-relaxed">
							<p>
								A study recently reported that nine (39%) of 23 patients who
								presented at a health facility in Nigeria after receiving
								neurosurgical care outside the country died from complications
								of the procedures they had undergone. Upon return to the
								country, over a quarter of these patients presented with
								infections.
							</p>
							<p>
								This means that you should be diligent in choosing where and how
								to get medical treatment abroad. This is where we come in.
								Through years of experience, we have evolved a system that
								patients get the very best of treatment.
							</p>
						</div>
						<div className="pt-2">
							<motion.button
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.98 }}
								className="border border-[#F7931E] hover:bg-[#F7931E] hover:text-white text-[#F7931E]  text-sm font-bold px-12 py-2.5 cursor-pointer rounded-md transition-colors duration-200">
								See Hospitals
							</motion.button>
						</div>
					</motion.div>
				</div>

				{/* --- ROW 02 --- */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-12 sm:pt-40">
					{/* Left Block: Image Composition 02 */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={imageAnimation}
						className="lg:col-span-6 relative flex justify-center lg:justify-start lg:order-1">
						{/* Replace src with your composite image for Row 2 */}
						<img
							src="/ab2.png"
							alt="International Medical Consultation Showcase"
							className="w-full  h-auto object-contain drop-shadow-md"
						/>
					</motion.div>

					{/* Right Block: Content 02 */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={textAnimation}
						className="lg:col-span-6 space-y-5 text-left lg:order-2">
						<span className="text-[#F7931E] text-xs font-bold uppercase tracking-widest block">
							Second Opinion
						</span>
						<h2 className="text-2xl md:text-5xl font-extrabold text-[#05213A] tracking-tighter leading-[1.2]">
							International online
							<br className="hidden md:block" />
							medical consultation for
							<br className="hidden md:block" />
							Nigerians
						</h2>
						<p className="space-y-4 text-[#000000B2] font-normal text-xs md:text-lg leading-relaxed">
							Our second medical opinion service enables Nigerians to consult
							with top doctors abroad. Whether you are confirming a diagnosis or
							have questions about a treatment plan, we provide secure access to
							top medical minds abroad.
						</p>
						<div className="pt-2">
							<motion.button
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.98 }}
								className="border border-[#F7931E] hover:bg-[#F7931E] hover:text-white text-[#F7931E]  text-sm font-bold px-12 py-2.5 cursor-pointer rounded-md transition-colors duration-200">
								Learn More
							</motion.button>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
