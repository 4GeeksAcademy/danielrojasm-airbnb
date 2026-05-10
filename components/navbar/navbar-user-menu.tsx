const NavbarUserMenu = () => {
  return (
    <div className="hidden shrink-0 items-center md:flex">
      <button
        type="button"
        className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 transition-shadow duration-200 hover:shadow-sm"
        aria-label="User menu"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-neutral-700" fill="none" strokeWidth="2" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <span className="grid h-6 w-6 place-items-center rounded-full bg-neutral-100 text-neutral-700">
          <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-current" fill="none" strokeWidth="1.8" aria-hidden="true">
            <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default NavbarUserMenu;
