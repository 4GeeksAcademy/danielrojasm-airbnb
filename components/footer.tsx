import Link from "next/link";

const groups = [
  {
    title: "Support",
    links: ["Help Center", "AirCover", "Accessibility"],
  },
  {
    title: "Hosting",
    links: ["Airbnb your home", "Host forum", "Hosting resources"],
  },
  {
    title: "Airbnb",
    links: ["Newsroom", "Careers", "Investors"],
  },
];

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-black/10 bg-[#f7f7f7] pb-16 md:pb-0">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-8 md:grid-cols-3 md:px-6">
        {groups.map((group) => (
          <section key={group.title}>
            <h4 className="text-sm font-semibold text-black/85">{group.title}</h4>
            <ul className="mt-3 space-y-2 text-sm text-black/65">
              {group.links.map((link) => (
                <li key={link}>
                  <Link className="hover:text-black" href="#">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="border-t border-black/10 px-4 py-4 text-center text-xs text-black/55 md:px-6">
        <p>English (US) | EUR</p>
        <p className="mt-1">2026 Airbnb Clone. Privacy | Terms</p>
      </div>
    </footer>
  );
};

export default Footer;
