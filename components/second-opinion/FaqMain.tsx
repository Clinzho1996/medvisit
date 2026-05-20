"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface FAQItem {
	id: string;
	number: string;
	question: string;
	answer: string;
}

const faqData: FAQItem[] = [
	{
		id: "faq-1",
		number: "01.",
		question: "What is Medvisit?",
		answer:
			"Medvisit allows you consult top medical specialists in the UK, USA, and Europe without having to travel. Simply contact medvisit by phone, online, or in person at one of Medvisit's partner clinics. We have a dedicated medical support team that will help you prepare your case file, communicate with the foreign expert, and follow up.",
	},
	{
		id: "faq-2",
		number: "02.",
		question: "How can Medvisit help me?",
		answer:
			"We provide clear, expert second opinions to validate your current diagnostics, assist with cross-border medical scheduling, facilitate complex remote consultations, and coordinate complete end-to-end logistics if international medical travel becomes recommended.",
	},
	{
		id: "faq-3",
		number: "03.",
		question: "What are the available medical specialities?",
		answer:
			"Our expansive network includes highly credentialed specialists covering Cardiology, Oncology, Neurology, Orthopedics, Bariatric Surgery, Endocrinology, Advanced Fertility treatment fields, and more.",
	},
];

export default function FAQMain() {
	// Track open item ID state. Supports single expansion (matches accordion logic)
	const [openId, setOpenId] = useState<string | null>("faq-1");

	const toggleItem = (id: string) => {
		setOpenId((prev) => (prev === id ? null : id));
	};

	return (
		<section className="mx-auto px-6  md:px-[9%] mt-10">
			{/* --- Custom Accordion Loop Track --- */}
			<div className="w-full space-y-2">
				{faqData.map((item) => {
					const isOpen = openId === item.id;

					return (
						<div
							key={item.id}
							className="border-b border-gray-200 py-4 last:border-none">
							{/* Trigger Button Element */}
							<button
								type="button"
								onClick={() => toggleItem(item.id)}
								className="flex w-full items-center justify-between text-left py-4 font-bold text-[#0A2540] group focus:outline-none">
								{/* Question Label Zone */}
								<div className="flex items-center gap-4 text-base sm:text-lg md:text-xl">
									<span className="text-gray-400 font-medium">
										{item.number}
									</span>
									<span className="transition-colors group-hover:text-[#F7931E]">
										{item.question}
									</span>
								</div>

								{/* Custom Round Expand Indicator Badge */}
								<div
									className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:scale-105 ${
										isOpen
											? "bg-[#F7931E] border-[#F7931E] text-white"
											: "bg-white text-[#F7931E] border-gray-200"
									}`}>
									{isOpen ? (
										<Minus className="h-5 w-5" strokeWidth={2.5} />
									) : (
										<Plus className="h-5 w-5" strokeWidth={2.5} />
									)}
								</div>
							</button>

							{/* Dynamic Smooth Height Transition Body Container */}
							<div
								className={`grid transition-all duration-300 ease-in-out ${
									isOpen
										? "grid-rows-[1fr] opacity-100"
										: "grid-rows-[0fr] opacity-0"
								}`}>
								<div className="overflow-hidden">
									<p className="pr-16 pt-2 pb-6 text-xs sm:text-sm leading-relaxed text-gray-500 max-w-4xl pl-[44px]">
										{item.answer}
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
