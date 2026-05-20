"use client";

import Image from "next/image";

interface Specialty {
	id: string;
	name: string;
	iconPath: string;
}

const specialtiesData: Specialty[] = [
	{ id: "1", name: "Cancer Treatments", iconPath: "/canc3.png" },
	{ id: "2", name: "Cardiac Treatments", iconPath: "/cardiac.png" },
	{ id: "3", name: "ENT", iconPath: "/ent.png" },
	{ id: "4", name: "Gastrointestinal Surgery", iconPath: "/gastro.png" },
	{ id: "5", name: "Nephrology", iconPath: "/neph.png" },
	{ id: "6", name: "Neurology", iconPath: "/neurology.png" },
	{ id: "7", name: "Ophthalmology", iconPath: "/opth.png" },
	{ id: "8", name: "Organ Transplantation", iconPath: "/org.png" },
	{ id: "9", name: "Orthopedics", iconPath: "/orth.png" },
	{ id: "10", name: "Obstetrics & Gynecology", iconPath: "/obs.png" },
	{ id: "11", name: "Rheumatology", iconPath: "/rhe.png" },
	{ id: "12", name: "Pediatric", iconPath: "/ped.png" },
];

export default function ChooseMedicalSpecialty() {
	return (
		<section className="w-full bg-white px-6 py-16 md:px-8 lg:py-24">
			<div className="mx-auto max-w-7xl">
				{/* --- Section Header Section --- */}
				<div className="mx-auto mb-16 max-w-3xl text-center">
					<h2 className="text-2xl font-extrabold tracking-tight text-[#0A2540] sm:text-3xl md:text-4xl">
						Choose Medical Specialty
					</h2>
					{/* <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-gray-400 sm:text-sm">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus erat
						purus pulvinar ac et.
						<br className="hidden sm:inline" />
						Vitae elementum lobortis pellentesque auctor. Bibendum interdu
					</p> */}
				</div>

				{/* --- Unified Multi-Row Layout Grid --- */}
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-6">
					{specialtiesData.map((item) => (
						<div
							key={item.id}
							className="group flex aspect-square flex-col items-center justify-center rounded-lg bg-white p-4 text-center border border-gray-50/50 shadow-[0_10px_35px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.07)]">
							{/* Graphic Icon Wrapper Container */}
							<div className="relative h-14 w-14 transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16">
								<Image
									src={item.iconPath}
									alt={item.name}
									fill
									sizes="(max-width: 640px) 56px, 64px"
									className="object-contain"
									priority
								/>
							</div>

							{/* Specialty Text Heading Descriptor Label */}
							<h3 className="mt-4 text-[11px] font-bold leading-tight tracking-tight text-[#0A2540] sm:text-xs md:text-sm">
								{item.name}
							</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
