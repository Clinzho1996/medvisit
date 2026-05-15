"use client";

import { IconCheck } from "@tabler/icons-react";
import { motion } from "framer-motion";

// --- Sub-Component: Golden Visa Comparison Table ---
const ProgramOverview = () => {
	const programs = [
		{
			name: "UAE Golden Visa",
			investment: "AED 2M (~$545k)",
			term: "10 years",
			path: "Yes (permanent)",
			stay: "None",
			flag: "🇦🇪",
		},
		{
			name: "Portugal",
			investment: "€500k",
			term: "5 years",
			path: "Yes (EU passport)",
			stay: "7 days/year",
			flag: "🇵🇹",
		},
		{
			name: "Panama",
			investment: "$250k (Real Estate)",
			term: "Permanent",
			path: "Yes (5 years)",
			stay: "None",
			flag: "🇵🇦",
		},
		{
			name: "Uruguay",
			investment: "Passive income",
			term: "Permanent",
			path: "Yes (5 years)",
			stay: "None",
			flag: "🇺🇾",
		},
	];

	return (
		<section className="bg-white py-16 px-6 md:px-[8%]">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-[#05213A] mb-2">
						Golden Visa Comparison
					</h2>
					<p className="text-gray-500 text-sm">
						Compare top residency-by-investment programs worldwide.
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
									Residency Term
								</th>
								<th className="p-4 text-[10px] uppercase tracking-widest font-black text-[#05213A]">
									Path to Citizenship
								</th>
								<th className="p-4 text-[10px] uppercase tracking-widest font-black text-[#05213A]">
									Minimum Stay
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
									<td className="p-4 text-sm text-gray-600">{p.term}</td>
									<td className="p-4 text-sm text-gray-600">{p.path}</td>
									<td className="p-4 text-sm text-gray-600">{p.stay}</td>
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

// --- Sub-Component: Golden Visa Programs Cards ---
const FeaturedPrograms = () => {
	const tracks = [
		{
			title: "UAE Golden Visa",
			subtitle: "10-Year Residency in Dubai & Abu Dhabi",
			investment: "AED 2,000,000 (~$545,000)",
			processing: "4-6 months",
			benefits: [
				"10-year renewable residency",
				"No minimum stay requirement",
				"100% business ownership",
				"Family sponsorship included",
				"Path to permanent residency",
			],
			flag: "🇦🇪",
		},
		{
			title: "Portugal Golden Visa",
			subtitle: "Path to EU Citizenship",
			investment: "€500,000 (Funds)",
			processing: "12-18 months",
			benefits: [
				"Path to EU citizenship after 5 years",
				"Schengen visa-free travel",
				"Family inclusion",
			],
			flag: "🇵🇹",
		},
		{
			title: "Panama Friendly Nations Visa",
			subtitle: "Business Hub in the Americas",
			investment: "$250,000 (Real Estate)",
			processing: "12-18 months",
			benefits: [
				"Permanent residency",
				"Work rights",
				"Path to citizenship after 5 years",
				"No minimum stay",
			],
			flag: "🇵🇦",
		},
		{
			title: "Uruguay Residency",
			subtitle: "Stable, Safe, and Growing",
			investment: "Passive income route",
			processing: "12-18 months",
			benefits: [
				"Path to citizenship",
				"No minimum stay",
				"Stable economy",
				"High quality of life",
			],
			flag: "🇺🇾 ",
		},
	];

	return (
		<div className="w-full faq-bg py-24 px-6 md:px-[5%] relative overflow-hidden bg-[#FDFDFD]">
			<div className="text-center mb-16 relative z-10">
				<h2 className="text-4xl font-bold text-[#05213A] tracking-tighter mb-4">
					Golden Visa Programs
				</h2>
				<p className="text-gray-500 text-base">
					Explore the most desirable residency destinations globally.
				</p>
			</div>

			<div className="max-w-7xl mx-auto bg-[#F9F9F9] p-6 md:p-8 rounded-[2.5rem] shadow-sm shadow-[#CCCCCC]">
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
					{tracks.map((track, idx) => (
						<motion.div
							key={idx}
							whileHover={{ y: -5 }}
							className="bg-white rounded-2xl p-8 border border-[#00000014] flex flex-col ">
							<h3 className="text-2xl tracking-tighter font-bold text-[#05213A] leading-tight mb-1 flex items-center gap-2">
								<span>{track.flag}</span> {track.title}
							</h3>
							<p className="text-[#F4911E] text-[11px] font-bold tracking-wide mb-8">
								{track.subtitle}
							</p>

							<div className="space-y-4 mb-8">
								<div>
									<p className="text-sm font-normal text-[#05213A]">
										<span className="text-[11px] font-bold text-[#05213A] uppercase mb-1">
											Investment:
										</span>{" "}
										{track.investment}
									</p>
								</div>
								<div>
									<p className="text-sm font-normal text-[#05213A]">
										<span className="text-[11px] font-bold text-[#05213A] uppercase mb-1">
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
									{track.benefits.map((benefit, i) => (
										<li key={i} className="flex items-start gap-2">
											<IconCheck
												size={14}
												className="text-[#F4911E] shrink-0 mt-0.5"
												stroke={3}
											/>
											<span className="text-xs text-[#05213A] leading-tight font-medium">
												{benefit}
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

const GloInfoPage = () => {
	return (
		<main className="bg-white">
			<ProgramOverview />
			<FeaturedPrograms />
		</main>
	);
};

export default GloInfoPage;
