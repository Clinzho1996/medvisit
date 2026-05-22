"use client";

import Image from "next/image";

export default function AbtPhysician() {
	return (
		<section className="mx-auto px-6 py-16 md:px-[9%] lg:py-24 mt-0 sm:mt-20">
			<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
				{/* Left Content Column */}
				<div className="space-y-6 lg:col-span-6">
					<h2 className="text-3xl font-extrabold tracking-tighter text-[#0A2540] sm:text-4xl  lg:leading-[1.15]">
						Our online second opinions service offers referring physicians and
						their patients remote second opinions by the world-class specialists
						from top hospitals in Europe, UK and US.
					</h2>

					<p className="text-sm leading-relaxed text-[#000000B2] sm:text-base">
						We acknowledge that no one knows your patient better than you.
						Hence, this service was design to be collaborative. Our aim is to
						support your relationship with your patient and ensure he or she
						receives the best care possible close to home .
					</p>

					<p className="text-sm leading-relaxed text-[#000000B2] sm:text-base">
						Our experts will review your patient&apos;s medical history and
						diagnostic results with you. We are happy to support and complement
						your treatment recommendations.
					</p>
				</div>

				{/* Right Image Overlay Column */}
				<div className="relative flex justify-end lg:col-span-6">
					<div className="relative w-full aspect-[4/3]">
						{/* The single background image */}
						<Image
							src="/abt5.png"
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
