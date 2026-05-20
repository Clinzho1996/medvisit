"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface HospitalCardProps {
	imageSrc: string;
	name: string;
	location: string;
	index: number;
}

// Card layout matching your core design system language precisely
const HospitalCard = ({
	imageSrc,
	name,
	location,
	index,
}: HospitalCardProps) => {
	return (
		<motion.div
			layout
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, scale: 0.95 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
			whileHover={{
				y: -8,
				boxShadow:
					"0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)",
			}}
			className="bg-white rounded-xl h-fit overflow-hidden flex flex-col border border-[#0000000F] transition-all duration-300 group shadow-2xl shadow-[#0000000F]">
			{/* Image Aspect Box */}
			<div className="relative w-full h-48 overflow-hidden bg-gray-50">
				<Image
					src={imageSrc}
					alt={name}
					fill
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
					className="object-cover transition-transform duration-500 group-hover:scale-105"
				/>
			</div>

			{/* Typography Content Platform */}
			<div className="p-5 flex flex-col items-start space-y-2">
				<div className="flex items-center space-x-3 w-full">
					{/* Orange Indicator Bar Segment */}
					<div className="w-8 h-[3px] bg-[#F7931E] rounded-full shrink-0" />

					<h3 className="text-xs sm:text-sm font-bold text-[#05213A] tracking-tight line-clamp-1">
						{name},{" "}
						<span className="font-medium text-gray-500">{location}</span>
					</h3>
				</div>
			</div>
		</motion.div>
	);
};

export default function ExploreHospitalsSection() {
	// Unique list of tracking regions derived from wireframe filters
	const tabs = ["ALL", "INDIA", "UAE", "ISREAL", "GERMANY", "EGYPT", "UK"];
	const [activeTab, setActiveTab] = useState("ALL");

	// Dataset matrix matching the preview visual index exactly
	const hospitalsData = [
		{
			name: "Artemis Hospital",
			location: "Gurgaon, India",
			region: "INDIA",
			imageSrc: "/artemis.png",
		},
		{
			name: "Aster DM Healthcare",
			location: "UAE",
			region: "UAE",
			imageSrc: "/aster.png",
		},
		{
			name: "Fortis Healthcare Limited",
			location: "India",
			region: "INDIA",
			imageSrc: "/fortis.png",
		},
		{
			name: "Burjeel Hospitals For Advanced Surgery",
			location: "UAE",
			region: "UAE",
			imageSrc: "/burjeel.png",
		},
		{
			name: "Apollo Hospitals",
			location: "India",
			region: "INDIA",
			imageSrc: "/apollo.png",
		},
		{
			name: "Assuta Medical Centre",
			location: "Isreal",
			region: "ISREAL",
			imageSrc: "/assuta.png",
		},
		{
			name: "Herzliya Medical Center",
			location: "Isreal",
			region: "ISREAL",
			imageSrc: "/herzliya.png",
		},
		{
			name: "Martha Maria Hospital",
			location: "Munich, Germany",
			region: "GERMANY",
			imageSrc: "/martha-maria.png",
		},
		{
			name: "Parkside Hospital",
			location: "UK",
			region: "UK",
			imageSrc: "/parkside.png",
		},
	];

	// Filter computation engine running reactively
	const filteredHospitals =
		activeTab === "ALL"
			? hospitalsData
			: hospitalsData.filter((h) => h.region === activeTab);

	return (
		<section className="w-full bg-[#FAFCFE] py-20 px-[9%] font-sans overflow-hidden">
			<div className="mx-auto w-full space-y-12 relative z-10">
				{/* --- HEADER CONTROLLER --- */}
				<div className="text-center space-y-4 max-w-2xl mx-auto">
					<h2 className="text-2xl md:text-5xl font-extrabold text-[#05213A] tracking-tighter">
						Explore Some Of Our Hospitals
					</h2>
					<p className="text-[#000000B2] text-xs md:text-lg font-normal tracking-tight leading-relaxed">
						Each of the hospitals in our network stands out as a leader in its
						own field. We also work closely with these hospitals to ensure that
						from arrival to departure, our client's expectations are exceeded.
					</p>
				</div>

				{/* --- NAVIGATION FILTER TABS --- */}
				<div className="w-full overflow-x-auto no-scrollbar bg-[#F5F7FA] rounded-md p-1 border border-gray-100">
					<div className="flex items-center justify-between min-w-[640px] md:min-w-full md:justify-center md:space-x-16 px-4 py-2">
						{tabs.map((tab) => {
							const isActive = activeTab === tab;
							return (
								<button
									key={tab}
									onClick={() => setActiveTab(tab)}
									className={`relative text-xs sm:text-lg tracking-tighter font-bold  px-4 py-1.5 transition-colors duration-200 cursor-pointer uppercase ${
										isActive
											? "text-[#F7931E]"
											: "text-[#05213A] hover:text-[#05213A]"
									}`}>
									<span className="relative z-10">{tab}</span>
									{isActive && (
										<motion.div
											layoutId="activeHospitalTabIndicator"
											className="absolute inset-0 bg-transparent  z-0"
											transition={{
												type: "spring",
												stiffness: 380,
												damping: 30,
											}}
										/>
									)}
								</button>
							);
						})}
					</div>
				</div>

				{/* --- CARDS RESPONSIVE GRID LAYOUT FLOW --- */}
				<div className="pt-4">
					<motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
						<AnimatePresence mode="popLayout">
							{filteredHospitals.map((hospital, index) => (
								<HospitalCard
									key={`${hospital.name}-${activeTab}`}
									name={hospital.name}
									location={hospital.location}
									imageSrc={hospital.imageSrc}
									index={index}
								/>
							))}
						</AnimatePresence>
					</motion.div>
				</div>

				{/* --- FOOTER ACTION TRIGGER --- */}
				<Link
					href="/medical-tourism/contact-us"
					className="pt-4 text-center justify-center flex">
					<motion.button
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.98 }}
						className="border border-[#F7931E] hover:bg-[#F7931E] hover:text-white text-[#F7931E] text-xs font-bold px-12 py-3 cursor-pointer rounded-md transition-colors duration-200">
						Learn More
					</motion.button>
				</Link>
			</div>
		</section>
	);
}
