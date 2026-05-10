type RoomGallerySectionProps = {
  imageTone: string;
  imageIndex: number;
  imageCount: number;
  onPrev: () => void;
  onNext: () => void;
};

const RoomGallerySection = ({
  imageTone,
  imageIndex,
  imageCount,
  onPrev,
  onNext,
}: RoomGallerySectionProps) => {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-3 shadow-sm">
      <div className={`h-64 rounded-xl bg-gradient-to-br ${imageTone}`} />
      <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
        <button className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold" onClick={onPrev} type="button">
          Prev
        </button>
        <span className="rounded-full bg-black/75 px-3 py-1 text-xs font-semibold text-white">
          {imageIndex + 1}/{imageCount}
        </span>
        <button className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold" onClick={onNext} type="button">
          Next
        </button>
      </div>
    </section>
  );
};

export default RoomGallerySection;
