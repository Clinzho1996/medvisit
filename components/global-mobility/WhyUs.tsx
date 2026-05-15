"use client";
import { IconCaretRightFilled, IconCircleCheck } from "@tabler/icons-react";
import { motion } from "framer-motion";

const GlobalMobilityUI = () => {
	const categories = [
		{
			title: "For Family",
			image: "/fam.png",
			benefits: [
				"Give your child a top-14 passport from birth",
				"Access world-class education pathways",
				"Inheritable citizenship for generations",
			],
		},
		{
			title: "For Business Owners",
			image: "/biz.png",
			benefits: [
				"Travel visa-free to 175+ countries",
				"Open global bank accounts",
				"Protect wealth with second residency",
			],
		},
		{
			title: "For Professionals",
			image: "/pro.png",
			benefits: [
				"Build international career mobility",
				"Secure your family's future",
				"Escape passport limitations",
			],
		},
	];

	return (
		<div className="relative about-bg min-h-screen bg-white font-sans text-[#1a1a1a] overflow-hidden px-6 py-10 md:px-24">
			<div className="relative z-10 max-w-7xl mx-auto">
				{/* Header Section */}
				<div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-20">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						className="lg:w-1/2">
						<div className="flex items-center gap-2 mb-6">
							<span className="w-2 h-2 rounded-full bg-orange-500" />
							<span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">
								Why invest in global mobility?
							</span>
						</div>
						<h1 className="text-2xl md:text-3xl font-bold leading-tighter tracking-tighter mb-8 max-w-2xl">
							Strategic solutions to protect your wealth and expand your
							family&apos;s horizons in an unpredictable world.
						</h1>
						<button className="flex items-center gap-2 px-6 py-3 bg-[#F4911E] text-white rounded-lg font-medium shadow-lg shadow-orange-200 hover:shadow-orange-300 transition-all active:scale-95">
							Book Free Consultation
							<IconCaretRightFilled size={18} stroke={3} />
						</button>
					</motion.div>

					{/* Hero Image - Plane Concept */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						className="lg:w-1/2 relative flex justify-end">
						<div className="rounded-3xl overflow-hidden shadow-sm bg-sky-50">
							<img
								src="/why.png"
								alt="Global Mobility"
								className="w-full h-[150px] sm:h-[250px] object-cover"
							/>
						</div>
					</motion.div>
				</div>

				{/* Feature Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-20">
					{categories.map((cat, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: idx * 0.2 }}
							className="space-y-6">
							<hr />
							<h3 className="text-xl font-bold tracking-tighter">
								{cat.title}
							</h3>
							<div className="rounded-2xl overflow-hidden h-28 mb-8">
								<img
									src={cat.image}
									className="w-full h-full object-cover "
									alt={cat.title}
								/>
							</div>
							<ul className="space-y-4">
								{cat.benefits.map((benefit, i) => (
									<li key={i} className="flex items-center gap-3 group">
										<IconCircleCheck
											size={20}
											className="text-orange-400 mt-0.5 group-hover:scale-110 transition-transform"
											stroke={1.5}
										/>
										<span className="text-sm text-[#1F1F1F] font-sans tracking-tight font-semibold">
											{benefit}
										</span>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default GlobalMobilityUI;
