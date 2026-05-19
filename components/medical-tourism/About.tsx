"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

export default function AboutAndQuoteSection() {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		service: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form Submitted:", formData);
	};

	return (
		<section className="relative w-full bg-white font-sans min-h-[700px]">
			{/* --- UPPER DEEP NAVY BANNER BACKGROUND --- */}
			<div className="absolute top-0 left-0 right-0 h-[30px] sm:h-[140px] bg-[#05213A] z-0 overflow-hidden">
				{/* Abstract vector wave line graphic indicators on left */}
				<div className="absolute top-0 left-6  text-white w-164 h-32 hidden md:block select-none">
					<Image src="/12.png" alt="wave" fill />
				</div>
			</div>

			{/* --- MAIN SECTION CONTENT WRAPPER --- */}
			<div className="relative px-[8%] mx-auto px-6 pt-10 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 z-10">
				{/* --- LEFT SIDE: ABOUT TEXT BLOCK --- */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="lg:col-span-7 flex flex-col justify-center  lg:pt-24 space-y-5">
					<span className="text-[#F7931E] text-xs font-bold uppercase tracking-wider block mt-8 lg:mt-0">
						About Us
					</span>

					<h2 className="text-3xl md:text-[44px] font-extrabold text-[#05213A] leading-[1.2] tracking-tighter">
						Nigeria's Top Medical Tourism
						<br className="hidden sm:inline" /> Agency
					</h2>

					<div className="space-y-4 text-[#000000B2] font-normal text-sm md:text-base leading-relaxed max-w-xl">
						<p>
							Medvisit is a Nigeria based medical tourism agency that connects
							Nigerian patients with quality and affordable medical facilities
							abroad.
						</p>
						<p>
							We ensure a rewarding and positive outcome to our clients through
							our personalized service and partnership with some of the world's
							leading medical facilities in India, UAE, Germany, the United
							Kingdom and Israel.
						</p>
					</div>

					<motion.div className="pt-2">
						<motion.button
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.98 }}
							className="border border-[#F7931E] hover:bg-[#F7931E] hover:text-white text-[#F7931E]  text-sm font-bold px-12 py-2.5 cursor-pointer rounded-md transition-colors duration-200">
							Learn More
						</motion.button>
					</motion.div>
				</motion.div>

				{/* --- RIGHT SIDE: GET A QUOTE CARD FORM --- */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, delay: 0.1 }}
					className="lg:col-span-5 w-full bg-white rounded-xl shadow-xl shadow-[#03071214] border border-[#E2E4E9] overflow-hidden self-start">
					{/* shadcn Header section with gray background */}
					<div className="bg-[#F6F8FA] p-4 border-b border-[#E2E4E9]">
						<h3 className="text-xl font-black text-[#05213A]">Get a Quote</h3>
						<p className="text-base tracking-tighter text-[#00000080] mt-1 font-light">
							Get an estimate of how much your treatment abroad will cost you.
						</p>
					</div>

					{/* Form Core Fields */}
					<form onSubmit={handleSubmit} className="p-6 space-y-4">
						{/* Full Name Input */}
						<div className="space-y-1.5">
							<label
								htmlFor="fullName"
								className="text-xs font-semibold text-[#05213A]">
								Full Name
							</label>
							<input
								type="text"
								id="fullName"
								placeholder="e.g you@example.com" // Preserving placeholder choice seen in wireframe reference
								value={formData.fullName}
								onChange={(e) =>
									setFormData({ ...formData, fullName: e.target.value })
								}
								className="w-full mt-2 text-xs px-3 py-2.5 rounded-md border border-[#E2E4E9] bg-white text-[#05213A] placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F7931E] focus:border-[#F7931E] transition-all shadow-sm shadow-[#9F9E9E40]"
								required
							/>
						</div>

						{/* Email Address Input */}
						<div className="space-y-1.5">
							<label
								htmlFor="email"
								className="text-xs font-semibold text-[#05213A]">
								Email Address
							</label>
							<input
								type="email"
								id="email"
								placeholder="e.g you@example.com"
								value={formData.email}
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
								className="w-full mt-2 text-xs px-3 py-2.5 rounded-md border border-[#E2E4E9] bg-white text-[#05213A] placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F7931E] focus:border-[#F7931E] transition-all shadow-sm shadow-[#9F9E9E40]"
								required
							/>
						</div>

						{/* Phone Number Input */}
						<div className="space-y-1.5">
							<label
								htmlFor="phone"
								className="text-xs font-semibold text-[#05213A]">
								Phone Number
							</label>
							<input
								type="tel"
								id="phone"
								placeholder="e.g +234 000 000 0000"
								value={formData.phone}
								onChange={(e) =>
									setFormData({ ...formData, phone: e.target.value })
								}
								className="w-full mt-2 text-xs px-3 py-2.5 rounded-md border border-[#E2E4E9] bg-white text-[#05213A] placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F7931E] focus:border-[#F7931E] transition-all shadow-sm shadow-[#9F9E9E40]"
								required
							/>
						</div>

						{/* Preferred Service Select */}
						<div className="space-y-1.5">
							<label
								htmlFor="service"
								className="text-xs font-semibold text-[#05213A]">
								Preferred Service?
							</label>
							<div className="relative">
								<select
									id="service"
									value={formData.service}
									onChange={(e) =>
										setFormData({ ...formData, service: e.target.value })
									}
									className="w-full mt-2 text-xs px-3 py-2.5 rounded-md border border-[#E2E4E9] bg-white text-[#05213A] placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F7931E] focus:border-[#F7931E] transition-all shadow-sm shadow-[#9F9E9E40]"
									required>
									<option value="" disabled hidden>
										Choose area of interest
									</option>
									<option value="cardiology">Cardiology Treatment</option>
									<option value="orthopedics">
										Orthopedics & Joint Replacement
									</option>
									<option value="oncology">Oncology / Cancer Care</option>
									<option value="ophthalmology">
										Ophthalmology / Eye Surgery
									</option>
									<option value="checkup">Comprehensive Medical Checkup</option>
								</select>
							</div>
						</div>

						{/* Message Textarea Input */}
						<div className="space-y-1.5">
							<label
								htmlFor="message"
								className="text-xs font-semibold text-[#05213A]">
								Message
							</label>
							<textarea
								id="message"
								rows={3}
								placeholder="Type your message here..."
								value={formData.message}
								onChange={(e) =>
									setFormData({ ...formData, message: e.target.value })
								}
								className="w-full mt-2 text-xs px-3 py-2.5 rounded-md border border-[#E2E4E9] bg-white text-[#05213A] placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F7931E] focus:border-[#F7931E] transition-all shadow-sm shadow-[#9F9E9E40]"
								required
							/>
						</div>

						{/* Submit Action Block */}
						<div className="pt-2">
							<motion.button
								whileHover={{ scale: 1.01, backgroundColor: "#d97e16" }}
								whileTap={{ scale: 0.99 }}
								type="submit"
								className="w-full bg-[#F7931E] text-white font-semibold text-lg py-3 rounded-md shadow transition-colors duration-200 tracking-tighter">
								Submit Form
							</motion.button>
						</div>
					</form>
				</motion.div>
			</div>

			{/* Optional decorative dotted abstract matrix on the lower right corner */}
			<div className="absolute right-0 bottom-0 w-32 h-64 bg-[radial-gradient(#E2E4E9_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-60 pointer-events-none -z-10 hidden lg:block" />
		</section>
	);
}
