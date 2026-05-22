"use client";

import { ArrowLeft, ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface FormData {
	fullName: string;
	phoneNumber: string;
	location: string;
	specialist: string;
	preferredCountry: "USA" | "UK" | "Europe";
	postConsultation: "Yes" | "No";
}

const NIGERIAN_STATES = [
	"Abia",
	"Adamawa",
	"Akwa Ibom",
	"Anambra",
	"Bauchi",
	"Bayelsa",
	"Benue",
	"Borno",
	"Cross River",
	"Delta",
	"Ebonyi",
	"Edo",
	"Ekiti",
	"Enugu",
	"FCT - Abuja",
	"Gombe",
	"Imo",
	"Jigawa",
	"Kaduna",
	"Kano",
	"Katsina",
	"Kebbi",
	"Kogi",
	"Kwara",
	"Lagos",
	"Nasarawa",
	"Niger",
	"Ogun",
	"Ondo",
	"Osun",
	"Oyo",
	"Plateau",
	"Rivers",
	"Sokoto",
	"Taraba",
	"Yobe",
	"Zamfara",
];

export default function ConsultationPage() {
	const [step, setStep] = useState<1 | 2 | 3>(1);
	const [formData, setFormData] = useState<FormData>({
		fullName: "",
		phoneNumber: "",
		location: "",
		specialist: "",
		preferredCountry: "USA",
		postConsultation: "Yes",
	});

	// Centralized calculation logic for explicit real-time feedback
	const calculateFees = () => {
		let countryFee = 1000;
		if (formData.preferredCountry === "UK") countryFee = 900;
		if (formData.preferredCountry === "Europe") countryFee = 850;

		// Post-consultation appends an explicit $150 if Yes, $0 if No
		const postConsultationFee = formData.postConsultation === "Yes" ? 150 : 0;
		const total = countryFee + postConsultationFee;

		return {
			countryFee: countryFee.toFixed(2),
			postConsultationFee: postConsultationFee.toFixed(2),
			total: total.toFixed(2),
		};
	};

	const fees = calculateFees();

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleNextStep = (e: React.FormEvent) => {
		e.preventDefault();
		if (step < 3) {
			setStep((prev) => (prev + 1) as 1 | 2 | 3);
		} else {
			alert("Processing payment infrastructure transaction...");
		}
	};

	const handleBackStep = () => {
		if (step > 1) setStep((prev) => (prev - 1) as 1 | 2 | 3);
	};

	return (
		<div className="w-full min-h-screen  py-16 px-[9%] flex items-center justify-center">
			<main className="w-full max-w-4xl mx-auto">
				{/* --- Form Container Card --- */}
				<div className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300">
					{/* Step Header Section */}
					<div className="border-b border-gray-100 px-8 py-6 sm:px-12">
						<div className="flex items-center justify-between">
							<span className="text-xs font-bold uppercase tracking-wider text-[#F39223]">
								STEP {step} OF 3
							</span>
							{step > 1 && (
								<button
									type="button"
									onClick={handleBackStep}
									className="flex items-center gap-2 text-xs font-bold text-gray-400 transition-colors hover:text-gray-600">
									<ArrowLeft size={14} strokeWidth={2.5} /> BACK
								</button>
							)}
						</div>
						<h1 className="mt-2 text-xl font-extrabold tracking-tight text-[#0A2540] sm:text-2xl md:text-3xl">
							{step === 3 ? "Summary" : "Please complete the field below."}
						</h1>
					</div>

					{/* Interactive Form Context */}
					<form onSubmit={handleNextStep} className="p-8 sm:p-12">
						{/* STEP 1: Personal Contact Information */}
						{step === 1 && (
							<div className="space-y-6">
								<div className="space-y-2">
									<label className="text-sm font-bold text-[#0A2540]">
										Full Name
									</label>
									<input
										type="text"
										name="fullName"
										required
										placeholder="E.g...Oluwafemi Samson"
										value={formData.fullName}
										onChange={handleInputChange}
										className="w-full rounded-xl bg-gray-50 px-5 py-4 text-sm font-medium text-[#0A2540] placeholder-gray-400 border border-transparent focus:bg-white focus:border-gray-200 focus:outline-none"
									/>
								</div>

								<div className="space-y-2">
									<label className="text-sm font-bold text-[#0A2540]">
										Phone Number
									</label>
									<input
										type="tel"
										name="phoneNumber"
										required
										placeholder="2348148202358"
										value={formData.phoneNumber}
										onChange={handleInputChange}
										className="w-full rounded-xl bg-gray-50 px-5 py-4 text-sm font-medium text-[#0A2540] placeholder-gray-400 border border-transparent focus:bg-white focus:border-gray-200 focus:outline-none"
									/>
								</div>

								<div className="space-y-2 relative">
									<label className="text-sm font-bold text-[#0A2540]">
										Location
									</label>
									<div className="relative">
										<select
											name="location"
											required
											value={formData.location}
											onChange={handleInputChange}
											className="w-full appearance-none rounded-xl bg-gray-50 px-5 py-4 text-sm font-medium text-[#0A2540] border border-transparent focus:bg-white focus:border-gray-200 focus:outline-none">
											<option value="" disabled>
												Choose a state
											</option>
											{NIGERIAN_STATES.map((state) => (
												<option key={state} value={state}>
													{state}
												</option>
											))}
										</select>
										<ChevronDown className="absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 pointer-events-none text-gray-500" />
									</div>
								</div>

								{/* Step 1 Immediate Pricing Bar */}
								<div className="mt-4 p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between">
									<span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
										Current Estimated Cost
									</span>
									<span className="text-base font-black text-[#3BB75E]">
										${fees.total}
									</span>
								</div>
							</div>
						)}

						{/* STEP 2: Custom Preferences & Post-Consultation Toggles */}
						{step === 2 && (
							<div className="space-y-6">
								<div className="space-y-2 relative">
									<label className="text-sm font-bold text-[#0A2540]">
										Specialist
									</label>
									<div className="relative">
										<select
											name="specialist"
											required
											value={formData.specialist}
											onChange={handleInputChange}
											className="w-full appearance-none rounded-xl bg-gray-50 px-5 py-4 text-sm font-medium text-[#0A2540] border border-transparent focus:bg-white focus:border-gray-200 focus:outline-none">
											<option value="" disabled>
												Choose medical specialty
											</option>
											<option value="Cardiology">Cardiology</option>
											<option value="Oncology">Oncology</option>
											<option value="Neurology">Neurology</option>
											<option value="Orthopedics">Orthopedics</option>
										</select>
										<ChevronDown className="absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 pointer-events-none text-gray-500" />
									</div>
								</div>

								<div className="space-y-2 relative">
									<label className="text-sm font-bold text-[#0A2540]">
										Preferred Country Of Experts
									</label>
									<div className="relative">
										<select
											name="preferredCountry"
											value={formData.preferredCountry}
											onChange={handleInputChange}
											className="w-full appearance-none rounded-xl bg-gray-50 px-14 py-4 text-sm font-medium text-[#0A2540] border border-transparent focus:bg-white focus:border-gray-200 focus:outline-none">
											<option value="USA">
												USA (${parseFloat(fees.countryFee)})
											</option>
											<option value="UK">UK (${900}.00)</option>
											<option value="Europe">Europe (${850}.00)</option>
										</select>
										<div className="absolute left-5 top-1/2 h-5 w-7 -translate-y-1/2 pointer-events-none flex items-center justify-center text-sm">
											{formData.preferredCountry === "USA"
												? "🇺🇸"
												: formData.preferredCountry === "UK"
													? "🇬🇧"
													: "🇪🇺"}
										</div>
										<ChevronDown className="absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 pointer-events-none text-gray-500" />
									</div>
								</div>

								<div className="space-y-2 relative">
									<label className="text-sm font-bold text-[#0A2540]">
										Do You Want A Post Consultation
									</label>
									<div className="relative">
										<select
											name="postConsultation"
											value={formData.postConsultation}
											onChange={handleInputChange}
											className="w-full appearance-none rounded-xl bg-gray-50 px-5 py-4 text-sm font-medium text-[#0A2540] border border-transparent focus:bg-white focus:border-gray-200 focus:outline-none">
											<option value="Yes">Yes (+ $150.00)</option>
											<option value="No">No (+ $0.00)</option>
										</select>
										<ChevronDown className="absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 pointer-events-none text-gray-500" />
									</div>
								</div>

								{/* Step 2 Real-time Cost Breakdown Box */}
								<div className="mt-6 p-5 rounded-2xl bg-[#051429]/5 border border-gray-100 space-y-2">
									<div className="flex justify-between text-xs font-semibold text-gray-500">
										<span>Expert Base ({formData.preferredCountry}):</span>
										<span>${fees.countryFee}</span>
									</div>
									<div className="flex justify-between text-xs font-semibold text-gray-500">
										<span>Post-Consultation Add-on:</span>
										<span>${fees.postConsultationFee}</span>
									</div>
									<div className="h-px bg-gray-200/60 my-2" />
									<div className="flex justify-between items-center">
										<span className="text-xs font-bold text-[#0A2540] uppercase tracking-wider">
											Subtotal Preview
										</span>
										<span className="text-lg font-black text-[#3BB75E]">
											${fees.total}
										</span>
									</div>
								</div>
							</div>
						)}

						{/* STEP 3: Complete Invoice Summary Breakdown */}
						{step === 3 && (
							<div className="space-y-6 text-[#0A2540]">
								<div className="grid grid-cols-1 gap-y-4 border-b border-gray-100 pb-6 sm:grid-cols-2">
									<div>
										<h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
											Full Name
										</h4>
										<p className="mt-1 text-base font-bold">
											{formData.fullName || "Oluwafemi Samson"}
										</p>
									</div>
									<div>
										<h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
											Phone Number
										</h4>
										<p className="mt-1 text-base font-bold">
											{formData.phoneNumber || "N/A"}
										</p>
									</div>
									<div>
										<h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
											Location
										</h4>
										<p className="mt-1 text-base font-bold">
											{formData.location || "N/A"}
										</p>
									</div>
									<div>
										<h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
											Specialist
										</h4>
										<p className="mt-1 text-base font-bold">
											{formData.specialist || "N/A"}
										</p>
									</div>
								</div>

								<div className="space-y-4 pt-2">
									<div className="flex items-center justify-between text-sm sm:text-base">
										<div>
											<span className="text-xs font-semibold text-gray-400 uppercase tracking-wide block">
												Preferred Country Of Experts
											</span>
											<span className="font-bold">
												{formData.preferredCountry}
											</span>
										</div>
										<span className="font-bold text-[#3BB75E] text-lg">
											${fees.countryFee}
										</span>
									</div>

									<div className="flex items-center justify-between text-sm sm:text-base border-b border-gray-100 pb-6">
										<div>
											<span className="text-xs font-semibold text-gray-400 uppercase tracking-wide block">
												Do You Want A Post Consultation?
											</span>
											<span className="font-bold">
												{formData.postConsultation}
											</span>
										</div>
										<span className="font-bold text-[#3BB75E] text-lg">
											${fees.postConsultationFee}
										</span>
									</div>

									<div className="flex items-center justify-between pt-2">
										<span className="text-base font-extrabold text-[#0A2540]">
											Total
										</span>
										<span className="text-2xl font-black text-[#0A2540]">
											${fees.total}
										</span>
									</div>
								</div>
							</div>
						)}

						{/* Workflow Submit Control Actions */}
						<div className="mt-10 space-y-4 text-center">
							<button
								type="submit"
								className="w-full rounded-xl bg-[#F39223] py-4 text-sm font-bold text-white transition-all hover:bg-[#d97d1a] active:scale-[0.99] shadow-md">
								{step === 3
									? "Make Payment"
									: step === 2
										? "Proceed To Checkout"
										: "Next"}
							</button>

							{/* {step === 2 && (
								<button
									type="button"
									className="inline-block border-b-2 border-[#F39223] pb-0.5 text-xs font-bold tracking-tight text-[#F39223] transition-colors hover:text-[#d97d1a]">
									Speak With Counsellor
								</button>
							)} */}

							{/* {step === 3 && (
								<button
									type="button"
									className="inline-block border-b-2 border-[#F39223] pb-0.5 text-xs font-bold tracking-tight text-[#F39223] transition-colors hover:text-[#d97d1a]">
									Expect Our Call
								</button>
							)} */}
						</div>
					</form>
				</div>
			</main>
		</div>
	);
}
