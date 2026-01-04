"use client";

import "./globals.css";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import VantaBackground from "../components/VantaBackground";
import DraggablePopup from "../components/DraggablePopup";

export default function RootLayout({ children }) {
  const [activePopup, setActivePopup] = useState(null);

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-black text-white overflow-hidden">

        <VantaBackground />

        <div className="relative flex flex-1 z-10">
          <Sidebar
            openPopup={setActivePopup}
            activePopup={activePopup}
          />

          <main className="flex-1 p-8">
            {children}
          </main>
        </div>

        <Footer />

        {activePopup && (
          <DraggablePopup
            page={activePopup}
            onClose={() => setActivePopup(null)}
          />
        )}

      </body>
    </html>
  );
}
