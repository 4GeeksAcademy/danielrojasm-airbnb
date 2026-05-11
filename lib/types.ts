export type Category = {
  id: string;
  label: string;
};

export type Listing = {
  id: string;
  title: string;
  location: string;
  dates: string;
  host: string;
  category: string;
  pricePerNight: number;
  rating: number;
  reviews: number;
  imageUrl: string;
  imageAlt: string;
  galleryImages: string[];
  badge?: string;
  tone: string;
};

export type Host = {
  name: string;
  yearsHosting: number;
  avatarTone: string;
};

export type Room = {
  id: string;
  title: string;
  location: string;
  dates: string;
  rating: number;
  reviews: number;
  pricePerNight: number;
  description: string;
  host: Host;
  images: string[];
  amenities: string[];
};
