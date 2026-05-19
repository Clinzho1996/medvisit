"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
	return (
		<div className="relative min-h-[600px] w-full bg-[#051429] lg:min-h-[700px]">
			{/* 1. Background Image Layer */}
			<div className="absolute inset-0 z-0 h-full w-full">
				<Image
					src="/hero.png" // Replace with your actual background image path
					alt="Father and daughter consulting online with a doctor"
					fill
					priority
					sizes="100vw"
					className="object-cover object-center lg:object-[right_center]"
				/>
			</div>

			{/* 2. Primary Content Container */}
			<div className="relative z-10 mx-auto px-6 pt-24 pb-40 md:px-[9%] md:pt-32 lg:pb-32">
				<div className="max-w-xl lg:max-w-2xl">
					<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.15]">
						Get treatment advice from the world&apos;s best doctors
					</h1>

					<p className="mt-6 text-base text-gray-300 md:text-lg">
						Consult leading{" "}
						<span className="font-bold text-white">
							experts from UK, USA & Europe
						</span>{" "}
						without leaving Nigeria.
					</p>

					<div className="mt-8">
						<Link
							href="#get-started"
							className="inline-block rounded-md bg-[#F39223] px-12 py-3.5 text-sm sm:text-lg font-bold text-white transition-all duration-200 hover:bg-[#d97d1a] active:scale-[0.98] shadow-lg shadow-orange-950/20">
							Get Started
						</Link>
					</div>
				</div>
			</div>

			{/* 3. Bottom Overlapping Info Cards */}
			<div className="absolute -bottom-[20] right-0 z-20 w-full px-4 lg:max-w-4xl lg:px-0">
				<div className="mx-auto grid grid-cols-1 md:grid-cols-2 bg-white shadow-2xl  overflow-hidden">
					{/* Card 1: Patients & Families */}
					<div className="relative flex flex-col justify-between border-b border-gray-100 p-8 md:border-b-0 md:border-r border-l-4 border-b-[#F39223] sm:border-l-[#F39223]">
						<div className="flex gap-4">
							<div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-lg  text-[#F39223]">
								<Image src="/pat.png" alt="Patient" width={50} height={50} />
							</div>
							<div>
								<h3 className="text-base font-bold text-[#091E3A] sm:text-lg">
									Patients & Families
								</h3>
								<p className="mt-2 text-xs leading-relaxed text-gray-500 sm:text-sm">
									Know for certain that your diagnosis or treatment plan is
									correct
								</p>

								<div className="mt-6">
									<Link
										href="#physicians"
										className="inline-block text-xs sm:text-sm font-bold text-[#F39223] underline underline-offset-4 hover:text-[#d97d1a]">
										Learn More
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* Card 2: Referring Physicians */}
					<div className="relative flex flex-col justify-between p-8 border-t-4 border-t-transparent md:border-l-4 border-b-[#F39223] sm:border-l-[#F39223]">
						<div className="flex gap-4">
							<div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-lg  text-[#F39223]">
								<Image src="/ref.png" alt="Patient" width={50} height={50} />
							</div>
							<div>
								<h3 className="text-base font-bold text-[#091E3A] sm:text-lg">
									Referring Physicians
								</h3>
								<p className="mt-2 text-xs leading-relaxed text-gray-500 sm:text-sm">
									Collaborate with our specialists to give your patient the best
									possible care.
								</p>

								<div className="mt-6">
									<Link
										href="#physicians"
										className="inline-block text-xs sm:text-sm font-bold text-[#F39223] underline underline-offset-4 hover:text-[#d97d1a]">
										Learn More
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
