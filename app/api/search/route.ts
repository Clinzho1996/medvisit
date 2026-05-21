// app/api/search/route.ts

import { searchableContent } from "@/lib/SearchData";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const query = searchParams.get("q");

		// Return empty array if no query
		if (!query || query.trim() === "") {
			return NextResponse.json([]);
		}

		const searchTerm = query.toLowerCase().trim();

		// Search through content
		const results = searchableContent.filter((item) => {
			// Search in title
			const titleMatch = item.title.toLowerCase().includes(searchTerm);
			// Search in description
			const descriptionMatch = item.description
				.toLowerCase()
				.includes(searchTerm);
			// Search in category
			const categoryMatch = item.category.toLowerCase().includes(searchTerm);
			// Search in keywords if they exist
			const keywordMatch = item.keywords?.some((keyword) =>
				keyword.toLowerCase().includes(searchTerm),
			);

			return titleMatch || descriptionMatch || categoryMatch || keywordMatch;
		});

		// Return top 5 results
		return NextResponse.json(results.slice(0, 5));
	} catch (error) {
		console.error("Search API error:", error);
		return NextResponse.json(
			{ error: "Failed to perform search" },
			{ status: 500 },
		);
	}
}
