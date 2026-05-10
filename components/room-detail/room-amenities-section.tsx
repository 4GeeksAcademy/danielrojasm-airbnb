import { Room } from "@/lib/types";

type RoomAmenitiesSectionProps = {
  room: Room;
};

const RoomAmenitiesSection = ({ room }: RoomAmenitiesSectionProps) => {
  return (
    <section className="mt-6 border-b border-black/10 pb-6">
      <h2 className="text-xl font-semibold">What this place offers</h2>
      <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-black/80 md:grid-cols-3">
        {room.amenities.map((item) => (
          <div className="rounded-xl border border-black/10 bg-white p-3" key={item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomAmenitiesSection;
