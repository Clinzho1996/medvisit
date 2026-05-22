"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// --- Animated Counter Component ---
const Counter = ({ value }: { value: number }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
	const [displayValue, setDisplayValue] = useState(0);

	useEffect(() => {
		if (isInView) {
			motionValue.set(value);
		}
	}, [isInView, value, motionValue]);

	useEffect(() => {
		return springValue.on("change", (latest) => {
			setDisplayValue(Math.floor(latest));
		});
	}, [springValue]);

	return <span ref={ref}>{displayValue}</span>;
};

const AboutSection = () => {
	const logos = Array(8)
		.fill(null)
		.map((_, i) => `/logos/logo${i + 1}.png`);

	const stats = [
		{ label: "Client Served", value: 600, suffix: "+" },
		{ label: "Medical specialists", value: 7000, suffix: "+" },
		{ label: "Years experience", value: 10, suffix: "+" },
		{ label: "Destinations across 4 continents", value: 50, suffix: "+" },
	];

	return (
		<section className="py-16 bg-white overflow-hidden">
			{/* --- Infinite Logo Scroll --- */}
			<div className="mb-20 ">
				<p className="text-center text-[#F4911E] text-xs font-bold uppercase tracking-widest mb-8">
					Our Partnership
				</p>
				<div className="relative flex overflow-x-hidden max-w-7xl mx-auto  pb-12">
					<motion.div
						className="flex whitespace-nowrap"
						animate={{ x: ["0%", "-50%"] }}
						transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
						{[...logos, ...logos].map((logo, index) => (
							<div
								key={index}
								className="mx-4 flex-shrink-0 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
								<img
									src={logo}
									alt="Partner Logo"
									className="h-15 w-auto object-contain"
								/>
							</div>
						))}
					</motion.div>
				</div>

				<hr className="h-[1.33px] w-full border-none bg-gradient-to-r from-transparent via-[#F4911E] to-transparent opacity-40" />
			</div>

			{/* --- Main Content Section --- */}
			<div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row gap-12 items-center mb-24">
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					className="space-y-6">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8F8F8F33] bg-white text-[#F4911E] text-[10px] font-bold uppercase">
						<Image
							src="/curl.svg"
							width={20}
							height={20}
							alt="target"
							className="object-contain"
						/>
						About Us
					</div>
					<h2 className="text-[#05213A] text-4xl md:text-5xl font-bold tracking-tighter leading-tighter">
						Medvisit is Nigeria&apos;s leading medical tourism and international
						second opinion company.
					</h2>
					<div className="space-y-4 text-[#5E5F6E] leading-tight font-semibold text-xl pr-0 sm:pr-20">
						<p>
							We are dedicated to providing Nigerians with seamless access to
							superior healthcare solutions worldwide.
						</p>
						<p>
							Whether you&apos;re a patient seeking clarity on your diagnosis or
							a doctor looking to enhance your practice, MedVisit is here to
							support you every step of the way.
						</p>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					className="relative rounded-2xl overflow-hidden shadow-2xl">
					<img
						src="/doc.png"
						alt="Doctor smiling"
						className="w-full h-auto object-cover"
					/>
				</motion.div>
			</div>

			<hr className="h-[1.33px] w-full border-none bg-gradient-to-r from-transparent via-[#F4911E] to-transparent opacity-40" />

			{/* --- Statistics Section --- */}
			<div className="max-w-7xl mx-auto px-6 pt-10">
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
					{stats.map((stat, idx) => (
						<div key={idx} className="relative group text-center lg:text-left">
							{/* Vertical Divider for desktop */}
							{idx !== 0 && (
								<div className="hidden lg:block absolute left-[-5rem] top-1/2 -translate-y-1/2 w-[1px] h-full bg-gray-200" />
							)}

							<h3 className="text-[#F4911E] text-4xl md:text-5xl font-bold mb-2">
								<Counter value={stat.value} />
								{stat.suffix}
							</h3>
							<p className="text-gray-600 text-xs md:text-sm font-medium">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
