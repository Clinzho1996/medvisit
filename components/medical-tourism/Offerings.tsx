"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

interface Offering {
	id: string;
	title: string;
	description: string;
}

const offeringsData: Offering[] = [
	{
		id: "free-second-opinion",
		title: "Free Second Opinion",
		description:
			"When dealing with medical issues, consulting with another doctor can be an important step to finding best care. That is why we provide patients with free second opinion from our expert panel of doctors.",
	},
	{
		id: "talk-to-experts",
		title: "Talk To Our Experts From Anywhere",
		description:
			"Connect virtually with top-tier medical professionals from the comfort of your home, ensuring seamless communication no matter where you are located.",
	},
	{
		id: "visa-assistance",
		title: "Visa Assistance",
		description:
			"We provide end-to-end documentation and guidance support to ensure your medical visa process is smooth, swift, and stress-free.",
	},
	{
		id: "airport-shuttle",
		title: "Airport Shuttle / Concierge Services",
		description:
			"From the moment you land, our dedicated transport and concierge teams are ready to assist you with airport pickups, luggage, and immediate transfers.",
	},
	{
		id: "logistics",
		title: "Logistics Of Your Stay",
		description:
			"We help manage all local accommodation, transport, and daily essentials so you and your family can focus entirely on recovery.",
	},
	{
		id: "hospital-arrangements",
		title: "Hospital Arrangements",
		description:
			"Our team prioritizes your appointments, admissions, and surgical scheduling to minimize waiting times and maximize efficiency.",
	},
	{
		id: "post-treatment",
		title: "Post Treatment Tours",
		description:
			"If cleared by your medical team, we organize relaxing local tours and wellness experiences to assist in your holistic rejuvenation before returning home.",
	},
];

export default function UniqueOfferings() {
	return (
		<section className="mx-auto  px-4 py-16 md:px-[9%] lg:py-24">
			<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-10">
				{/* Left Side: Doctors Image Component */}
				<div className="relative flex justify-center lg:col-span-5">
					<div className="relative w-full  aspect-[4/3] sm:aspect-square lg:aspect-[4/5]">
						<Image
							src="/doc2.png" // Replace with your actual public image path
							alt="Our expert medical panel"
							fill
							sizes="(max-width: 768px) 100vw, 450px"
							className="object-contain object-bottom"
							priority
						/>
					</div>
				</div>

				{/* Right Side: Accordion Content */}
				<div className="lg:col-span-5">
					<h2 className="mb-8 text-3xl font-extrabold tracking-tight text-[#0A2540] md:text-4xl">
						Our Unique Offerings
					</h2>

					<Accordion
						type="single"
						collapsible
						defaultValue="free-second-opinion"
						className="w-full space-y-3">
						{offeringsData.map((item) => (
							<AccordionItem
								key={item.id}
								value={item.id}
								className="border-none transition-all duration-200">
								<AccordionTrigger
									className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-sm sm:text-base md:text-lg transition-all rounded-md
                    data-[state=open]:bg-[#F39223] data-[state=open]:text-white data-[state=open]:hover:no-underline
                    data-[state=closed]:bg-[#F8F9FC] data-[state=closed]:text-[#0A2540] data-[state=closed]:hover:bg-[#F1F3F9]
                    [&[data-state=open]>svg]:rotate-180">
									{item.title}
								</AccordionTrigger>
								<AccordionContent className="bg-white px-6 pt-4 pb-6 text-sm leading-relaxed text-gray-600 border-x border-b border-gray-100 rounded-b-md -mt-1 shadow-sm">
									{item.description}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
}
