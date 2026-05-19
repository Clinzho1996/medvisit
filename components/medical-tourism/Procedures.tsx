"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface ProcedureCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	index: number;
}

// Reusable Card using your exact snippet's CSS, properties, and mechanics
const ProcedureCard = ({
	icon,
	title,
	description,
	index,
}: ProcedureCardProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
			whileHover={{
				y: -8,
				boxShadow:
					"0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)",
			}}
			className="bg-white rounded-xl p-8 flex flex-col border border-[#0000000F] items-start space-y-4 transition-all duration-300 group shadow-2xl shadow-[#0000000F]">
			{/* Outlined Icon Container directly using your exact configuration */}
			<div className="flex items-center justify-start w-20 h-20">{icon}</div>

			{/* Card Typography matching your exact hierarchy and specs */}
			<h3 className="text-lg sm:text-xl font-bold text-[#05213A] tracking-tight pt-2">
				{title}
			</h3>

			<p className="text-[#000000B2] font-normal text-xs md:text-sm leading-relaxed">
				{description}
			</p>
		</motion.div>
	);
};

export default function MedicalProceduresSection() {
	// Complete 28-procedure matrix extracted accurately from the dataset layout
	const procedures = [
		{
			title: "Heart",
			description:
				"Heart disease covers a range of conditions that affect the heart.",
			icon: <Image src="/heart.png" alt="Heart" width={80} height={80} />,
		},
		{
			title: "Cancer",
			description:
				"Cancer is a disease in which cells anywhere in the body begin to divide uncontrollably.",
			icon: <Image src="/cancer.png" alt="Cancer" width={80} height={80} />,
		},
		{
			title: "Bones / Joints",
			description:
				"The bone also protects and support our organs and make it possible for us to move.",
			icon: (
				<Image src="/bones.png" alt="Bones / Joints" width={80} height={80} />
			),
		},
		{
			title: "Brain & Spine",
			description:
				"Disorders that affect the brain, spinal cord and nerves are called neurological disorders.",
			icon: (
				<Image src="/brain.png" alt="Brain & Spine" width={80} height={80} />
			),
		},
		{
			title: "Kidney",
			description:
				"Kidney Transplant is done when the patient is suffering from End-Stage renal Disease (Kidneys lose about 90% of their functioning).",
			icon: <Image src="/kidney.png" alt="Kidney" width={80} height={80} />,
		},
		{
			title: "Eyes",
			description:
				"Eye surgery, also known as ocular surgery, is surgery performed on the eye or its adnexa, typically by an ophthalmologist.",
			icon: <Image src="/eyes.png" alt="Eyes" width={80} height={80} />,
		},
		{
			title: "Urology",
			description:
				"Urology is the medical and surgical specialty involving disorders of the genitourinary tract and the adrenal glands.",
			icon: <Image src="/urology.png" alt="Urology" width={80} height={80} />,
		},
		{
			title: "Liver",
			description:
				"Liver resection is surgery to remove a piece of the liver. Up to one-half of your liver can be removed if the rest of it is healthy.",
			icon: <Image src="/liver.png" alt="Liver" width={80} height={80} />,
		},
		{
			title: "ACL",
			description:
				"ACL is also known as Anterior Cruciate Ligament, which refers to an injury in this specific ligament that runs diagonally across the middle of your knee.",
			icon: <Image src="/kidney.png" alt="ACL" width={80} height={80} />,
		},
		{
			title: "Liposuction",
			description:
				"Liposuction, often called Lipoplasty or Body Contouring, is a surgical procedure that removes excess fat from particular body regions.",
			icon: <Image src="/eyes.png" alt="Liposuction" width={80} height={80} />,
		},
		{
			title: "LVAD Implantation",
			description:
				"It is used to sustain cardiac function in those with end-stage heart failure or as a bridge to heart transplants.",
			icon: (
				<Image
					src="/urology.png"
					alt="LVAD Implantation"
					width={80}
					height={80}
				/>
			),
		},
		{
			title: "Diabetes",
			description:
				"A group of diseases that result in too much sugar in the blood (high blood glucose).",
			icon: <Image src="/liver.png" alt="Diabetes" width={80} height={80} />,
		},
		{
			title: "Breast Augmentation",
			description:
				"Breast augmentation also termed augmentation mammoplasty, is a surgery to increase breast size by placing breast implants under the tissue of or muscles of the chest.",
			icon: (
				<Image
					src="/kidney.png"
					alt="Breast Augmentation"
					width={80}
					height={80}
				/>
			),
		},
		{
			title: "Epilepsy",
			description:
				"A disorder in which nerve cell activity in the brain is disturbed, causing seizures.",
			icon: <Image src="/eyes.png" alt="Epilepsy" width={80} height={80} />,
		},
		{
			title: "Septoplasty",
			description:
				"Septoplasty is a surgical procedure that is meant to correct a deviated septum. The septum is the wall of bone and cartilage that divides the nose into two separate nostrils.",
			icon: (
				<Image src="/urology.png" alt="Septoplasty" width={80} height={80} />
			),
		},
		{
			title: "Tympanoplasty",
			description:
				"Tympanoplasty is a type of ear surgery done to patch up the hole in the eardrum.",
			icon: (
				<Image src="/liver.png" alt="Tympanoplasty" width={80} height={80} />
			),
		},
		{
			title: "Hip Replacement Surgery",
			description:
				"A hip replacement is a surgical procedure that includes the removal and replacement of portions of an injured hip joint either with an artificial joint or implant.",
			icon: (
				<Image
					src="/kidney.png"
					alt="Hip Replacement Surgery"
					width={80}
					height={80}
				/>
			),
		},
		{
			title: "Keyhole Surgery",
			description:
				"Keyhole surgery - also known as laparoscopic surgery is a surgical procedure that allows a surgeon to access the inside of the body without making large incisions.",
			icon: (
				<Image src="/eyes.png" alt="Keyhole Surgery" width={80} height={80} />
			),
		},
		{
			title: "Interventional Cardiology",
			description:
				"Interventional cardiology refers to the branch of cardiology that includes a specific type of catheter-based treatment to deal with heart diseases.",
			icon: (
				<Image
					src="/urology.png"
					alt="Interventional Cardiology"
					width={80}
					height={80}
				/>
			),
		},
		{
			title: "Colorectal Surgery",
			description:
				"Colorectal surgery is a broad term used to describe different surgical procedures to treat the problems of the lower gut.",
			icon: (
				<Image
					src="/liver.png"
					alt="Colorectal Surgery"
					width={80}
					height={80}
				/>
			),
		},
		{
			title: "Knee Replacement Surgery",
			description:
				"A knee replacement is a surgical procedure that includes the removal and replacement of portions of an injured hip joint either with an artificial joint or implant.",
			icon: (
				<Image
					src="/kidney.png"
					alt="Knee Replacement Surgery"
					width={80}
					height={80}
				/>
			),
		},
		{
			title: "Abdominal Surgery",
			description:
				"Abdominal surgery is a broad form used for various surgical procedures around the abdominal region.",
			icon: (
				<Image src="/eyes.png" alt="Abdominal Surgery" width={80} height={80} />
			),
		},
		{
			title: "Spine Surgery",
			description:
				"Spine surgery is a surgical procedure performed to treat serious musculoskeletal injuries or nerve compression in the back.",
			icon: (
				<Image src="/urology.png" alt="Spine Surgery" width={80} height={80} />
			),
		},
		{
			title: "Tonsillectomy",
			description:
				"Tonsillectomy is a surgical procedure used to remove the tonsils. Tonsils are the two small glands located around the back of the mouth and nasal cavity.",
			icon: (
				<Image src="/liver.png" alt="Tonsillectomy" width={80} height={80} />
			),
		},
		{
			title: "Acne Treatment",
			description:
				"Acne is a common condition that affects the population around the world. It refers to an inflammatory skin condition that is chronic in nature.",
			icon: (
				<Image src="/kidney.png" alt="Acne Treatment" width={80} height={80} />
			),
		},
		{
			title: "Chemotherapy",
			description:
				"Chemotherapy is a sort of therapy that is used to treat cancer. In this process, chemical drugs are used to kill the rapidly growing cells in the body, which is the root cause of cancer.",
			icon: <Image src="/eyes.png" alt="Chemotherapy" width={80} height={80} />,
		},
		{
			title: "Bariatric Surgery",
			description:
				"Bariatric Obesity/Weight loss surgery is an effective treatment option for patients suffering from morbid obesity.",
			icon: (
				<Image
					src="/urology.png"
					alt="Bariatric Surgery"
					width={80}
					height={80}
				/>
			),
		},
		{
			title: "Coronary Angioplasty",
			description:
				"The coronary arteries play one of the significant roles in the body. They are responsible for supplying blood to the heart.",
			icon: (
				<Image
					src="/liver.png"
					alt="Coronary Angioplasty"
					width={80}
					height={80}
				/>
			),
		},
	];

	return (
		<section className="relative w-full bg-[#FAFCFE] py-20 px-[9%] font-sans overflow-hidden">
			{/* Top Right Abstract Background Grid Pattern Line Accent */}
			<div className="absolute top-0 right-0 w-80 h-80 pointer-events-none select-none hidden lg:block opacity-60">
				<Image
					src="/circ.png"
					alt="Abstract Grid Line Wrap"
					fill
					style={{ objectFit: "contain" }}
				/>
			</div>

			<div className="mx-auto w-full space-y-16 relative z-10">
				{/* --- HEADLINE CONTROLLER --- */}
				<div className="text-center max-w-4xl mx-auto">
					<motion.h2
						initial={{ opacity: 0, y: -10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-3xl md:text-5xl font-extrabold text-[#05213A] tracking-tighter leading-snug">
						Our <span className="text-[#F7931E]">world-class</span> procedures
						cut across a wide range of conditions including
					</motion.h2>
				</div>

				{/* --- 7x4 DISPLAY MATRIX --- */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{procedures.map((procedure, index) => (
						<ProcedureCard
							key={`${procedure.title}-${index}`}
							title={procedure.title}
							description={procedure.description}
							icon={procedure.icon}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
