import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Offers", href: "#offers" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`glass-panel flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 sm:px-7 ${
          scrolled ? "scale-[0.98] opacity-100" : "opacity-95"
        }`}
      >
        <a href="#home" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-[0.3em] text-foreground">LIEBE</span>
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-foreground/75 transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#offers"
          className="rounded-full bg-primary px-5 py-2 text-xs font-semibold tracking-[0.15em] text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          ORDER
        </a>
      </nav>
    </header>
  );
}
