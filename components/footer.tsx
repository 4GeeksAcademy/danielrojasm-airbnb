import Link from "next/link";

const groups = [
  {
    title: "Support",
    links: [
      "Help Center",
      "Get help with a safety issue",
      "AirCover",
      "Anti-discrimination",
      "Disability support",
      "Cancellation options",
      "Report neighborhood concern",
    ],
  },
  {
    title: "Hosting",
    links: [
      "Airbnb your home",
      "Airbnb your experience",
      "AirCover for Hosts",
      "Hosting resources",
      "Community forum",
      "Hosting responsibly",
      "Join a free hosting class",
      "Find a co-host",
      "Refer a host",
    ],
  },
  {
    title: "Airbnb",
    links: [
      "2025 Summer Release",
      "Newsroom",
      "Careers",
      "Investors",
      "Gift cards",
      "Airbnb.org emergency stays",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-black/10 bg-[#f7f7f7] pb-16 md:pb-0">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-8 md:grid-cols-3 md:px-6">
        {groups.map((group) => (
          <section className="border-b border-black/10 pb-7 last:border-b-0 md:border-b-0 md:pb-0" key={group.title}>
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

      <div className="border-t border-black/10 px-4 py-4 text-xs text-black/60 md:px-6">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3">
          <p className="font-medium">English (US) &nbsp;&nbsp; EUR</p>
          <p className="text-[13px]">f &nbsp;&nbsp; x &nbsp;&nbsp; ig</p>
        </div>
        <div className="mx-auto mt-2 w-full max-w-6xl">
          <p>© 2026 Airbnb, Inc.</p>
          <p className="mt-1">Privacy &nbsp;·&nbsp; Terms &nbsp;·&nbsp; Your Privacy Choices</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
