import Link from "next/link";

type BottomNavProps = {
  active: "explore" | "wishlists" | "login";
};

const items: Array<{ id: BottomNavProps["active"]; label: string; href: string }> = [
  { id: "explore", label: "Explore", href: "/" },
  { id: "wishlists", label: "Wishlists", href: "#" },
  { id: "login", label: "Log in", href: "#" },
];

const BottomNav = ({ active }: BottomNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-black/10 bg-white md:hidden">
      <ul className="mx-auto flex w-full max-w-md items-center justify-around px-4 py-2">
        {items.map((item) => {
          const isActive = item.id === active;

          return (
            <li key={item.id}>
              <Link
                className={`flex min-w-20 flex-col items-center gap-1 rounded-lg px-3 py-1 text-[11px] font-medium transition ${
                  isActive ? "text-[#ff385c]" : "text-black/55"
                }`}
                href={item.href}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isActive ? "bg-[#ff385c]" : "border border-black/30 bg-transparent"
                  }`}
                />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNav;
