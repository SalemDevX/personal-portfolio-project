import { NAV_LINKS } from "../config/navigation";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"
        aria-label="Primary"
      >
        {/* Brand */}
        <a href="#" className="text-lg font-semibold tracking-tight text-white">
          Salem<span className="text-sky-400">.dev</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
