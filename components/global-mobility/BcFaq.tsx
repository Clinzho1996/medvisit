"use client";

import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const BcFAQSection = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

	const faqs = [
		{
			question: "Is Chilean birth tourism legal in 2026?",
			answer:
				"Yes. Chile's jus soli (right of soil) law is enshrined in its constitution. Children born to tourists, temporary residents, and permanent residents automatically receive Chilean citizenship. This is fully legal and government-recognized.",
		},
		{
			question: "Do I need to speak Spanish?",
			answer:
				"No, Spanish proficiency is not a requirement for birth citizenship or initial residency applications. However, basic Spanish is helpful for daily life, and our concierge team provides full translation support.",
		},
		{
			question: "Can I combine birth citizenship with residency?",
			answer:
				"Absolutely. Many families apply for residency while awaiting a birth, or use the birth of a Chilean child as a legal pathway to expedite their own permanent residency status.",
		},
		{
			question: "What if I already have a Nigerian passport?",
			answer:
				"Both Nigeria and Chile allow dual citizenship. You do not need to renounce your Nigerian passport to acquire Chilean citizenship or residency.",
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

export default BcFAQSection;
