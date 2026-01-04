"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    THREE?: any;
    VANTA?: any;
  }
}

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || isInitialized.current) return;

    const initializeVanta = () => {
      if (!vantaRef.current || !window.VANTA || !window.THREE) return;

      try {
        if (vantaEffect.current) {
          vantaEffect.current.destroy();
        }

        vantaEffect.current = window.VANTA.RINGS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x000000,
          color: 0x00eaff
        });

        isInitialized.current = true;
      } catch (error) {
        console.error("Vanta initialization error:", error);
      }
    };

    // Load scripts dynamically
    const loadScripts = async () => {
      // Load Three.js first
      const threeScript = document.createElement('script');
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js';
      threeScript.async = true;

      // Load Vanta after Three.js
      const vantaScript = document.createElement('script');
      vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.rings.min.js';
      vantaScript.async = true;

      threeScript.onload = () => {
        document.head.appendChild(vantaScript);
      };

      vantaScript.onload = () => {
        // Small delay to ensure everything is loaded
        setTimeout(initializeVanta, 100);
      };

      document.head.appendChild(threeScript);
    };

    loadScripts();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
      isInitialized.current = false;
    };
  }, []);

  return (
    <div 
      ref={vantaRef}
      className="fixed inset-0 z-0"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1
      }}
    />
  );
}