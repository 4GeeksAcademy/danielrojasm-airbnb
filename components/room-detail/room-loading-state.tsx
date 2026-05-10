import Navbar from "@/components/navbar/navbar";

type RoomLoadingStateProps = {
  searchValue: string;
  onSearch: (value: string) => void;
};

const RoomLoadingState = ({ searchValue, onSearch }: RoomLoadingStateProps) => {
  return (
    <main className="min-h-screen">
      <Navbar onSearch={onSearch} searchQuery={searchValue} />
      <div className="mx-auto w-full max-w-5xl animate-pulse space-y-4 px-4 py-6">
        <div className="h-64 rounded-2xl bg-black/10" />
        <div className="h-5 w-2/3 rounded bg-black/10" />
        <div className="h-5 w-1/2 rounded bg-black/10" />
        <div className="h-28 rounded-2xl bg-black/10" />
      </div>
    </main>
  );
};

export default RoomLoadingState;
