import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-full py-12 px-8 border-t border-neutral-800"
      style={{ backgroundColor: "rgba(10,10,10,0.95)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-2xl mx-auto">
        {/* Brand */}
        <div className="space-y-6">
          <div
            className="text-lg font-black text-white uppercase italic"
            style={{ fontFamily: "'Lexend', sans-serif" }}
          >
            NEON ARENA
          </div>
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: "#737373" }}
          >
            THE PREMIER COLLEGE SPORTS EVENT OF THE DECADE. PUSHING BOUNDARIES AND CREATING LEGENDS.
          </p>
          <div className="flex gap-4">
            <span
              className="material-symbols-outlined cursor-pointer transition-colors hover:text-cyan-400"
              style={{ color: "#737373" }}
            >
              public
            </span>
            <span
              className="material-symbols-outlined cursor-pointer transition-colors hover:text-cyan-400"
              style={{ color: "#737373" }}
            >
              sports_esports
            </span>
            <span
              className="material-symbols-outlined cursor-pointer transition-colors hover:text-cyan-400"
              style={{ color: "#737373" }}
            >
              stadium
            </span>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div
              className="text-xs font-bold text-white uppercase tracking-widest"
              style={{ fontFamily: "'Lexend', sans-serif" }}
            >
              Navigation
            </div>
            <ul className="space-y-2 text-xs uppercase tracking-widest">
              {[["About Us", "/"], ["Announcements", "/"], ["Sponsors", "/"], ["Contact", "/"], ["Privacy Policy", "/"]].map(
                ([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="transition-colors hover:text-cyan-400"
                      style={{ color: "#737373" }}
                    >
                      {label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="space-y-4">
            <div
              className="text-xs font-bold text-white uppercase tracking-widest"
              style={{ fontFamily: "'Lexend', sans-serif" }}
            >
              Support
            </div>
            <ul className="space-y-2 text-xs uppercase tracking-widest">
              {["Contact Us", "Privacy Policy", "Campus Map", "Socials"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition-colors hover:text-cyan-400"
                    style={{ color: "#737373" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <div
            className="text-xs font-bold text-white uppercase tracking-widest"
            style={{ fontFamily: "'Lexend', sans-serif" }}
          >
            Newsletter
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="ENTER EMAIL"
              className="flex-1 p-3 text-xs uppercase focus:outline-none focus:ring-1"
              style={{
                backgroundColor: "#262626",
                color: "#edeeed",
                fontFamily: "'Space Grotesk', sans-serif",
                border: "none",
              }}
            />
            <button
              className="px-4 font-black transition-colors hover:brightness-110"
              style={{ backgroundColor: "#d2ff9a", color: "#0c0f0f" }}
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
          <div
            className="text-xs uppercase tracking-widest"
            style={{ color: "#525252", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            © 2026 NEON ARENA COLLEGE SPORTS. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
