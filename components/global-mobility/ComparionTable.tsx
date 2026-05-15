"use client";

import {
	IconBabyCarriage,
	IconBuildingBank,
	IconId,
	IconMapPin,
} from "@tabler/icons-react";
import Link from "next/link";

const ComparisonTable = () => {
	const columns = [
		{
			title: "Chilean Birth",
			price: "From $22,000",
			link: "/global-mobility/birth-citizenship",
			icon: <IconBabyCarriage size={24} className="text-[#fff]" />,
			data: {
				visaFree: "175+ countries",
				visaFreeSub: "Incl. USA, UK, EU, Japan",
				processing: "Immediate at birth",
				processingSub: "Passport issued shortly after",
				stay: "60-90 days",
				staySub: "Required for birth & registration",
				path: "Immediate for child",
				pathSub: "5 years of residency for parents",
				inclusion:
					"Child receives citizenship, parents secure residency pathway",
				bestFor:
					"Expecting parents wanting a top-tier passport for their child",
			},
		},
		{
			title: "Chilean Residency",
			price: "From $2,750",
			link: "/global-mobility/residency",
			icon: <IconMapPin size={24} className="text-[#fff]" />,
			data: {
				visaFree: "Dependent on passport",
				visaFreeSub: "Until citizenship is acquired",
				processing: "9-12 months",
				processingSub: "For temporary residency",
				stay: "None required",
				staySub: "Under the Rentier track",
				path: "Eligible after 5 years",
				pathSub: "Of continuous legal residency",
				inclusion: "Spouses and dependent children are fully included",
				bestFor: "Professionals and investors seeking a stable Plan B",
			},
		},
		{
			title: "CBI Programs",
			price: "From $90,000",
			link: "/global-mobility/citizenship-by-investment",
			icon: <IconBuildingBank size={24} className="text-[#fff]" />,
			data: {
				visaFree: "125-160+ countries",
				visaFreeSub: "Incl. UK, Schengen Zone",
				processing: "8-24 months",
				processingSub: "Depending on selected country",
				stay: "None required",
				staySub: "For the majority of programs",
				path: "Direct Citizenship",
				pathSub: "Granted upon approval",
				inclusion: "Spouses, children, and sometimes dependent parents",
				bestFor: "High-net-worth individuals wanting immediate travel freedom",
			},
		},
		{
			title: "Golden Visas",
			price: "From $250,000",
			link: "/global-mobility/golden-visas",
			icon: <IconId size={24} className="text-[#fff]" />,
			data: {
				visaFree: "Schengen access",
				visaFreeSub: "Or regional benefits by program",
				processing: "4-18 months",
				processingSub: "Depending on selected program",
				stay: "None to 7 days/year",
				staySub: "Varies by specific country",
				path: "5 years (EU/Panama)",
				pathSub: "Or permanent residency in UAE",
				inclusion: "Spouses, children, and sometimes dependent parents",
				bestFor: "Investors looking for EU access or global real estate",
			},
		},
	];

	const rows = [
		{ label: "Visa-Free Travel", key: "visaFree", subKey: "visaFreeSub" },
		{ label: "Processing Time", key: "processing", subKey: "processingSub" },
		{ label: "Minimum Stay", key: "stay", subKey: "staySub" },
		{ label: "Path to Citizenship", key: "path", subKey: "pathSub" },
		{ label: "Family Inclusion", key: "inclusion" },
		{ label: "Best Suited For", key: "bestFor" },
	];

	return (
		<section className="bg-white faq-bg py-20 px-6">
			<div className="max-w-7xl mx-auto overflow-hidden rounded-[2rem] border border-gray-100 shadow-2xl shadow-gray-200/50 p-4 bg-[#F9F9F9]">
				<div className="overflow-x-auto">
					<table className="w-full text-left border-collapse bg-white rounded-lg">
						<thead>
							<tr className="border-b border-gray-100">
								<th className="p-8 bg-[#F2F1F4] w-[200px]">
									<span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
										Features
									</span>
								</th>
								{columns.map((col, i) => (
									<th
										key={i}
										className="p-8 min-w-[250px] border-l border-gray-50">
										<div className="flex flex-col gap-4">
											<div className="w-12 h-12 rounded-xl bg-[#F7931E] text-white flex items-center justify-center">
												{col.icon}
											</div>
											<div>
												<h3 className="text-[#05213A] font-bold text-lg leading-tight">
													{col.title}
												</h3>
												<p className="text-[#F4911E] text-sm font-bold mt-1">
													{col.price}
												</p>
											</div>
										</div>
									</th>
								))}
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-50">
							{rows.map((row, rowIndex) => (
								<tr
									key={rowIndex}
									className="group hover:bg-gray-50/30 transition-colors">
									<td className="p-8 bg-[#F2F1F4] align-top">
										<span className="text-sm font-bold text-[#05213A]">
											{row.label}
										</span>
									</td>
									{columns.map((col, colIndex) => (
										<td
											key={colIndex}
											className="p-8 border-l border-gray-50 align-top">
											<div className="space-y-1">
												<p className="text-sm font-bold text-[#05213A]">
													{col.data[row.key as keyof typeof col.data]}
												</p>
												{row.subKey && (
													<p className="text-xs text-gray-500 leading-relaxed">
														{col.data[row.subKey as keyof typeof col.data]}
													</p>
												)}
											</div>
										</td>
									))}
								</tr>
							))}
							{/* Action Buttons Row */}
							<tr className="border-t border-gray-100">
								<td className="p-8 bg-gray-50/50"></td>
								{columns.map((_, i) => (
									<td key={i} className="p-8 border-l border-gray-50">
										<Link href={columns[i].link}>
											<button className="w-full cursor-pointer py-3 px-4 rounded-lg border border-[#F4911E]/30 text-[#F4911E] text-xs font-bold hover:bg-[#F4911E] hover:text-white transition-all duration-300">
												View Details
											</button>
										</Link>
									</td>
								))}
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
};

export default ComparisonTable;
