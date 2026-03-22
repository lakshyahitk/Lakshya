"use client";
import { useState, useEffect, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSearchParams } from "next/navigation";

function RegistrationForm() {
  const searchParams = useSearchParams();
  const preSelectedSport = searchParams.get("sport");

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    department: "",
    selectedSports: preSelectedSport ? [preSelectedSport] : [],
    acknowledgment: false,
  });

  const allAvailableSports = [
    { id: "cricket-boys", label: "Cricket (Boys)" },
    { id: "cricket-girls", label: "Cricket (Girls)" },
    { id: "basketball-boys", label: "Basketball (Boys)" },
    { id: "basketball-girls", label: "Basketball (Girls)" },
    { id: "football-boys", label: "Football (Boys)" },
    { id: "volleyball-boys", label: "Volleyball (Boys)" },
    { id: "throwball-girls", label: "Throwball (Girls)" },
    { id: "handball-girls", label: "Handball (Girls)" },
    { id: "archery-open", label: "Archery (Open/Mixed)" },
    { id: "athletics", label: "Athletics (Track & Field)" },
  ];

  const handleSportToggle = (id) => {
    setFormData((prev) => {
      const isSelected = prev.selectedSports.includes(id);
      return {
        ...prev,
        selectedSports: isSelected
          ? prev.selectedSports.filter((s) => s !== id)
          : [...prev.selectedSports, id],
      };
    });
  };

  const handleNext = () => {
    if (step === 1 && (!formData.name || !formData.contact || !formData.department)) {
      alert("Please fill all fields.");
      return;
    }
    if (step === 2 && formData.selectedSports.length === 0) {
      alert("Select at least one sport.");
      return;
    }
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.acknowledgment) {
      alert("Please acknowledge the rules before submitting.");
      return;
    }
    alert("Registration Successful! You'll receive an email shortly.");
    // In a real app we'd POST to /api/registration here.
    window.location.href = "/";
  };

  return (
    <div style={{ backgroundColor: "#0c0f0f", color: "#edeeed" }}>
      <Navbar />

      <main className="min-h-screen py-24 px-8 flex justify-center items-center relative overflow-hidden">
        {/* Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #d2ff9a 0%, transparent 70%)" }} />

        <div className="w-full max-w-2xl relative z-10 p-8 md:p-12 rounded-2xl border" style={{ backgroundColor: "rgba(17,20,20,0.8)", backdropFilter: "blur(20px)", borderColor: "rgba(210,255,154,0.2)" }}>
          
          <div className="flex justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 z-0" style={{ backgroundColor: "#222727" }}>
              <div className="h-full transition-all duration-300" style={{ width: `${((step - 1) / 2) * 100}%`, backgroundColor: "#d2ff9a" }} />
            </div>
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 transition-colors"
                style={{
                  backgroundColor: step >= num ? "#d2ff9a" : "#222727",
                  color: step >= num ? "#0c0f0f" : "#a9abab",
                  fontFamily: "'Space Grotesk', sans-serif"
                }}
              >
                {num}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4">
                <h2 className="text-3xl font-black italic uppercase mb-6" style={{ fontFamily: "'Lexend', sans-serif" }}>Personal Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-2 text-[#a9abab]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Full Name</label>
                    <input
                      type="text"
                      className="w-full bg-[#0c0f0f] border border-[#464848] rounded-md p-4 text-white focus:outline-none focus:border-[#d2ff9a]"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      autoFocus
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-2 text-[#a9abab]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Contact Email / Phone</label>
                    <input
                      type="text"
                      className="w-full bg-[#0c0f0f] border border-[#464848] rounded-md p-4 text-white focus:outline-none focus:border-[#d2ff9a]"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-2 text-[#a9abab]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Department / House</label>
                    <input
                      type="text"
                      className="w-full bg-[#0c0f0f] border border-[#464848] rounded-md p-4 text-white focus:outline-none focus:border-[#d2ff9a]"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4">
                <h2 className="text-3xl font-black italic uppercase mb-6" style={{ fontFamily: "'Lexend', sans-serif" }}>Select Sports</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {allAvailableSports.map((sport) => (
                    <label
                      key={sport.id}
                      className="flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all"
                      style={{
                        backgroundColor: formData.selectedSports.includes(sport.id) ? "rgba(210,255,154,0.1)" : "#0c0f0f",
                        borderColor: formData.selectedSports.includes(sport.id) ? "#d2ff9a" : "#464848"
                      }}
                    >
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={formData.selectedSports.includes(sport.id)}
                        onChange={() => handleSportToggle(sport.id)}
                      />
                      <div className="w-5 h-5 rounded border border-[#d2ff9a] flex items-center justify-center">
                        {formData.selectedSports.includes(sport.id) && (
                          <div className="w-3 h-3 bg-[#d2ff9a] rounded-sm" />
                        )}
                      </div>
                      <span className="font-bold text-sm tracking-wide" style={{ color: formData.selectedSports.includes(sport.id) ? "#d2ff9a" : "#edeeed" }}>
                        {sport.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 text-center">
                <span className="material-symbols-outlined text-6xl text-[#d2ff9a] mb-6 block">verified_user</span>
                <h2 className="text-3xl font-black italic uppercase mb-4" style={{ fontFamily: "'Lexend', sans-serif" }}>Final Step</h2>
                <p className="text-[#a9abab] mb-8">
                  Review your details and acknowledge the rules to complete your registration.
                </p>
                <div className="bg-[#0c0f0f] p-6 rounded-lg text-left mb-8 border border-[#464848]">
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Dept:</strong> {formData.department}</p>
                  <p><strong>Sports:</strong> {formData.selectedSports.join(", ")}</p>
                </div>
                <label className="flex items-center gap-3 cursor-pointer justify-center mb-8">
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-[#d2ff9a]"
                    checked={formData.acknowledgment}
                    onChange={(e) => setFormData({ ...formData, acknowledgment: e.target.checked })}
                  />
                  <span className="text-sm">I have read and agree to all tournament rules and policies.</span>
                </label>
              </div>
            )}

            <div className="flex justify-between pt-8 border-t border-white/10 mt-8">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 rounded text-sm font-bold uppercase tracking-widest text-[#a9abab] hover:text-white transition-colors"
                >
                  Back
                </button>
              ) : <div />}
              
              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-8 py-3 rounded text-sm font-black uppercase tracking-widest text-[#0c0f0f] bg-[#d2ff9a] hover:bg-[#bbf06a] transition-colors"
                  style={{ fontFamily: "'Lexend', sans-serif" }}
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3 rounded text-sm font-black uppercase tracking-widest text-[#0c0f0f] bg-[#d2ff9a] hover:bg-[#bbf06a] transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(210,255,154,0.3)]"
                  style={{ fontFamily: "'Lexend', sans-serif" }}
                >
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function RegistrationPageWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0c0f0f]" />}>
      <RegistrationForm />
    </Suspense>
  );
}