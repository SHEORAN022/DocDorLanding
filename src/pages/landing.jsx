
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// import doctor1 from "../assests/docor1.jpg";
// import doctor2 from "../assests/doctor 2.jpg";
// import doctor3 from "../assests/doctor.jpg";

// import management1 from "../assests/management.jpg";
// import management2 from "../assests/management2.jpg";

// import management3 from "../assests/management 3.jpg";

// import user1 from "../assests/user.jpg";
// import user2 from "../assests/user1.jpg";
// import user3 from "../assests/user2.jpg";

// const COLORS = {
//   blue: "#1a56db",
//   blueMid: "#3b82f6",
//   blueLight: "#eff6ff",
//   teal: "#0f766e",
//   tealLight: "#f0fdfa",
//   purple: "#7c3aed",
//   purpleLight: "#f5f3ff",
//   dark: "#0f172a",
//   gray: "#64748b",
//   light: "#f8fafc",
//   white: "#ffffff",
//   border: "#e2e8f0",
// };

// function useIsMobile() {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   useEffect(() => {
//     const handler = () => setIsMobile(window.innerWidth < 768);
//     window.addEventListener("resize", handler);
//     return () => window.removeEventListener("resize", handler);
//   }, []);
//   return isMobile;
// }

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const isMobile = useIsMobile();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <>
//       <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${COLORS.border}`, padding: "0 5%", transition: "background 0.3s" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
//           <div style={{ fontSize: 22, fontWeight: 800, color: COLORS.blue, letterSpacing: "-0.5px" }}>
//             Doc<span style={{ color: COLORS.dark }}>Dor</span>
//           </div>

//           {isMobile ? (
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }}
//             >
//               {[0, 1, 2].map((i) => (
//                 <span key={i} style={{ display: "block", width: 24, height: 2, background: COLORS.dark, borderRadius: 2, transition: "all 0.3s",
//                   transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "scale(0)") : "none",
//                 }} />
//               ))}
//             </button>
//           ) : (
//             <>
//               <ul style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0 }}>
//                 {["Home", "Apps", "Features", "Pricing", "Contact"].map((item) => (
//                   <li key={item}>
//                     <a href="#" style={{ textDecoration: "none", color: COLORS.gray, fontSize: 14, fontWeight: 500 }}>{item}</a>
//                   </li>
//                 ))}
//               </ul>
//               <button style={{ background: COLORS.blue, color: "#fff", border: "none", padding: "10px 24px", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
//                 Get Started Free
//               </button>
//             </>
//           )}
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {isMobile && menuOpen && (
//           <div style={{ background: "#fff", borderTop: `1px solid ${COLORS.border}`, padding: "16px 5% 20px" }}>
//             {["Home", "Apps", "Features", "Pricing", "Contact"].map((item) => (
//               <a key={item} href="#" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "12px 0", textDecoration: "none", color: COLORS.dark, fontSize: 15, fontWeight: 500, borderBottom: `1px solid ${COLORS.border}` }}>
//                 {item}
//               </a>
//             ))}
//             <button style={{ marginTop: 16, width: "100%", background: COLORS.blue, color: "#fff", border: "none", padding: "12px 24px", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
//               Get Started Free
//             </button>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// }

// function Hero() {
//   const isMobile = useIsMobile();
//   return (
//     <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: isMobile ? "90px 5% 60px" : "100px 5% 60px", background: "linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 50%,#f0fdf4 100%)" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 60, alignItems: "center", width: "100%" }}>
//         <div style={{ textAlign: isMobile ? "center" : "left" }}>
//           <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: COLORS.blueLight, color: COLORS.blue, padding: "6px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 20, border: "1px solid #bfdbfe" }}>
//             <span style={{ width: 8, height: 8, background: COLORS.blueMid, borderRadius: "50%", display: "inline-block", animation: "pulse 2s infinite" }} />
//             India's #1 Healthcare Platform
//           </div>
//           <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 36 : 52, lineHeight: 1.15, color: COLORS.dark, marginBottom: 20, letterSpacing: "-1px" }}>
//             Smart Healthcare<br />
//             <span style={{ color: COLORS.blue }}>Management</span><br />
//             Platform
//           </h1>
//           <p style={{ fontSize: isMobile ? 16 : 18, color: COLORS.gray, lineHeight: 1.7, marginBottom: 36, maxWidth: isMobile ? "100%" : 480 }}>
//             A complete ecosystem for doctors, clinics, and patients. Book appointments, manage records, and deliver care — all in one place.
//           </p>
//           <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: isMobile ? "center" : "flex-start" }}>
//             <button style={{ background: COLORS.blue, color: "#fff", border: "none", padding: "14px 28px", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 15px rgba(26,86,219,.3)" }}>
//               🚀 Get Started Now
//             </button>
//             <button style={{ background: "transparent", color: COLORS.dark, border: `2px solid ${COLORS.border}`, padding: "14px 28px", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
//               📱 View Our Apps
//             </button>
//           </div>
//         </div>

//         {!isMobile && (
//           <div style={{ position: "relative" }}>
//             <div style={{ position: "absolute", top: 20, right: -10, background: "#fff", borderRadius: 12, padding: "10px 16px", boxShadow: "0 8px 30px rgba(0,0,0,.15)", display: "flex", alignItems: "center", gap: 10, fontSize: 13, fontWeight: 600, color: COLORS.dark, zIndex: 2 }}>
//               <span style={{ width: 32, height: 32, borderRadius: 8, background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>✅</span>
//               Appointment Confirmed!
//             </div>
//             <div style={{ background: "#fff", borderRadius: 24, border: `8px solid ${COLORS.dark}`, boxShadow: "0 30px 80px rgba(0,0,0,.2)", overflow: "hidden", maxWidth: 280, margin: "0 auto" }}>
//               <div style={{ background: "linear-gradient(180deg,#1a56db 0%,#1d4ed8 40%,#f0f9ff 40%)", padding: "24px 20px 20px" }}>
//                 <div style={{ color: "#fff", fontSize: 13, fontWeight: 600, marginBottom: 16, opacity: 0.9 }}>👋 Good Morning, Dr. Ahmed</div>
//                 <div style={{ color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Today's Schedule</div>
//                 <div style={{ color: "rgba(255,255,255,.7)", fontSize: 12, marginBottom: 20 }}>4 appointments remaining</div>
//                 {[
//                   { initials: "SA", name: "Sara Ali", time: "10:30 AM · General", badge: "Confirmed", badgeBg: "#dcfce7", badgeColor: "#166534", avatarBg: COLORS.blue },
//                   { initials: "MK", name: "M. Kamran", time: "11:15 AM · Follow-up", badge: "Pending", badgeBg: "#fef9c3", badgeColor: "#854d0e", avatarBg: COLORS.purple },
//                 ].map((appt) => (
//                   <div key={appt.initials} style={{ background: "#fff", borderRadius: 14, padding: 14, marginBottom: 10, boxShadow: "0 2px 12px rgba(0,0,0,.08)" }}>
//                     <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//                       <div style={{ width: 36, height: 36, borderRadius: 10, background: appt.avatarBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#fff", flexShrink: 0 }}>
//                         {appt.initials}
//                       </div>
//                       <div style={{ flex: 1 }}>
//                         <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.dark }}>{appt.name}</div>
//                         <div style={{ fontSize: 11, color: COLORS.gray }}>{appt.time}</div>
//                       </div>
//                       <span style={{ fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 6, background: appt.badgeBg, color: appt.badgeColor }}>{appt.badge}</span>
//                     </div>
//                   </div>
//                 ))}
//                 <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
//                   {[{ num: "24", lbl: "This Week" }, { num: "4.9", lbl: "Rating" }, { num: "98%", lbl: "On Time" }].map((s) => (
//                     <div key={s.lbl} style={{ background: "#fff", borderRadius: 10, padding: 10, flex: 1, textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,.06)" }}>
//                       <div style={{ fontSize: 18, fontWeight: 700, color: COLORS.blue }}>{s.num}</div>
//                       <div style={{ fontSize: 10, color: COLORS.gray, marginTop: 2 }}>{s.lbl}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div style={{ position: "absolute", bottom: 40, left: -20, background: "#fff", borderRadius: 12, padding: "10px 16px", boxShadow: "0 8px 30px rgba(0,0,0,.15)", display: "flex", alignItems: "center", gap: 10, fontSize: 13, fontWeight: 600, color: COLORS.dark, zIndex: 2 }}>
//               <span style={{ width: 32, height: 32, borderRadius: 8, background: COLORS.blueLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>💊</span>
//               Prescription Ready
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// function StatsBar() {
//   const isMobile = useIsMobile();
//   const stats = [
//     { num: "50K+", label: "Active Doctors" },
//     { num: "2M+", label: "Patients Served" },
//     { num: "99.9%", label: "Uptime Guarantee" },
//     { num: "4.9★", label: "Average Rating" },
//   ];
//   return (
//     <div style={{ background: COLORS.dark, padding: isMobile ? "32px 5%" : "40px 5%" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: isMobile ? 24 : 20 }}>
//         {stats.map((s) => (
//           <div key={s.label} style={{ textAlign: "center" }}>
//             <div style={{ fontSize: isMobile ? 28 : 36, fontWeight: 800, color: "#60a5fa", letterSpacing: "-1px" }}>{s.num}</div>
//             <div style={{ fontSize: 13, color: "#94a3b8", marginTop: 4 }}>{s.label}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ── Image Lightbox with Arrows ─────────────────────────────────────────────────
// function ImageLightbox({ images, startIndex, onClose }) {
//   const [current, setCurrent] = useState(startIndex);
//   const isMobile = useIsMobile();

//   const prev = (e) => {
//     e.stopPropagation();
//     setCurrent((c) => (c - 1 + images.length) % images.length);
//   };
//   const next = (e) => {
//     e.stopPropagation();
//     setCurrent((c) => (c + 1) % images.length);
//   };

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") onClose();
//       if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + images.length) % images.length);
//       if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % images.length);
//     };
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, [onClose, images.length]);

//   const arrowStyle = (side) => ({
//     position: "absolute", top: "50%", transform: "translateY(-50%)",
//     background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.3)",
//     color: "#fff", fontSize: isMobile ? 18 : 22,
//     width: isMobile ? 40 : 52, height: isMobile ? 40 : 52,
//     borderRadius: "50%", cursor: "pointer", display: "flex",
//     alignItems: "center", justifyContent: "center",
//     backdropFilter: "blur(6px)", transition: "background 0.2s",
//     [side]: isMobile ? 10 : 20,
//   });

//   return (
//     <div
//       onClick={onClose}
//       style={{
//         position: "fixed", inset: 0, zIndex: 9998,
//         background: "rgba(0,0,0,0.90)", backdropFilter: "blur(8px)",
//         display: "flex", alignItems: "center", justifyContent: "center",
//         animation: "popIn 0.2s ease",
//       }}
//     >
//       <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", fontSize: 18, width: 40, height: 40, borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)", zIndex: 2 }}>✕</button>

//       <button onClick={prev} style={arrowStyle("left")}>‹</button>

//       <img
//         src={images[current]}
//         alt={`screenshot ${current + 1}`}
//         onClick={(e) => e.stopPropagation()}
//         style={{ maxWidth: isMobile ? "85vw" : "80vw", maxHeight: isMobile ? "75vh" : "85vh", borderRadius: 12, objectFit: "contain", boxShadow: "0 32px 100px rgba(0,0,0,0.6)", animation: "popIn 0.2s ease", userSelect: "none" }}
//       />

//       <button onClick={next} style={arrowStyle("right")}>›</button>

//       <div style={{ position: "absolute", bottom: 20, display: "flex", gap: 8, alignItems: "center" }}>
//         {images.map((_, i) => (
//           <div key={i} onClick={(e) => { e.stopPropagation(); setCurrent(i); }} style={{ width: i === current ? 24 : 8, height: 8, borderRadius: 4, background: i === current ? "#fff" : "rgba(255,255,255,0.35)", cursor: "pointer", transition: "all 0.3s ease" }} />
//         ))}
//       </div>

//       <div style={{ position: "absolute", top: 18, left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 600, background: "rgba(0,0,0,0.4)", padding: "4px 14px", borderRadius: 20, backdropFilter: "blur(4px)", whiteSpace: "nowrap" }}>
//         {current + 1} / {images.length}
//       </div>
//     </div>
//   );
// }

// // ── Coming Soon Modal ──────────────────────────────────────────────────────────
// function ComingSoonModal({ onClose }) {
//   return (
//     <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 16px" }}>
//       <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", borderRadius: 24, padding: "40px 32px", maxWidth: 380, width: "100%", textAlign: "center", boxShadow: "0 24px 80px rgba(0,0,0,0.2)", animation: "popIn 0.25s ease" }}>
//         <div style={{ fontSize: 52, marginBottom: 14 }}>🚀</div>
//         <h3 style={{ fontSize: 22, fontWeight: 800, color: COLORS.dark, marginBottom: 8 }}>Coming Soon!</h3>
//         <p style={{ fontSize: 15, color: COLORS.gray, lineHeight: 1.7, marginBottom: 6 }}>Our app is launching soon on</p>
//         <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: COLORS.blueLight, color: COLORS.blue, padding: "8px 20px", borderRadius: 30, fontSize: 14, fontWeight: 700, marginBottom: 24, border: `1px solid #bfdbfe` }}>
//           <span style={{ fontSize: 18 }}>▶</span> Google Play Store
//         </div>
//         <p style={{ fontSize: 13, color: COLORS.gray, marginBottom: 28 }}>Stay tuned! We'll notify you as soon as it's live.</p>
//         <button onClick={onClose} style={{ background: COLORS.blue, color: "#fff", border: "none", padding: "13px 36px", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer", width: "100%" }}>
//           Got it! 👍
//         </button>
//       </div>
//     </div>
//   );
// }

// // ── Apps Section ───────────────────────────────────────────────────────────────
// function AppsSection() {
//   const [showModal, setShowModal] = useState(false);
//   const [lightbox, setLightbox] = useState(null);
//   const isMobile = useIsMobile();

//   const apps = [
//     {
//       emoji: "🩺", tag: "Doctor App", tagBg: COLORS.blueLight, tagColor: COLORS.blue,
//       title: "Doctor's Companion",
//       desc: "Manage your practice from your phone. Appointments, patients, prescriptions — all in one touch.",
//       features: ["Real-time appointment management", "Digital prescriptions & e-notes", "Patient history & records", "Earnings & analytics dashboard", "Video consultation support"],
//       images: [doctor1, doctor2, doctor3],
//       checkBg: COLORS.blue, iconBg: COLORS.blueLight, btnBg: COLORS.blue, accentColor: COLORS.blue,
//       btnLabel: "Download Doctor App →",
//     },
//     {
//       emoji: "🏥", tag: "Management App", tagBg: COLORS.tealLight, tagColor: COLORS.teal,
//       title: "Clinic Manager",
//       desc: "Streamline your entire clinic or hospital. Control staff, schedules, and financials in one place.",
//       features: ["Multi-doctor clinic management", "Staff & role management", "Billing & invoice generation", "Inventory & pharmacy tracking", "Reports & revenue analytics"],
//       images: [management1, management2, management3],
//       checkBg: COLORS.teal, iconBg: COLORS.tealLight, btnBg: COLORS.teal, accentColor: COLORS.teal,
//       btnLabel: "Download Management App →",
//     },
//     {
//       emoji: "👤", tag: "User App", tagBg: COLORS.purpleLight, tagColor: COLORS.purple,
//       title: "Patient Portal",
//       desc: "Find the best doctors near you, book appointments, and track your health easily from home.",
//       features: ["Find & book top doctors nearby", "Digital health records vault", "Appointment reminders & alerts", "Medicine reminders & tracking", "Family health management"],
//       images: [user1, user2, user3],
//       checkBg: COLORS.purple, iconBg: COLORS.purpleLight, btnBg: COLORS.purple, accentColor: COLORS.purple,
//       btnLabel: "Download Patient App →",
//     },
//   ];

//   return (
//     <>
//       {lightbox && <ImageLightbox images={lightbox.images} startIndex={lightbox.index} onClose={() => setLightbox(null)} />}
//       {showModal && <ComingSoonModal onClose={() => setShowModal(false)} />}

//       <section style={{ padding: isMobile ? "60px 5%" : "100px 5%", background: COLORS.light }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//           <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.blue, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Our Platform</div>
//           <h2 style={{ fontSize: isMobile ? 28 : 40, fontWeight: 800, color: COLORS.dark, marginBottom: 16, letterSpacing: "-1px" }}>Three Powerful Apps,<br />One Ecosystem</h2>
//           <p style={{ fontSize: isMobile ? 15 : 17, color: COLORS.gray, maxWidth: 560, lineHeight: 1.7, marginBottom: isMobile ? 36 : 60 }}>
//             Whether you're a doctor, clinic manager, or patient — we have the perfect app for you.
//           </p>

//           <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: isMobile ? 20 : 28 }}>
//             {apps.map((app) => (
//               <div key={app.title} style={{ background: COLORS.white, borderRadius: 20, padding: isMobile ? "20px 20px 24px" : "28px 28px 32px", border: `1px solid ${COLORS.border}`, borderTop: `4px solid ${app.accentColor}`, display: "flex", flexDirection: "column" }}>
//                 <div style={{ display: "flex", gap: 6, marginBottom: 16, borderRadius: 12, overflow: "hidden" }}>
//                   {app.images.map((src, i) => (
//                     <img key={i} src={src} alt={`${app.title} screenshot ${i + 1}`}
//                       onClick={() => setLightbox({ images: app.images, index: i })}
//                       onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)"; }}
//                       onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
//                       style={{ width: "33.33%", height: isMobile ? 100 : 130, objectFit: "cover", borderRadius: 10, cursor: "pointer", transition: "transform 0.2s ease, box-shadow 0.2s ease" }}
//                     />
//                   ))}
//                 </div>
//                 <div style={{ width: 48, height: 48, borderRadius: 14, background: app.iconBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 12 }}>{app.emoji}</div>
//                 <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 8, padding: "4px 10px", borderRadius: 6, background: app.tagBg, color: app.tagColor, alignSelf: "flex-start" }}>{app.tag}</span>
//                 <h3 style={{ fontSize: isMobile ? 18 : 22, fontWeight: 700, marginBottom: 8, color: COLORS.dark }}>{app.title}</h3>
//                 <p style={{ fontSize: 14, color: COLORS.gray, lineHeight: 1.7, marginBottom: 16 }}>{app.desc}</p>
//                 <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
//                   {app.features.map((f) => (
//                     <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: COLORS.dark }}>
//                       <span style={{ width: 18, height: 18, borderRadius: 5, background: app.checkBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff", flexShrink: 0 }}>✓</span>
//                       {f}
//                     </li>
//                   ))}
//                 </ul>
//                 <button onClick={() => setShowModal(true)} style={{ width: "100%", padding: 12, borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer", border: "none", background: app.btnBg, color: "#fff" }}>
//                   {app.btnLabel}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// function HowItWorks() {
//   const isMobile = useIsMobile();
//   const steps = [
//     { num: 1, title: "Create Account", desc: "Sign up for free — as a doctor, clinic manager, or patient" },
//     { num: 2, title: "Set Up Profile", desc: "Add your specialization, availability, and clinic details" },
//     { num: 3, title: "Get Connected", desc: "Let patients discover you or invite them directly to your profile" },
//     { num: 4, title: "Start Managing", desc: "Handle appointments, records, and payments seamlessly" },
//   ];

//   return (
//     <section style={{ padding: isMobile ? "60px 5%" : "100px 5%", background: COLORS.white }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//         <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.blue, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Simple Process</div>
//         <h2 style={{ fontSize: isMobile ? 28 : 40, fontWeight: 800, color: COLORS.dark, marginBottom: 12, letterSpacing: "-1px" }}>How It Works</h2>
//         <p style={{ fontSize: isMobile ? 15 : 17, color: COLORS.gray, marginBottom: isMobile ? 36 : 60 }}>Start your healthcare journey in just 4 easy steps</p>

//         <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: isMobile ? 28 : 24, position: "relative" }}>
//           {!isMobile && <div style={{ position: "absolute", top: 36, left: "12%", right: "12%", height: 2, background: `linear-gradient(90deg,${COLORS.blueLight},${COLORS.blueMid},${COLORS.blueLight})`, zIndex: 0 }} />}
//           {steps.map((s) => (
//             <div key={s.num} style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
//               <div style={{ width: isMobile ? 56 : 72, height: isMobile ? 56 : 72, borderRadius: "50%", background: COLORS.blue, color: "#fff", fontSize: isMobile ? 20 : 24, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", border: "4px solid #fff", boxShadow: "0 4px 16px rgba(26,86,219,.3)" }}>
//                 {s.num}
//               </div>
//               <h4 style={{ fontSize: isMobile ? 14 : 16, fontWeight: 700, marginBottom: 8, color: COLORS.dark }}>{s.title}</h4>
//               <p style={{ fontSize: 13, color: COLORS.gray, lineHeight: 1.6 }}>{s.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Testimonials() {
//   const isMobile = useIsMobile();
//   const reviews = [
//     { text: "DocDor completely transformed my clinic management. We used to rely on manual registers, but now everything is digital and organized. My patients love it too.", name: "Dr. Sandeep Malik", role: "Cardiologist, Delhi", initials: "SM", avatarBg: COLORS.blue },
//     { text: "We manage all 3 of our branches from one platform. Staff scheduling, billing, inventory — the Management App has made everything so much easier.", name: "Yadav Clinics", role: "Multi-branch Clinic, Mumbai", initials: "YC", avatarBg: COLORS.teal },
//     { text: "I can now book doctors from home. My reports are saved in the app so I don't need to visit the hospital again. Very convenient for the whole family.", name: "Shubham Verma", role: "Patient User, Noida", initials: "SV", avatarBg: COLORS.purple },
//   ];

//   return (
//     <section style={{ padding: isMobile ? "60px 5%" : "100px 5%", background: COLORS.dark }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//         <div style={{ fontSize: 13, fontWeight: 700, color: "#60a5fa", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>What They Say</div>
//         <h2 style={{ fontSize: isMobile ? 28 : 40, fontWeight: 800, color: "#fff", marginBottom: isMobile ? 32 : 60, letterSpacing: "-1px" }}>Trusted by Doctors<br />& Patients</h2>
//         <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: isMobile ? 16 : 24 }}>
//           {reviews.map((r) => (
//             <div key={r.name} style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 16, padding: isMobile ? 20 : 28 }}>
//               <div style={{ color: "#fbbf24", fontSize: 16, marginBottom: 12 }}>★★★★★</div>
//               <p style={{ fontSize: 14, color: "#cbd5e1", lineHeight: 1.7, marginBottom: 16 }}>"{r.text}"</p>
//               <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                 <div style={{ width: 40, height: 40, borderRadius: 10, background: r.avatarBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "#fff", flexShrink: 0 }}>{r.initials}</div>
//                 <div>
//                   <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{r.name}</div>
//                   <div style={{ fontSize: 12, color: "#64748b" }}>{r.role}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function CTA() {
//   const isMobile = useIsMobile();
//   return (
//     <section style={{ padding: isMobile ? "60px 5%" : "100px 5%", background: "linear-gradient(135deg,#1e40af,#1a56db,#0f766e)" }}>
//       <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
//         <h2 style={{ fontSize: isMobile ? 30 : 44, fontWeight: 800, color: "#fff", marginBottom: 16, letterSpacing: "-1px" }}>Start Today — It's Free!</h2>
//         <p style={{ fontSize: isMobile ? 15 : 18, color: "rgba(255,255,255,.8)", marginBottom: 36, lineHeight: 1.7 }}>
//           Thousands of doctors and patients are already on the platform. Join them and make healthcare easier for everyone.
//         </p>
//         <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
//           <button style={{ background: "#fff", color: COLORS.blue, border: "none", padding: "13px 28px", borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,.2)" }}>
//             🚀 Register for Free
//           </button>
//           <button style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,.4)", padding: "13px 28px", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
//             📞 Schedule a Demo
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Footer() {
//   const isMobile = useIsMobile();
//   const cols = [
//     { title: "Apps", links: ["Doctor App", "Management App", "Patient App", "Web Portal"] },
//     { title: "Company", links: ["About Us", "Careers", "Blog", "Press"] },
//     {
//       title: "Support",
//       links: [
//         { label: "Help Center", to: null },
//         { label: "Contact Us", to: null },
//         { label: "Privacy Policy", to: "/privacy-policy" },
//         { label: "Terms of Use", to: null },
//       ],
//     },
//   ];

//   return (
//     <footer style={{ background: "#0f172a", padding: isMobile ? "40px 5% 24px" : "60px 5% 30px", borderTop: "1px solid rgba(255,255,255,.06)" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//         <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "2fr 1fr 1fr 1fr", gap: isMobile ? 28 : 40, marginBottom: isMobile ? 32 : 48 }}>
//           <div style={{ gridColumn: isMobile ? "1 / -1" : "auto" }}>
//             <div style={{ fontSize: 24, fontWeight: 800, color: "#fff", marginBottom: 12 }}>
//               Doc<span style={{ color: "#60a5fa" }}>Dor</span>
//             </div>
//             <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, maxWidth: 260 }}>
//               India's most trusted healthcare management platform. An all-in-one solution for doctors, clinics, and patients.
//             </p>
//           </div>
//           {cols.map((col) => (
//             <div key={col.title}>
//               <h5 style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>{col.title}</h5>
//               <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
//                 {col.links.map((link) => {
//                   // Support both plain string links (no route yet) and { label, to } objects (routed links)
//                   const label = typeof link === "string" ? link : link.label;
//                   const to = typeof link === "string" ? null : link.to;
//                   const linkStyle = { fontSize: 14, color: "#64748b", textDecoration: "none" };

//                   return (
//                     <li key={label}>
//                       {to ? (
//                         <Link to={to} style={linkStyle}>{label}</Link>
//                       ) : (
//                         <a href="#" style={linkStyle}>{label}</a>
//                       )}
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           ))}
//         </div>
//         <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: 20, display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 12 : 0 }}>
//           <div style={{ fontSize: 13, color: "#475569" }}>© 2026 DocDor. All rights reserved. Made with ❤️ in India</div>
//           <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//             {["🔒 HIPAA Compliant", "🏥 ISO Certified", "⭐ 4.9 Rated"].map((badge) => (
//               <span key={badge} style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", color: "#94a3b8", fontSize: 11, padding: "4px 10px", borderRadius: 20 }}>{badge}</span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default function DoctorLanding() {
//   return (
//     <div style={{ fontFamily: "'Inter', sans-serif", color: COLORS.dark, background: COLORS.white, overflowX: "hidden" }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@700&display=swap');
//         * { margin: 0; padding: 0; box-sizing: border-box; }
//         @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.6;transform:scale(1.2)} }
//         @keyframes popIn { from { opacity:0; transform:scale(0.85); } to { opacity:1; transform:scale(1); } }
//         a:hover { color: #1a56db !important; }
//         button:hover { opacity: 0.92; transform: translateY(-1px); transition: all .2s; }
//       `}</style>
//       <Navbar />
//       <Hero />
//       <StatsBar />
//       <AppsSection />
//       <HowItWorks />
//       <Testimonials />
//       <CTA />
//       <Footer />
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import doctor1 from "../assests/docor1.jpg";
import doctor2 from "../assests/doctor 2.jpg";
import doctor3 from "../assests/doctor.jpg";

import management1 from "../assests/management.jpg";
import management2 from "../assests/management2.jpg";
import management3 from "../assests/management 3.jpg";

import user1 from "../assests/user.jpg";
import user2 from "../assests/user1.jpg";
import user3 from "../assests/user2.jpg";

const COLORS = {
  blue: "#1a56db",
  blueMid: "#3b82f6",
  blueLight: "#eff6ff",
  teal: "#0f766e",
  tealLight: "#f0fdfa",
  purple: "#7c3aed",
  purpleLight: "#f5f3ff",
  dark: "#0f172a",
  gray: "#64748b",
  light: "#f8fafc",
  white: "#ffffff",
  border: "#e2e8f0",
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${COLORS.border}`, padding: "0 5%", transition: "background 0.3s" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: COLORS.blue, letterSpacing: "-0.5px" }}>
            Doc<span style={{ color: COLORS.dark }}>Dor</span>
          </div>

          {isMobile ? (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }}
            >
              {[0, 1, 2].map((i) => (
                <span key={i} style={{ display: "block", width: 24, height: 2, background: COLORS.dark, borderRadius: 2, transition: "all 0.3s",
                  transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "scale(0)") : "none",
                }} />
              ))}
            </button>
          ) : (
            <>
              <ul style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0 }}>
                {["Home", "Apps", "Features", "Pricing", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" style={{ textDecoration: "none", color: COLORS.gray, fontSize: 14, fontWeight: 500 }}>{item}</a>
                  </li>
                ))}
              </ul>
              <button style={{ background: COLORS.blue, color: "#fff", border: "none", padding: "10px 24px", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                Get Started Free
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobile && menuOpen && (
          <div style={{ background: "#fff", borderTop: `1px solid ${COLORS.border}`, padding: "16px 5% 20px" }}>
            {["Home", "Apps", "Features", "Pricing", "Contact"].map((item) => (
              <a key={item} href="#" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "12px 0", textDecoration: "none", color: COLORS.dark, fontSize: 15, fontWeight: 500, borderBottom: `1px solid ${COLORS.border}` }}>
                {item}
              </a>
            ))}
            <button style={{ marginTop: 16, width: "100%", background: COLORS.blue, color: "#fff", border: "none", padding: "12px 24px", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
              Get Started Free
            </button>
          </div>
        )}
      </nav>
    </>
  );
}

function Hero() {
  const isMobile = useIsMobile();
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: isMobile ? "90px 5% 60px" : "100px 5% 60px", background: "linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 50%,#f0fdf4 100%)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 60, alignItems: "center", width: "100%" }}>
        <div style={{ textAlign: isMobile ? "center" : "left" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: COLORS.blueLight, color: COLORS.blue, padding: "6px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 20, border: "1px solid #bfdbfe" }}>
            <span style={{ width: 8, height: 8, background: COLORS.blueMid, borderRadius: "50%", display: "inline-block", animation: "pulse 2s infinite" }} />
            India&apos;s #1 Healthcare Platform
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? 36 : 52, lineHeight: 1.15, color: COLORS.dark, marginBottom: 20, letterSpacing: "-1px" }}>
            Smart Healthcare<br />
            <span style={{ color: COLORS.blue }}>Management</span><br />
            Platform
          </h1>
          <p style={{ fontSize: isMobile ? 16 : 18, color: COLORS.gray, lineHeight: 1.7, marginBottom: 36, maxWidth: isMobile ? "100%" : 480 }}>
            A complete ecosystem for doctors, clinics, and patients. Book appointments, manage records, and deliver care — all in one place.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: isMobile ? "center" : "flex-start" }}>
            <button style={{ background: COLORS.blue, color: "#fff", border: "none", padding: "14px 28px", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 15px rgba(26,86,219,.3)" }}>
              🚀 Get Started Now
            </button>
            <button style={{ background: "transparent", color: COLORS.dark, border: `2px solid ${COLORS.border}`, padding: "14px 28px", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
              📱 View Our Apps
            </button>
          </div>
        </div>

        {!isMobile && (
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: 20, right: -10, background: "#fff", borderRadius: 12, padding: "10px 16px", boxShadow: "0 8px 30px rgba(0,0,0,.15)", display: "flex", alignItems: "center", gap: 10, fontSize: 13, fontWeight: 600, color: COLORS.dark, zIndex: 2 }}>
              <span style={{ width: 32, height: 32, borderRadius: 8, background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>✅</span>
              Appointment Confirmed!
            </div>
            <div style={{ background: "#fff", borderRadius: 24, border: `8px solid ${COLORS.dark}`, boxShadow: "0 30px 80px rgba(0,0,0,.2)", overflow: "hidden", maxWidth: 280, margin: "0 auto" }}>
              <div style={{ background: "linear-gradient(180deg,#1a56db 0%,#1d4ed8 40%,#f0f9ff 40%)", padding: "24px 20px 20px" }}>
                <div style={{ color: "#fff", fontSize: 13, fontWeight: 600, marginBottom: 16, opacity: 0.9 }}>👋 Good Morning, Dr. Ahmed</div>
                <div style={{ color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Today&apos;s Schedule</div>
                <div style={{ color: "rgba(255,255,255,.7)", fontSize: 12, marginBottom: 20 }}>4 appointments remaining</div>
                {[
                  { initials: "SA", name: "Sara Ali", time: "10:30 AM · General", badge: "Confirmed", badgeBg: "#dcfce7", badgeColor: "#166534", avatarBg: COLORS.blue },
                  { initials: "MK", name: "M. Kamran", time: "11:15 AM · Follow-up", badge: "Pending", badgeBg: "#fef9c3", badgeColor: "#854d0e", avatarBg: COLORS.purple },
                ].map((appt) => (
                  <div key={appt.initials} style={{ background: "#fff", borderRadius: 14, padding: 14, marginBottom: 10, boxShadow: "0 2px 12px rgba(0,0,0,.08)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: appt.avatarBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#fff", flexShrink: 0 }}>
                        {appt.initials}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.dark }}>{appt.name}</div>
                        <div style={{ fontSize: 11, color: COLORS.gray }}>{appt.time}</div>
                      </div>
                      <span style={{ fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 6, background: appt.badgeBg, color: appt.badgeColor }}>{appt.badge}</span>
                    </div>
                  </div>
                ))}
                <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                  {[{ num: "24", lbl: "This Week" }, { num: "4.9", lbl: "Rating" }, { num: "98%", lbl: "On Time" }].map((s) => (
                    <div key={s.lbl} style={{ background: "#fff", borderRadius: 10, padding: 10, flex: 1, textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,.06)" }}>
                      <div style={{ fontSize: 18, fontWeight: 700, color: COLORS.blue }}>{s.num}</div>
                      <div style={{ fontSize: 10, color: COLORS.gray, marginTop: 2 }}>{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", bottom: 40, left: -20, background: "#fff", borderRadius: 12, padding: "10px 16px", boxShadow: "0 8px 30px rgba(0,0,0,.15)", display: "flex", alignItems: "center", gap: 10, fontSize: 13, fontWeight: 600, color: COLORS.dark, zIndex: 2 }}>
              <span style={{ width: 32, height: 32, borderRadius: 8, background: COLORS.blueLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>💊</span>
              Prescription Ready
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function StatsBar() {
  const isMobile = useIsMobile();
  const stats = [
    { num: "50K+", label: "Active Doctors" },
    { num: "2M+", label: "Patients Served" },
    { num: "99.9%", label: "Uptime Guarantee" },
    { num: "4.9★", label: "Average Rating" },
  ];
  return (
    <div style={{ background: COLORS.dark, padding: isMobile ? "32px 5%" : "40px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: isMobile ? 24 : 20 }}>
        {stats.map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: isMobile ? 28 : 36, fontWeight: 800, color: "#60a5fa", letterSpacing: "-1px" }}>{s.num}</div>
            <div style={{ fontSize: 13, color: "#94a3b8", marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Image Lightbox with Arrows ─────────────────────────────────────────────────
function ImageLightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);
  const isMobile = useIsMobile();

  const prev = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % images.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, images.length]);

  const arrowStyle = (side) => ({
    position: "absolute", top: "50%", transform: "translateY(-50%)",
    background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.3)",
    color: "#fff", fontSize: isMobile ? 18 : 22,
    width: isMobile ? 40 : 52, height: isMobile ? 40 : 52,
    borderRadius: "50%", cursor: "pointer", display: "flex",
    alignItems: "center", justifyContent: "center",
    backdropFilter: "blur(6px)", transition: "background 0.2s",
    [side]: isMobile ? 10 : 20,
  });

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9998,
        background: "rgba(0,0,0,0.90)", backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        animation: "popIn 0.2s ease",
      }}
    >
      <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", fontSize: 18, width: 40, height: 40, borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)", zIndex: 2 }}>✕</button>

      <button onClick={prev} style={arrowStyle("left")}>‹</button>

      <img
        src={images[current]}
        alt={`screenshot ${current + 1}`}
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: isMobile ? "85vw" : "80vw", maxHeight: isMobile ? "75vh" : "85vh", borderRadius: 12, objectFit: "contain", boxShadow: "0 32px 100px rgba(0,0,0,0.6)", animation: "popIn 0.2s ease", userSelect: "none" }}
      />

      <button onClick={next} style={arrowStyle("right")}>›</button>

      <div style={{ position: "absolute", bottom: 20, display: "flex", gap: 8, alignItems: "center" }}>
        {images.map((_, i) => (
          <div key={i} onClick={(e) => { e.stopPropagation(); setCurrent(i); }} style={{ width: i === current ? 24 : 8, height: 8, borderRadius: 4, background: i === current ? "#fff" : "rgba(255,255,255,0.35)", cursor: "pointer", transition: "all 0.3s ease" }} />
        ))}
      </div>

      <div style={{ position: "absolute", top: 18, left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 600, background: "rgba(0,0,0,0.4)", padding: "4px 14px", borderRadius: 20, backdropFilter: "blur(4px)", whiteSpace: "nowrap" }}>
        {current + 1} / {images.length}
      </div>
    </div>
  );
}

// ── Coming Soon Modal ──────────────────────────────────────────────────────────
function ComingSoonModal({ onClose }) {
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 16px" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", borderRadius: 24, padding: "40px 32px", maxWidth: 380, width: "100%", textAlign: "center", boxShadow: "0 24px 80px rgba(0,0,0,0.2)", animation: "popIn 0.25s ease" }}>
        <div style={{ fontSize: 52, marginBottom: 14 }}>🚀</div>
        <h3 style={{ fontSize: 22, fontWeight: 800, color: COLORS.dark, marginBottom: 8 }}>Coming Soon!</h3>
        <p style={{ fontSize: 15, color: COLORS.gray, lineHeight: 1.7, marginBottom: 6 }}>Our app is launching soon on</p>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: COLORS.blueLight, color: COLORS.blue, padding: "8px 20px", borderRadius: 30, fontSize: 14, fontWeight: 700, marginBottom: 24, border: `1px solid #bfdbfe` }}>
          <span style={{ fontSize: 18 }}>▶</span> Google Play Store
        </div>
        <p style={{ fontSize: 13, color: COLORS.gray, marginBottom: 28 }}>Stay tuned! We&apos;ll notify you as soon as it&apos;s live.</p>
        <button onClick={onClose} style={{ background: COLORS.blue, color: "#fff", border: "none", padding: "13px 36px", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer", width: "100%" }}>
          Got it! 👍
        </button>
      </div>
    </div>
  );
}

// ── Apps Section ───────────────────────────────────────────────────────────────
function AppsSection() {
  const [showModal, setShowModal] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const isMobile = useIsMobile();

  const apps = [
    {
      emoji: "🩺", tag: "Doctor App", tagBg: COLORS.blueLight, tagColor: COLORS.blue,
      title: "Doctor's Companion",
      desc: "Manage your practice from your phone. Appointments, patients, prescriptions — all in one touch.",
      features: ["Real-time appointment management", "Digital prescriptions & e-notes", "Patient history & records", "Earnings & analytics dashboard", "Video consultation support"],
      images: [doctor1, doctor2, doctor3],
      checkBg: COLORS.blue, iconBg: COLORS.blueLight, btnBg: COLORS.blue, accentColor: COLORS.blue,
      btnLabel: "Download Doctor App →",
    },
    {
      emoji: "🏥", tag: "Management App", tagBg: COLORS.tealLight, tagColor: COLORS.teal,
      title: "Clinic Manager",
      desc: "Streamline your entire clinic or hospital. Control staff, schedules, and financials in one place.",
      features: ["Multi-doctor clinic management", "Staff & role management", "Billing & invoice generation", "Inventory & pharmacy tracking", "Reports & revenue analytics"],
      images: [management1, management2, management3],
      checkBg: COLORS.teal, iconBg: COLORS.tealLight, btnBg: COLORS.teal, accentColor: COLORS.teal,
      btnLabel: "Download Management App →",
    },
    {
      emoji: "👤", tag: "User App", tagBg: COLORS.purpleLight, tagColor: COLORS.purple,
      title: "Patient Portal",
      desc: "Find the best doctors near you, book appointments, and track your health easily from home.",
      features: ["Find & book top doctors nearby", "Digital health records vault", "Appointment reminders & alerts", "Medicine reminders & tracking", "Family health management"],
      images: [user1, user2, user3],
      checkBg: COLORS.purple, iconBg: COLORS.purpleLight, btnBg: COLORS.purple, accentColor: COLORS.purple,
      btnLabel: "Download Patient App →",
    },
  ];

  return (
    <>
      {lightbox && <ImageLightbox images={lightbox.images} startIndex={lightbox.index} onClose={() => setLightbox(null)} />}
      {showModal && <ComingSoonModal onClose={() => setShowModal(false)} />}

      <section style={{ padding: isMobile ? "60px 5%" : "100px 5%", background: COLORS.light }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.blue, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Our Platform</div>
          <h2 style={{ fontSize: isMobile ? 28 : 40, fontWeight: 800, color: COLORS.dark, marginBottom: 16, letterSpacing: "-1px" }}>Three Powerful Apps,<br />One Ecosystem</h2>
          <p style={{ fontSize: isMobile ? 15 : 17, color: COLORS.gray, maxWidth: 560, lineHeight: 1.7, marginBottom: isMobile ? 36 : 60 }}>
            Whether you&apos;re a doctor, clinic manager, or patient — we have the perfect app for you.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: isMobile ? 20 : 28 }}>
            {apps.map((app) => (
              <div key={app.title} style={{ background: COLORS.white, borderRadius: 20, padding: isMobile ? "20px 20px 24px" : "28px 28px 32px", border: `1px solid ${COLORS.border}`, borderTop: `4px solid ${app.accentColor}`, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", gap: 6, marginBottom: 16, borderRadius: 12, overflow: "hidden" }}>
                  {app.images.map((src, i) => (
                    <img key={i} src={src} alt={`${app.title} screenshot ${i + 1}`}
                      onClick={() => setLightbox({ images: app.images, index: i })}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
                      style={{ width: "33.33%", height: isMobile ? 100 : 130, objectFit: "cover", borderRadius: 10, cursor: "pointer", transition: "transform 0.2s ease, box-shadow 0.2s ease" }}
                    />
                  ))}
                </div>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: app.iconBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 12 }}>{app.emoji}</div>
                <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 8, padding: "4px 10px", borderRadius: 6, background: app.tagBg, color: app.tagColor, alignSelf: "flex-start" }}>{app.tag}</span>
                <h3 style={{ fontSize: isMobile ? 18 : 22, fontWeight: 700, marginBottom: 8, color: COLORS.dark }}>{app.title}</h3>
                <p style={{ fontSize: 14, color: COLORS.gray, lineHeight: 1.7, marginBottom: 16 }}>{app.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                  {app.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: COLORS.dark }}>
                      <span style={{ width: 18, height: 18, borderRadius: 5, background: app.checkBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff", flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => setShowModal(true)} style={{ width: "100%", padding: 12, borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer", border: "none", background: app.btnBg, color: "#fff" }}>
                  {app.btnLabel}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function HowItWorks() {
  const isMobile = useIsMobile();
  const steps = [
    { num: 1, title: "Create Account", desc: "Sign up for free — as a doctor, clinic manager, or patient" },
    { num: 2, title: "Set Up Profile", desc: "Add your specialization, availability, and clinic details" },
    { num: 3, title: "Get Connected", desc: "Let patients discover you or invite them directly to your profile" },
    { num: 4, title: "Start Managing", desc: "Handle appointments, records, and payments seamlessly" },
  ];

  return (
    <section style={{ padding: isMobile ? "60px 5%" : "100px 5%", background: COLORS.white }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.blue, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Simple Process</div>
        <h2 style={{ fontSize: isMobile ? 28 : 40, fontWeight: 800, color: COLORS.dark, marginBottom: 12, letterSpacing: "-1px" }}>How It Works</h2>
        <p style={{ fontSize: isMobile ? 15 : 17, color: COLORS.gray, marginBottom: isMobile ? 36 : 60 }}>Start your healthcare journey in just 4 easy steps</p>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: isMobile ? 28 : 24, position: "relative" }}>
          {!isMobile && <div style={{ position: "absolute", top: 36, left: "12%", right: "12%", height: 2, background: `linear-gradient(90deg,${COLORS.blueLight},${COLORS.blueMid},${COLORS.blueLight})`, zIndex: 0 }} />}
          {steps.map((s) => (
            <div key={s.num} style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
              <div style={{ width: isMobile ? 56 : 72, height: isMobile ? 56 : 72, borderRadius: "50%", background: COLORS.blue, color: "#fff", fontSize: isMobile ? 20 : 24, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", border: "4px solid #fff", boxShadow: "0 4px 16px rgba(26,86,219,.3)" }}>
                {s.num}
              </div>
              <h4 style={{ fontSize: isMobile ? 14 : 16, fontWeight: 700, marginBottom: 8, color: COLORS.dark }}>{s.title}</h4>
              <p style={{ fontSize: 13, color: COLORS.gray, lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const isMobile = useIsMobile();
  const reviews = [
    { text: "DocDor completely transformed my clinic management. We used to rely on manual registers, but now everything is digital and organized. My patients love it too.", name: "Dr. Sandeep Malik", role: "Cardiologist, Delhi", initials: "SM", avatarBg: COLORS.blue },
    { text: "We manage all 3 of our branches from one platform. Staff scheduling, billing, inventory — the Management App has made everything so much easier.", name: "Yadav Clinics", role: "Multi-branch Clinic, Mumbai", initials: "YC", avatarBg: COLORS.teal },
    { text: "I can now book doctors from home. My reports are saved in the app so I don't need to visit the hospital again. Very convenient for the whole family.", name: "Shubham Verma", role: "Patient User, Noida", initials: "SV", avatarBg: COLORS.purple },
  ];

  return (
    <section style={{ padding: isMobile ? "60px 5%" : "100px 5%", background: COLORS.dark }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#60a5fa", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>What They Say</div>
        <h2 style={{ fontSize: isMobile ? 28 : 40, fontWeight: 800, color: "#fff", marginBottom: isMobile ? 32 : 60, letterSpacing: "-1px" }}>Trusted by Doctors<br />& Patients</h2>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: isMobile ? 16 : 24 }}>
          {reviews.map((r) => (
            <div key={r.name} style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 16, padding: isMobile ? 20 : 28 }}>
              <div style={{ color: "#fbbf24", fontSize: 16, marginBottom: 12 }}>★★★★★</div>
              <p style={{ fontSize: 14, color: "#cbd5e1", lineHeight: 1.7, marginBottom: 16 }}>"{r.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: r.avatarBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "#fff", flexShrink: 0 }}>{r.initials}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const isMobile = useIsMobile();
  return (
    <section style={{ padding: isMobile ? "60px 5%" : "100px 5%", background: "linear-gradient(135deg,#1e40af,#1a56db,#0f766e)" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: isMobile ? 30 : 44, fontWeight: 800, color: "#fff", marginBottom: 16, letterSpacing: "-1px" }}>Start Today — It&apos;s Free!</h2>
        <p style={{ fontSize: isMobile ? 15 : 18, color: "rgba(255,255,255,.8)", marginBottom: 36, lineHeight: 1.7 }}>
          Thousands of doctors and patients are already on the platform. Join them and make healthcare easier for everyone.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button style={{ background: "#fff", color: COLORS.blue, border: "none", padding: "13px 28px", borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,.2)" }}>
            🚀 Register for Free
          </button>
          <button style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,.4)", padding: "13px 28px", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
            📞 Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const isMobile = useIsMobile();
  const cols = [
    { title: "Apps", links: ["Doctor App", "Management App", "Patient App", "Web Portal"] },
    { title: "Company", links: ["About Us", "Careers", "Blog", "Press"] },
    {
      title: "Support",
      links: [
        { label: "Help Center", to: null },
        { label: "Contact Us", to: null },
        { label: "Privacy Policy", to: "/privacy-policy" },
        { label: "Terms of Use", to: null },
      ],
    },
  ];

  return (
    <footer style={{ background: "#0f172a", padding: isMobile ? "40px 5% 24px" : "60px 5% 30px", borderTop: "1px solid rgba(255,255,255,.06)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "2fr 1fr 1fr 1fr", gap: isMobile ? 28 : 40, marginBottom: isMobile ? 32 : 48 }}>
          <div style={{ gridColumn: isMobile ? "1 / -1" : "auto" }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#fff", marginBottom: 12 }}>
              Doc<span style={{ color: "#60a5fa" }}>Dor</span>
            </div>
            <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, maxWidth: 260 }}>
              India&apos;s most trusted healthcare management platform. An all-in-one solution for doctors, clinics, and patients.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h5 style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>{col.title}</h5>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((link) => {
                  // Support both plain string links (no route yet) and { label, to } objects (routed links)
                  const label = typeof link === "string" ? link : link.label;
                  const to = typeof link === "string" ? null : link.to;
                  const linkStyle = { fontSize: 14, color: "#64748b", textDecoration: "none" };

                  return (
                    <li key={label}>
                      {to ? (
                        <Link to={to} style={linkStyle}>{label}</Link>
                      ) : (
                        <a href="#" style={linkStyle}>{label}</a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: 20, display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 12 : 0 }}>
          <div style={{ fontSize: 13, color: "#475569" }}>© 2026 DocDor. All rights reserved. Made with ❤️ in India</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["🔒 HIPAA Compliant", "🏥 ISO Certified", "⭐ 4.9 Rated"].map((badge) => (
              <span key={badge} style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", color: "#94a3b8", fontSize: 11, padding: "4px 10px", borderRadius: 20 }}>{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function DoctorLanding() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: COLORS.dark, background: COLORS.white, overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.6;transform:scale(1.2)} }
        @keyframes popIn { from { opacity:0; transform:scale(0.85); } to { opacity:1; transform:scale(1); } }
        a:hover { color: #1a56db !important; }
        button:hover { opacity: 0.92; transform: translateY(-1px); transition: all .2s; }
      `}</style>
      <Navbar />
      <Hero />
      <StatsBar />
      <AppsSection />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
