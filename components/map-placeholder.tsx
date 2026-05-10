type MapPlaceholderProps = {
  compact?: boolean;
};

const pins = [
  { id: "a", positionClass: "left-[14%] top-[34%]", price: "EUR 92" },
  { id: "b", positionClass: "left-[58%] top-[24%]", price: "EUR 128" },
  { id: "c", positionClass: "left-[42%] top-[62%]", price: "EUR 110" },
];

const MapPlaceholder = ({ compact = false }: MapPlaceholderProps) => {
  return (
    <section className={`rounded-2xl border border-black/10 bg-white p-3 shadow-sm ${compact ? "" : "md:sticky md:top-24"}`}>
      <div className="relative h-64 overflow-hidden rounded-xl bg-[radial-gradient(circle_at_10%_20%,#dbeafe_0%,#f8fafc_45%,#f1f5f9_100%)]">
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] [background-size:28px_28px]" />
        {pins.map((pin) => (
          <span
            className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10 bg-white px-2 py-1 text-[10px] font-semibold shadow ${pin.positionClass}`}
            key={pin.id}
          >
            {pin.price}
          </span>
        ))}
      </div>
      <button className="mt-3 w-full rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white" type="button">
        Show list homes
      </button>
    </section>
  );
};

export default MapPlaceholder;
