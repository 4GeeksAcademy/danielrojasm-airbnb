import { Category } from "@/lib/types";

type RegionStripProps = {
  categories: Category[];
  activeCategory: string;
  onSelect: (id: string) => void;
};

const RegionStrip = ({ categories, activeCategory, onSelect }: RegionStripProps) => {
  return (
    <section className="bg-[#f7f7f7]">
      <div className="mx-auto flex w-full max-w-6xl gap-4 overflow-x-auto px-4 py-2 md:px-6">
        {categories.map((category) => {
          const isActive = category.id === activeCategory;

          return (
            <button
              className={`shrink-0 border-b-2 px-1 py-2 text-sm transition ${
                isActive ? "border-black text-black" : "border-transparent text-black/55 hover:text-black"
              }`}
              key={category.id}
              onClick={() => onSelect(category.id)}
              type="button"
            >
              {category.label}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default RegionStrip;
