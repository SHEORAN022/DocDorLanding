// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

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

// // ── Top Nav (simple, matches landing navbar style) ─────────────────────────────
// function PolicyNavbar() {
//   const isMobile = useIsMobile();
//   return (
//     <nav
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 100,
//         background: "rgba(255,255,255,0.97)",
//         backdropFilter: "blur(12px)",
//         borderBottom: `1px solid ${COLORS.border}`,
//         padding: "0 5%",
//       }}
//     >
//       <div
//         style={{
//           maxWidth: 1000,
//           margin: "0 auto",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           height: 64,
//         }}
//       >
//         <Link
//           to="/"
//           style={{
//             fontSize: 22,
//             fontWeight: 800,
//             color: COLORS.blue,
//             letterSpacing: "-0.5px",
//             textDecoration: "none",
//           }}
//         >
//           Doc<span style={{ color: COLORS.dark }}>Dor</span>
//         </Link>
//         <Link
//           to="/"
//           style={{
//             fontSize: isMobile ? 13 : 14,
//             fontWeight: 600,
//             color: COLORS.gray,
//             textDecoration: "none",
//             display: "flex",
//             alignItems: "center",
//             gap: 6,
//           }}
//         >
//            Back to Home
//         </Link>
//       </div>
//     </nav>
//   );
// }

// // ── Section heading helper ──────────────────────────────────────────────────────
// function SectionTitle({ children, isMobile }) {
//   return (
//     <h2
//       style={{
//         fontSize: isMobile ? 19 : 22,
//         fontWeight: 700,
//         color: COLORS.dark,
//         marginTop: isMobile ? 32 : 40,
//         marginBottom: 14,
//         paddingBottom: 10,
//         borderBottom: `2px solid ${COLORS.blueLight}`,
//         letterSpacing: "-0.3px",
//       }}
//     >
//       {children}
//     </h2>
//   );
// }

// function SubTitle({ children, isMobile, color }) {
//   return (
//     <h3
//       style={{
//         fontSize: isMobile ? 15 : 16,
//         fontWeight: 700,
//         color: color || COLORS.blue,
//         marginTop: 20,
//         marginBottom: 10,
//       }}
//     >
//       {children}
//     </h3>
//   );
// }

// function Para({ children, isMobile }) {
//   return (
//     <p
//       style={{
//         fontSize: isMobile ? 14 : 15,
//         color: COLORS.gray,
//         lineHeight: 1.8,
//         marginBottom: 14,
//       }}
//     >
//       {children}
//     </p>
//   );
// }

// function PolicyList({ items, isMobile, accent }) {
//   return (
//     <ul
//       style={{
//         listStyle: "none",
//         padding: 0,
//         margin: "0 0 14px",
//         display: "flex",
//         flexDirection: "column",
//         gap: 10,
//       }}
//     >
//       {items.map((item) => (
//         <li
//           key={item}
//           style={{
//             display: "flex",
//             alignItems: "flex-start",
//             gap: 10,
//             fontSize: isMobile ? 13.5 : 14.5,
//             color: COLORS.dark,
//             lineHeight: 1.6,
//           }}
//         >
//           <span
//             style={{
//               width: 18,
//               height: 18,
//               borderRadius: 5,
//               background: accent || COLORS.blue,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontSize: 10,
//               color: "#fff",
//               flexShrink: 0,
//               marginTop: 2,
//             }}
//           >
//             ✓
//           </span>
//           {item}
//         </li>
//       ))}
//     </ul>
//   );
// }

// const PrivacyPolicy = () => {
//   const isMobile = useIsMobile();

//   return (
//     <div
//       style={{
//         fontFamily: "'Inter', sans-serif",
//         background: "linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 35%,#f0fdf4 100%)",
//         minHeight: "100vh",
//       }}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@700&display=swap');
//         * { box-sizing: border-box; }
//         a:hover { color: #1a56db !important; }
//       `}</style>

//       <PolicyNavbar />

//       <div
//         style={{
//           maxWidth: 1000,
//           margin: "0 auto",
//           padding: isMobile ? "96px 5% 60px" : "120px 5% 90px",
//         }}
//       >
//         {/* Header card */}
//         <div
//           style={{
//             background: COLORS.white,
//             borderRadius: isMobile ? 18 : 24,
//             border: `1px solid ${COLORS.border}`,
//             borderTop: `4px solid ${COLORS.blue}`,
//             padding: isMobile ? "28px 22px" : "44px 48px",
//             boxShadow: "0 20px 60px rgba(15,23,42,0.06)",
//           }}
//         >
//           <div
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: 8,
//               background: COLORS.blueLight,
//               color: COLORS.blue,
//               padding: "6px 16px",
//               borderRadius: 20,
//               fontSize: 12,
//               fontWeight: 600,
//               marginBottom: 18,
//               border: "1px solid #bfdbfe",
//             }}
//           >
//             🔒 Legal
//           </div>

//           <h1
//             style={{
//               fontFamily: "'Playfair Display', serif",
//               fontSize: isMobile ? 28 : 40,
//               lineHeight: 1.2,
//               color: COLORS.dark,
//               marginBottom: 12,
//               letterSpacing: "-0.5px",
//             }}
//           >
//             Privacy Policy
//           </h1>
//           <p style={{ fontSize: isMobile ? 13 : 14, color: COLORS.gray, marginBottom: 24 }}>
//             <strong style={{ color: COLORS.dark }}>Last Updated:</strong> June 2026
//           </p>

//           <Para isMobile={isMobile}>
//             Welcome to DocDor. Your privacy is important to us. This Privacy Policy explains how
//             DocDor collects, uses, stores, and protects information when you use our healthcare
//             platform, including Doctor, Patient, Laboratory, Pharmacy, Diagnostic, Telemedicine,
//             and Management services.
//           </Para>

//           {/* 1. Information We Collect */}
//           <SectionTitle isMobile={isMobile}>1. Information We Collect</SectionTitle>

//           <SubTitle isMobile={isMobile} color={COLORS.blue}>Personal Information</SubTitle>
//           <PolicyList
//             isMobile={isMobile}
//             accent={COLORS.blue}
//             items={["Full Name", "Email Address", "Phone Number", "Date of Birth", "Gender", "Address", "Profile Photo"]}
//           />

//           <SubTitle isMobile={isMobile} color={COLORS.teal}>Medical Information</SubTitle>
//           <PolicyList
//             isMobile={isMobile}
//             accent={COLORS.teal}
//             items={["Health Records", "Prescriptions", "Lab Reports", "Medical History", "Symptoms and Diagnoses", "Consultation Notes"]}
//           />

//           <SubTitle isMobile={isMobile} color={COLORS.purple}>Doctor & Healthcare Provider Information</SubTitle>
//           <PolicyList
//             isMobile={isMobile}
//             accent={COLORS.purple}
//             items={["Professional Qualifications", "Medical Registration Details", "Availability Schedules", "Consultation Records"]}
//           />

//           <SubTitle isMobile={isMobile} color={COLORS.blue}>Pharmacy & Laboratory Information</SubTitle>
//           <PolicyList
//             isMobile={isMobile}
//             accent={COLORS.blue}
//             items={["Medicine Inventory", "Orders and Deliveries", "Diagnostic Tests", "Lab Reports"]}
//           />

//           {/* 2. How We Use Information */}
//           <SectionTitle isMobile={isMobile}>2. How We Use Information</SectionTitle>
//           <PolicyList
//             isMobile={isMobile}
//             accent={COLORS.teal}
//             items={[
//               "Provide healthcare services.",
//               "Manage appointments and consultations.",
//               "Generate prescriptions.",
//               "Process medicine orders.",
//               "Deliver diagnostic test reports.",
//               "Improve platform performance.",
//               "Customer support and communication.",
//               "Fraud prevention and security.",
//             ]}
//           />

//           {/* 3. Telemedicine */}
//           <SectionTitle isMobile={isMobile}>3. Telemedicine & Video Consultation</SectionTitle>
//           <Para isMobile={isMobile}>
//             DocDor may facilitate online consultations between patients and healthcare providers.
//             Consultation details, messages, prescriptions, and related records may be securely
//             stored for medical and legal purposes.
//           </Para>

//           {/* 4. AI Health Assistant */}
//           <SectionTitle isMobile={isMobile}>4. AI Health Assistant</SectionTitle>
//           <Para isMobile={isMobile}>
//             DocDor may provide AI-powered healthcare assistance for educational and informational
//             purposes. AI-generated responses should not replace professional medical advice,
//             diagnosis, or treatment.
//           </Para>

//           {/* 5. Sharing of Information */}
//           <SectionTitle isMobile={isMobile}>5. Sharing of Information</SectionTitle>
//           <Para isMobile={isMobile}>
//             We do not sell personal information. Information may be shared only:
//           </Para>
//           <PolicyList
//             isMobile={isMobile}
//             accent={COLORS.purple}
//             items={[
//               "With healthcare providers involved in your care.",
//               "With laboratories for diagnostic testing.",
//               "With pharmacies for medicine fulfillment.",
//               "With payment service providers.",
//               "When required by law or government authorities.",
//             ]}
//           />

//           {/* 6. Data Security */}
//           <SectionTitle isMobile={isMobile}>6. Data Security</SectionTitle>
//           <Para isMobile={isMobile}>
//             We implement industry-standard security measures including encryption, secure
//             servers, authentication controls, and access restrictions to protect user data.
//           </Para>

//           {/* 7. User Rights */}
//           <SectionTitle isMobile={isMobile}>7. User Rights</SectionTitle>
//           <PolicyList
//             isMobile={isMobile}
//             accent={COLORS.blue}
//             items={[
//               "Access your information.",
//               "Update profile details.",
//               "Request correction of inaccurate data.",
//               "Request deletion of your account where legally permitted.",
//             ]}
//           />

//           {/* 8. Data Retention */}
//           <SectionTitle isMobile={isMobile}>8. Data Retention</SectionTitle>
//           <Para isMobile={isMobile}>
//             Medical and healthcare records may be retained as required by applicable healthcare
//             laws, regulations, and operational needs.
//           </Para>

//           {/* 9. Children's Privacy */}
//           <SectionTitle isMobile={isMobile}>9. Children's Privacy</SectionTitle>
//           <Para isMobile={isMobile}>
//             Parents or legal guardians may manage healthcare information for minors using the
//             platform where applicable.
//           </Para>

//           {/* 10. Cookies & Analytics */}
//           <SectionTitle isMobile={isMobile}>10. Cookies & Analytics</SectionTitle>
//           <Para isMobile={isMobile}>
//             We may collect device information, app usage statistics, crash logs, and analytics
//             data to improve our services and user experience.
//           </Para>

//           {/* 11. Third-Party Services */}
//           <SectionTitle isMobile={isMobile}>11. Third-Party Services</SectionTitle>
//           <Para isMobile={isMobile}>
//             DocDor may integrate with payment gateways, communication services, cloud storage
//             providers, analytics platforms, and healthcare partners. These providers maintain
//             their own privacy policies.
//           </Para>

//           {/* 12. Changes to This Policy */}
//           <SectionTitle isMobile={isMobile}>12. Changes to This Policy</SectionTitle>
//           <Para isMobile={isMobile}>
//             We may update this Privacy Policy from time to time. Updated versions will be posted
//             within the application and website.
//           </Para>

//           {/* 13. Contact Us */}
//           <SectionTitle isMobile={isMobile}>13. Contact Us</SectionTitle>
//           <div
//             style={{
//               background: COLORS.blueLight,
//               borderRadius: 14,
//               border: "1px solid #bfdbfe",
//               padding: isMobile ? "16px 18px" : "20px 24px",
//               marginBottom: 8,
//             }}
//           >
//             <p style={{ fontSize: isMobile ? 14 : 15, color: COLORS.dark, fontWeight: 700, marginBottom: 8 }}>
//               DocDor Support Team
//             </p>
//             <p style={{ fontSize: isMobile ? 13.5 : 14.5, color: COLORS.gray, marginBottom: 4 }}>
//               📧 Email: support@docdor.com
//             </p>
//             <p style={{ fontSize: isMobile ? 13.5 : 14.5, color: COLORS.gray, marginBottom: 4 }}>
//               📞 Phone: +91 XXXXX XXXXX
//             </p>
//             <p style={{ fontSize: isMobile ? 13.5 : 14.5, color: COLORS.gray }}>
              
//             </p>
//           </div>

//           {/* Consent */}
//           <SectionTitle isMobile={isMobile}>Consent</SectionTitle>
//           <Para isMobile={isMobile}>
//             By using DocDor, you consent to the collection, storage, and use of your information
//             as described in this Privacy Policy.
//           </Para>

//           {/* Back to home button */}
//           <div style={{ marginTop: isMobile ? 28 : 36, textAlign: "center" }}>
//             <Link
//               to="/"
//               style={{
//                 display: "inline-block",
//                 background: COLORS.blue,
//                 color: "#fff",
//                 padding: isMobile ? "12px 28px" : "14px 32px",
//                 borderRadius: 10,
//                 fontSize: isMobile ? 14 : 15,
//                 fontWeight: 600,
//                 textDecoration: "none",
//                 boxShadow: "0 4px 15px rgba(26,86,219,.3)",
//               }}
//             >
//                Back to Home
//             </Link>
//           </div>
//         </div>

//         {/* Footer note */}
//         <div
//           style={{
//             textAlign: "center",
//             marginTop: isMobile ? 24 : 32,
//             fontSize: 12,
//             color: COLORS.gray,
//           }}
//         >
//           © 2026 DocDor. All rights reserved. Made with ❤️ in India
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrivacyPolicy;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

// ── Top Nav (simple, matches landing navbar style) ─────────────────────────────
function PolicyNavbar() {
  const isMobile = useIsMobile();
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${COLORS.border}`,
        padding: "0 5%",
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: COLORS.blue,
            letterSpacing: "-0.5px",
            textDecoration: "none",
          }}
        >
          Doc<span style={{ color: COLORS.dark }}>Dor</span>
        </Link>
        <Link
          to="/"
          style={{
            fontSize: isMobile ? 13 : 14,
            fontWeight: 600,
            color: COLORS.gray,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          ← Back to Home
        </Link>
      </div>
    </nav>
  );
}

// ── Section heading helper ──────────────────────────────────────────────────────
function SectionTitle({ children, isMobile }) {
  return (
    <h2
      style={{
        fontSize: isMobile ? 19 : 22,
        fontWeight: 700,
        color: COLORS.dark,
        marginTop: isMobile ? 32 : 40,
        marginBottom: 14,
        paddingBottom: 10,
        borderBottom: `2px solid ${COLORS.blueLight}`,
        letterSpacing: "-0.3px",
      }}
    >
      {children}
    </h2>
  );
}

function SubTitle({ children, isMobile, color }) {
  return (
    <h3
      style={{
        fontSize: isMobile ? 15 : 16,
        fontWeight: 700,
        color: color || COLORS.blue,
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      {children}
    </h3>
  );
}

function Para({ children, isMobile }) {
  return (
    <p
      style={{
        fontSize: isMobile ? 14 : 15,
        color: COLORS.gray,
        lineHeight: 1.8,
        marginBottom: 14,
      }}
    >
      {children}
    </p>
  );
}

function PolicyList({ items, isMobile, accent }) {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: "0 0 14px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {items.map((item) => (
        <li
          key={item}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            fontSize: isMobile ? 13.5 : 14.5,
            color: COLORS.dark,
            lineHeight: 1.6,
          }}
        >
          <span
            style={{
              width: 18,
              height: 18,
              borderRadius: 5,
              background: accent || COLORS.blue,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
              color: "#fff",
              flexShrink: 0,
              marginTop: 2,
            }}
          >
            ✓
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

const PrivacyPolicy = () => {
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 35%,#f0fdf4 100%)",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@700&display=swap');
        * { box-sizing: border-box; }
        a:hover { color: #1a56db !important; }
      `}</style>

      <PolicyNavbar />

      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: isMobile ? "96px 5% 60px" : "120px 5% 90px",
        }}
      >
        {/* Header card */}
        <div
          style={{
            background: COLORS.white,
            borderRadius: isMobile ? 18 : 24,
            border: `1px solid ${COLORS.border}`,
            borderTop: `4px solid ${COLORS.blue}`,
            padding: isMobile ? "28px 22px" : "44px 48px",
            boxShadow: "0 20px 60px rgba(15,23,42,0.06)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: COLORS.blueLight,
              color: COLORS.blue,
              padding: "6px 16px",
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 600,
              marginBottom: 18,
              border: "1px solid #bfdbfe",
            }}
          >
            🔒 Legal
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? 28 : 40,
              lineHeight: 1.2,
              color: COLORS.dark,
              marginBottom: 12,
              letterSpacing: "-0.5px",
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ fontSize: isMobile ? 13 : 14, color: COLORS.gray, marginBottom: 24 }}>
            <strong style={{ color: COLORS.dark }}>Last Updated:</strong> June 2026
          </p>

          <Para isMobile={isMobile}>
            Welcome to DocDor. Your privacy is important to us. This Privacy Policy explains how
            DocDor collects, uses, stores, and protects information when you use our healthcare
            platform, including Doctor, Patient, Laboratory, Pharmacy, Diagnostic, Telemedicine,
            and Management services.
          </Para>

          {/* 1. Information We Collect */}
          <SectionTitle isMobile={isMobile}>1. Information We Collect</SectionTitle>

          <SubTitle isMobile={isMobile} color={COLORS.blue}>Personal Information</SubTitle>
          <PolicyList
            isMobile={isMobile}
            accent={COLORS.blue}
            items={["Full Name", "Email Address", "Phone Number", "Date of Birth", "Gender", "Address", "Profile Photo"]}
          />

          <SubTitle isMobile={isMobile} color={COLORS.teal}>Medical Information</SubTitle>
          <PolicyList
            isMobile={isMobile}
            accent={COLORS.teal}
            items={["Health Records", "Prescriptions", "Lab Reports", "Medical History", "Symptoms and Diagnoses", "Consultation Notes"]}
          />

          <SubTitle isMobile={isMobile} color={COLORS.purple}>Doctor & Healthcare Provider Information</SubTitle>
          <PolicyList
            isMobile={isMobile}
            accent={COLORS.purple}
            items={["Professional Qualifications", "Medical Registration Details", "Availability Schedules", "Consultation Records"]}
          />

          <SubTitle isMobile={isMobile} color={COLORS.blue}>Pharmacy & Laboratory Information</SubTitle>
          <PolicyList
            isMobile={isMobile}
            accent={COLORS.blue}
            items={["Medicine Inventory", "Orders and Deliveries", "Diagnostic Tests", "Lab Reports"]}
          />

          {/* 2. How We Use Information */}
          <SectionTitle isMobile={isMobile}>2. How We Use Information</SectionTitle>
          <PolicyList
            isMobile={isMobile}
            accent={COLORS.teal}
            items={[
              "Provide healthcare services.",
              "Manage appointments and consultations.",
              "Generate prescriptions.",
              "Process medicine orders.",
              "Deliver diagnostic test reports.",
              "Improve platform performance.",
              "Customer support and communication.",
              "Fraud prevention and security.",
            ]}
          />

          {/* 3. Telemedicine */}
          <SectionTitle isMobile={isMobile}>3. Telemedicine & Video Consultation</SectionTitle>
          <Para isMobile={isMobile}>
            DocDor may facilitate online consultations between patients and healthcare providers.
            Consultation details, messages, prescriptions, and related records may be securely
            stored for medical and legal purposes.
          </Para>

          {/* 4. AI Health Assistant */}
          <SectionTitle isMobile={isMobile}>4. AI Health Assistant</SectionTitle>
          <Para isMobile={isMobile}>
            DocDor may provide AI-powered healthcare assistance for educational and informational
            purposes. AI-generated responses should not replace professional medical advice,
            diagnosis, or treatment.
          </Para>

          {/* 5. Sharing of Information */}
          <SectionTitle isMobile={isMobile}>5. Sharing of Information</SectionTitle>
          <Para isMobile={isMobile}>
            We do not sell personal information. Information may be shared only:
          </Para>
          <PolicyList
            isMobile={isMobile}
            accent={COLORS.purple}
            items={[
              "With healthcare providers involved in your care.",
              "With laboratories for diagnostic testing.",
              "With pharmacies for medicine fulfillment.",
              "With payment service providers.",
              "When required by law or government authorities.",
            ]}
          />

          {/* 6. Data Security */}
          <SectionTitle isMobile={isMobile}>6. Data Security</SectionTitle>
          <Para isMobile={isMobile}>
            We implement industry-standard security measures including encryption, secure
            servers, authentication controls, and access restrictions to protect user data.
          </Para>

          {/* 7. User Rights */}
          <SectionTitle isMobile={isMobile}>7. User Rights</SectionTitle>
          <PolicyList
            isMobile={isMobile}
            accent={COLORS.blue}
            items={[
              "Access your information.",
              "Update profile details.",
              "Request correction of inaccurate data.",
              "Request deletion of your account where legally permitted.",
            ]}
          />

          {/* 8. Data Retention */}
          <SectionTitle isMobile={isMobile}>8. Data Retention</SectionTitle>
          <Para isMobile={isMobile}>
            Medical and healthcare records may be retained as required by applicable healthcare
            laws, regulations, and operational needs.
          </Para>

          {/* 9. Children's Privacy */}
          <SectionTitle isMobile={isMobile}>9. Children&apos;s Privacy</SectionTitle>
          <Para isMobile={isMobile}>
            Parents or legal guardians may manage healthcare information for minors using the
            platform where applicable.
          </Para>

          {/* 10. Cookies & Analytics */}
          <SectionTitle isMobile={isMobile}>10. Cookies & Analytics</SectionTitle>
          <Para isMobile={isMobile}>
            We may collect device information, app usage statistics, crash logs, and analytics
            data to improve our services and user experience.
          </Para>

          {/* 11. Third-Party Services */}
          <SectionTitle isMobile={isMobile}>11. Third-Party Services</SectionTitle>
          <Para isMobile={isMobile}>
            DocDor may integrate with payment gateways, communication services, cloud storage
            providers, analytics platforms, and healthcare partners. These providers maintain
            their own privacy policies.
          </Para>

          {/* 12. Changes to This Policy */}
          <SectionTitle isMobile={isMobile}>12. Changes to This Policy</SectionTitle>
          <Para isMobile={isMobile}>
            We may update this Privacy Policy from time to time. Updated versions will be posted
            within the application and website.
          </Para>

          {/* 13. Contact Us */}
          <SectionTitle isMobile={isMobile}>13. Contact Us</SectionTitle>
          <div
            style={{
              background: COLORS.blueLight,
              borderRadius: 14,
              border: "1px solid #bfdbfe",
              padding: isMobile ? "16px 18px" : "20px 24px",
              marginBottom: 8,
            }}
          >
            <p style={{ fontSize: isMobile ? 14 : 15, color: COLORS.dark, fontWeight: 700, marginBottom: 8 }}>
              DocDor Support Team
            </p>
            <p style={{ fontSize: isMobile ? 13.5 : 14.5, color: COLORS.gray, marginBottom: 4 }}>
              📧 Email: support@docdor.com
            </p>
            <p style={{ fontSize: isMobile ? 13.5 : 14.5, color: COLORS.gray, marginBottom: 4 }}>
              📞 Phone: +91 XXXXX XXXXX
            </p>
            <p style={{ fontSize: isMobile ? 13.5 : 14.5, color: COLORS.gray }}>
              📍 Address: Zirakpur, Punjab, India
            </p>
          </div>

          {/* Consent */}
          <SectionTitle isMobile={isMobile}>Consent</SectionTitle>
          <Para isMobile={isMobile}>
            By using DocDor, you consent to the collection, storage, and use of your information
            as described in this Privacy Policy.
          </Para>

          {/* Back to home button */}
          <div style={{ marginTop: isMobile ? 28 : 36, textAlign: "center" }}>
            <Link
              to="/"
              style={{
                display: "inline-block",
                background: COLORS.blue,
                color: "#fff",
                padding: isMobile ? "12px 28px" : "14px 32px",
                borderRadius: 10,
                fontSize: isMobile ? 14 : 15,
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 4px 15px rgba(26,86,219,.3)",
              }}
            >
              ← Back to Home
            </Link>
          </div>
        </div>

        {/* Footer note */}
        <div
          style={{
            textAlign: "center",
            marginTop: isMobile ? 24 : 32,
            fontSize: 12,
            color: COLORS.gray,
          }}
        >
          © 2026 DocDor. All rights reserved. Made with ❤️ in India
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
