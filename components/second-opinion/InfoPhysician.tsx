"use client";

import Link from "next/link";

interface CheckItem {
	id: number;
	text: string;
}

const leftColumnItems: CheckItem[] = [
	{
		id: 1,
		text: "If you have provided treatment but his/her symptoms continue",
	},
	{
		id: 2,
		text: "Your diagnosis isn’t clear.",
	},
	{ id: 3, text: "You patient has a lot of medical conditions." },
	{
		id: 4,
		text: "The treatment you are recommending is experimental, controversial, or risky.",
	},
	{ id: 5, text: "Your patient has a life-threatening condition." },
];

const rightColumnItems: CheckItem[] = [
	{
		id: 7,
		text: "You are convinced you can’t help him or her.",
	},
	{ id: 8, text: "You are not a specialist in your patient’s condition." },
	{ id: 9, text: "Numerous possible treatment options are available" },
	{
		id: 10,
		text: "Your patient is expressing doubt about your diagnosis and treatment recommendations",
	},
];

export default function InfoPhysician() {
	return (
		<section className="relative w-full px-[4%] sm:px-[9%]  text-white  mb-50">
			<div className="mx-auto px-6 md:px-20 bg-[#051429] md:pt-20 md:pb-56 pt-16 pb-48">
				{/* --- Top Header Block --- */}
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
						When Should You Recommend Your Patient For A Second Opinion?
					</h2>
					<p className="mt-4 text-xs leading-relaxed text-gray-400 sm:text-sm">
						Sometimes your patient&apos;s health problems are straightforward,
						but there are other times when diagnosis and treatment are less
						clear. Getting a second opinion may helpful to your patient when:
					</p>
				</div>

				{/* --- Multi-Column Check List Grid --- */}
				<div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2 lg:mt-16">
					{/* Left Column */}
					<div className="space-y-5">
						{leftColumnItems.map((item) => (
							<div key={item.id} className="flex items-start gap-4">
								<div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3BB75E] text-white mt-0.5 shadow-sm">
									<svg
										width="12"
										height="12"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="4">
										<polyline points="20 6 9 17 4 12" />
									</svg>
								</div>
								<p className="text-xs leading-relaxed text-gray-300 sm:text-sm">
									{item.text}
								</p>
							</div>
						))}
					</div>

					{/* Right Column */}
					<div className="space-y-5">
						{rightColumnItems.map((item) => (
							<div key={item.id} className="flex items-start gap-4">
								<div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3BB75E] text-white mt-0.5 shadow-sm">
									<svg
										width="12"
										height="12"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="4">
										<polyline points="20 6 9 17 4 12" />
									</svg>
								</div>
								<p className="text-xs leading-relaxed text-gray-300 sm:text-sm">
									{item.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* --- Overlapping Price Structure Card --- */}
			<div className="absolute bottom-0 left-1/2 w-full max-w-4xl -translate-x-1/2 translate-y-1/2 px-6">
				<div className=" bg-white p-8 text-[#0A2540] border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.08)] sm:p-12">
					<h3 className="mb-8 text-center text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl">
						How Much Does It Cost
					</h3>

					<div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
						{/* Left Content Label */}
						<div className="text-center sm:text-right text-xs font-semibold uppercase tracking-wider text-gray-400 sm:max-w-[200px]">
							Video-consultation & medical report with :
						</div>

						{/* Vertical Accent Separator */}
						<div className="hidden h-12 w-[3px] rounded-full bg-[#F39223] sm:block" />

						{/* Right Price Metrics */}
						<div className="space-y-2 text-center sm:text-left">
							<p className="text-sm font-medium text-gray-600 sm:text-base">
								European And UK Expert Costs:{" "}
								<span className="font-extrabold text-[#0A2540]">₦520,000</span>
							</p>
							<p className="text-sm font-medium text-gray-600 sm:text-base">
								American Expert Costs:{" "}
								<span className="font-extrabold text-[#0A2540]">₦580,000</span>
							</p>
						</div>
					</div>
				</div>

				{/* --- Global Action Call Anchor Link --- */}
				<div className="mt-12 text-center text-sm font-semibold text-[#0A2540] sm:text-base">
					<span>
						No matter the complexity of your medical case, our experts can
						help.{" "}
					</span>
					<Link
						href="#consult"
						className="ml-1 inline-block border-b-2 border-[#F39223] pb-0.5 font-bold text-[#F39223] transition-colors hover:text-[#d97d1a] hover:border-[#d97d1a]">
						Consult Expert Doctors Now.
					</Link>
				</div>
			</div>
		</section>
	);
}
