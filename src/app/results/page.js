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

      <main className="min-h-screen py-24 px-8 max-w-screen-xl mx-auto">
        <Link href="/schedule" className="inline-flex items-center gap-2 mb-12 text-sm text-[#a9abab] hover:text-[#d2ff9a] transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
          Back to Schedule
        </Link>

        {/* Match Result Card */}
        <div className="rounded-2xl border overflow-hidden p-8 md:p-16 text-center" style={{ backgroundColor: "#111414", borderColor: "rgba(210,255,154,0.2)" }}>
          <div className="mb-4 inline-block px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full" style={{ backgroundColor: "rgba(210,255,154,0.1)", color: "#d2ff9a" }}>
            Final Score
          </div>
          
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-12 text-[#737676]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Mens Basketball - Championship
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 mb-12">
            {/* Team 1 */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-black bg-[#222727] text-white">
                E
              </div>
              <h3 className="text-3xl font-black italic uppercase" style={{ fontFamily: "'Lexend', sans-serif" }}>
                Engineering
              </h3>
              <div className="text-6xl font-black" style={{ color: "#d2ff9a", fontFamily: "'Space Grotesk', sans-serif" }}>
                88
              </div>
            </div>

            {/* VS */}
            <div className="text-3xl font-black text-[#464848] italic" style={{ fontFamily: "'Lexend', sans-serif" }}>
              VS
            </div>

            {/* Team 2 */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-black bg-[#222727] text-white">
                S
              </div>
              <h3 className="text-3xl font-black italic uppercase" style={{ fontFamily: "'Lexend', sans-serif" }}>
                Science
              </h3>
              <div className="text-6xl font-black text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                74
              </div>
            </div>
          </div>

          <div className="max-w-md mx-auto pt-8 border-t border-white/10">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#ff833f", fontFamily: "'Space Grotesk', sans-serif" }}>
              Player of the Match
            </h4>
            <p className="text-xl font-bold">Alex Johnson (Engineering)</p>
            <p className="text-[#a9abab] text-sm mt-1">24 Points, 8 Assists, 3 Steals</p>
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