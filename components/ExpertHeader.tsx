"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandX,
	IconChevronDown,
	IconMailOpened,
	IconMapPin,
	IconMenu2,
	IconSearch,
	IconX,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ExpertNavbar = () => {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false);

	const navLinks = [
		{ name: "Home", href: "/second-opinion" },
		{ name: "About us", href: "/second-opinion/about-us" },
		{ name: "Specialties", href: "#", isDropdown: true },
		{ name: "Process", href: "/second-opinion/process" },
		{ name: "Contact us", href: "/second-opinion/contact-us" },
		{ name: "Start Consultation", href: "/second-opinion/start-consultation" },
	];

	const specialtiesDropdownItems = [
		{ name: "Our specialties", href: "/second-opinion/specialties" },
		{ name: "FAQs", href: "/second-opinion/faq" },
		{
			name: "Referring Physicians",
			href: "/second-opinion/referring-physicians",
		},
		{ name: "Patients & Families", href: "/second-opinion/patients-families" },
	];

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Searching for:", searchQuery);
		// Logic to route: router.push(`/search?q=${searchQuery}`)
		setIsSearchOpen(false);
	};

	return (
		<header className="w-full font-sans border-b border-gray-100 shadow-2xl shadow-[#05213A]/10 sticky top-0 z-50 bg-white">
			{/* --- TOP BAR --- */}
			<div className="bg-[#FAFAFA] border-b border-gray-200 py-2 hidden lg:block">
				<div className="flex justify-between items-center text-[11px] text-gray-600 px-[9%]">
					<div className="flex items-center gap-6">
						<div className="flex items-center gap-2">
							<IconMailOpened size={14} className="text-[#F4911E]" />
							<span className="font-semibold">info@medvisit.com.ng</span>
						</div>
						<div className="flex items-center gap-2">
							<IconMapPin size={14} className="text-[#F4911E]" />
							<span className="font-semibold">
								1 Fawole Lane, Off Ikorodu Road, Obanikoro, Lagos.
							</span>
						</div>
					</div>
					<div className="flex items-center gap-3">
						<Link href="https://www.facebook.com/Medvisitcare/">
							{" "}
							<div className="bg-[#05213A] p-1 rounded text-white hover:bg-[#F4911E] cursor-pointer transition-colors">
								<IconBrandFacebook size={12} />
							</div>{" "}
						</Link>

						<Link href="https://twitter.com/Medvisitng">
							<div className="bg-[#05213A] p-1 rounded text-white hover:bg-[#F4911E] cursor-pointer transition-colors">
								<IconBrandX size={12} />
							</div>
						</Link>
						<Link href="https://www.instagram.com/medvisit.ng?igsh=ejlsNDMyejZiMHNl">
							<div className="bg-[#05213A] p-1 rounded text-white hover:bg-[#F4911E] cursor-pointer transition-colors">
								<IconBrandInstagram size={12} />
							</div>
						</Link>
					</div>
				</div>
			</div>

			{/* --- MAIN NAVIGATION --- */}
			<nav className="bg-white w-full">
				<div className="flex items-center justify-between h-15 ml-[8%]">
					{/* Logo */}
					<Link href="/">
						<div className="flex items-center gap-2 shrink-0">
							<Image
								src="/logo.png"
								alt="MedVisit Logo"
								width={150}
								height={50}
								className="w-full h-10"
							/>
						</div>
					</Link>

					{/* Desktop Links */}
					<div className="hidden lg:flex items-center gap-8">
						{navLinks.map((link) => (
							<div
								key={link.name}
								className="relative"
								onMouseEnter={() =>
									link.isDropdown && setIsSpecialtiesOpen(true)
								}
								onMouseLeave={() =>
									link.isDropdown && setIsSpecialtiesOpen(false)
								}>
								<a
									href={link.href}
									className="text-[13px] font-bold text-[#05213A] hover:text-[#F4911E] transition-colors flex items-center gap-1">
									{link.name}
									{link.isDropdown && <IconChevronDown size={14} />}
								</a>

								{/* Dropdown Menu - Added pt-2 to bridge the gap */}
								{link.isDropdown && isSpecialtiesOpen && (
									<div className="absolute top-full left-0 pt-2 w-64 z-50">
										<div className="bg-white shadow-lg rounded-lg border border-gray-100 py-2">
											{specialtiesDropdownItems.map((item) => (
												<a
													key={item.name}
													href={item.href}
													className="block px-4 py-2 text-[13px] text-[#05213A] hover:text-[#F4911E] hover:bg-gray-50 transition-colors">
													{item.name}
												</a>
											))}
										</div>
									</div>
								)}
							</div>
						))}
					</div>

					{/* Search & Contact Action */}
					<div className="flex items-center h-full">
						<button
							onClick={() => setIsSearchOpen(!isSearchOpen)}
							className="p-4 text-[#05213A] hover:text-[#F4911E] transition-colors">
							<IconSearch size={22} stroke={2.5} />
						</button>

						{/* Desktop CTA */}
						<div className="hidden md:flex items-center bg-[#05213A] text-white h-full px-6 gap-4 cursor-pointer hover:bg-[#e0831a] transition-colors">
							<Image
								src="/call.png"
								alt="Consultant"
								width={50}
								height={50}
								className="w-10 h-10"
							/>
							<div className="flex flex-col gap-1">
								<span className="text-[10px] capitalize font-bold opacity-90">
									Speak With A Consultant
								</span>
								<span className="text-lg font-bold leading-none">
									+23481 825 22015
								</span>
							</div>
						</div>

						{/* Mobile Menu Trigger */}
						<div className="lg:hidden ml-0 sm:ml-4">
							<Sheet>
								<SheetTrigger asChild>
									<button className="p-2 text-[#05213A]">
										<IconMenu2 size={28} />
									</button>
								</SheetTrigger>
								<SheetContent
									side="right"
									className="bg-[#05213A] border-none text-white w-[300px]">
									<div className="mt-12 flex flex-col gap-6 p-6">
										{navLinks.map((link) => (
											<div key={link.name}>
												{link.isDropdown ? (
													<>
														<div className="text-lg font-medium border-b border-white/10 pb-2 mb-2">
															{link.name}
														</div>
														<div className="flex flex-col gap-3 pl-4">
															{specialtiesDropdownItems.map((item) => (
																<a
																	key={item.name}
																	href={item.href}
																	className="text-base font-medium text-white/80 hover:text-[#F4911E] transition-colors">
																	{item.name}
																</a>
															))}
														</div>
													</>
												) : (
													<a
														href={link.href}
														className="text-lg font-medium border-b border-white/10 pb-2 block">
														{link.name}
													</a>
												)}
											</div>
										))}
										<div className="bg-[#F4911E] p-4 rounded-xl flex items-center gap-3 mt-4">
											<Image
												src="/call.png"
												alt="Consultant"
												width={150}
												height={150}
												className="w-10 h-10 object-contain"
											/>
											<div>
												<p className="text-[10px] uppercase font-bold">
													Consultant
												</p>
												<p className="font-bold">+23481 825 22015</p>
											</div>
										</div>
									</div>
								</SheetContent>
							</Sheet>
						</div>
					</div>
				</div>
			</nav>

			{/* --- SEARCH DROPDOWN --- */}
			<AnimatePresence>
				{isSearchOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						className="absolute left-0 w-full bg-white shadow-xl z-50 border-b border-gray-200">
						<form
							onSubmit={handleSearch}
							className="max-w-7xl mx-auto px-6 py-6 flex items-center gap-4">
							<input
								autoFocus
								type="text"
								placeholder="Search services, treatments, or locations..."
								className="flex-1 bg-gray-50 border-none focus:ring-2 focus:ring-[#F4911E] rounded-lg px-6 py-3 text-[#05213A]"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
							<button
								type="submit"
								className="bg-[#05213A] text-white px-4 py-3 rounded-lg font-bold">
								Search
							</button>
							<button
								onClick={() => setIsSearchOpen(false)}
								className="text-gray-400">
								<IconX size={24} />
							</button>
						</form>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

export default ExpertNavbar;
