import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
    title: "Leaderboard | LAKSHYA",
    description: "Current standings and champions of the arena.",
};

const topThree = [
    {
        order: "order-2 md:order-1",
        rank: "#02",
        name: "STORM RAIDERS",
        dept: "Dept. of Engineering",
        points: "2,840",
        borderColor: "#00e3fd",
        pointColor: "#00e3fd",
        paddingClass: "p-8",
        avatarSize: "w-24 h-24",
        avatarTop: "-top-12",
        marginTop: "mt-12",
        borderWidth: "border-b-4",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXJozMizAGSoWYX7BXRs-miyZ8b9ZsOja5eDYGcdytp5MVvGNduoeFpqpvbaFXAB6b8qSQGxGI9pUwtmU7kHjiDALv3GiToiQI1GyZXzztkriIZ_EVQYebYg-NlfUD53HfXok1Q4nZ_WuMrO04Nkck1ZUSj90z6p6IgUF2gIqTtR5z96LCoeKJJjxZmIh6spgr7ihuny1Qg9FW75nx2yQNWdCMr0awjRUKmglgbqwPZfKTQzX90sCDgizHBXnN1fdZBM_J7M3K9S0",
        pointsSize: "text-5xl",
        isFirst: false,
    },
    {
        order: "order-1 md:order-2",
        rank: "#01",
        name: "CYBER HAWKS",
        dept: "Dept. of Computing",
        points: "3,120",
        borderColor: "#d2ff9a",
        pointColor: "#d2ff9a",
        paddingClass: "p-12",
        avatarSize: "w-32 h-32",
        avatarTop: "-top-16",
        marginTop: "mt-16",
        borderWidth: "border-b-8",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZL0ePTKAso5CKUTLD2TAaoJeVTsg4K5FVIp7fiMmHBiayIEZeF7Jx8ZVC1mI2rHTg-MRhTvQARxvkNbLZqduQx8RlVNNDBg154x2k2acU3dozRasQMyupUIjE0keYIrub-gKA0N28jFtu3GnHZ4V99xZSfz2hUs06V87d6UFffJY3ic2y3i3cBTkCzleAFOCui_kF-8L1v5uQeZ6XfJZxttsUrVYzTWO-HVkI2rVYyYy0zis98icJMu4hs3mncsjQZfBqsTjBckU",
        pointsSize: "text-7xl italic",
        isFirst: true,
    },
    {
        order: "order-3",
        rank: "#03",
        name: "TITAN LIONS",
        dept: "School of Business",
        points: "2,610",
        borderColor: "#ff833f",
        pointColor: "#ff833f",
        paddingClass: "p-8",
        avatarSize: "w-24 h-24",
        avatarTop: "-top-12",
        marginTop: "mt-12",
        borderWidth: "border-b-4",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBU5Q_6pKYadTdIZ16MLNcqcrDT33CEdWLt2936K4Par2WrORtnNLK9hNf_S9YrSQoej5IzUhNA_F7fBynLbjkXNJwI71_F0X9RgFufT04mQBqcf20ar06p4AAD18WvNMZ17vXJy8lD4AIuK2oIW876fitx7uvFfTenLsUAlYzKGsBmvA43GRqV449by2vTiKAYLGzBLGspQ2DTy3HJk3fgTz4pXOsRqQBmBd_5fsEZg8_-POr_xmg2JPFOWbBUobbMC1YTSycGF70",
        pointsSize: "text-5xl",
        isFirst: false,
    },
];

const tableRows = [
    {
        rank: "04",
        initials: "PH",
        name: "PHANTOM KNIGHTS",
        dept: "Fine Arts",
        pts: "2,450",
        trend: "up",
    },
    {
        rank: "05",
        initials: "VC",
        name: "VELOCITY CORES",
        dept: "Physics",
        pts: "2,280",
        trend: "down",
    },
    {
        rank: "06",
        initials: "IR",
        name: "IRON REBELS",
        dept: "Mechanical Eng",
        pts: "2,110",
        trend: "neutral",
    },
    {
        rank: "07",
        initials: "AL",
        name: "ALPHA LEGION",
        dept: "Humanities",
        pts: "1,940",
        trend: "up",
    },
    {
        rank: "08",
        initials: "NB",
        name: "NEBULA BLASTERS",
        dept: "Aerospace",
        pts: "1,720",
        trend: "up",
    },
];

export default function LeaderboardPage() {
    return (
        <div style={{ backgroundColor: "#0c0f0f", color: "#edeeed" }}>
            <Navbar />

            <main className="relative min-h-screen">
                {/* Background effects */}
                <div className="fixed inset-0 bg-grid pointer-events-none" />
                <div
                    className="fixed top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{
                        backgroundColor: "rgba(210,255,154,0.05)",
                        filter: "blur(120px)",
                    }}
                />
                <div
                    className="fixed bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{
                        backgroundColor: "rgba(0,227,253,0.05)",
                        filter: "blur(120px)",
                    }}
                />

                {/* Hero */}
                <section className="relative pt-16 pb-32 px-8 max-w-screen-2xl mx-auto overflow-hidden">
                    <div className="flex flex-col items-center mb-20 text-center">
                        <span
                            className="tracking-[0.4em] uppercase text-sm mb-4"
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                color: "#d2ff9a",
                            }}
                        >
                            Current Standings
                        </span>
                        <h1
                            className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none italic"
                            style={{ fontFamily: "'Lexend', sans-serif" }}
                        >
                            CHAMPIONS <br />
                            <span
                                className="neon-glow-text"
                                style={{ color: "#d2ff9a" }}
                            >
                                OF THE ARENA
                            </span>
                        </h1>
                    </div>

                    {/* Podium */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                        {topThree.map(
                            ({
                                order,
                                rank,
                                name,
                                dept,
                                points,
                                borderColor,
                                pointColor,
                                paddingClass,
                                avatarSize,
                                avatarTop,
                                marginTop,
                                borderWidth,
                                img,
                                pointsSize,
                                isFirst,
                            }) => (
                                <div key={name} className={`${order} group`}>
                                    <div
                                        className={`relative flex flex-col items-center transform transition-transform group-hover:-translate-y-${isFirst ? "4" : "2"} ${paddingClass} ${borderWidth}`}
                                        style={{
                                            backgroundColor: isFirst
                                                ? "#1c2020"
                                                : "#111414",
                                            borderBottomColor: borderColor,
                                            boxShadow: isFirst
                                                ? "0 20px 60px rgba(210,255,154,0.15)"
                                                : undefined,
                                        }}
                                    >
                                        <div
                                            className={`absolute ${avatarTop} left-1/2 -translate-x-1/2`}
                                        >
                                            <div
                                                className={`${avatarSize} rounded-full border-4 overflow-hidden`}
                                                style={{
                                                    borderColor,
                                                    backgroundColor: "#222727",
                                                    boxShadow: isFirst
                                                        ? `0 0 0 8px ${borderColor}1a`
                                                        : undefined,
                                                }}
                                            >
                                                <img
                                                    src={img}
                                                    alt={name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className={`${marginTop} text-center`}
                                        >
                                            {isFirst && (
                                                <div
                                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
                                                    style={{
                                                        backgroundColor:
                                                            "rgba(210,255,154,0.1)",
                                                    }}
                                                >
                                                    <span
                                                        className="w-2 h-2 rounded-full animate-pulse"
                                                        style={{
                                                            backgroundColor:
                                                                "#d2ff9a",
                                                        }}
                                                    />
                                                    <span
                                                        className="text-xs font-bold uppercase"
                                                        style={{
                                                            fontFamily:
                                                                "'Space Grotesk', sans-serif",
                                                            color: "#d2ff9a",
                                                        }}
                                                    >
                                                        Arena Leader
                                                    </span>
                                                </div>
                                            )}
                                            <span
                                                className={`font-bold ${isFirst ? "text-2xl" : "text-xl"}`}
                                                style={{
                                                    fontFamily:
                                                        "'Space Grotesk', sans-serif",
                                                    color: pointColor,
                                                }}
                                            >
                                                {rank}
                                            </span>
                                            <h3
                                                className={`${isFirst ? "text-5xl font-extrabold" : "text-3xl font-bold"} uppercase mb-${isFirst ? "2" : "1"} tracking-tighter`}
                                                style={{
                                                    fontFamily:
                                                        "'Lexend', sans-serif",
                                                }}
                                            >
                                                {name}
                                            </h3>
                                            <p
                                                className={`${isFirst ? "text-base" : "text-sm"} tracking-widest uppercase`}
                                                style={{ color: "#a9abab" }}
                                            >
                                                {dept}
                                            </p>
                                            <div
                                                className={`mt-${isFirst ? "8" : "6"} font-black ${pointsSize}`}
                                                style={{
                                                    fontFamily:
                                                        "'Space Grotesk', sans-serif",
                                                    color: pointColor,
                                                }}
                                            >
                                                {points}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ),
                        )}
                    </div>
                </section>

                {/* Full Standings Table */}
                <section className="max-w-screen-xl mx-auto px-8 pb-32">
                    <div className="flex items-end justify-between mb-8">
                        <h2
                            className="text-4xl font-black uppercase tracking-tighter italic"
                            style={{
                                fontFamily: "'Lexend', sans-serif",
                                borderLeft: "8px solid #d2ff9a",
                                paddingLeft: "24px",
                            }}
                        >
                            Full Standings
                        </h2>
                        <div className="flex gap-4 items-center">
                            <span
                                className="text-xs uppercase"
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    color: "#737373",
                                }}
                            >
                                Auto-update in 45s
                            </span>
                            <button
                                style={{ color: "#d2ff9a" }}
                                className="hover:text-white transition-colors"
                            >
                                <span className="material-symbols-outlined">
                                    refresh
                                </span>
                            </button>
                        </div>
                    </div>

                    <div
                        className="overflow-hidden border border-white/5"
                        style={{ backgroundColor: "#000000" }}
                    >
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr
                                    className="text-xs tracking-widest uppercase"
                                    style={{
                                        backgroundColor: "#1c2020",
                                        fontFamily:
                                            "'Space Grotesk', sans-serif",
                                        color: "#a9abab",
                                    }}
                                >
                                    <th className="py-6 px-8 w-24">Rank</th>
                                    <th className="py-6 px-8">Team Entity</th>
                                    <th className="py-6 px-8">Department</th>
                                    <th className="py-6 px-8 text-right">
                                        Pts
                                    </th>
                                    <th className="py-6 px-8 text-right">
                                        Trend
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {tableRows.map(
                                    ({
                                        rank,
                                        initials,
                                        name,
                                        dept,
                                        pts,
                                        trend,
                                    }) => (
                                        <tr
                                            key={rank}
                                            className="group hover:bg-white/5 transition-colors"
                                        >
                                            <td
                                                className="py-6 px-8 text-2xl font-black"
                                                style={{
                                                    fontFamily:
                                                        "'Space Grotesk', sans-serif",
                                                    color: "#737373",
                                                }}
                                            >
                                                {rank}
                                            </td>
                                            <td className="py-6 px-8">
                                                <div className="flex items-center gap-4">
                                                    <div
                                                        className="w-10 h-10 flex items-center justify-center font-black text-sm"
                                                        style={{
                                                            backgroundColor:
                                                                "#222727",
                                                            fontFamily:
                                                                "'Space Grotesk', sans-serif",
                                                        }}
                                                    >
                                                        {initials}
                                                    </div>
                                                    <span
                                                        className="font-bold uppercase group-hover:text-[#d2ff9a] transition-colors"
                                                        style={{
                                                            fontFamily:
                                                                "'Lexend', sans-serif",
                                                        }}
                                                    >
                                                        {name}
                                                    </span>
                                                </div>
                                            </td>
                                            <td
                                                className="py-6 px-8 uppercase text-sm"
                                                style={{ color: "#a9abab" }}
                                            >
                                                {dept}
                                            </td>
                                            <td
                                                className="py-6 px-8 text-right text-2xl font-black"
                                                style={{
                                                    fontFamily:
                                                        "'Space Grotesk', sans-serif",
                                                }}
                                            >
                                                {pts}
                                            </td>
                                            <td className="py-6 px-8 text-right">
                                                <span
                                                    className="material-symbols-outlined align-middle"
                                                    style={{
                                                        color:
                                                            trend === "up"
                                                                ? "#d2ff9a"
                                                                : trend ===
                                                                    "down"
                                                                  ? "#ff833f"
                                                                  : "#737373",
                                                    }}
                                                >
                                                    {trend === "up"
                                                        ? "trending_up"
                                                        : trend === "down"
                                                          ? "trending_down"
                                                          : "horizontal_rule"}
                                                </span>
                                            </td>
                                        </tr>
                                    ),
                                )}
                            </tbody>
                        </table>
                        <div
                            className="p-8 flex justify-center border-t border-white/5"
                            style={{ backgroundColor: "#111414" }}
                        >
                            <button
                                className="group flex items-center gap-2 text-sm uppercase tracking-widest transition-colors hover:text-white"
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    color: "#a9abab",
                                }}
                            >
                                View Full List
                                <span className="material-symbols-outlined text-sm group-hover:translate-y-1 transition-transform">
                                    keyboard_double_arrow_down
                                </span>
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
