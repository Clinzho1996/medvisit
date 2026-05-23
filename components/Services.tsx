"use client";

import { IconCaretRightFilled, IconEye } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceProps {
	tag: string;
	title: string;
	description: string;
	features: { title: string; desc: string }[];
	image: string;
	buttonText: string;
	reverse?: boolean;
	link: string;
}

const ServiceBlock = ({
	tag,
	title,
	description,
	features,
	image,
	buttonText,
	reverse,
	link,
}: ServiceProps) => {
	return (
		<div
			className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20 py-16`}>
			{/* Text Content */}
			<motion.div
				initial={{ opacity: 0, x: reverse ? 50 : -50 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				className="flex-1 space-y-6">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8F8F8F33] bg-white text-[#F4911E] text-[10px] font-bold uppercase">
					<Image
						src="/curl.svg"
						width={20}
						height={20}
						alt="target"
						className="object-contain"
					/>
					{tag}
				</div>
				<h2 className="text-[#05213A] text-3xl md:text-4xl font-bold leading-tighter tracking-tighter">
					{title}
				</h2>
				<p className="text-[#5E5F6E] text-lg leading-normal tracking-normal">
					{description}
				</p>

				{/* Feature List */}
				<div className="space-y-4 pt-2">
					{features.map((item, idx) => (
						<div
							key={idx}
							className="flex gap-4 p-4 rounded-xl bg-[#F8F9FA] border border-gray-100 group hover:border-orange-200 transition-colors">
							<div className="mt-1">
								<IconEye size={18} className="text-[#F4911E]" />
							</div>
							<div>
								<h4 className="text-[#05213A] font-bold text-sm mb-1">
									{item.title}:{" "}
									<span className="text-[#38404A] font-normal text-[13px] leading-snug">
										{item.desc}
									</span>
								</h4>
							</div>
						</div>
					))}
				</div>

				<a
					href={link}
					className="flex w-fit items-center gap-2 bg-[#F4911E] text-white px-6 py-2.5 rounded-lg font-bold text-xs shadow-[#F7931E70] shadow-lg hover:brightness-110 transition-all"
					target="_blank">
					{buttonText}
					<IconCaretRightFilled size={14} stroke={3} />
				</a>
			</motion.div>

			{/* Image with Framed Background */}
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				className="flex-1 relative">
				{/* The Actual Image */}
				<div className="relative rounded-2xl overflow-hidden shadow-xl">
					<img src={image} alt={title} className="w-full h-full object-cover" />
				</div>
			</motion.div>
		</div>
	);
};

const ServicesSection = () => {
	const services = [
		{
			tag: "Medical Tourism",
			title: "Ready to explore the world of medical tourism?",
			description:
				"With MedVisit's Classic Medical Tourism service, you can access premier healthcare facilities and treatments in top destinations around the globe.",
			features: [
				{
					title: "Access to Excellence",
					desc: "Explore top-tier medical facilities and treatments in premier healthcare destinations around the globe.",
				},
				{
					title: "Diverse Options",
					desc: "From advanced surgeries to wellness retreats, we offer a wide range of medical and wellness services to suit your needs and preferences.",
				},
				{
					title: "Peace of Mind",
					desc: "Let us take care of the details while you focus on your health and well-being, knowing that you're in capable hands every step of the way.",
				},
			],
			image: "/medical.png",
			buttonText: "Start Your Journey",
			link: "/medical-tourism",
		},
		{
			tag: "International Second Medical Opinion Service",
			title:
				"Introducing Nigeria's First International Medical Second Opinion Service",
			description:
				"Be among the first to access top doctors in the USA, UK, Europe & Asia without leaving Nigeria!",
			features: [
				{
					title: "Enhance Your Practice",
					desc: "Gain access to a global network of specialists, fostering continuous learning and improving the quality of care you offer.",
				},
				{
					title: "Global Expertise at Your Fingertips",
					desc: "Receive consultations from board-certified specialists in the US, UK, Europe, Asia, and other leading healthcare destinations.",
				},
				{
					title: "Streamlined Process, Personalized Care",
					desc: "Our dedicated team guides you through every step, ensuring a hassle-free experience with personalized recommendations tailored to your unique needs.",
				},
			],
			image: "/second.png",
			buttonText: "Book Second Opinion",
			link: "/second-opinion",
			reverse: true,
		},
		{
			tag: "Global Mobility",
			title: "Unlock Global Freedom for Your Family — From $22,000",
			description:
				"Medvisit Nigeria now offers the world's most affordable pathways to second passports, residency, and global citizenship. No complicated requirements. Just smart, legal solutions for Nigerian families.",
			features: [
				{
					title: "Chilean Birth Citizenship",
					desc: "Your child gets a powerful passport, ranked #14 globally, just by being born in Chile. No investment or language test required.",
				},
				{
					title: "Chilean Residency",
					desc: "Live, work, and build a future in one of South America's most stable economies. Parents of Chilean-born children qualify for expedited residency under the 'Chilean Relative' track.",
				},
				{
					title: "Citizenship by Investment (CBI)",
					desc: "Acquire a second passport through qualified investment programs across several countries, including Caribbean CBI",
				},
				{
					title: "CitGolden Visas & Residency Programs",
					desc: "Secure residency in Europe, UAE, or the Americas with a path to citizenship. Ideal for families seeking education, business growth, or safety.",
				},
			],
			image: "/global.png",
			buttonText: "Start Your Journey",
			link: "/global-mobility",
		},
	];

	return (
		<section className="bg-white py-20 overflow-hidden">
			<div className="mx-auto px-[9%]">
				{services.map((service, index) => (
					<ServiceBlock key={index} {...service} />
				))}
			</div>
		</section>
	);
};

export default ServicesSection;
