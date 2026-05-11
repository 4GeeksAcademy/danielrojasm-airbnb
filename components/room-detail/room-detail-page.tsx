"use client";

import Link from "next/link";
import Navbar from "@/components/navbar/navbar";
import RoomAmenitiesSection from "./room-amenities-section";
import RoomBookingSection from "./room-booking-section";
import RoomGallerySection from "./room-gallery-section";
import RoomHostSection from "./room-host-section";
import RoomLoadingState from "./room-loading-state";
import RoomNotFoundState from "./room-not-found-state";
import RoomOverviewSection from "./room-overview-section";
import RoomReserveFooter from "./room-reserve-footer";
import useRoomDetailState from "./use-room-detail-state";

type RoomDetailPageProps = {
  roomId: string;
};

const RoomDetailPage = ({ roomId }: RoomDetailPageProps) => {
  const {
    room,
    isLoading,
    imageIndex,
    guests,
    searchValue,
    setSearchValue,
    nextImage,
    prevImage,
    decreaseGuests,
    increaseGuests,
  } = useRoomDetailState(roomId);

  if (isLoading) {
    return <RoomLoadingState onSearch={setSearchValue} searchValue={searchValue} />;
  }

  if (!room) {
    return <RoomNotFoundState onSearch={setSearchValue} searchValue={searchValue} />;
  }

  const totalPrice = room.pricePerNight * 2;

  return (
    <main className="min-h-screen pb-28">
      <Navbar onSearch={setSearchValue} searchQuery={searchValue} />

      <div className="mx-auto w-full max-w-5xl px-4 py-5">
        <RoomGallerySection
          imageCount={room.images.length}
          imageIndex={imageIndex}
          imageUrl={room.images[imageIndex]}
          onNext={nextImage}
          onPrev={prevImage}
        />

        <RoomOverviewSection room={room} />
        <RoomHostSection room={room} />
        <RoomAmenitiesSection room={room} />
        <RoomBookingSection
          guests={guests}
          onDecreaseGuests={decreaseGuests}
          onIncreaseGuests={increaseGuests}
          pricePerNight={room.pricePerNight}
          totalPrice={totalPrice}
        />

        <Link className="mt-5 inline-flex rounded-xl border border-black/15 px-4 py-2 text-sm font-semibold" href="/catalog">
          Back to catalog
        </Link>
      </div>

      <RoomReserveFooter totalPrice={totalPrice} />
    </main>
  );
};

export default RoomDetailPage;
