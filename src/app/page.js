"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0,
    });

    useEffect(() => {
        const target = new Date("2026-04-01T09:00:00");
        const tick = () => {
            const now = new Date();
            const diff = target - now;
            if (diff <= 0) return;
            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                mins: Math.floor((diff / (1000 * 60)) % 60),
                secs: Math.floor((diff / 1000) % 60),
            });
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    const pad = (n) => String(n).padStart(2, "0");
    const items = [
        { val: pad(timeLeft.days), label: "Days" },
        { val: pad(timeLeft.hours), label: "Hours" },
        { val: pad(timeLeft.mins), label: "Mins" },
        { val: pad(timeLeft.secs), label: "Secs" },
    ];

    return (
        <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-lg md:max-w-2xl mx-auto mb-8 md:mb-12">
            {items.map(({ val, label }) => (
                <div
                    key={label}
                    className="p-2 md:p-4 rounded-xl border"
                    style={{
                        backgroundColor: "#222727",
                        borderColor: "rgba(70,72,72,0.2)",
                    }}
                >
                    <div
                        className="text-2xl md:text-5xl font-bold"
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            color: "#00e3fd",
                        }}
                    >
                        {val}
                    </div>
                    <div
                        className="text-[8px] md:text-[10px] uppercase tracking-widest"
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            color: "#a9abab",
                        }}
                    >
                        {label}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function HomePage() {
    return (
        <div style={{ backgroundColor: "#0c0f0f", color: "#edeeed" }}>
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[85vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-16 md:pt-20">
                {/* Background image - LandingBG from public folder */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/LandingBG.png')",
                    }}  
                />
                {/* Dark gradient overlay for text readability */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(12,15,15,0.45) 0%, rgba(12,15,15,0.6) 60%, #0c0f0f 100%)",
                    }}
                />

                <div className="relative z-10 text-center space-y-4 md:space-y-6">
                    <div className="flex items-center justify-center gap-2 mb-2 md:mb-4 px-4">
                        <span
                            className="tracking-widest uppercase text-[10px] md:text-lg font-bold text-center"
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                color: "#00e3fd",
                            }}
                        >
                            Heritage Institute of Technology
                        </span>
                    </div>

                    <h1
                        className="text-5xl md:text-[5.5rem] lg:text-[6.5rem] font-black italic leading-[0.9] tracking-tighter mb-6 md:mb-8"
                        style={{
                            fontFamily: "'Lexend', sans-serif",
                            color: "#edeeed",
                        }}
                    >
                        LAKSHYA{" "}
                        <span
                            className="text-glow italic"
                            style={{ color: "#d2ff9a" }}
                        >
                            2026
                        </span>
                    </h1>

                    <CountdownTimer />

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 w-full max-w-md mx-auto sm:max-w-none">
                        <Link
                            href="/registration"
                            className="w-full sm:w-auto px-8 py-3.5 md:px-12 md:py-4 font-black text-lg md:text-xl uppercase tracking-tighter rounded-md neon-glow-primary transition-transform hover:scale-105 active:scale-95"
                            style={{
                                backgroundColor: "#d2ff9a",
                                color: "#3d6500",
                                fontFamily: "'Lexend', sans-serif",
                            }}
                        >
                            Register Now
                        </Link>
                        <Link
                            href="/schedule"
                            className="w-full sm:w-auto px-8 py-3.5 md:px-12 md:py-4 font-black text-lg md:text-xl uppercase tracking-tighter rounded-md transition-colors hover:bg-[rgba(210,255,154,0.1)]"
                            style={{
                                backgroundColor: "rgba(34,39,39,0.3)",
                                backdropFilter: "blur(12px)",
                                border: "1px solid rgba(210,255,154,0.3)",
                                color: "#d2ff9a",
                                fontFamily: "'Lexend', sans-serif",
                            }}
                        >
                            View Schedule
                        </Link>
                    </div>
                </div>
            </section>

            {/* Announcements Section */}
            <section className="max-w-screen-2xl mx-auto px-6 md:px-8 py-12 md:py-16">
                <h2
                    className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center"
                    style={{
                        fontFamily: "'Lexend', sans-serif",
                        color: "#edeeed",
                    }}
                >
                    <span style={{ color: "#ff833f" }}>Announcements</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            tag: "ALERT",
                            title: "Registration closes in 2 days",
                            date: "Oct 12, 2026",
                            color: "#ff833f",
                        },
                        {
                            tag: "UPDATE",
                            title: "Archery venue changed to Field B",
                            date: "Oct 10, 2026",
                            color: "#00e3fd",
                        },
                        {
                            tag: "NEWS",
                            title: "Special Guest announced for Closing Ceremony",
                            date: "Oct 08, 2026",
                            color: "#d2ff9a",
                        },
                    ].map((announcement, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-xl border flex flex-col gap-4 transition-transform hover:-translate-y-2"
                            style={{
                                backgroundColor: "#222727",
                                borderColor: "rgba(70,72,72,0.2)",
                            }}
                        >
                            <div className="flex justify-between items-center">
                                <span
                                    className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
                                    style={{
                                        backgroundColor: `rgba(${announcement.color === "#ff833f" ? "255,131,63" : announcement.color === "#00e3fd" ? "0,227,253" : "210,255,154"}, 0.1)`,
                                        color: announcement.color,
                                    }}
                                >
                                    {announcement.tag}
                                </span>
                                <span
                                    className="text-xs uppercase tracking-widest"
                                    style={{
                                        color: "#a9abab",
                                        fontFamily:
                                            "'Space Grotesk', sans-serif",
                                    }}
                                >
                                    {announcement.date}
                                </span>
                            </div>
                            <h3
                                className="text-xl font-bold leading-tight"
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    color: "#edeeed",
                                }}
                            >
                                {announcement.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats Ticker */}
            <div
                className="border-y border-white/5 py-4 overflow-hidden"
                style={{ backgroundColor: "rgba(159,251,6,0.1)" }}
            >
                <div
                    className="flex whitespace-nowrap gap-12 font-bold tracking-widest text-sm uppercase"
                    style={{
                        animation: "marquee 30s linear infinite",
                        fontFamily: "'Space Grotesk', sans-serif",
                        color: "#d2ff9a",
                    }}
                >
                    {[
                        "• 32 COLLEGES PARTICIPATING",
                        "• 15 MAJOR SPORTS CATEGORIES",
                        "• $50,000 TOTAL PRIZE POOL",
                        "• REGISTRATION CLOSES IN 12 DAYS",
                        "• 32 COLLEGES PARTICIPATING",
                        "• 15 MAJOR SPORTS CATEGORIES",
                        "• $50,000 TOTAL PRIZE POOL",
                        "• REGISTRATION CLOSES IN 12 DAYS",
                    ].map((t, i) => (
                        <span key={i}>{t}</span>
                    ))}
                </div>
            </div>

            {/* Sponsors Section */}
            <section
                className="py-16 border-y border-white/5"
                style={{ backgroundColor: "rgba(159,251,6,0.02)" }}
            >
                <div className="max-w-screen-2xl mx-auto px-8">
                    <h2
                        className="text-center text-sm font-bold uppercase tracking-widest mb-10"
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            color: "#a9abab",
                        }}
                    >
                        Powered by our incredible partners
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                        {[
                            "NIKE",
                            "RED BULL",
                            "GATORADE",
                            "UNDER ARMOUR",
                            "SPORTS DIRECT",
                        ].map((sponsor) => (
                            <div
                                key={sponsor}
                                className="flex items-center justify-center p-6 md:p-8 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(210,255,154,0.1)] group"
                                style={{
                                    backgroundColor: "#111414",
                                    borderColor: "rgba(255,255,255,0.05)",
                                }}
                            >
                                <div
                                    className="text-xl md:text-2xl font-black italic tracking-tighter opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 group-hover:text-[#d2ff9a]"
                                    style={{
                                        fontFamily: "'Lexend', sans-serif",
                                    }}
                                >
                                    {sponsor}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
