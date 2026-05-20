"use client";

import Image from "next/image";

export default function AbtPaients() {
	return (
		<section className="mx-auto px-6 py-16 md:px-[9%] lg:py-24 mt-0 sm:mt-20">
			<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
				{/* Left Content Column */}
				<div className="space-y-6 lg:col-span-6">
					<h2 className="text-3xl font-extrabold tracking-tighter text-[#0A2540] sm:text-4xl  lg:leading-[1.15]">
						A second opinion is when another doctor (different from your regular
						doctor) gives their view about your health problem and how it should
						be treated.
					</h2>

					<p className="text-sm leading-relaxed text-[#000000B2] sm:text-base">
						Through a second opinion, you may discover treatment options your
						original doctors didn&apos;t know were available. And in some cases,
						the information you gain during a second opinion consultation can
						even show that your initial diagnosis is wrong.
					</p>

					<p className="text-sm leading-relaxed text-[#000000B2] sm:text-base">
						When you&apos;re making important health decisions, it’s always
						advisable to get medical opinions from more than one doctor.
						Medvisit connects you with top experts in UK, Europe and the US who
						are most likely to give you a quality second opinion.
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
