"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ResultsContent() {
    const searchParams = useSearchParams();
    const matchId = searchParams.get("id");

    return (
        <div style={{ backgroundColor: "#0c0f0f", color: "#edeeed" }}>
            <Navbar />

            <main className="min-h-screen py-8 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <Link
                    href="/schedule"
                    className="inline-flex items-center gap-2 mb-6 md:mb-12 text-sm text-on-surface-variant hover:text-[#d2ff9a] transition-colors"
                >
                    <span className="material-symbols-outlined text-sm md:text-base">
                        arrow_back
                    </span>
                    Back to Schedule
                </Link>

                {/* Match Result Card */}
                <div
                    className="rounded-2xl border overflow-hidden p-4 md:p-16 text-center"
                    style={{
                        backgroundColor: "#111414",
                        borderColor: "rgba(210,255,154,0.2)",
                    }}
                >
                    <div
                        className="mb-3 md:mb-4 inline-block px-2.5 py-1 md:px-4 md:py-1 text-[8px] md:text-[10px] font-bold uppercase tracking-widest rounded-full"
                        style={{
                            backgroundColor: "rgba(210,255,154,0.1)",
                            color: "#d2ff9a",
                        }}
                    >
                        Final Score
                    </div>

                    <h2
                        className="text-sm md:text-2xl font-bold uppercase tracking-widest mb-6 md:mb-12 text-outline"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Mens Basketball - Championship
                    </h2>

                    <div className="flex flex-row items-center justify-center gap-2 sm:gap-6 md:gap-24 mb-6 md:mb-12">
                        {/* Team 1 */}
                        <div className="flex flex-col items-center gap-1 md:gap-4 flex-1">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center text-xl sm:text-2xl md:text-4xl font-black bg-[#222727] text-white">
                                E
                            </div>
                            <h3
                                className="text-sm sm:text-lg md:text-3xl font-black italic uppercase break-all sm:break-normal"
                                style={{ fontFamily: "'Lexend', sans-serif" }}
                            >
                                Engineering
                            </h3>
                            <div
                                className="text-3xl sm:text-4xl md:text-6xl font-black"
                                style={{
                                    color: "#d2ff9a",
                                    fontFamily: "'Space Grotesk', sans-serif",
                                }}
                            >
                                88
                            </div>
                        </div>

                        {/* VS */}
                        <div
                            className="text-sm sm:text-xl md:text-3xl font-black text-outline-variant italic px-1 md:px-0"
                            style={{ fontFamily: "'Lexend', sans-serif" }}
                        >
                            VS
                        </div>

                        {/* Team 2 */}
                        <div className="flex flex-col items-center gap-1 md:gap-4 flex-1">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center text-xl sm:text-2xl md:text-4xl font-black bg-[#222727] text-white">
                                S
                            </div>
                            <h3
                                className="text-sm sm:text-lg md:text-3xl font-black italic uppercase break-all sm:break-normal"
                                style={{ fontFamily: "'Lexend', sans-serif" }}
                            >
                                Science
                            </h3>
                            <div
                                className="text-3xl sm:text-4xl md:text-6xl font-black text-white"
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                }}
                            >
                                74
                            </div>
                        </div>
                    </div>

                    <div className="max-w-md mx-auto pt-4 md:pt-8 border-t border-white/10">
                        <h4
                            className="text-[10px] md:text-sm font-bold uppercase tracking-widest mb-1 md:mb-2"
                            style={{
                                color: "#ff833f",
                                fontFamily: "'Space Grotesk', sans-serif",
                            }}
                        >
                            Player of the Match
                        </h4>
                        <p className="text-sm sm:text-lg md:text-xl font-bold">
                            Alex Johnson{" "}
                            <span className="block sm:inline text-xs sm:text-sm md:text-lg text-on-surface-variant font-medium">
                                (Engineering)
                            </span>
                        </p>
                        <p className="text-on-surface-variant text-[10px] sm:text-xs md:text-sm mt-0.5 md:mt-1">
                            24 Points, 8 Assists, 3 Steals
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default function ResultsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#0c0f0f]" />}>
            <ResultsContent />
        </Suspense>
    );
}
