import Link from "next/link";

const NavbarLogo = () => {
  return (
    <Link href="/" className="hidden shrink-0 items-center gap-1 text-brand md:flex" aria-label="Airbnb home">
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        <path d="M12 2.1c-.7 0-1.4.4-1.8 1.1l-5.9 10.5c-.6 1-.9 2.1-.9 3.2A5.8 5.8 0 0 0 9.2 22c1.2 0 2.4-.4 3.3-1.3.9.9 2 1.3 3.3 1.3a5.8 5.8 0 0 0 5.8-5.1c0-1.1-.3-2.2-.9-3.2L13.8 3.2A2 2 0 0 0 12 2.1Zm0 4.6 4.7 8.3c.2.4.3.8.3 1.2 0 1.4-1.1 2.6-2.5 2.6-1.1 0-2-.7-2.3-1.7h-.4c-.3 1-1.2 1.7-2.3 1.7A2.6 2.6 0 0 1 7 16.2c0-.4.1-.8.3-1.2L12 6.7Z" />
      </svg>
      <span className="hidden text-lg font-semibold tracking-tight sm:inline">airbnb</span>
    </Link>
  );
};

export default NavbarLogo;
