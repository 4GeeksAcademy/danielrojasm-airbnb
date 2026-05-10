type RoomReserveFooterProps = {
  totalPrice: number;
};

const RoomReserveFooter = ({ totalPrice }: RoomReserveFooterProps) => {
  return (
    <aside className="fixed bottom-0 left-0 right-0 border-t border-black/10 bg-white/95 p-3 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <p className="text-sm font-semibold">EUR {totalPrice} total</p>
        <button className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white" type="button">
          Reserve
        </button>
      </div>
    </aside>
  );
};

export default RoomReserveFooter;
