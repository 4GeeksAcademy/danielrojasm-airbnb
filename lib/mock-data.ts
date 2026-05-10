import { Category, Listing, Room } from "@/lib/types";

export const categories: Category[] = [
  { id: "all", label: "All" },
  { id: "city", label: "City" },
  { id: "beach", label: "Beach" },
  { id: "mountain", label: "Mountain" },
  { id: "design", label: "Design" },
  { id: "family", label: "Family" },
];

export const listings: Listing[] = [
  {
    id: "madrid-central-suite",
    title: "Central Suite in Madrid",
    location: "Madrid, Spain",
    dates: "Jun 10 - Jun 14",
    host: "Hosted by Alba",
    category: "city",
    pricePerNight: 122,
    rating: 4.91,
    reviews: 128,
    badge: "Guest favorite",
    tone: "from-amber-200 via-orange-100 to-rose-200",
  },
  {
    id: "granada-patio-home",
    title: "Patio Home in Granada",
    location: "Granada, Spain",
    dates: "Jul 03 - Jul 07",
    host: "Hosted by Mario",
    category: "design",
    pricePerNight: 98,
    rating: 4.83,
    reviews: 84,
    tone: "from-stone-200 via-amber-100 to-yellow-100",
  },
  {
    id: "malaga-breeze-flat",
    title: "Breeze Flat in Malaga",
    location: "Malaga, Spain",
    dates: "Aug 12 - Aug 16",
    host: "Hosted by Lucia",
    category: "beach",
    pricePerNight: 140,
    rating: 4.95,
    reviews: 211,
    badge: "Super host",
    tone: "from-sky-200 via-cyan-100 to-blue-100",
  },
  {
    id: "sevilla-terrace-loft",
    title: "Terrace Loft in Sevilla",
    location: "Sevilla, Spain",
    dates: "Sep 01 - Sep 05",
    host: "Hosted by Irene",
    category: "city",
    pricePerNight: 115,
    rating: 4.79,
    reviews: 66,
    tone: "from-rose-200 via-pink-100 to-orange-100",
  },
  {
    id: "asturias-green-cabin",
    title: "Green Cabin in Asturias",
    location: "Asturias, Spain",
    dates: "Jul 18 - Jul 22",
    host: "Hosted by Daniel",
    category: "mountain",
    pricePerNight: 89,
    rating: 4.88,
    reviews: 102,
    tone: "from-emerald-200 via-lime-100 to-green-100",
  },
  {
    id: "valencia-family-loft",
    title: "Family Loft in Valencia",
    location: "Valencia, Spain",
    dates: "Aug 22 - Aug 28",
    host: "Hosted by Paula",
    category: "family",
    pricePerNight: 156,
    rating: 4.86,
    reviews: 149,
    badge: "Great for groups",
    tone: "from-indigo-200 via-violet-100 to-fuchsia-100",
  },
  {
    id: "cadiz-sunset-studio",
    title: "Sunset Studio in Cadiz",
    location: "Cadiz, Spain",
    dates: "Jun 20 - Jun 23",
    host: "Hosted by Juan",
    category: "beach",
    pricePerNight: 101,
    rating: 4.74,
    reviews: 54,
    tone: "from-orange-200 via-amber-100 to-yellow-100",
  },
  {
    id: "bilbao-riverside-apartment",
    title: "Riverside Apartment in Bilbao",
    location: "Bilbao, Spain",
    dates: "Sep 15 - Sep 19",
    host: "Hosted by Laura",
    category: "city",
    pricePerNight: 133,
    rating: 4.9,
    reviews: 93,
    tone: "from-slate-200 via-zinc-100 to-stone-100",
  },
];

const defaultAmenities = [
  "Kitchen",
  "Wifi",
  "Dedicated workspace",
  "TV",
  "Air conditioning",
  "Washer",
  "Self check-in",
  "Free parking",
];

const defaultDescription =
  "Warm and comfortable home close to local spots. The space has natural light, practical amenities, and easy access to transport and food. Ideal for short or medium stays.";

export const rooms: Room[] = listings.map((listing) => ({
  id: listing.id,
  title: listing.title,
  location: listing.location,
  dates: listing.dates,
  rating: listing.rating,
  reviews: listing.reviews,
  pricePerNight: listing.pricePerNight,
  description: defaultDescription,
  host: {
    name: listing.host.replace("Hosted by ", ""),
    yearsHosting: 2 + (listing.id.length % 6),
    avatarTone: listing.tone,
  },
  images: [listing.tone, "from-zinc-200 via-stone-100 to-slate-200", "from-sky-200 via-blue-100 to-cyan-100"],
  amenities: defaultAmenities,
}));

export function getRoomById(id: string): Room | undefined {
  return rooms.find((room) => room.id === id);
}
