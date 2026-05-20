"use client";

import { Minus, Plus } from "lucide-react";
import Link from "next/link";
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
];

export default function FAQSection() {
	// Track open item ID state. Supports single expansion (matches accordion logic)
	const [openId, setOpenId] = useState<string | null>("faq-1");

	const toggleItem = (id: string) => {
		setOpenId((prev) => (prev === id ? null : id));
	};

	return (
		<section className="mx-auto px-6  md:px-[9%] ">
			{/* --- Section Header --- */}
			<div className="mb-14 text-center border-t py-16 lg:pt-24 pb-0 ">
				<h2 className="text-3xl font-extrabold tracking-tight text-[#0A2540] md:text-4xl">
					Frequently Asked Questions
				</h2>
			</div>

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

			{/* --- Bottom Footer Sub-action Bar --- */}
			<div className="mt-16 text-center text-sm font-semibold text-[#0A2540] sm:text-base">
				<span>
					No Matter The Complexity Of Your Medical Case, Our Experts Can
					Help.{" "}
				</span>
				<Link
					href="/second-opinion/start-consultation"
					className="ml-1 inline-block border-b-2 border-[#F7931E] pb-0.5 text-[#F7931E] transition-colors hover:text-[#F7931E] hover:border-[#F7931E] font-bold">
					Consult Expert Doctors Now
				</Link>
			</div>
		</section>
	);
}
