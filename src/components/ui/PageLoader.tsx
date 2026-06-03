"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface PageLoaderProps {
  isLoading?: boolean;
}

export default function PageLoader({ isLoading }: PageLoaderProps = {}) {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Controlled mode: dismiss when isLoading prop becomes false
    if (isLoading !== undefined) {
      if (!isLoading) {
        setFadeOut(true);
        const t = setTimeout(() => setLoading(false), 700);
        return () => clearTimeout(t);
      }
      return;
    }

    // Auto mode: dismiss when window finishes loading
    const handleLoaded = () => {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setLoading(false), 700);
      }, 700);
    };

    if (document.readyState === "complete") {
      handleLoaded();
    } else {
      window.addEventListener("load", handleLoaded);
      return () => window.removeEventListener("load", handleLoaded);
    }
  }, [isLoading]);

  if (!loading) return null;


  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#E41C4C",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "auto",
        transition: "opacity 0.7s ease",
      }}
    >
      {/* Subtle radial glow behind logo */}
      <div
        style={{
          position: "absolute",
          width: 260,
          height: 260,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
          filter: "blur(30px)",
          animation: "glowPulse 2s ease-in-out infinite",
        }}
      />

      {/* Logo */}
      <div style={{ animation: "logoPop 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards", opacity: 0, position: "relative" }}>
        <Image
          src="/assets/dooinngs_d_logo.png"
          alt="Dooinngs"
          width={100}
          height={100}
          priority
          style={{ mixBlendMode: "multiply" }}
        />
      </div>

      {/* Brand name — inline color & opacity prevent black flash */}
      <p
        style={{
          marginTop: 16,
          color: "#ffffff",
          fontSize: 26,
          fontWeight: 800,
          letterSpacing: "0.1em",
          fontFamily: "sans-serif",
          textShadow: "0 2px 16px rgba(0,0,0,0.2)",
          animation: "fadeUp 0.5s ease 0.3s forwards",
          opacity: 0,
        }}
      >
        dooinngs
      </p>

      {/* Bouncing dots */}
      <div
        style={{
          display: "flex",
          gap: 8,
          marginTop: 36,
          animation: "fadeUp 0.5s ease 0.5s forwards",
          opacity: 0,
        }}
      >
        {[0, 0.2, 0.4].map((delay, i) => (
          <span
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.85)",
              display: "block",
              animation: `bounce 1.2s ease-in-out ${delay}s infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes logoPop {
          from { opacity: 0; transform: scale(0.5); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
          40%            { transform: translateY(-10px); opacity: 1; }
        }
        @keyframes glowPulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50%       { transform: scale(1.15); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
