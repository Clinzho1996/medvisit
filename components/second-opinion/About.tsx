"use client";

import Image from "next/image";

export default function MedicalConsultation() {
	return (
		<section className="mx-auto px-6 py-16 md:px-[9%] lg:py-24 mt-70 sm:mt-20">
			<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
				{/* Left Content Column */}
				<div className="space-y-6 lg:col-span-6">
					<h2 className="text-3xl font-extrabold tracking-tighter text-[#0A2540] sm:text-4xl  lg:leading-[1.15]">
						Four out of 10 patients &apos;harmed&apos; while seeking medical
						treatment — WHO
					</h2>

					<p className="text-sm leading-relaxed text-[#000000B2] sm:text-base">
						Chief Gani fawehinmi, Dr Dora Akunyili, and Clara Oshiomhole had
						something in common: they were all victims of wrong diagnosis and
						treatment in Nigeria. And the problem is not peculiar to Nigeria.
					</p>

					<p className="text-sm leading-relaxed text-[#000000B2] sm:text-base">
						In one study, the Mayo Clinic (the number 1 hospital in America)
						reported that only 12% of their second opinion patients left with a
						confirmation that the original diagnosis was accurate. This means
						that nearly 90% of patients left with a different or refined
						diagnosis. Therefore, getting a second opinion is the practical way
						to find a doctor who can give you an alternate point of view on your
						diagnosis and treatment.
					</p>
					<p className="text-sm leading-relaxed text-[#000000B2] sm:text-base">
						Medvisit gives you a convenient, secure and timely access to top
						doctors in the world so that you can get answers to your questions
						about a diagnosis or treatment plan.
					</p>
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
