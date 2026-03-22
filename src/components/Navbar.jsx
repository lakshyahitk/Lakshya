"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Sports", href: "/sports" },
    { label: "Schedule", href: "/schedule" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur-xl"
            style={{
                backgroundColor: "rgba(10,10,10,0.8)",
                boxShadow: "0 0 30px rgba(210,255,154,0.1)",
            }}
        >
            <div className="flex justify-between items-center px-4 py-3 md:px-8 md:py-4 max-w-screen-2xl mx-auto">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl md:text-2xl font-black italic tracking-tighter z-50"
                    style={{
                        color: "#d2ff9a",
                        fontFamily: "'Lexend', sans-serif",
                    }}
                >
                    LAKSHYA
                </Link>

                {/* Nav Links - Desktop */}
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
                                    borderBottom: isActive
                                        ? "2px solid #d2ff9a"
                                        : "2px solid transparent",
                                    paddingBottom: "4px",
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive)
                                        e.target.style.color = "#ffffff";
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive)
                                        e.target.style.color = "#a3a3a3";
                                }}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {/* CTA - Desktop */}
                <div className="hidden md:flex items-center gap-4">
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
                    
                </div>

                {/* Hamburger Menu - Mobile */}
                <button
                    className="md:hidden flex items-center justify-center z-50 text-white p-1"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="material-symbols-outlined text-3xl">
                        {isOpen ? "close" : "menu"}
                    </span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden absolute top-0 left-0 w-full bg-[#0a0a0a] border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden flex flex-col items-center justify-center space-y-6 ${
                    isOpen
                        ? "h-screen border-b-2 border-white/10"
                        : "h-0 border-transparent opacity-0"
                }`}
                style={{ zIndex: 40 }}
            >
                {/* Mobile Links */}
                <div
                    className="flex flex-col items-center gap-6 mt-16 font-bold uppercase tracking-tight w-full"
                    style={{ fontFamily: "'Lexend', sans-serif" }}
                >
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl transition-all duration-300"
                                style={{
                                    color: isActive ? "#d2ff9a" : "#edeeed",
                                }}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                <div className="flex flex-col items-center gap-4 mt-8 w-full px-8">
                    <Link
                        href="/registration"
                        onClick={() => setIsOpen(false)}
                        className="w-full text-center py-4 rounded-md font-black text-xl uppercase tracking-tight transition-all"
                        style={{
                            backgroundColor: "#d2ff9a",
                            color: "#3d6500",
                            fontFamily: "'Lexend', sans-serif",
                        }}
                    >
                        Register Now
                    </Link>
                </div>
            </div>
        </nav>
    );
}
