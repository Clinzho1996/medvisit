"use client";

import { motion } from "framer-motion";

const CitizenshipPath = () => {
	const timeline = [
		{
			year: "Year 1-2",
			status: "Temporary Residency",
			benefits:
				"Work rights included, no minimum stay (Rentier track), build ties to Chile",
		},
		{
			year: "Year 3-4",
			status: "Permanent Residency",
			benefits: "Indefinite stay, full work rights, social benefits",
		},
		{
			year: "Year 5+",
			status: "Chilean Citizenship",
			benefits:
				"Full passport benefits, inheritable by children, dual citizenship allowed",
		},
	];

	return (
		<section className="bg-white py-20 px-6 md:px-[10%]">
			<div className="max-w-6xl mx-auto">
				{/* Header Section */}
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-[#05213A] mb-4">
						Chilean Citizenship Path
					</h2>
					<p className="text-gray-500 text-sm md:text-base">
						A straightforward timeline from temporary residency to dual
						citizenship.
					</p>
				</div>

				{/* Timeline Table Container */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="overflow-hidden rounded-xl border border-[#00000014]">
					<table className="w-full text-left border-collapse">
						<thead>
							<tr className="bg-[#F6F6F6] border-b border-gray-100">
								<th className="p-6 text-sm uppercase tracking-widest font-black text-[#05213A] w-[20%]">
									Year
								</th>
								<th className="p-6 text-sm uppercase tracking-widest font-black text-[#05213A] w-[30%]">
									Status
								</th>
								<th className="p-6 text-sm uppercase tracking-widest font-black text-[#05213A]">
									Benefits
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-50">
							{timeline.map((item, index) => (
								<tr
									key={index}
									className="group hover:bg-gray-50/30 transition-colors">
									<td className="p-6 text-sm font-bold text-[#05213A]">
										{item.year}
									</td>
									<td className="p-6">
										<span className="text-sm font-semibold text-[#05213A] bg-blue-50/50 px-3 py-1 rounded-full group-hover:bg-blue-50 transition-colors">
											{item.status}
										</span>
									</td>
									<td className="p-6 text-sm text-[#0B2540] leading-relaxed">
										{item.benefits}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</motion.div>
			</div>
		</section>
	);
};

export default CitizenshipPath;
