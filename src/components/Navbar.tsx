import { useEffect, useState } from "react";
import { NAV_LINKS } from "../config/navigation";
import { motion, AnimatePresence } from "framer-motion";


const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll sync (active link)
  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href)
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Brand */}
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-white"
        >
          Salem<span className="text-sky-400">.dev</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeSection === href;

            return (
              <li key={label}>
                <a
                  href={href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-sky-400"
                      : "text-gray-300 hover:text-sky-400"
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-gray-300 hover:text-white hover:border-white/20"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur">
          <ul className="flex flex-col gap-2 px-6 py-4">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeSection === href;

              return (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-md px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? "bg-white/5 text-sky-400"
                        : "text-gray-300 hover:bg-white/5 hover:text-sky-400"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
