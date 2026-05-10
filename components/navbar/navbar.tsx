"use client";

import { useEffect, useState } from "react";
import NavbarLogo from "./navbar-logo";
import NavbarSearchForm from "./navbar-search-form";
import NavbarUserMenu from "./navbar-user-menu";

interface NavbarProps {
  searchQuery: string;
  onSearch: (query: string) => void;
}

const Navbar = ({ searchQuery, onSearch }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-[#f7f7f7]/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="mx-auto flex w-full max-w-screen-xl items-center gap-2 px-4 py-3 md:gap-4 md:px-6">
        <NavbarLogo />
        <NavbarSearchForm onSearch={onSearch} searchQuery={searchQuery} />
        <NavbarUserMenu />
      </nav>
    </header>
  );
};

export default Navbar;
