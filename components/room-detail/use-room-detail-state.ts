import { useEffect, useState } from "react";
import { getRoomById } from "@/lib/mock-data";
import { Room } from "@/lib/types";

type UseRoomDetailStateResult = {
  room: Room | null;
  isLoading: boolean;
  imageIndex: number;
  guests: number;
  searchValue: string;
  setSearchValue: (value: string) => void;
  nextImage: () => void;
  prevImage: () => void;
  decreaseGuests: () => void;
  increaseGuests: () => void;
};

const useRoomDetailState = (roomId: string): UseRoomDetailStateResult => {
  const [room, setRoom] = useState<Room | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);
  const [guests, setGuests] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setRoom(null);
    const timer = setTimeout(() => {
      setRoom(getRoomById(roomId) ?? null);
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [roomId]);

  useEffect(() => {
    setImageIndex(0);
    setGuests(1);
  }, [roomId]);

  const nextImage = () => {
    if (!room) {
      return;
    }
    setImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    if (!room) {
      return;
    }
    setImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const decreaseGuests = () => setGuests((prev) => Math.max(1, prev - 1));
  const increaseGuests = () => setGuests((prev) => Math.min(8, prev + 1));

  return {
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
  };
};

export default useRoomDetailState;
