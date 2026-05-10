"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import BottomNav from "@/components/bottom-nav";
import Footer from "@/components/footer";
import ListingCard from "@/components/listing-card";
import Navbar from "@/components/navbar/navbar";
import RegionStrip from "@/components/region-strip";
import { Listing } from "@/lib/types";
import { categories, listings } from "@/lib/mock-data";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [visibleListings, setVisibleListings] = useState<Listing[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setIsLoading(true);
    setVisibleListings([]);

    const timer = setTimeout(() => {
      setVisibleListings(listings);
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const filteredListings = useMemo(() => {
    const query = searchValue.trim().toLowerCase();

    return visibleListings.filter((listing) => {
      const matchesCategory = activeCategory === "all" || listing.category === activeCategory;
      if (!matchesCategory) {
        return false;
      }

      if (!query) {
        return true;
      }

      return listing.title.toLowerCase().includes(query) || listing.location.toLowerCase().includes(query);
    });
  }, [activeCategory, searchValue, visibleListings]);

  return (
    <main className="min-h-screen pb-16 md:pb-0">
      <Navbar onSearch={setSearchValue} searchQuery={searchValue} />
      <RegionStrip activeCategory={activeCategory} categories={categories} onSelect={setActiveCategory} />

      <section className="mx-auto w-full max-w-6xl px-4 py-4 md:px-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Popular homes in Madrid</h1>
            <p className="mt-1 text-sm text-black/60">Find places with instant filters and live search.</p>
          </div>

          <Link
            className="shrink-0 rounded-xl border border-black/15 bg-white px-3 py-2 text-xs font-semibold text-black/80 transition-colors hover:bg-black/5"
            href="/catalog"
          >
            Ver catalogo
          </Link>
        </div>

        <div className="mt-5">
          {isLoading ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div className="animate-pulse rounded-2xl border border-black/10 bg-white p-3" key={index}>
                  <div className="aspect-[4/3] rounded-xl bg-black/10" />
                  <div className="mt-3 h-3 w-2/3 rounded bg-black/10" />
                  <div className="mt-2 h-3 w-1/2 rounded bg-black/10" />
                  <div className="mt-2 h-3 w-1/3 rounded bg-black/10" />
                </div>
              ))}
            </div>
          ) : filteredListings.length ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-black/20 bg-white p-8 text-center text-sm text-black/65">
              No stays match this search.
            </div>
          )}
        </div>
      </section>

      <Footer />
      <BottomNav active="explore" />
    </main>
  );
}
