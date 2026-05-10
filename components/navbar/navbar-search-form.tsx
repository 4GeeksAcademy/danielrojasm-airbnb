import { FormEvent } from "react";

type NavbarSearchFormProps = {
  searchQuery: string;
  onSearch: (query: string) => void;
};

const NavbarSearchForm = ({ searchQuery, onSearch }: NavbarSearchFormProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchQuery.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex min-w-0 flex-1 justify-center">
      <div className="flex w-full max-w-xl items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-3 shadow-sm transition-shadow duration-200 focus-within:ring-2 focus-within:ring-black/10">
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-black/45" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input
          type="search"
          value={searchQuery}
          onChange={(event) => onSearch(event.target.value)}
          placeholder="Start your search"
          className="flex-1 bg-transparent text-sm text-black/90 outline-none placeholder:text-black/45"
          aria-label="Search listings"
        />
        <span className="h-4 w-px bg-black/10" aria-hidden="true" />
        <button
          type="submit"
          className="rounded-full bg-[#ff385c] p-2 text-white transition-colors duration-200 hover:bg-[#e03152]"
          aria-label="Submit search"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default NavbarSearchForm;
