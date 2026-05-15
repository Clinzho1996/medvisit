"use client";

import { IconCheck } from "@tabler/icons-react";
import { motion } from "framer-motion";

// --- Sub-Component: Program Overview Table (Top part of Screenshot) ---
const ProgramOverview = () => {
	const programs = [
		{
			name: "São Tomé & Príncipe",
			investment: "$90,000",
			access: "130+ Countries",
			processing: "8-12 months",
			flag: "🇸🇹",
		},
		{
			name: "Vanuatu",
			investment: "$150,000",
			access: "125+ Countries",
			processing: "4-8 months",
			flag: "🇻🇺",
		},
		{
			name: "Dominica",
			investment: "$200,000",
			access: "145+ Countries",
			processing: "8-12 months",
			flag: "🇩🇲",
		},
		{
			name: "Grenada",
			investment: "$235,000",
			access: "145+ Countries",
			processing: "8-12 months",
			flag: "🇬🇩",
		},
		{
			name: "St. Kitts & Nevis",
			investment: "$250,000",
			access: "150+ Countries",
			processing: "8-12 months",
			flag: "🇰🇳",
		},
	];

	return (
		<section className="bg-white py-16 px-6 md:px-[8%]">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-[#05213A] mb-2">
						Program Overview
					</h2>
					<p className="text-gray-500 text-sm">
						Compare top citizenship by investment programs worldwide.
					</p>
				</div>

				<div className="overflow-hidden rounded-xl border border-[#00000014] shadow-sm">
					<table className="w-full text-left border-collapse">
						<thead>
							<tr className="bg-[#F9FAFB] border-b border-[#00000014]">
								<th className="p-4 text-[10px] uppercase tracking-widest font-black text-[#05213A]">
									Program
								</th>
								<th className="p-4 text-[10px] uppercase tracking-widest font-black text-[#05213A]">
									Investment
								</th>
								<th className="p-4 text-[10px] uppercase tracking-widest font-black text-[#05213A]">
									Visa-Free Access
								</th>
								<th className="p-4 text-[10px] uppercase tracking-widest font-black text-[#05213A]">
									Processing Time
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-50">
							{programs.map((p, i) => (
								<tr key={i} className="hover:bg-gray-50/50 transition-colors">
									<td className="p-4 text-sm font-bold text-[#05213A] flex items-center gap-2">
										<span>{p.flag}</span> {p.name}
									</td>
									<td className="p-4 text-sm text-gray-600">{p.investment}</td>
									<td className="p-4 text-sm text-gray-600">{p.access}</td>
									<td className="p-4 text-sm text-gray-600">{p.processing}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<p className="text-center text-[#F4911E] text-[10px] mt-6 font-medium italic">
					* All fees subject to change. Contact us for current pricing and
					availability.
				</p>
			</div>
		</section>
	);
};

// --- Sub-Component: Featured CBI Programs (Bottom part of Screenshot) ---
const FeaturedPrograms = () => {
	const tracks = [
		{
			title: "São Tomé & Príncipe",
			subtitle: "Most Affordable CBI Program",
			investment: "$90,000 (Funds)",
			visaFree: "130+ countries",
			processing: "8-12 months",
			requirements: [
				"Africa-based program",
				"Visa-free access to Schengen and UK",
				"No minimum stay requirement",
			],
			flag: "🇸🇹",
		},
		{
			title: "Dominica",
			subtitle: "The Caribbean's Most Established Program",
			investment: "$200,000 (Funds)",
			visaFree: "145+ countries",
			processing: "8-12 months",
			requirements: [
				"No residency requirement",
				"Full family inclusion",
				"Established program since 1993",
			],
			flag: "🇩🇲",
		},
		{
			title: "Grenada",
			subtitle: "The Only Program with USA E-2 Visa Access",
			investment: "$235,000 (Funds)",
			visaFree: "145+ countries",
			processing: "8-12 months",
			requirements: [
				"E-2 Investor Visa access to USA",
				"Family inclusion",
				"Strong real estate options",
			],
			flag: "🇬🇩",
		},
	];

	return (
		<div className="w-full faq-bg py-24 px-6 md:px-[5%] relative overflow-hidden bg-[#FDFDFD]">
			<div className="text-center mb-16 relative z-10">
				<h2 className="text-4xl font-bold text-[#05213A] tracking-tighter mb-4">
					Featured CBI Programs
				</h2>
				<p className="text-gray-500 text-base">
					Explore the most popular citizenship pathways for Nigerian families.
				</p>
			</div>

			<div className="max-w-7xl mx-auto bg-[#F9F9F9] p-6 md:p-8 rounded-[2.5rem] shadow-sm shadow-[#1F1F1F14]">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{tracks.map((track, idx) => (
						<motion.div
							key={idx}
							whileHover={{ y: -5 }}
							className="bg-white rounded-2xl p-8 border border-[#00000014] flex flex-col shadow-sm">
							<h3 className="text-2xl tracking-tighter font-bold text-[#05213A] leading-tight mb-1 flex items-center gap-2">
								<span>{track.flag}</span> {track.title}
							</h3>
							<p className="text-[#F4911E] text-[11px] font-bold tracking-wide mb-8">
								{track.subtitle}
							</p>

							<div className="space-y-4 mb-8">
								<div>
									<p className="text-sm font-normals text-[#05213A]">
										<span className="text-sm font-black text-[#05213A] uppercase mb-1">
											Investment:
										</span>{" "}
										{track.investment}
									</p>
								</div>
								<div>
									<p className="text-sm font-normal text-[#05213A]">
										<span className="text-sm font-black text-[#05213A] uppercase mb-1">
											Visa-Free:
										</span>{" "}
										{track.visaFree}
									</p>
								</div>
								<div>
									<p className="text-sm font-normal text-[#05213A]">
										<span className="text-sm font-bold text-[#05213A] uppercase mb-1">
											Processing:
										</span>{" "}
										{track.processing}
									</p>
								</div>
							</div>

							<div className="mt-auto border-t border-gray-50 pt-6">
								<span className="text-[11px] font-black text-[#05213A] uppercase block mb-4">
									Key Benefits:
								</span>
								<ul className="space-y-3">
									{track.requirements.map((req, i) => (
										<li key={i} className="flex items-start gap-2">
											<IconCheck
												size={14}
												className="text-[#F4911E] shrink-0 mt-0.5"
												stroke={3}
											/>
											<span className="text-xs text-[#05213A] leading-tight font-medium">
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

const CbiInfoPage = () => {
	return (
		<main className="bg-white">
			<ProgramOverview />
			<FeaturedPrograms />
		</main>
	);
};

export default CbiInfoPage;
