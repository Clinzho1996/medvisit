"use client";
import { IconCaretRightFilled } from "@tabler/icons-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

function Hero() {
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	const imageVariants: Variants = {
		hidden: { opacity: 0, scale: 0.9, x: 50 },
		visible: {
			opacity: 1,
			scale: 1,
			x: 0,
			transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
		},
	};

	const buttonVariants: Variants = {
		hover: {
			scale: 1.05,
			transition: { duration: 0.2, ease: "easeInOut" },
		},
		tap: { scale: 0.95 },
	};

	return (
		<div className="px-[4%] sm:px-[8%] py-5 bg-white overflow-hidden">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				variants={containerVariants}
				className="flex flex-col lg:flex-row items-stretch gap-10 bg-[#D7DAEE] rounded-3xl p-3 md:p-4 mb-20">
				<div className="flex-1 py-6 px-3">
					<motion.h1
						variants={itemVariants}
						className="text-[#05213A] text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4">
						Unlock Global <br className="hidden sm:block" /> Freedom for Your
						<br className="hidden sm:block" /> Family — From $22,000
					</motion.h1>

					<motion.p
						variants={itemVariants}
						className="text-[#05213A] text-md pr-0 sm:pr-16 tracking-tight mb-4">
						Medvisit Nigeria now offers the world&apos;s most affordable
						pathways to second passports, residency, and global citizenship. No
						complicated requirements. Just smart, legal solutions for Nigerian
						families.
					</motion.p>

					<motion.div
						variants={itemVariants}
						className="flex flex-row justify-start items-center gap-5 mt-6">
						<motion.button
							variants={buttonVariants}
							whileHover="hover"
							whileTap="tap"
							className="flex items-center gap-2 bg-[#F4911E] text-white px-6 py-3 rounded-lg text-sm font-bold shadow-[#F7931E70] shadow-lg">
							Explore your Options
							<IconCaretRightFilled size={18} stroke={3} />
						</motion.button>
						<motion.button
							variants={buttonVariants}
							whileHover="hover"
							whileTap="tap"
							className="hidden sm:flex items-center gap-2 bg-transparent border-2 border-[#05183A] text-sm text-[#05183A] px-6 py-3 rounded-lg font-bold hover:bg-[#05183A] hover:text-white transition-colors">
							Book Free Consultation
							<IconCaretRightFilled size={18} stroke={3} />
						</motion.button>
					</motion.div>

					<motion.hr
						variants={itemVariants}
						className="mt-4 hidden sm:block text-[#00000014] h-[1px] border-0 bg-[#00000014]"
					/>

					<motion.div
						variants={itemVariants}
						className="hidden flex-col sm:flex-row sm:flex justify-start items-center gap-3 mt-6 mb-0">
						<motion.p
							whileHover={{ scale: 1.05 }}
							className="text-[#05213ACC] text-sm font-medium">
							Authorized Partner: 7+ Citizenship Programs
						</motion.p>
						<p className="text-[#05213ACC] font-medium hidden sm:block">|</p>
						<motion.div
							whileHover={{ scale: 1.05, rotate: 5 }}
							transition={{ duration: 0.2 }}>
							<Image src="/wave.png" alt="Medvisit" width={150} height={100} />
						</motion.div>
						<p className="text-[#05213ACC] font-medium hidden sm:block">|</p>
						<motion.div
							whileHover={{ scale: 1.1, rotate: 5 }}
							transition={{ duration: 0.2 }}>
							<Image src="/kid.png" alt="Medvisit" width={50} height={50} />
						</motion.div>
					</motion.div>
				</div>

				<motion.div
					variants={imageVariants}
					className="hidden sm:flex flex-1  items-stretch">
					<div className="relative w-full h-full min-h-[250px] lg:min-h-full">
						<Image
							src="/global-mobility.png"
							alt="Global Mobility"
							fill
							className="object-contain rounded-2xl lg:rounded-r-3xl lg:rounded-l-none"
							sizes="(max-width: 768px) 70vw, (max-width: 1200px) 70vw, 53vw"
							priority
						/>
					</div>
				</motion.div>

				<motion.div variants={imageVariants} className="block sm:hidden flex-1">
					<div className="relative w-full h-full ">
						<Image
							src="/mobg.png"
							alt="Global Mobility"
							height={430}
							width={300}
							className="object-contain w-full"
						/>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
}

export default Hero;
