"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface AccordionItemProps {
	question: string;
	answer: string;
	isOpen: boolean;
	onToggle: () => void;
}

// Custom animated Accordion Item block
const AccordionItem = ({
	question,
	answer,
	isOpen,
	onToggle,
}: AccordionItemProps) => {
	return (
		<div className="border border-[#E2E4E9]/70 rounded-xl bg-white overflow-hidden transition-all duration-300">
			{/* Trigger Header Platform */}
			<button
				onClick={onToggle}
				className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer select-none group">
				<span className="text-sm md:text-base font-bold text-[#05213A] tracking-tight transition-colors duration-200 group-hover:text-[#F7931E]">
					{question}
				</span>

				{/* Toggle Icon Box */}
				<div
					className={`shrink-0 flex items-center justify-center w-6 h-6 rounded-full transition-transform duration-300 ${
						isOpen
							? "text-[#F7931E]"
							: "text-gray-400 group-hover:text-[#05213A]"
					}`}>
					{isOpen ? (
						<Minus size={18} strokeWidth={2.5} />
					) : (
						<Plus size={18} strokeWidth={2.5} />
					)}
				</div>
			</button>

			{/* Expandable Reveal Panel */}
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						key="content"
						initial={{ height: 0, opacity: 0 }}
						animate={{
							height: "auto",
							opacity: 1,
							transition: {
								height: { duration: 0.35, ease: "easeOut" },
								opacity: { duration: 0.25, delay: 0.05 },
							},
						}}
						exit={{
							height: 0,
							opacity: 0,
							transition: {
								height: { duration: 0.3, ease: "easeIn" },
								opacity: { duration: 0.2 },
							},
						}}>
						<div className="px-5 md:px-6 pb-6 pt-0 border-t border-gray-50">
							<p className="text-[#000000B2] font-normal text-xs md:text-sm leading-relaxed">
								{answer}
							</p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default function FAQAccordionSection() {
	// Single active state layout tracks exactly one open item at a time (Accordion mode)
	const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first item by default

	const faqData = [
		{
			question: "What medical services do you provide access to?",
			answer:
				"We offer comprehensive access to world-class clinical pathways including advanced cardiology, complex oncology therapies, bone and joint orthopedic reconstructions, brain & spine neurological surgeries, multi-organ transplants, and specialized diagnostic assessments across our accredited global hospital network.",
		},
		{
			question:
				"How do I start the process of seeking medical treatment abroad?",
			answer:
				"The process begins with an initial registration where you submit your existing medical files and query reports. Our specialized medical coordination team reviews your submission, interfaces with consulting international experts, and generates a structured care plan and preliminary budget estimate.",
		},
		{
			question: "Will you assist with visa processing and travel logistics?",
			answer:
				"Yes, we handle the administrative heavy lifting. Once you confirm your intent to travel, we facilitate priority official medical visa invitation letters directly from the receiving hospital ecosystem and provide end-to-end guidance across ticketing, companion arrangements, and airport clinical reception.",
		},
		{
			question: "How are financial arrangements and billing handled?",
			answer:
				"Transparency is our standard. You receive an itemized diagnostic and treatment cost framework directly from the partner clinical institution before booking. Payments are handled via verified direct clinical channels, reducing auxiliary overhead rates.",
		},
		{
			question: "What happens when I return to Nigeria after my treatment?",
			answer:
				"Our clinical pathway loops directly back into Nigeria. We maintain active partnerships with trusted local physicians and reference labs to implement clean post-operative monitoring, physical therapy tracks, and synchronized medication management.",
		},
	];

	const handleToggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="w-full bg-[#FAFCFE] py-20 px-[9%] font-sans overflow-hidden">
			<div className="max-w-4xl mx-auto w-full space-y-12 relative z-10">
				{/* --- HEADLINE SECTION HEADER --- */}
				<div className="text-center space-y-3">
					<span className="text-[#F7931E] text-xs font-bold uppercase tracking-widest block">
						FAQ
					</span>
					<h2 className="text-2xl md:text-4xl font-extrabold text-[#05213A] tracking-tighter">
						Frequently Asked Questions
					</h2>
				</div>

				{/* --- ACCORDION LIST STACK --- */}
				<div className="space-y-4 max-w-3xl mx-auto">
					{faqData.map((faq, index) => (
						<AccordionItem
							key={index}
							question={faq.question}
							answer={faq.answer}
							isOpen={openIndex === index}
							onToggle={() => handleToggle(index)}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
