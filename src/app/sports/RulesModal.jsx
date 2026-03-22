"use client";
import { useState } from "react";

export default function RulesModal({ sportTitle, color }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="py-3 px-4 rounded-md border font-bold uppercase text-xs tracking-widest text-white transition-all hover:bg-white/10"
        style={{
          borderColor: color,
          color: color,
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        Rules
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div
            className="w-full max-w-lg p-8 rounded-xl border relative shadow-2xl"
            style={{
              backgroundColor: "#111414",
              borderColor: color,
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            
            <h2
              className="text-3xl font-black italic tracking-tighter uppercase mb-6"
              style={{ fontFamily: "'Lexend', sans-serif", color: color }}
            >
              {sportTitle} Rules
            </h2>
            
            <div
              className="space-y-4 text-sm leading-relaxed"
              style={{ color: "#a9abab", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <p>
                <strong className="text-white">Team Size:</strong> Standard regulation size based on category.
              </p>
              <p>
                <strong className="text-white">Match Duration:</strong> Group stages feature shorter halves. Finals will be standard length.
              </p>
              <p>
                <strong className="text-white">Equipment:</strong> Basic equipment provided. Personal gear subject to referee inspection.
              </p>
              <p>
                <strong className="text-white">Discipline:</strong> Strict zero-tolerance policy for unsportsmanlike behavior. Referee decisions are final.
              </p>
              <p className="pt-4 text-xs opacity-70">
                Detailed rulebooks will be sent to registered participants via email.
              </p>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="py-2 px-6 rounded-md font-bold uppercase text-xs tracking-widest transition-all"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "#fff",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}