"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SearchResult } from "@/lib/SearchData";

import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandX,
	IconMailOpened,
	IconMapPin,
	IconMenu2,
	IconSearch,
	IconX,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const Navbar = () => {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
	const [isSearching, setIsSearching] = useState(false);
	const router = useRouter();

	const navLinks = [
		{ name: "Medical Tourism", href: "/medical-tourism" },
		{ name: "Second Medical Opinion", href: "/second-opinion" },
		{ name: "Global Mobility", href: "/global-mobility" },
		{ name: "Contact Us", href: "/medical-tourism/contact-us" },
	];

	// Debounced search function
	const performSearch = useCallback(async (query: string) => {
		if (!query.trim()) {
			setSearchResults([]);
			setIsSearching(false);
			return;
		}

		setIsSearching(true);
		try {
			const response = await fetch(
				`/api/search?q=${encodeURIComponent(query)}`,
			);
			const data = await response.json();
			setSearchResults(data);
		} catch (error) {
			console.error("Search failed:", error);
			setSearchResults([]);
		} finally {
			setIsSearching(false);
		}
	}, []);

	// Debounce effect
	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchQuery) {
				performSearch(searchQuery);
			} else {
				setSearchResults([]);
			}
		}, 300);

		return () => clearTimeout(timer);
	}, [searchQuery, performSearch]);

	const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (searchQuery.trim() && searchResults.length > 0) {
			router.push(searchResults[0].href);
			closeSearch();
		}
	};

	const handleResultClick = (href: string) => {
		router.push(href);
		closeSearch();
	};

	const closeSearch = () => {
		setIsSearchOpen(false);
		setSearchQuery("");
		setSearchResults([]);
		setIsSearching(false);
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
								1A, Johnson Oguntuyo street, Atunrase estate, Gbagada Lagos.
							</span>
						</div>
					</div>
					<div className="flex items-center gap-3">
						<Link href="https://www.facebook.com/Medvisitcare/">
							<div className="bg-[#05213A] p-1 rounded text-white hover:bg-[#F4911E] cursor-pointer transition-colors">
								<IconBrandFacebook size={12} />
							</div>
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
					<div className="flex items-center gap-2 shrink-0">
						<Link href="/">
							<Image
								src="/logo.png"
								alt="MedVisit Logo"
								width={150}
								height={50}
								className="w-full h-10 cursor-pointer"
							/>
						</Link>
					</div>

					{/* Desktop Links */}
					<div className="hidden lg:flex items-center gap-8">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="text-[13px] font-bold text-[#05213A] hover:text-[#F4911E] transition-colors">
								{link.name}
							</Link>
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
						<div className="hidden md:flex items-center bg-[#F4911E] text-white h-full px-6 gap-4 cursor-pointer hover:bg-[#e0831a] transition-colors">
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
											<Link
												key={link.name}
												href={link.href}
												className="text-lg font-medium border-b border-white/10 pb-2">
												{link.name}
											</Link>
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
						<div className="max-w-7xl mx-auto px-6 py-6">
							<form
								onSubmit={handleSearchSubmit}
								className="flex items-center gap-4">
								<div className="relative flex-1">
									<input
										autoFocus
										type="text"
										placeholder="Search services, treatments, or locations..."
										className="w-full bg-gray-50 border-none focus:ring-2 focus:ring-[#F4911E] rounded-lg px-6 py-3 text-[#05213A]"
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)}
									/>
									{isSearching && (
										<div className="absolute right-3 top-1/2 -translate-y-1/2">
											<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#F4911E]"></div>
										</div>
									)}
								</div>
								<button
									type="submit"
									className="bg-[#05213A] text-white px-4 py-3 rounded-lg font-bold hover:bg-[#0a3558] transition-colors">
									Search
								</button>
								<button
									onClick={closeSearch}
									className="text-gray-400 hover:text-gray-600">
									<IconX size={24} />
								</button>
							</form>

							{/* Search Results */}
							{searchQuery && !isSearching && (
								<div className="mt-4 border-t border-gray-100 pt-4">
									{searchResults.length > 0 ? (
										<>
											<div className="text-xs text-gray-400 mb-2 px-3">
												Found {searchResults.length} result
												{searchResults.length !== 1 ? "s" : ""}
											</div>
											{searchResults.map((result, index) => (
												<button
													key={index}
													onClick={() => handleResultClick(result.href)}
													className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors group">
													<div className="flex items-start justify-between">
														<div className="flex-1">
															<div className="flex items-center gap-2 mb-1">
																<span className="text-xs text-[#F4911E] font-semibold">
																	{result.category}
																</span>
															</div>
															<h4 className="font-bold text-[#05213A] group-hover:text-[#F4911E] transition-colors">
																{result.title}
															</h4>
															<p className="text-sm text-gray-500 mt-1 line-clamp-2">
																{result.description}
															</p>
														</div>
														<IconSearch
															size={16}
															className="text-gray-400 group-hover:text-[#F4911E] ml-4 flex-shrink-0 mt-2"
														/>
													</div>
												</button>
											))}
										</>
									) : (
										<div className="text-center py-8 text-gray-500">
											No results found for "{searchQuery}"
										</div>
									)}
								</div>
							)}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Navbar;
