import { Room } from "@/lib/types";

type RoomOverviewSectionProps = {
  room: Room;
};

const RoomOverviewSection = ({ room }: RoomOverviewSectionProps) => {
  return (
    <section className="mt-6 border-b border-black/10 pb-6">
      <h1 className="text-2xl font-semibold tracking-tight">{room.title}</h1>
      <p className="mt-1 text-sm text-black/70">
        {room.rating} ({room.reviews}) · {room.location}
      </p>
      <p className="mt-3 text-sm text-black/75">{room.description}</p>
    </section>
  );
};

export default RoomOverviewSection;
