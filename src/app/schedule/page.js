"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"];

// Simulated matches covering different days and statuses
const allMatches = [
    {
        id: 1,
        day: "Day 1",
        time: "09:00",
        team1: "Engineering",
        team2: "Science",
        category: "Basketball (Boys)",
        venue: "Indoor Court 1",
        status: "completed",
        link: "/results",
    },
    {
        id: 2,
        day: "Day 1",
        time: "11:30",
        team1: "Arts",
        team2: "Commerce",
        category: "Cricket (Girls)",
        venue: "Main Field",
        status: "completed",
        link: "/results",
    },
    {
        id: 3,
        day: "Day 2",
        time: "10:00",
        team1: "Law",
        team2: "Medicine",
        category: "Football (Boys)",
        venue: "North Stadium",
        status: "completed",
        link: "/results",
    },
    {
        id: 4,
        day: "Day 2",
        time: "14:00",
        team1: "Architecture",
        team2: "Design",
        category: "Volleyball (Boys)",
        venue: "Court 2",
        status: "live",
        link: "",
    },
    {
        id: 5,
        day: "Day 3",
        time: "10:00",
        team1: "Engineering",
        team2: "Law",
        category: "Athletics",
        venue: "Track Field",
        status: "upcoming",
        link: "",
    },
    {
        id: 6,
        day: "Day 3",
        time: "15:00",
        team1: "Science",
        team2: "Medicine",
        category: "Archery (Open)",
        venue: "Field B",
        status: "upcoming",
        link: "",
    },
    {
        id: 7,
        day: "Day 4",
        time: "09:00",
        team1: "TBD",
        team2: "TBD",
        category: "Throwball (Girls) Semi-final",
        venue: "Court 1",
        status: "upcoming",
        link: "",
    },
    {
        id: 8,
        day: "Day 5",
        time: "16:00",
        team1: "TBD",
        team2: "TBD",
        category: "Basketball (Girls) Final",
        venue: "Main Arena",
        status: "upcoming",
        link: "",
    },
];

export default function SchedulePage() {
    const [activeDay, setActiveDay] = useState("Day 2");

    const filteredMatches = allMatches.filter(
        (match) => match.day === activeDay,
    );

    return (
        <div style={{ backgroundColor: "#0c0f0f", color: "#edeeed" }}>
            <Navbar />

            <main className="min-h-screen pb-12 md:pb-24">
                {/* Header */}
                <section className="relative pt-12 md:pt-20 pb-8 md:pb-12 px-4 md:px-8 max-w-screen-2xl mx-auto overflow-hidden">
                    <div className="relative z-10 text-center">
                        <h1
                            className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4 md:mb-6 italic"
                            style={{ fontFamily: "'Lexend', sans-serif" }}
                        >
                            Event{" "}
                            <span style={{ color: "#d2ff9a" }}>Schedule</span>
                        </h1>
                        <p
                            className="max-w-md md:max-w-xl mx-auto text-base md:text-lg leading-relaxed text-balance"
                            style={{ color: "#a9abab" }}
                        >
                            Find your favorite events, track live action, and
                            view match results easily.
                        </p>
                    </div>
                </section>

                {/* Day Selectors (Sticky Tabs) */}
                <div className="sticky top-15 md:top-18.25 z-40 bg-[#0c0f0f]/90 backdrop-blur-md border-b border-white/10 py-3 md:py-4">
                    <style
                        dangerouslySetInnerHTML={{
                            __html: `
                        .hide-scroll::-webkit-scrollbar { display: none !important; }
                        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
                    `,
                        }}
                    />
                    <div className="max-w-screen-2xl mx-auto px-4 md:px-8 flex gap-3 md:gap-4 overflow-x-auto justify-start md:justify-center no-scrollbar hide-scroll">
                        {days.map((day) => (
                            <button
                                key={day}
                                onClick={() => setActiveDay(day)}
                                className="px-6 py-2.5 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest transition-all whitespace-nowrap"
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    backgroundColor:
                                        activeDay === day
                                            ? "#d2ff9a"
                                            : "#1c2020",
                                    color:
                                        activeDay === day
                                            ? "#3d6500"
                                            : "#a9abab",
                                    boxShadow:
                                        activeDay === day
                                            ? "0 0 15px rgba(210,255,154,0.3)"
                                            : "none",
                                }}
                            >
                                {day}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Match Listings */}
                <section className="px-4 md:px-8 max-w-5xl mx-auto mt-8 md:mt-12 space-y-4 md:space-y-6">
                    {filteredMatches.length > 0 ? (
                        filteredMatches.map((match) => (
                            <div
                                key={match.id}
                                className="flex flex-col md:flex-row md:items-center justify-between p-5 md:p-6 rounded-xl border transition-all hover:-translate-y-1 hover:border-[#d2ff9a]/50"
                                style={{
                                    backgroundColor: "#111414",
                                    borderColor:
                                        match.status === "live"
                                            ? "#d2ff9a"
                                            : "rgba(70,72,72,0.2)",
                                    boxShadow:
                                        match.status === "live"
                                            ? "0 0 20px rgba(210,255,154,0.1)"
                                            : "none",
                                }}
                            >
                                {/* Info */}
                                <div className="space-y-3 md:space-y-2 mb-4 md:mb-0">
                                    <div className="flex items-center gap-3 md:gap-4">
                                        <div
                                            className="text-xl md:text-2xl font-black italic tracking-tighter"
                                            style={{
                                                fontFamily:
                                                    "'Space Grotesk', sans-serif",
                                                color: "#00e3fd",
                                            }}
                                        >
                                            {match.time}
                                        </div>
                                        <span
                                            className="px-2 py-1 md:px-3 md:py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-widest rounded bg-[#222727]"
                                            style={{
                                                fontFamily:
                                                    "'Space Grotesk', sans-serif",
                                                color: "#a9abab",
                                            }}
                                        >
                                            {match.venue}
                                        </span>
                                    </div>
                                    <div>
                                        <h3
                                            className="text-lg md:text-xl font-bold uppercase tracking-tight"
                                            style={{
                                                fontFamily:
                                                    "'Lexend', sans-serif",
                                                color: "#edeeed",
                                            }}
                                        >
                                            {match.category}
                                        </h3>
                                        <p
                                            className="text-xs md:text-sm font-medium mt-1 md:mt-0"
                                            style={{ color: "#a9abab" }}
                                        >
                                            {match.team1}{" "}
                                            <span className="italic text-outline mx-2">
                                                vs
                                            </span>{" "}
                                            {match.team2}
                                        </p>
                                    </div>
                                </div>

                                {/* Dynamic CTA */}
                                <div className="shrink-0">
                                    {match.status === "upcoming" && (
                                        <button
                                            className="w-full md:w-auto py-3 px-6 rounded-md font-bold uppercase text-xs tracking-widest border transition-all hover:bg-white/5"
                                            style={{
                                                borderColor: "#737676",
                                                color: "#a9abab",
                                                fontFamily:
                                                    "'Space Grotesk', sans-serif",
                                            }}
                                        >
                                            Upcoming
                                        </button>
                                    )}
                                    {match.status === "live" && (
                                        <button
                                            className="w-full md:w-auto py-3 px-6 rounded-md font-bold uppercase text-xs tracking-widest text-center transition-all animate-pulse"
                                            style={{
                                                backgroundColor: "#ff833f",
                                                color: "#fff",
                                                fontFamily:
                                                    "'Lexend', sans-serif",
                                                boxShadow:
                                                    "0 0 15px rgba(255,131,63,0.5)",
                                            }}
                                        >
                                            Live Now
                                        </button>
                                    )}
                                    {match.status === "completed" && (
                                        <Link
                                            href={match.link}
                                            className="block w-full md:w-auto py-3 px-6 rounded-md font-bold uppercase text-xs tracking-widest text-center transition-all hover:brightness-110 active:scale-95"
                                            style={{
                                                backgroundColor: "#d2ff9a",
                                                color: "#3d6500",
                                                fontFamily:
                                                    "'Lexend', sans-serif",
                                            }}
                                        >
                                            View Result
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div
                            className="text-center py-24 border rounded-xl border-dashed"
                            style={{
                                borderColor: "#464848",
                                backgroundColor: "#111414",
                            }}
                        >
                            <p
                                className="text-lg italic"
                                style={{ color: "#737676" }}
                            >
                                No matches scheduled for this day yet.
                            </p>
                        </div>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
}
