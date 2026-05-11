"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import BottomNav from "@/components/bottom-nav";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";
import RegionStrip from "@/components/region-strip";
import { Listing } from "@/lib/types";
import { categories, listings } from "@/lib/mock-data";

const inspirationTabs = ["Popular", "Beach", "Cities", "Historic", "Islands"];

const inspirationItems = [
  { city: "Malgrat de Mar", type: "Vacation rentals" },
  { city: "Mondello", type: "Cottage rentals" },
  { city: "La Linea de la Concepcion", type: "Apartment rentals" },
  { city: "Centro Madrid", type: "House rentals" },
  { city: "Graciosa", type: "Vacation rentals" },
  { city: "Gran Canaria", type: "Vacation rentals" },
  { city: "Stratford", type: "Vacation rentals" },
  { city: "Show more", type: "" },
];

const arrowIcon = (
  <svg aria-hidden="true" className="h-4 w-4 text-black/65" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M9 6l6 6-6 6" />
  </svg>
);

type HomeImageCardProps = {
  item: Listing;
  compact?: boolean;
};

const HomeImageCard = ({ item, compact = false }: HomeImageCardProps) => {
  return (
    <Link
      className={`block shrink-0 ${compact ? "w-[46%] min-w-[160px] sm:w-[32%]" : "w-[70%] min-w-[220px] sm:w-[38%] lg:w-[30%]"}`}
      href={`/rooms/${item.id}`}
    >
      <article>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image alt={item.imageAlt} className="object-cover" fill sizes="(max-width: 640px) 70vw, 30vw" src={item.imageUrl} />
          <span aria-hidden="true" className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[11px] font-semibold text-black/75">
            ❤
          </span>
          {item.badge ? (
            <span className="absolute left-2 top-2 rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-black/75 shadow-sm">
              {item.badge}
            </span>
          ) : null}
        </div>

        <div className="pt-2">
          <h3 className="line-clamp-1 text-[15px] font-medium leading-tight text-black/90">{item.title}</h3>
          <p className="mt-1 line-clamp-1 text-[12px] text-black/60">{item.dates}</p>
          <p className="text-[12px] text-black/60">EUR {item.pricePerNight} total</p>
          <p className="text-[12px] text-black/75">★ {item.rating}</p>
        </div>
      </article>
    </Link>
  );
};

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="mb-3 flex items-start justify-between gap-3">
      <div>
        <h2 className="text-[31px] font-semibold tracking-tight text-black/90 sm:text-2xl">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-black/60">{subtitle}</p> : null}
      </div>
      <span className="mt-1 rounded-full border border-black/10 bg-white p-2">{arrowIcon}</span>
    </div>
  );
};

const Home = () => {
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

  const madridHomes = useMemo(() => filteredListings.filter((item) => item.location.includes("Madrid")).slice(0, 6), [filteredListings]);
  const featuredHotels = useMemo(() => filteredListings.slice(0, 6), [filteredListings]);
  const granadaHomes = useMemo(
    () => filteredListings.filter((item) => item.location.includes("Granada") || item.category === "design").slice(0, 6),
    [filteredListings]
  );
  const nearbyStays = useMemo(() => filteredListings.slice(2, 8), [filteredListings]);

  return (
    <main className="min-h-screen pb-16 md:pb-0">
      <Navbar onSearch={setSearchValue} searchQuery={searchValue} />
      <RegionStrip activeCategory={activeCategory} categories={categories} onSelect={setActiveCategory} />

      <section className="mx-auto w-full max-w-6xl space-y-9 px-4 py-4 md:px-6">
        {isLoading ? (
          <div className="space-y-6">
            {Array.from({ length: 4 }).map((_, groupIndex) => (
              <div className="space-y-3" key={groupIndex}>
                <div className="h-5 w-2/3 animate-pulse rounded bg-black/10" />
                <div className="flex gap-3 overflow-hidden">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div className="w-[70%] min-w-[220px] animate-pulse rounded-2xl bg-black/10 sm:w-[38%] lg:w-[30%]" key={index}>
                      <div className="aspect-[4/3] rounded-2xl bg-black/10" />
                      <div className="mt-2 h-3 w-4/5 rounded bg-black/10" />
                      <div className="mt-2 h-3 w-2/5 rounded bg-black/10" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : filteredListings.length ? (
          <>
            <section>
              <SectionHeader title="Popular homes in Madrid" />
              <div className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {(madridHomes.length ? madridHomes : filteredListings.slice(0, 6)).map((listing) => (
                  <HomeImageCard item={listing} key={listing.id} compact />
                ))}
              </div>
            </section>

            <section>
              <SectionHeader title="Featured hotels in Madrid" subtitle="A collection of independent and handpicked hotels." />
              <div className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {featuredHotels.map((listing) => (
                  <HomeImageCard item={listing} key={`featured-${listing.id}`} compact />
                ))}
              </div>
            </section>

            <section>
              <SectionHeader title="Stay in Granada" />
              <div className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {(granadaHomes.length ? granadaHomes : filteredListings.slice(0, 6)).map((listing) => (
                  <HomeImageCard item={listing} key={`granada-${listing.id}`} compact />
                ))}
              </div>
            </section>

            <section>
              <SectionHeader title="Popular stays nearby" />
              <div className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {(nearbyStays.length ? nearbyStays : filteredListings.slice(0, 6)).map((listing) => (
                  <HomeImageCard item={listing} key={`nearby-${listing.id}`} />
                ))}
              </div>
            </section>

            <section className="rounded-2xl bg-[#efefef] p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="text-xl font-semibold tracking-tight text-black/90">Inspiration for future getaways</h2>
                <span>{arrowIcon}</span>
              </div>

              <div className="flex gap-4 overflow-x-auto border-b border-black/15 pb-2 text-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {inspirationTabs.map((tab, index) => (
                  <button
                    className={`shrink-0 border-b-2 pb-2 transition ${
                      index === 0 ? "border-black text-black" : "border-transparent text-black/55 hover:text-black"
                    }`}
                    key={tab}
                    type="button"
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-4 text-sm">
                {inspirationItems.map((item) => (
                  <div key={item.city}>
                    <p className="line-clamp-1 font-medium text-black/85">{item.city}</p>
                    {item.type ? <p className="text-black/55">{item.type}</p> : null}
                  </div>
                ))}
              </div>
            </section>

            <div>
              <Link className="inline-flex rounded-xl border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-black/80" href="/catalog">
                Ver catalogo completo
              </Link>
            </div>
          </>
        ) : (
          <div className="rounded-2xl border border-dashed border-black/20 bg-white p-8 text-center text-sm text-black/65">
            No stays match this search.
          </div>
        )}
      </section>

      <Footer />
      <BottomNav active="explore" />
    </main>
  );
};

export default Home;
