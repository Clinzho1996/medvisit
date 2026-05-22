"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

function MentionsProcess() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const partners = [
		{ id: 1, src: "/pr1.png", alt: "ILAC" },
		{ id: 2, src: "/pr2.png", alt: "ANAB" },
		{ id: 3, src: "/pr3.png", alt: "CAP" },
		{ id: 4, src: "/pr4.png", alt: "SGS" },
		{ id: 5, src: "/pr5.png", alt: "ITA" },
		{ id: 5, src: "/pr6.png", alt: "ITA" },
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: {
			opacity: 0,
			y: 50,
			scale: 0.8,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: "spring" as any,
				stiffness: 100,
				damping: 15,
			},
		},
	};

	const headingVariants: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring" as any,
				stiffness: 100,
				damping: 15,
				duration: 0.6,
			},
		},
	};

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			className="flex flex-col justify-center border-t items-center pb-12 pt-12 sm:py-[6%] px-4 sm:px-6 w-full">
			<motion.h2
				variants={headingVariants}
				className="text-xs sm:text-lg uppercase tracking-tight  font-extrabold text-center text-[#05213A] mb-4 ">
				Get Treatment From World-Class Hospitals
			</motion.h2>

			<motion.div
				variants={containerVariants}
				className="flex flex-wrap justify-center items-center gap-6 sm:gap-8  max-w-7xl mx-auto">
				{partners.map((partner) => (
					<motion.div
						key={partner.id}
						variants={itemVariants}
						whileHover={{
							scale: 1.1,
							transition: { type: "spring", stiffness: 300 },
						}}
						whileTap={{ scale: 0.95 }}
						className="flex items-center justify-center p-2 sm:p-3 bg-white hover:shadow-md hover:rounded-sm transition-shadow duration-300">
						<Image
							src={partner.src}
							alt={partner.alt}
							width={150}
							height={50}
							className="object-contain w-20 h-16 sm:w-40 sm:h-10"
						/>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
}

export default MentionsProcess;
