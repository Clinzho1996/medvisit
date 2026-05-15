"use client";

import {
	IconBriefcase,
	IconCheck,
	IconHome,
	IconUsers,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

// --- Sub-Component: Who This Is For (Top Section of last screenshot) ---
const WhoThisIsFor = () => {
	const categories = [
		{
			title: "For Parents of Chilean-Born Children",
			icon: <IconUsers className="text-[#F4911E]" size={24} />,
			description:
				"Authorized partner for Chile Kids — 8+ years experience, 200+ families assisted. We don't just resell services; we are your direct connection and boots on the ground in Chile.",
		},
		{
			title: "For Business Owners & Investors",
			icon: <IconBriefcase className="text-[#F4911E]" size={24} />,
			description:
				'The "Rentista" residency program offers a path for those with passive income or investment capacity.',
		},
		{
			title: "For Families Seeking Stability",
			icon: <IconHome className="text-[#F4911E]" size={24} />,
			description:
				"Chile is South America's most stable economy, with world-class healthcare, education, and safety.",
		},
	];

	return (
		<section className="bg-white py-16 px-6 md:px-[8%]">
			<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
				<div className="lg:w-1/2 space-y-10">
					<h2 className="text-4xl font-bold text-[#05213A] tracking-tight">
						Who This Is For
					</h2>
					<div className="space-y-8">
						{categories.map((cat, i) => (
							<div key={i} className="flex gap-4 items-start">
								<div className="mt-1">{cat.icon}</div>
								<div>
									<h4 className="font-bold text-[#05213A] text-lg mb-2">
										{cat.title}
									</h4>
									<p className="text-gray-500 text-sm leading-relaxed max-w-md">
										{cat.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="lg:w-1/2">
					<img
						src="/res.png"
						alt="Santiago Skyline"
						className="rounded-3xl shadow-2xl w-full object-cover h-[450px]"
					/>
				</div>
			</div>
		</section>
	);
};

// --- Sub-Component: 3-Step Process (Bottom Section of last screenshot) ---
const StepProcess = () => {
	const tracks = [
		{
			title: "Temporary Residence — Relative Track",
			subtitle: "For Parents of Chilean-Born Children",
			processing: "9-12 months",
			benefits:
				"2-year renewable residency, full work rights, path to permanent residency after 2 years, option to apply for citizenship after 5 years",
			requirements: [
				"Child born in Chile with Chilean citizenship",
				"Proof of relationship",
				"Valid passport",
				"Clean criminal record",
			],
		},
		{
			title: "Temporary Residence — Rentier Track",
			subtitle: "For Investors and Passive Income Earners",
			processing: "9-12 months",
			benefits:
				"2-year renewable residency, full work rights, path to permanent residency after 2 years, option to apply for citizenship after 5 years",
			requirements: [
				"Proof of passive income (investments, pensions, rental income)",
				"Valid passport",
				"Clean criminal record",
			],
		},
		{
			title: "Permanent Residence",
			subtitle: "For Those Already in Chile on Temporary Status",
			processing: "1-2 years",
			benefits:
				"Indefinite stay in Chile, full work rights, path to citizenship after 5 years total",
			requirements: [
				"2 years of temporary residency in Chile",
				"Clean criminal record",
				"Proof of integration",
			],
		},
	];

	return (
		<div className="w-full faq-bg py-24 px-6 md:px-[5%] relative overflow-hidden">
			<div className="text-center mb-16 relative z-10">
				<h2 className="text-4xl font-bold text-[#05213A] tracking-tighter mb-4">
					How It Works: Simple 3-Step Process
				</h2>
				<p className="text-gray-500 text-base">
					From your initial consultation to receiving your child's passport.
				</p>
			</div>

			{/* The Grey Container from Screenshot */}
			<div className="max-w-7xl mx-auto bg-[#F9F9F9] p-6 md:p-8 rounded-[2.5rem] shadow-sm shadow-[#1F1F1F14]">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{tracks.map((track, idx) => (
						<motion.div
							key={idx}
							whileHover={{ y: -5 }}
							className="bg-white rounded-2xl p-8 border border-[#00000014]  flex flex-col">
							<h3 className="text-xl sm:text-3xl tracking-tighter font-bold text-[#05213A] leading-tight mb-2">
								{track.title}
							</h3>
							<p className="text-[#F4911E] text-[11px] font-bold tracking-wide mb-6">
								{track.subtitle}
							</p>

							<div className="space-y-4 mb-8">
								<div>
									<p className="text-sm font-normal text-gray-700">
										<span className="text-sm tracking-tighter font-bold text-[#05213A] uppercase">
											Processing:
										</span>{" "}
										{track.processing}
									</p>
								</div>
								<div>
									<p className="text-sm font-normal tracking-tighter text-[#05213A] leading-relaxed">
										<span className="text-sm tracking-tighter font-bold text-[#05213A] uppercase">
											Benefits:
										</span>{" "}
										{track.benefits}
									</p>
								</div>
							</div>

							<div className="mt-auto border-t border-gray-50 pt-6">
								<span className="text-sm tracking-tighter font-black text-[#05213A] uppercase block mb-4">
									Requirements:
								</span>
								<ul className="space-y-3">
									{track.requirements.map((req, i) => (
										<li key={i} className="flex items-start gap-2">
											<IconCheck
												size={14}
												className="text-[#F4911E] shrink-0 mt-0.5"
												stroke={3}
											/>
											<span className="text-sm text-[#05213A] leading-tight">
												{req}
											</span>
										</li>
									))}
								</ul>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

const ResInfoPage = () => {
	return (
		<main className="bg-white">
			<WhoThisIsFor />
			<StepProcess />
		</main>
	);
};

export default ResInfoPage;
