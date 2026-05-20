"use client";

import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const BcFAQSection = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

	const faqs = [
		{
			question: "Is this really legal?",
			answer:
				"Yes. Chilean citizenship law is based on jus soli — a constitutional principle that grants citizenship to anyone born on Chilean soil. This is not a loophole; it’s the law",
		},
		{
			question: "Do I need to speak Spanish?",
			answer:
				"No. We provide translation services throughout your stay. All medical staff at partner clinics speak English, and our local team provides full translation support.",
		},
		{
			question: "How long do I need to stay in Chile?",
			answer:
				"Most packages require 60-90 days. The Basic Package requires the minimum stay for birth registration and document processing. Comfort and Premium packages include extended concierge support.",
		},
		{
			question: "Can both parents travel?",
			answer:
				"Yes. The cost breakdown assumes two adults traveling. If only one parent travels, costs will be lower.",
		},
		{
			question: "What about accommodation?",
			answer:
				"We coordinate accommodation based on your package. Basic packages include assistance finding accommodation; Comfort and Premium packages include arranged accommodation with local support.",
		},
		{
			question: "What if the baby needs medical care?",
			answer:
				"Chile has world-class healthcare. Partner clinics provide comprehensive care. All packages include medical coordination.",
		},
		{
			question: "Can I combine this with Chilean residency?",
			answer:
				"Yes. Parents of Chilean-born children qualify for expedited residency under the “Chilean Relative” track. See our Chilean Residency page for details.",
		},
		{
			question: "What happens if the application is denied?",
			answer:
				"Denial is extremely rare (99% success rate). In the unlikely event of denial, we work with you to appeal or explore alternative options.",
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
