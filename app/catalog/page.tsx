"use client";

import { useEffect, useMemo, useState } from "react";
import BottomNav from "@/components/bottom-nav";
import Footer from "@/components/footer";
import ListingCard from "@/components/listing-card";
import MapPlaceholder from "@/components/map-placeholder";
import Navbar from "@/components/navbar/navbar";
import { listings } from "@/lib/mock-data";

const CatalogPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);

    return () => clearTimeout(timer);
  }, []);

  const filteredAndSorted = useMemo(() => {
    const query = searchValue.trim().toLowerCase();
    const filtered = listings.filter((listing) => {
      if (!query) {
        return true;
      }

      return (
        listing.title.toLowerCase().includes(query) ||
        listing.location.toLowerCase().includes(query) ||
        listing.category.toLowerCase().includes(query)
      );
    });

    return [...filtered].sort((a, b) => {
      return sortOrder === "asc" ? a.pricePerNight - b.pricePerNight : b.pricePerNight - a.pricePerNight;
    });
  }, [searchValue, sortOrder]);

  return (
    <main className="min-h-screen pb-16 md:pb-0">
      <Navbar onSearch={setSearchValue} searchQuery={searchValue} />

      <section className="mx-auto w-full max-w-6xl px-4 py-4 md:px-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h1 className="text-lg font-semibold">Over {filteredAndSorted.length} stays</h1>
          <label className="flex items-center gap-2 text-sm">
            <span>Price</span>
            <select
              className="rounded-lg border border-black/15 bg-white px-2 py-1 shadow-sm"
              onChange={(event) => setSortOrder(event.target.value as "asc" | "desc")}
              value={sortOrder}
            >
              <option value="asc">Low to high</option>
              <option value="desc">High to low</option>
            </select>
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_320px] md:items-start">
          <div className="space-y-3">
            {isLoading ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div className="animate-pulse rounded-2xl border border-black/10 bg-white p-3" key={index}>
                    <div className="h-28 rounded-xl bg-black/10" />
                    <div className="mt-3 h-3 w-2/3 rounded bg-black/10" />
                    <div className="mt-2 h-3 w-1/2 rounded bg-black/10" />
                    <div className="mt-2 h-3 w-1/3 rounded bg-black/10" />
                  </div>
                ))}
              </div>
            ) : filteredAndSorted.length ? (
              filteredAndSorted.map((listing) => <ListingCard key={listing.id} listing={listing} variant="list" />)
            ) : (
              <div className="rounded-2xl border border-dashed border-black/20 bg-white p-8 text-center text-sm text-black/65">
                No results for that search.
              </div>
            )}
          </div>

          <MapPlaceholder />
        </div>
      </section>

      <Footer />
      <BottomNav active="explore" />
    </main>
  );
};

export default CatalogPage;
