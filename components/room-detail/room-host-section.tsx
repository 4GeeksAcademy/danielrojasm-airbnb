import { Room } from "@/lib/types";

type RoomHostSectionProps = {
  room: Room;
};

const RoomHostSection = ({ room }: RoomHostSectionProps) => {
  return (
    <section className="mt-6 border-b border-black/10 pb-6">
      <h2 className="text-xl font-semibold">Hosted by {room.host.name}</h2>
      <p className="mt-1 text-sm text-black/70">Hosting for {room.host.yearsHosting} years</p>
      <div className={`mt-3 h-16 w-16 rounded-full bg-gradient-to-br ${room.host.avatarTone}`} />
    </section>
  );
};

export default RoomHostSection;
