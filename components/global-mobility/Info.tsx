"use client";

import { IconCheck } from "@tabler/icons-react";
import { motion } from "framer-motion";

// --- Sub-Component: Passport Power Table ---
const PassportPowerTable = () => {
	const regions = [
		{
			region: "North America",
			countries: "USA (ESTA), Canada (eTA), Mexico",
			flag: "🇺🇸",
		},
		{
			region: "Europe",
			countries: "UK, Ireland, Schengen Zone (26 countries)",
			flag: "🇪🇺",
		},
		{
			region: "Asia",
			countries: "Japan, South Korea, Singapore, Israel",
			flag: "🇯🇵",
		},
		{
			region: "Oceania",
			countries: "Australia (eVisitor), New Zealand (nZETA)",
			flag: "🇦🇺",
		},
		{
			region: "South America",
			countries: "All countries visa-free",
			flag: "🇨🇱",
		},
	];

	return (
		<div className="w-full  mx-auto mb-0 bg-[#F9F9F9] p-[8%]">
			<h2 className="text-3xl font-bold text-[#0F2331] text-center mb-12">
				What Makes the Chilean Passport So Powerful?
			</h2>

			{/* Stats Hero Card */}
			<div className="bg-white border border-b-0 border-[#05213A14] p-4 rounded-t-lg">
				<div className="bg-[#F5F5F5] rounded-2xl b  flex flex-col md:flex-row items-center justify-around mb-2  relative overflow-hidden">
					<div className="text-center z-10">
						<span className="text-5xl font-bold text-[#F7931E]">#14</span>
						<p className="font-bold text-[#0F2331] mt-2">Global Ranking</p>
						<p className="text-xs text-gray-400 mt-1">
							Henley Passport Index equivalent
						</p>
					</div>
					<div className="h-16 w-[1px] bg-gray-200 hidden md:block" />
					<div className="text-center z-10 mt-8 md:mt-0">
						<span className="text-5xl font-bold text-[#F7931E]">175+</span>
						<p className="font-bold text-[#0F2331] mt-2">Visa-Free Countries</p>
						<p className="text-xs text-gray-400 mt-1">
							Unrestricted access to the world's major business hubs
						</p>
					</div>
					{/* Floating Globe Image Mockup */}
					<img
						src="/globe.png"
						className="w-full/2  h-40 rounded-full object-cover hidden lg:block opacity-80"
						alt="Globe"
					/>
				</div>
			</div>

			{/* Table Section */}
			<div className="overflow-hidden rounded-b-lg border border-[#05213A14]  bg-white">
				<table className="w-full text-left border-collapse">
					<thead>
						<tr className="bg-[#F6F6F6] border-b border-gray-100">
							<th className="p-4 text-[10px] uppercase tracking-tighter font-black text-[#05213A] w-1/3">
								Region
							</th>
							<th className="p-4 text-[10px] uppercase tracking-tighter font-black text-[#05213A]">
								Key Countries
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-50">
						{regions.map((row, i) => (
							<tr key={i} className="hover:bg-gray-50/30 transition-colors">
								<td className="p-4 flex items-center gap-3 text-sm font-bold text-[#05213A]">
									<span className="text-base">{row.flag}</span> {row.region}
								</td>
								<td className="p-4 text-sm text-[#05213A]">{row.countries}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

// --- Sub-Component: 3-Step Process ---
const StepProcess = () => {
	const steps = [
		{
			number: "1",
			title: "Plan Your Journey",
			items: [
				"Free consultation with Medvisit team",
				"Review medical history and travel requirements",
				"Select your package (Basic, Comfort, or Premium)",
				"Sign agreement and pay service fee",
			],
		},
		{
			number: "2",
			title: "Travel to Chile",
			items: [
				"Medvisit handles visa support and travel arrangements",
				"60-90 day stay in Chile (depending on package)",
				"Full concierge support: airport transfers, accommodation, translation",
				"Medical appointments coordinated with partner clinics",
			],
		},
		{
			number: "3",
			title: "Receive Citizenship",
			items: [
				"Birth registration with Chilean authorities",
				"Chilean ID card (RUT) for your child",
				"Chilean passport application completed",
			],
		},
	];

	return (
		<div className="w-full faq-bg  bg-[#FDFDFD] p-[8%] border border-gray-100  relative overflow-hidden">
			<div className="text-center mb-16 relative z-10">
				<h2 className="text-3xl sm:text-4xl tracking-tighter font-bold text-[#05213A] mb-2">
					How It Works: Simple 3-Step Process
				</h2>
				<p className="text-[#05213A] text-sm sm:text-lg">
					From your initial consultation to receiving your child's passport.
				</p>
			</div>

			<div className="bg-[#f9f9f9] px-5 py-10 rounded-lg shadow-lg shadow-[#1F1F1F14]">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
					{steps.map((step, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: idx * 0.2 }}
							className="bg-white rounded-2xl p-8 border border-[#00000014]  relative">
							{/* Step Bubble */}
							<div className="absolute -top-4 left-8 w-10 h-10 bg-[#F7931E] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-orange-200">
								{step.number}
							</div>

							<h4 className="text-lg font-bold text-[#05213A] mt-4 mb-6">
								{step.title}
							</h4>
							<ul className="space-y-4">
								{step.items.map((item, i) => (
									<li key={i} className="flex items-start gap-3">
										<IconCheck
											size={16}
											className="text-orange-400 shrink-0 mt-0.5"
											stroke={3}
										/>
										<span className="text-lg tracking-tighter text-[#05213A] leading-snug">
											{item}
										</span>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

// --- Parent Container ---
const InfoPage = () => {
	return (
		<div className="bg-white py-0">
			<PassportPowerTable />
			<StepProcess />
		</div>
	);
};

export default InfoPage;
