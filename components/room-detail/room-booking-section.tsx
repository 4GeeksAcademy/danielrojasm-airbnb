type RoomBookingSectionProps = {
  pricePerNight: number;
  totalPrice: number;
  guests: number;
  onDecreaseGuests: () => void;
  onIncreaseGuests: () => void;
};

const RoomBookingSection = ({
  pricePerNight,
  totalPrice,
  guests,
  onDecreaseGuests,
  onIncreaseGuests,
}: RoomBookingSectionProps) => {
  return (
    <section className="mt-6 flex items-center justify-between rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
      <div>
        <p className="text-sm font-semibold">EUR {pricePerNight} night</p>
        <p className="text-xs text-black/65">Approx total EUR {totalPrice}</p>
      </div>

      <div className="flex items-center gap-2">
        <button className="h-8 w-8 rounded-full border border-black/15" onClick={onDecreaseGuests} type="button">
          -
        </button>
        <span className="w-14 text-center text-sm font-semibold">{guests} guest</span>
        <button className="h-8 w-8 rounded-full border border-black/15" onClick={onIncreaseGuests} type="button">
          +
        </button>
      </div>
    </section>
  );
};

export default RoomBookingSection;
