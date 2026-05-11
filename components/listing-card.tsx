import Image from "next/image";
import Link from "next/link";
import { Listing } from "@/lib/types";

type ListingCardProps = {
  listing: Listing;
  variant?: "grid" | "list";
};

const ListingCard = ({ listing, variant = "grid" }: ListingCardProps) => {
  const isList = variant === "list";

  return (
    <article className={`${isList ? "flex gap-3 rounded-2xl bg-white p-2" : ""}`}>
      <div
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${listing.tone} ${
          isList ? "h-28 w-32" : "aspect-[4/3] w-full"
        }`}
      >
        <Image
          alt={listing.imageAlt}
          className="object-cover"
          fill
          sizes={isList ? "(max-width: 768px) 50vw, 180px" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
          src={listing.imageUrl}
        />
        {listing.badge ? (
          <span className="absolute left-2 top-2 rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-black/75 shadow-sm">
            {listing.badge}
          </span>
        ) : null}
        <button
          aria-label="save listing"
          className="absolute right-2 top-2 rounded-full border border-black/10 bg-white/95 px-2 py-0.5 text-[10px] font-semibold"
          type="button"
        >
          Save
        </button>
      </div>

      <div className={isList ? "flex-1 pt-1" : "mt-3"}>
        <h3 className="line-clamp-1 text-[14px] font-semibold leading-tight">{listing.title}</h3>
        <p className="line-clamp-1 mt-0.5 text-[12px] text-black/65">{listing.location}</p>
        <p className="line-clamp-1 text-[12px] text-black/55">{listing.dates}</p>
        <p className="line-clamp-1 text-[12px] text-black/55">{listing.host}</p>
        <p className="mt-1.5 text-[14px] font-semibold">
          EUR {listing.pricePerNight}
          <span className="ml-1 text-[12px] font-normal text-black/65">night</span>
        </p>
        <p className="text-[12px] text-black/65">
          {listing.rating} ({listing.reviews})
        </p>
        <Link className="mt-1.5 inline-flex text-[12px] font-semibold underline underline-offset-2" href={`/rooms/${listing.id}`}>
          View detail
        </Link>
      </div>
    </article>
  );
};

export default ListingCard;
