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
    title: "Sports | LAKSHYA",
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

                <div className="max-w-screen-2xl mx-auto px-8 py-16 relative z-10">
                    {/* Header */}
                    <header className="mb-20">
                        <div className="flex items-center gap-4 mb-4">
                            <span
                                className="w-12 h-1"
                                style={{
                                    backgroundColor: "#d2ff9a",
                                    display: "inline-block",
                                }}
                            />
                            <span
                                className="tracking-[0.3em] uppercase text-sm"
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    color: "#d2ff9a",
                                }}
                            >
                                Season 2026
                            </span>
                        </div>
                        <h1
                            className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-6 leading-none"
                            style={{ fontFamily: "'Lexend', sans-serif" }}
                        >
                            Select Your{" "}
                            <span style={{ color: "#d2ff9a" }}>
                                Battleground
                            </span>
                        </h1>
                        <p
                            className="max-w-2xl text-lg leading-relaxed"
                            style={{ color: "#a9abab" }}
                        >
                            Push your limits in the ultimate collegiate athletic
                            showcase. High intensity, neon-fueled competition
                            across 6 premier disciplines.
                        </p>
                    </header>

                    {/* Sports Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sports.map(
                            ({ id, title, category, accentColor, img }) => {
                                return (
                                    <div
                                        key={id}
                                        className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-2"
                                        style={{
                                            backgroundColor: "#111414",
                                            aspectRatio: "4/5",
                                        }}
                                    >
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{
                                                backgroundImage: `url('${img}')`,
                                            }}
                                        />
                                        <div className="absolute inset-0 kinetic-overlay" />
                                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                            <div className="flex flex-col mb-4">
                                                <span
                                                    className="text-sm font-bold uppercase mb-2"
                                                    style={{
                                                        fontFamily:
                                                            "'Space Grotesk', sans-serif",
                                                        color: accentColor,
                                                    }}
                                                >
                                                    {category}
                                                </span>
                                                <h3
                                                    className="text-3xl font-black italic tracking-tighter uppercase text-white leading-tight"
                                                    style={{
                                                        fontFamily:
                                                            "'Lexend', sans-serif",
                                                    }}
                                                >
                                                    {title}
                                                </h3>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <RulesModal
                                                    sportTitle={title}
                                                    color={accentColor}
                                                />
                                                <Link
                                                    href={`/registration?sport=${id}`}
                                                    className="py-3 px-4 rounded-md font-bold uppercase text-xs tracking-widest text-center transition-all active:scale-95 flex items-center justify-center"
                                                    style={{
                                                        backgroundColor:
                                                            accentColor,
                                                        color: "#3d6500",
                                                        fontFamily:
                                                            "'Lexend', sans-serif",
                                                        boxShadow: `0 0 20px ${accentColor}4d`,
                                                    }}
                                                >
                                                    Register
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            },
                        )}
                    </div>

                    {/* Stats Bento */}
                    <section className="mt-32 grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div
                            className="lg:col-span-8 rounded-xl p-10 relative overflow-hidden"
                            style={{ backgroundColor: "#1c2020" }}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <span
                                    className="material-symbols-outlined font-black"
                                    style={{ fontSize: "10rem" }}
                                >
                                    trophy
                                </span>
                            </div>
                            <div className="relative z-10">
                                <h2
                                    className="text-4xl font-black italic tracking-tighter uppercase mb-8"
                                    style={{
                                        fontFamily: "'Lexend', sans-serif",
                                    }}
                                >
                                    Championship Standings
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            rank: "01",
                                            name: "Engineering Knights",
                                            pts: "3200 POINTS",
                                            pct: "85%",
                                            color: "#d2ff9a",
                                        },
                                        {
                                            rank: "02",
                                            name: "Medicine Titans",
                                            pts: "2850 POINTS",
                                            pct: "70%",
                                            color: "#00e3fd",
                                        },
                                    ].map(({ rank, name, pts, pct, color }) => (
                                        <div
                                            key={rank}
                                            className="flex items-center justify-between p-4 rounded-lg"
                                            style={{
                                                backgroundColor: "#222727",
                                                borderLeft: `4px solid ${color}`,
                                            }}
                                        >
                                            <div className="flex items-center gap-6">
                                                <span
                                                    className="text-2xl font-bold"
                                                    style={{
                                                        fontFamily:
                                                            "'Space Grotesk', sans-serif",
                                                    }}
                                                >
                                                    {rank}
                                                </span>
                                                <div>
                                                    <p
                                                        className="font-bold text-lg uppercase"
                                                        style={{
                                                            fontFamily:
                                                                "'Lexend', sans-serif",
                                                        }}
                                                    >
                                                        {name}
                                                    </p>
                                                    <p
                                                        className="text-xs tracking-widest"
                                                        style={{
                                                            fontFamily:
                                                                "'Space Grotesk', sans-serif",
                                                            color: "#a9abab",
                                                        }}
                                                    >
                                                        {pts}
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                className="w-24 h-2 rounded-full overflow-hidden"
                                                style={{
                                                    backgroundColor: "#262626",
                                                }}
                                            >
                                                <div
                                                    className="h-full rounded-full"
                                                    style={{
                                                        width: pct,
                                                        backgroundColor: color,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div
                            className="lg:col-span-4 rounded-xl p-10 flex flex-col justify-between"
                            style={{
                                backgroundColor: "#d2ff9a",
                                color: "#3d6500",
                            }}
                        >
                            <div>
                                <span className="material-symbols-outlined text-5xl mb-6 block">
                                    bolt
                                </span>
                                <h3
                                    className="text-3xl font-black italic tracking-tighter uppercase leading-tight mb-4"
                                    style={{
                                        fontFamily: "'Lexend', sans-serif",
                                    }}
                                >
                                    Ready to make history?
                                </h3>
                                <p className="text-sm font-semibold opacity-90">
                                    Join over 5,000 athletes competing for the
                                    glory of their department.
                                </p>
                            </div>
                            <Link
                                href="/registration"
                                className="mt-8 py-4 text-center font-black uppercase tracking-widest rounded-md transition-transform hover:scale-105 block"
                                style={{
                                    backgroundColor: "#3d6500",
                                    color: "#d2ff9a",
                                    fontFamily: "'Lexend', sans-serif",
                                }}
                            >
                                Join the Arena
                            </Link>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
