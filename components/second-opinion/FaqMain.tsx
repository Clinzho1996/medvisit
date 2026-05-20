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
		question: "What is a second opinion service, and why should I consider it?",
		answer:
			"A second opinion service involves seeking the expertise of another medical professional to validate or provide additional insights into a diagnosis or treatment. It adds an extra layer of confidence and ensures informed decision-making about your healthcare.",
	},
	{
		id: "faq-2",
		number: "02.",
		question: "How do I register for your second opinion service?",
		answer:
			"Click on the ‘Start Consultation’ button on our website, follow the simple steps to create an account, and provide necessary information or you can just call our customer support number. Once registered, you can access our comprehensive services.",
	},
	{
		id: "faq-3",
		number: "03.",
		question: "How is my privacy protected during the second opinion process?",
		answer:
			"We prioritize your privacy. We adhere to strict data protection regulations, and your medical information is securely handled and shared only with the authorized specialists involved in your case.",
	},
	{
		id: "faq-4",
		number: "04.",
		question: "How are specialists matched to my case?",
		answer:
			"Our matching process considers the nature of your medical condition, ensuring you are connected with a specialist whose expertise aligns with your specific needs.",
	},
	{
		id: "faq-5",
		number: "05.",
		question: "What information do I need to provide for the second opinion?",
		answer:
			"We require your medical records, test results, and any relevant information about your condition. This ensures our specialists have a comprehensive understanding for an accurate evaluation.",
	},
	{
		id: "faq-6",
		number: "06.",
		question: "How long does it take to receive a second opinion report?",
		answer:
			"The timeframe can vary, but we strive to provide timely responses. The duration depends on factors such as the complexity of the case, availability of all your medical information and the specialist’s availability.",
	},
	{
		id: "faq-7",
		number: "07.",
		question:
			"Can I ask questions or seek clarification after receiving the second opinion report?",
		answer:
			"Absolutely. Our commitment extends beyond delivering the report. Feel free to ask questions or seek further clarification, and our team will provide the necessary support.",
	},
	{
		id: "faq-8",
		number: "08.",
		question: "Is there ongoing support after receiving the second opinion?",
		answer:
			"Yes, we offer ongoing support. Whether you need additional consultations, assistance with treatment planning, or have further questions, our team is here to guide you through the next steps.",
	},
	{
		id: "faq-9",
		number: "09.",
		question: "How can I provide feedback about my experience?",
		answer:
			"We value your feedback. You can share your thoughts through our website or contact our customer support. Your input helps us continuously improve our services and enhance the experience for others.",
	},
	{
		id: "faq-10",
		number: "10.",
		question: "Can I use this service for ongoing or chronic conditions?",
		answer:
			"Yes, our second opinion service is applicable to various medical conditions, including ongoing or chronic issues. The insights provided can contribute to long-term management plans.",
	},
	{
		id: "faq-11",
		number: "11.",
		question: "What specialties are available for second opinions?",
		answer:
			"We collaborate with specialists across a wide range of medical fields. Whether it’s cardiology, oncology, neurology, or others, we aim to connect you with experts relevant to your specific needs.",
	},
	{
		id: "faq-12",
		number: "12.",
		question: "Is the second opinion report shared with my primary physician?",
		answer:
			"With your consent, we can share the report with your primary physician. Collaboration ensures continuity of care and facilitates a comprehensive healthcare approach.",
	},
	{
		id: "faq-13",
		number: "13.",
		question:
			"How do I pay for the second opinion service, and what are the accepted payment methods?",
		answer:
			"Securely make payments on our website using a variety of payment methods, including credit/debit cards. Additionally, you can conveniently deposit payments directly into the bank accounts listed on our website.",
	},
	{
		id: "faq-14",
		number: "14.",
		question:
			"Can I get a second opinion for someone else, such as a family member?",
		answer:
			"Yes, you can seek a second opinion on behalf of a family member. The process involves registering on their behalf and providing the necessary information with proper authorization.",
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
