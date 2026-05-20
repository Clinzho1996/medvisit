"use client";

import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function ExpertFooter() {
	return (
		<footer className="relative w-full px-[9%] mt-48 bg-[#091E3A] text-gray-300 pt-12 sm:pt-24 pb-8">
			{/* --- Overlapping CTA Banner --- */}
			<div className="absolute top-0 left-1/2 w-full px-[7%]  -translate-x-1/2 -translate-y-1/2 sm:px-[12%]">
				<div className="relative overflow-hidden rounded-[32px] bg-[#F7931E] px-6 py-12 text-center text-white shadow-xl md:py-22">
					{/* Subtle Background Decorative Plus Sign Asset */}
					<div className="absolute -left-12 top-1/2 -translate-y-1/2  select-none pointer-events-none">
						<Image
							src="/cross.png"
							alt="Background"
							width={200}
							height={200}
							className="object-contain w-55 h-55"
						/>
					</div>

					{/* CTA Content */}
					<div className="relative z-10 flex flex-col items-center">
						<h2 className="text-2xl font-bold sm:text-3xl md:text-4xl tracking-tight">
							Ready for an expert consultation?
						</h2>
						<p className="mt-2 text-sm text-orange-50/90 sm:text-base font-medium">
							We&apos;re known for providing high-quality health care and more!
						</p>

						<Link
							href="/second-opinion/start-consultation"
							className="mt-8 inline-block rounded-md bg-white px-8 py-3 text-sm font-bold text-[#EFA343] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md">
							Click Here To Get Started
						</Link>
					</div>
				</div>
			</div>

			{/* --- Main Footer Links Content --- */}
			<div className="mx-auto w-full md:px-0">
				<div className="grid grid-cols-1 gap-4 border-b border-gray-700/50 pb-10 pt-32 md:grid-cols-12 md:gap-0">
					{/* Column 1: Get In Touch */}
					<div className="md:col-span-3">
						<h3 className="text-xs sm:text-lg font-bold uppercase tracking-tight text-white mb-4">
							Get In Touch
						</h3>
						<div className="space-y-1 text-sm sm:text-lg tracking-tighter text-gray-400">
							<p>
								<span className="font-semibold text-gray-300">Tel:</span> +23481
								825 22015
							</p>
							<p>
								<span className="font-semibold text-gray-300">Tel:</span> +91983
								668 7899
							</p>
						</div>
					</div>

					{/* Column 2: Location */}
					<div className="md:col-span-6">
						<h3 className="text-xs sm:text-lg font-bold uppercase tracking-tight text-white mb-4">
							Location
						</h3>
						<div className="space-y-2 text-sm sm:text-lg tracking-tighter text-gray-400 leading-relaxed">
							<p>
								<strong className="text-gray-300">Nigeria Address:</strong> 1
								Fawole Lane, Off Ikorodu Road, Obanikoro, Lagos.
							</p>
							<p>
								<strong className="text-gray-300">India Address:</strong> S.P.
								Mukherjee Road, DumDum Cantonment Kolkata - 700028
							</p>
						</div>
					</div>

					{/* Column 3: Socials & Email */}
					<div className="md:col-span-3 flex flex-col md:items-end justify-start gap-4">
						{/* Social Media Row */}
						<div className="flex items-center gap-4 pt-2">
							<span className="text-white font-bold">Follow us:</span>
							<div className="flex items-center gap-3">
								<Link href="https://www.facebook.com/Medvisitcare/">
									{" "}
									<div className="bg-white p-1 rounded text-white hover:bg-[#F4911E] cursor-pointer transition-colors">
										<IconBrandFacebook color="#05213A" size={12} />
									</div>{" "}
								</Link>

								<Link href="https://twitter.com/Medvisitng">
									<div className="bg-white p-1 rounded text-white hover:bg-[#F4911E] cursor-pointer transition-colors">
										<IconBrandX color="#05213A" size={12} />
									</div>
								</Link>
								<Link href="https://www.instagram.com/medvisit.ng?igsh=ejlsNDMyejZiMHNl">
									<div className="bg-white p-1 rounded text-white hover:bg-[#F4911E] cursor-pointer transition-colors">
										<IconBrandInstagram color="#05213A" size={12} />
									</div>
								</Link>
							</div>
						</div>

						{/* Email String */}
						<p className="text-sm sm:text-lg tracking-tighter text-gray-400">
							<strong className="text-gray-300">Email:</strong>{" "}
							<a
								href="mailto:info@medvisit.com.ng"
								className="hover:underline hover:text-white">
								info@medvisit.com.ng
							</a>
						</p>
					</div>
				</div>

				{/* --- Bottom Copyright Bar --- */}
				<div className="pt-6 text-center text-xs sm:text-lg tracking-tight text-gray-400">
					<p>
						&copy; {new Date().getFullYear()} Copyright.{" "}
						<Link
							href="/"
							className="text-[#EFA343] font-semibold hover:underline">
							Medvisit.com
						</Link>
					</p>
				</div>
			</div>
		</footer>
	);
}
