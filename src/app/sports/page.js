import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import RulesModal from "./RulesModal"; // We will create this

const sports = [
  {
    id: "cricket-boys",
    title: "Cricket (Boys)",
    category: "Boys",
    img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80",
    accentColor: "#00e3fd",
  },
  {
    id: "cricket-girls",
    title: "Cricket (Girls)",
    category: "Girls",
    img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80",
    accentColor: "#ff833f",
  },
  {
    id: "basketball-boys",
    title: "Basketball (Boys)",
    category: "Boys",
    img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    accentColor: "#d2ff9a",
  },
  {
    id: "basketball-girls",
    title: "Basketball (Girls)",
    category: "Girls",
    img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    accentColor: "#ff833f",
  },
  {
    id: "football-boys",
    title: "Football (Boys)",
    category: "Boys",
    img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
    accentColor: "#00e3fd",
  },
  {
    id: "volleyball-boys",
    title: "Volleyball (Boys)",
    category: "Boys",
    img: "https://images.unsplash.com/photo-1592656094267-764a45160876?w=800&q=80",
    accentColor: "#d2ff9a",
  },
  {
    id: "throwball-girls",
    title: "Throwball (Girls)",
    category: "Girls",
    img: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80",
    accentColor: "#ff833f",
  },
  {
    id: "handball-girls",
    title: "Handball (Girls)",
    category: "Girls",
    img: "https://images.unsplash.com/photo-1563506634351-4e7cb803e7f4?w=800&q=80",
    accentColor: "#00e3fd",
  },
  {
    id: "archery-open",
    title: "Archery (Open/Mixed)",
    category: "Open/Mixed",
    img: "https://images.unsplash.com/photo-1511364506544-e2b20f9e1e72?w=800&q=80",
    accentColor: "#d2ff9a",
  },
  {
    id: "athletics",
    title: "Athletics (Track & Field)",
    category: "Open",
    img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    accentColor: "#ff833f",
  },
];

export const metadata = {
  title: "Sports | NEON ARENA",
  description: "Select your battleground from 6 premier sports disciplines.",
};

export default function SportsPage() {
  return (
    <div style={{ backgroundColor: "#0c0f0f", color: "#edeeed" }}>
      <Navbar />

      <main className="min-h-screen relative overflow-hidden">
        {/* Ambient glows */}
        <div className="fixed inset-0 pointer-events-none">
          <div
            className="absolute -top-24 -left-24 w-96 h-96 rounded-full"
            style={{
              backgroundColor: "rgba(210,255,154,0.1)",
              filter: "blur(120px)",
            }}
          />
          <div
            className="absolute top-1/2 -right-24 w-80 h-80 rounded-full"
            style={{
              backgroundColor: "rgba(0,227,253,0.1)",
              filter: "blur(100px)",
            }}
          />
        </div>

        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-10 md:py-16 relative z-10">
          {/* Header */}
          <header className="mb-20">
            <div className="flex items-center gap-4 mb-4">
              <span
                className="w-12 h-1"
                style={{ backgroundColor: "#d2ff9a", display: "inline-block" }}
              />
              <span
                className="tracking-[0.3em] uppercase text-xs text-center sm:text-left"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#d2ff9a",
                }}
              >
                Season 2026
              </span>
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-black italic tracking-tighter uppercase mb-4 sm:mb-6 leading-none"
              style={{ fontFamily: "'Lexend', sans-serif" }}
            >
              Select Your <span style={{ color: "#d2ff9a" }}>Battleground</span>
            </h1>
            <p
              className="max-w-2xl text-sm sm:text-base leading-relaxed"
              style={{ color: "#a9abab" }}
            >
              Push your limits in the ultimate collegiate athletic showcase.
              High intensity, neon-fueled competition across 6 premier
              disciplines.
            </p>
          </header>

          {/* Sports Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {sports.map(({ id, title, category, accentColor, img }) => {
              return (
                <div
                  key={id}
                  className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-2"
                  style={{ backgroundColor: "#111414", aspectRatio: "3/4" }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${img}')` }}
                  />
                  <div className="absolute inset-0 kinetic-overlay" />
                  <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end">
                    <div className="flex flex-col mb-2 sm:mb-4">
                      <span
                        className="text-[10px] sm:text-xs font-bold uppercase mb-1 sm:mb-2"
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          color: accentColor,
                        }}
                      >
                        {category}
                      </span>
                      <h3
                        className="text-base sm:text-xl md:text-2xl font-black italic tracking-tighter uppercase text-white leading-tight"
                        style={{ fontFamily: "'Lexend', sans-serif" }}
                      >
                        {title}
                      </h3>
                    </div>
                    <div className="flex flex-col gap-2 sm:gap-4">
                      <RulesModal sportTitle={title} color={accentColor} />
                      <Link
                        href={`/registration?sport=${id}`}
                        className="py-1.5 sm:py-2 px-2 sm:px-3 rounded-md font-bold uppercase text-[10px] sm:text-xs tracking-widest text-center transition-all active:scale-95 flex items-center justify-center w-full"
                        style={{
                          backgroundColor: accentColor,
                          color: "#3d6500",
                          fontFamily: "'Lexend', sans-serif",
                          boxShadow: `0 0 20px ${accentColor}4d`,
                        }}
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
