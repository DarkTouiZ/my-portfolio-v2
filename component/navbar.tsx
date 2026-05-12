import { Link } from "@nextui-org/react";
import { profile } from "./portfolio-data";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="flex items-center gap-3" aria-label="Go to top">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-sm font-semibold text-white">
            AP
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-slate-950">{profile.name}</span>
            <span className="block text-xs text-slate-500">@{profile.handle}</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href={profile.github}
          isExternal
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-950 hover:text-slate-950"
        >
          GitHub
        </Link>
      </nav>
    </header>
  );
}
