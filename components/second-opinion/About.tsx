"use client";

import Image from "next/image";
import Link from "next/link";

export default function MedicalConsultation() {
	return (
		<section className="mx-auto px-6 py-16 md:px-[9%] lg:py-24 mt-70 sm:mt-20">
			<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
				{/* Left Content Column */}
				<div className="space-y-6 lg:col-span-6">
					<h2 className="text-3xl font-extrabold tracking-tighter text-[#0A2540] sm:text-4xl lg:text-5xl lg:leading-[1.15]">
						International Online Medical Consultation For Nigerians
					</h2>

					<p className="text-sm leading-relaxed text-[#000000B2] sm:text-base">
						Our second medical opinion service enables Nigerians to consult with
						top doctors abroad. Whether you are confirming a diagnosis or have
						questions about a treatment plan, we provide secure access to top
						medical minds abroad.
					</p>

					<div className="mt-8">
						<Link
							href="#get-started"
							className="inline-block rounded-md bg-[#F39223] px-12 py-3.5 text-sm sm:text-lg font-bold text-white transition-all duration-200 hover:bg-[#d97d1a] active:scale-[0.98] shadow-lg shadow-orange-950/20">
							Get Started
						</Link>
					</div>
				</div>

				{/* Right Image Overlay Column */}
				<div className="relative flex justify-end lg:col-span-6">
					<div className="relative w-full aspect-[4/3]">
						{/* The single background image */}
						<Image
							src="/abt4.png"
							alt="Doctor holding stethoscope in clinic hallway"
							fill
							priority
							sizes="(max-width: 1024px) 100vw, 540px"
							className="object-cover object-center"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
