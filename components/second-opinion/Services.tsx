"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ServiceCard {
	id: number;
	title: string;
	description: string;
	icon: React.ReactNode;
}

const servicesData: ServiceCard[] = [
	{
		id: 1,
		title: "Video Consultation",
		description:
			"Medvisit connects you to an expert physician who specializes in your specific health needs. You receive a secure, private online consultation without leaving home.",
		icon: <Image src="/vid.png" alt="Video" width={50} height={50} />,
	},
	{
		id: 2,
		title: "Detailed Medical Report",
		description:
			"Receive a detailed medical report about your condition with an accurate diagnosis, the best treatment plan and answers to your questions. Our medical team helps you understand the expert's report",
		icon: <Image src="/team.png" alt="Report" width={50} height={50} />,
	},
	{
		id: 3,
		title: "Travel Abroad For Treatment",
		description:
			"Where the required treatment is not available locally in Nigeria, Medvisit enables you to travel abroad to consult the expert or to receive your treatment or operation",
		icon: <Image src="/med.png" alt="Travel" width={50} height={50} />,
	},
];

export default function OurServices() {
	return (
		<section className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:pb-24">
			{/* Section Header */}
			<div className="text-center">
				<h2 className="text-3xl font-extrabold tracking-tight text-[#0A2540] md:text-4xl">
					Our Services
				</h2>
			</div>

			{/* Services Cards Grid */}
			<div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
				{servicesData.map((service) => (
					<div
						key={service.id}
						className="group relative flex flex-col justify-between bg-white px-12 py-12 transition-all duration-300 hover:-translate-y-1 rounded-sm border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
						<div>
							{/* Tabler Icon Container wrapper */}
							<div className="text-[#F39223] transition-transform duration-300 group-hover:scale-105">
								{service.icon}
							</div>

							{/* Card Header Title */}
							<h3 className="mt-6 text-lg font-bold text-[#0A2540] md:text-xl">
								{service.title}
							</h3>

							{/* Card Paragraph Description */}
							<p className="mt-4 text-sm leading-relaxed text-gray-500">
								{service.description}
							</p>
						</div>

						{/* Orange Underline Accent Strip */}
						<div className="absolute bottom-0 left-0 h-1 w-full bg-[#F39223] transform scale-x-100 transition-transform duration-300 mb-3" />
					</div>
				))}
			</div>

			{/* Footer Bottom Helper Text Row */}
			<div className="mt-16 flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-6">
				<p className="text-sm font-bold text-[#0A2540] sm:text-base">
					No matter the complexity of your medical case, our experts can help.
				</p>

				<Link
					href="/second-opinion/start-consultation"
					className="inline-block rounded-[4px] border border-[#F39223] bg-white px-6 py-2.5 text-xs sm:text-base font-extrabold text-[#F39223] transition-all duration-200 hover:bg-[#F39223] hover:text-white active:scale-[0.98]">
					Book Second Opinion Now.
				</Link>
			</div>
		</section>
	);
}
