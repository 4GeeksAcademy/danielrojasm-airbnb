import Link from "next/link";
import Navbar from "@/components/navbar/navbar";

type RoomNotFoundStateProps = {
  searchValue: string;
  onSearch: (value: string) => void;
};

const RoomNotFoundState = ({ searchValue, onSearch }: RoomNotFoundStateProps) => {
  return (
    <main className="min-h-screen">
      <Navbar onSearch={onSearch} searchQuery={searchValue} />
      <section className="mx-auto w-full max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-semibold">Room not found</h1>
        <p className="mt-2 text-black/65">The selected room does not exist in the mock data.</p>
        <Link className="mt-4 inline-flex rounded-xl border border-black/15 px-4 py-2 text-sm font-semibold" href="/catalog">
          Back to catalog
        </Link>
      </section>
    </main>
  );
};

export default RoomNotFoundState;
