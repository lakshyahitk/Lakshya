"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Sports", href: "/sports" },
  { label: "Schedule", href: "/schedule" },
  { label: "Results", href: "/results" },
  { label: "Register", href: "/registration" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur-xl"
      style={{
        backgroundColor: "rgba(10,10,10,0.8)",
        boxShadow: "0 0 30px rgba(210,255,154,0.1)",
      }}
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black italic tracking-tighter"
          style={{ color: "#d2ff9a", fontFamily: "'Lexend', sans-serif" }}
        >
          NEON ARENA
        </Link>

        {/* Nav Links */}
        <div
          className="hidden md:flex items-center gap-8 font-bold uppercase tracking-tight"
          style={{ fontFamily: "'Lexend', sans-serif" }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="transition-all duration-300 active:scale-95"
                style={{
                  color: isActive ? "#d2ff9a" : "#a3a3a3",
                  borderBottom: isActive ? "2px solid #d2ff9a" : "2px solid transparent",
                  paddingBottom: "4px",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.target.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.target.style.color = "#a3a3a3";
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="/registration"
            className="px-6 py-2 rounded-md font-black uppercase tracking-tight transition-all hover:brightness-110 active:scale-95"
            style={{
              backgroundColor: "#d2ff9a",
              color: "#3d6500",
              fontFamily: "'Lexend', sans-serif",
            }}
          >
            Register Now
          </Link>
          <span
            className="material-symbols-outlined text-2xl cursor-pointer transition-colors"
            style={{ color: "#edeeed" }}
          >
            account_circle
          </span>
        </div>
      </div>
    </nav>
  );
}
