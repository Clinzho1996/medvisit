"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

export default function ContactHelpSection() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Contact Message Submitted:", formData);
	};

	// Entry animations
	const containerVariants: Variants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, x: -20 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
	};

	return (
		<section className="w-full bg-[#FAFBFC] py-16 px-[9%] sm:px-6 md:px-12 font-sans flex items-center justify-center">
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				className="max-w-7xl w-full bg-white rounded-2xl shadow-xl border border-[#E2E4E9] overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[620px]">
				{/* --- LEFT SIDE: FORM WRAPPER (7 Columns) --- */}
				<div className="p-8 sm:p-16 md:col-span-6 flex flex-col justify-center space-y-6 bg-white">
					<div className="space-y-1">
						<h2 className="text-2xl sm:text-4xl font-extrabold text-[#05213A] tracking-tighter">
							How Can We Help?
						</h2>
						<p className="text-xs sm:text-sm text-[#000000B2] font-normal">
							Fill in the form below
						</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-4">
						{/* Name Input */}
						<motion.div variants={itemVariants} className="space-y-1.5">
							<label
								htmlFor="name"
								className="text-xs sm:text-lg font-bold text-[#05213A]">
								What Is Your Name?
							</label>
							<input
								type="text"
								id="name"
								placeholder="Your full name"
								value={formData.name}
								onChange={(e) =>
									setFormData({ ...formData, name: e.target.value })
								}
								className="w-full text-xs sm:text-sm px-4 py-4 rounded-lg border border-[#0000004D] bg-white text-[#05213A] placeholder-[#44464B80] focus:outline-none focus:ring-1 focus:ring-[#F7931E] focus:border-[#F7931E] transition-all mt-2"
								required
							/>
						</motion.div>

						{/* Email Input */}
						<motion.div variants={itemVariants} className="space-y-1.5">
							<label
								htmlFor="email"
								className="text-xs sm:text-lg font-bold text-[#05213A]">
								What Is Your Email?
							</label>
							<input
								type="email"
								id="email"
								placeholder="Your email"
								value={formData.email}
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
								className="w-full text-xs sm:text-sm px-4 py-4 rounded-lg border border-[#0000004D] bg-white text-[#05213A] placeholder-[#44464B80] focus:outline-none focus:ring-1 focus:ring-[#F7931E] focus:border-[#F7931E] transition-all mt-2"
								required
							/>
						</motion.div>

						{/* Phone Input */}
						<motion.div variants={itemVariants} className="space-y-1.5">
							<label
								htmlFor="phone"
								className="text-xs sm:text-lg font-bold text-[#05213A]">
								What Is Your Phone Number?
							</label>
							<input
								type="tel"
								id="phone"
								placeholder="Your phone number"
								value={formData.phone}
								onChange={(e) =>
									setFormData({ ...formData, phone: e.target.value })
								}
								className="w-full text-xs sm:text-sm px-4 py-4 rounded-lg border border-[#0000004D] bg-white text-[#05213A] placeholder-[#44464B80] focus:outline-none focus:ring-1 focus:ring-[#F7931E] focus:border-[#F7931E] transition-all mt-2"
								required
							/>
						</motion.div>

						{/* Message Textarea */}
						<motion.div variants={itemVariants} className="space-y-1.5">
							<label
								htmlFor="message"
								className="text-xs sm:text-lg font-bold text-[#05213A]">
								Do You Have Any Message For Us?
							</label>
							<textarea
								id="message"
								rows={4}
								placeholder="Let us know how we can help..."
								value={formData.message}
								onChange={(e) =>
									setFormData({ ...formData, message: e.target.value })
								}
								className="w-full text-xs sm:text-sm px-4 py-4 rounded-lg border border-[#0000004D] bg-white text-[#05213A] placeholder-[#44464B80] focus:outline-none focus:ring-1 focus:ring-[#F7931E] focus:border-[#F7931E] transition-all mt-2"
								required
							/>
						</motion.div>

						{/* Submit Action Button */}
						<motion.div variants={itemVariants} className="pt-2">
							<motion.button
								whileHover={{ scale: 1.02, backgroundColor: "#e27222" }}
								whileTap={{ scale: 0.98 }}
								type="submit"
								className="bg-[#F7931E] text-white font-semibold sm:text-lg text-xs px-6 py-3 rounded-lg shadow-md transition-colors duration-200">
								Send Your Message
							</motion.button>
						</motion.div>
					</form>
				</div>

				{/* --- RIGHT SIDE: CALL INFO BANNER (5 Columns) --- */}
				<div className="relative md:col-span-6 bg-[#05213A] p-8 sm:p-12 text-white flex flex-col justify-center space-y-10 overflow-hidden">
					{/* Subtle abstract dotted grid waves on bottom right */}
					<div className="absolute -bottom-6 -right-6 w-48 h-48 ">
						<Image src="/circ3.png" alt="grid waves" width={200} height={200} />
					</div>

					{/* Call Directly Card Box */}
					<div className="space-y-4">
						<h3 className="text-lg sm:text-2xl font-bold tracking-tighter">
							Call Us Directly
						</h3>

						<div className="bg-[#F7931E] rounded-xl p-5 sm:p-10 flex items-center justify-between shadow-lg border border-orange-400/20 relative group w-full sm:w-[80%]">
							<div className="space-y-3 z-10">
								<div>
									<p className="text-[10px] sm:text-lg uppercase font-bold text-orange-100 tracking-tighter">
										Nigeria
									</p>
									<p className="text-sm  sm:text-xl font-extrabold text-white">
										+2348182 522 015
									</p>
								</div>
								<div>
									<p className="text-[10px] sm:text-lg uppercase font-bold text-orange-100 tracking-tighter">
										India
									</p>
									<p className="text-sm  sm:text-xl font-extrabold text-white">
										+91983 668 7899
									</p>
								</div>
							</div>

							{/* Headset Symbol Vector */}
							<div className="text-white ">
								<Image src="/head.png" alt="headset" width={130} height={130} />
							</div>
						</div>
					</div>

					<hr className="border-white w-full" />

					{/* Addresses Stack */}
					<div className="space-y-6">
						<h3 className="text-lg sm:text-2xl font-bold tracking-tighter">
							Address
						</h3>

						<div className="space-y-1">
							<p className="text-xs sm:text-sm tracking-tighter font-bold text-white">
								Nigeria Location
							</p>
							<p className="text-xs sm:text-lg text-white tracking-tighter font-bold leading-relaxed">
								1 Fawole Lane, Off Ikorodu Road, Obanikoro, Lagos
							</p>
						</div>

						<div className="space-y-1">
							<p className="text-xs sm:text-sm tracking-tighter font-bold text-white">
								India Location
							</p>
							<p className="text-xs font-bold sm:text-lg text-white tracking-tighter leading-relaxed">
								1 Fawole Lane, Off Ikorodu Road, Obanikoro, Lagos
							</p>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
