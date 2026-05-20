"use client";

import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const GloFAQSection = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

	const faqs = [
		{
			question: "What is the minimum investment for a Golden Visa?",
			answer:
				"Starting at $250,000 for Panama real estate, up to $545,000 for UAE Golden Visa.",
		},
		{
			question: "Do I need to live in the country?",
			answer:
				"Some programs require no minimum stay (UAE, Panama, Uruguay). Portugal requires 7 days per year.",
		},
		{
			question: "Can my family be included?",
			answer:
				"Yes. Spouses, children, and in some programs, parents can be included.",
		},
		{
			question: "What is the path to citizenship?",
			answer:
				"Portugal offers citizenship after 5 years. UAE offers permanent residency. Panama offers citizenship after 5 years.",
		},
		{
			question: "Is the investment refundable?",
			answer:
				"Real estate investments are property purchases; funds contributions are not refundable.",
		},
	];

	return (
		<div className="relative faq-bg bg-[#F9F9FB] py-24 px-6 overflow-hidden">
			<div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
				{/* Avatar Stack */}
				<div className="flex -space-x-2 mb-6">
					<Image
						src="/users.png"
						width={300}
						height={50}
						alt="avatar"
						className="rounded-full"
					/>
				</div>

				{/* Header */}
				<h2 className="text-3xl md:text-5xl tracking-tighter font-bold text-[#0F2331] text-center mb-4">
					Frequently Asked Questions
				</h2>
				<p className="text-[#05213A] text-lg tracking-tighter font-medium text-center mb-16">
					Everything you need to know about securing your second citizenship.
				</p>

				{/* Accordion Container */}
				<div className="w-full bg-[#F9F9F9] backdrop-blur-md rounded-2xl border border-gray-200 p-2 shadow-sm">
					<div className="space-y-2">
						{faqs.map((faq, index) => {
							const isOpen = openIndex === index;
							return (
								<div
									key={index}
									className="bg-white rounded-xl border border-gray-100 overflow-hidden transition-all duration-200 shadow-[#1F1F1F14] shadow-lg">
									<button
										onClick={() => setOpenIndex(isOpen ? null : index)}
										className="w-full flex items-center justify-between p-5 text-left bg-white transition-colors hover:bg-gray-50">
										<span
											className={`text-[18px] tracking-tighter font-bold ${isOpen ? "text-[#05213A]" : "text-gray-700"}`}>
											{faq.question}
										</span>
										{isOpen ? (
											<IconChevronUp size={20} className="text-[#0F2331]" />
										) : (
											<IconChevronDown size={20} className="text-gray-400" />
										)}
									</button>

									<AnimatePresence initial={false}>
										{isOpen && (
											<motion.div
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.3, ease: "easeInOut" }}>
												<div className="px-5 pb-5 text-[13px] leading-relaxed text-[#05213ACC] font-normal tracking-tight max-w-[95%]">
													{faq.answer}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default GloFAQSection;
