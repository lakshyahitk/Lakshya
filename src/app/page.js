"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const target = new Date("2026-05-01T09:00:00");
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
    <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-2xl mx-auto mb-12">
      {items.map(({ val, label }) => (
        <div
          key={label}
          className="p-4 rounded-xl border"
          style={{
            backgroundColor: "#222727",
            borderColor: "rgba(70,72,72,0.2)",
          }}
        >
          <div
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#00e3fd" }}
          >
            {val}
          </div>
          <div
            className="text-[10px] uppercase tracking-widest"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#a9abab" }}
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
      <section
        className="relative min-h-[921px] flex flex-col items-center justify-center overflow-hidden px-6 pt-20"
      >
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
            background: "linear-gradient(to bottom, rgba(12,15,15,0.45) 0%, rgba(12,15,15,0.6) 60%, #0c0f0f 100%)",
          }}
        />

        <div className="relative z-10 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ backgroundColor: "#ff833f" }}
            />
            <span
              className="tracking-widest uppercase text-sm font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#ff833f" }}
            >
              Live Countdown to Kickoff
            </span>
          </div>

          <h1
            className="text-[12vw] md:text-[8rem] font-black italic leading-[0.8] tracking-tighter mb-8"
            style={{ fontFamily: "'Lexend', sans-serif", color: "#edeeed" }}
          >
            SPORTS{" "}
            <span className="text-glow italic" style={{ color: "#d2ff9a" }}>
              DAY
            </span>
            <br />
            <span style={{ opacity: 0.9 }}>2026</span>
          </h1>

          <CountdownTimer />

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              href="/registration"
              className="w-full md:w-auto px-12 py-5 font-black text-xl uppercase tracking-tighter rounded-md neon-glow-primary transition-transform hover:scale-105 active:scale-95"
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
              className="w-full md:w-auto px-12 py-5 font-black text-xl uppercase tracking-tighter rounded-md transition-colors hover:bg-[rgba(210,255,154,0.1)]"
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
      <section className="max-w-screen-2xl mx-auto px-8 py-16">
        <h2
          className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 text-center"
          style={{ fontFamily: "'Lexend', sans-serif", color: "#edeeed" }}
        >
          Urgent <span style={{ color: "#ff833f" }}>Updates</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { tag: "ALERT", title: "Registration closes in 2 days", date: "Oct 12, 2026", color: "#ff833f" },
            { tag: "UPDATE", title: "Archery venue changed to Field B", date: "Oct 10, 2026", color: "#00e3fd" },
            { tag: "NEWS", title: "Special Guest announced for Closing Ceremony", date: "Oct 08, 2026", color: "#d2ff9a" },
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
                  style={{ color: "#a9abab", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {announcement.date}
                </span>
              </div>
              <h3
                className="text-xl font-bold leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#edeeed" }}
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

      {/* Sports Categories Bento Grid */}
      <section className="max-w-screen-2xl mx-auto px-8 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <h2
              className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4"
              style={{ fontFamily: "'Lexend', sans-serif" }}
            >
              Choose Your{" "}
              <span className="italic" style={{ color: "#00e3fd" }}>
                Arena
              </span>
            </h2>
            <p style={{ color: "#a9abab" }} className="text-lg">
              Whether you&apos;re a powerhouse on the court or a strategist on the field, there&apos;s a legend waiting to be born.
            </p>
          </div>
          <Link
            href="/sports"
            className="flex items-center gap-2 uppercase tracking-widest text-sm font-bold transition-all hover:gap-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#00e3fd" }}
          >
            View All Categories{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full md:h-[800px]">
          {/* Football - Large Feature */}
          <div
            className="md:col-span-8 group relative overflow-hidden rounded-xl border"
            style={{ backgroundColor: "#111414", borderColor: "rgba(70,72,72,0.1)" }}
          >
            <div
              className="absolute inset-0 z-10"
              style={{ background: "linear-gradient(to top, black, transparent, transparent)" }}
            />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuS6mIOfAsqk9-x4hBK7SA9KDXJ45CB2MiMDV3Twu1L5xapl-3to5mTI82Vum0_ylNBfg6HT8K9nzUsfNfZzfpe_ZbiYPqCL5qlniGj_s9-OPiuj1XXABCB-Sf1-IUM_KjfpLRKX6qeFMPH2k1cF1oPZc3FUeFQWFdOo5wpyv31tLF-5DbLmttoM1OFph0xmYGdX42YYyttfI9LYmsg1MKdZegrSUB8Jmp4kFFtLNBn6HycRSECOrvWy03aoqq75vta4vWVnshWqI"
              alt="Football action"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
              <span
                className="px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full mb-4 inline-block"
                style={{
                  backgroundColor: "#d2ff9a",
                  color: "#3d6500",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                Most Popular
              </span>
              <h3
                className="text-6xl md:text-8xl font-black text-white italic uppercase leading-none mb-4 group-hover:text-[#d2ff9a] transition-colors"
                style={{ fontFamily: "'Lexend', sans-serif" }}
              >
                Football
              </h3>
              <div className="flex justify-between items-end">
                <p className="text-white/70 max-w-sm font-medium">
                  11 vs 11 Knockout Tournament. National scouts in attendance for the final.
                </p>
                <button className="bg-white text-black p-4 rounded-full active:scale-90 transition-transform">
                  <span className="material-symbols-outlined font-bold">add</span>
                </button>
              </div>
            </div>
          </div>

          {/* Cricket & Basketball */}
          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            {[
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDgI1r2iERt2GCwaeqDwawx_iXdvfdTVJlieHQu9mgvwqRxzY0gGGNfl1zDX1ocR6OW1QZbnW3wSkQzjqDcNZXwWTI2gj7ZHmPqgO_nAw7HgJKYdwzalSRu38MWL1kdj08wOvtzOZ2yjG7PS1SEr6UFJEt3-amIdE83xq0aiLJEVWb1SfKshJH7NybAQQqnK1UH1tcctMUIL9yynGi_3UpvwTh0wK3PG0M58o6pnw72XZyLPA1pk_-yAIU3bDfVVQYpcoxP_goPL8",
                title: "Cricket",
                sub: "T20 Smash Format",
                hoverColor: "#00e3fd",
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDH5ecu8OJXc2-KsrRLQvgoJEtyZ_EYx-cDWnrrL59Gg5VrgRWMLq6_O0LSfcRKnIGfoDkB92dIkwqq-WKFz7tHP7LHD5a6OP7ZqUi9kJyRvfR1z-8ODMLwNzngc6p7wg-mwN1Oy1KZ_2crQEoz0y0g_ECNaRsPRHk5X2WiH65H29PVy0S7zB0vlsRCIlWPyGCyZbgF9ZG4P_Q23Qyc82PG0wAWI2GTsccknn1lyXU7F_iIhIBfbZlAeVep_ZRhBPJOyg7JPnBrMik",
                title: "Basketball",
                sub: "5v5 Tournament",
                hoverColor: "#ff833f",
              },
            ].map(({ img, title, sub, hoverColor }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-xl border"
                style={{ backgroundColor: "#111414", borderColor: "rgba(70,72,72,0.1)" }}
              >
                <div
                  className="absolute inset-0 z-10"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}
                />
                <img
                  src={img}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h3
                    className="text-4xl font-black text-white uppercase italic transition-colors"
                    style={{ fontFamily: "'Lexend', sans-serif" }}
                    onMouseEnter={(e) => (e.target.style.color = hoverColor)}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                  >
                    {title}
                  </h3>
                  <p className="text-white/60 text-sm mt-2">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: "#111414" }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full"
          style={{ backgroundColor: "rgba(210,255,154,0.05)", filter: "blur(120px)" }}
        />
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: "military_tech",
              color: "#d2ff9a",
              title: "Pro Scouting",
              desc: "Top-tier agents and scouts from national leagues will be present during the semi-finals and finals.",
            },
            {
              icon: "monitoring",
              color: "#00e3fd",
              title: "Live Analytics",
              desc: "Real-time performance tracking with player heatmaps and advanced statistics available for all participants.",
            },
            {
              icon: "emoji_events",
              color: "#ff833f",
              title: "Legacy Awards",
              desc: "Every winner gets their name engraved on the NEON ARENA Hall of Fame and a digital NFT trophy.",
            },
          ].map(({ icon, color, title, desc }) => (
            <div key={title} className="space-y-4">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-lg border"
                style={{
                  backgroundColor: `${color}1a`,
                  borderColor: `${color}33`,
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ color, fontVariationSettings: "'FILL' 1" }}
                >
                  {icon}
                </span>
              </div>
              <h4
                className="text-2xl font-bold uppercase tracking-tight"
                style={{ fontFamily: "'Lexend', sans-serif" }}
              >
                {title}
              </h4>
              <p style={{ color: "#a9abab" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 border-y border-white/5" style={{ backgroundColor: "rgba(159,251,6,0.02)" }}>
        <div className="max-w-screen-2xl mx-auto px-8">
          <h2
            className="text-center text-sm font-bold uppercase tracking-widest mb-10"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#a9abab" }}
          >
            Powered by our incredible partners
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {["NIKE", "RED BULL", "GATORADE", "UNDER ARMOUR", "SPORTS DIRECT"].map((sponsor) => (
              <div
                key={sponsor}
                className="text-2xl md:text-3xl font-black italic tracking-tighter"
                style={{ fontFamily: "'Lexend', sans-serif" }}
              >
                {sponsor}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="max-w-screen-2xl mx-auto px-8 py-24">
        <div
          className="relative rounded-2xl p-12 overflow-hidden border border-white/5"
          style={{ backgroundColor: "#222727" }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom right, rgba(210,255,154,0.1), transparent, rgba(0,227,253,0.1))",
            }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2
                className="text-5xl md:text-6xl font-black uppercase italic leading-none"
                style={{ fontFamily: "'Lexend', sans-serif" }}
              >
                Ready to{" "}
                <span className="italic" style={{ color: "#d2ff9a" }}>
                  compete?
                </span>
              </h2>
              <p style={{ color: "#a9abab" }} className="text-lg">
                Registration is open until May 1st, 2026. Groups of 10 or more receive a 20% early bird discount.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Verified Entry", "Equipment Provided", "Insurance Included"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm uppercase font-bold"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <span className="material-symbols-outlined" style={{ color: "#d2ff9a" }}>
                      check_circle
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Form */}
            <div
              className="w-full md:w-1/3 p-8 rounded-xl border"
              style={{
                backgroundColor: "rgba(12,15,15,0.5)",
                backdropFilter: "blur(12px)",
                borderColor: "rgba(70,72,72,0.2)",
              }}
            >
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label
                    className="block text-[10px] uppercase tracking-widest mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#a9abab" }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full border-0 border-b-2 focus:outline-none focus:border-[#d2ff9a] transition-colors"
                    style={{
                      backgroundColor: "#000000",
                      borderColor: "rgba(70,72,72,0.2)",
                      color: "#edeeed",
                      padding: "8px 0",
                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-[10px] uppercase tracking-widest mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#a9abab" }}
                  >
                    College Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@university.edu"
                    className="w-full border-0 border-b-2 focus:outline-none focus:border-[#d2ff9a] transition-colors"
                    style={{
                      backgroundColor: "#000000",
                      borderColor: "rgba(70,72,72,0.2)",
                      color: "#edeeed",
                      padding: "8px 0",
                    }}
                  />
                </div>
                <Link
                  href="/registration"
                  className="block w-full py-4 text-center font-black uppercase tracking-tighter rounded transition-all hover:brightness-110"
                  style={{
                    backgroundColor: "#d2ff9a",
                    color: "#3d6500",
                    fontFamily: "'Lexend', sans-serif",
                  }}
                >
                  Start Registration
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
