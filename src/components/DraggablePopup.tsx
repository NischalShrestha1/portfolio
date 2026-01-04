"use client";

import { useRef, useState, useEffect } from "react";
import AboutPage from "../app/about/page.js";

export default function DraggablePopup({
  page,
  onClose,
}) {
  const [pos, setPos] = useState({ x: 320, y: 140 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const onMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    offset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!dragging) return;
    setPos({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  const onMouseUp = () => setDragging(false);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!dragging) return;
      setPos({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      });
    };

    const handleGlobalMouseUp = () => {
      setDragging(false);
    };

    if (dragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [dragging]);

  return (
    <div
      className="fixed inset-0 z-50"
    >
      <div
        style={{ 
          left: pos.x, 
          top: pos.y,
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #1a1a1a 75%, #0a0a0a 100%)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 0 30px rgba(139, 92, 246, 0.05)'
        }}
        className="
  absolute
  w-[90vw]
  max-w-[900px]
  md:w-[700px]
  rounded-3xl
  backdrop-blur-2xl
  transition-all duration-500
  hover:scale-[1.02]
"
      >
        {/* Header (drag handle) */}
        <div
          onMouseDown={onMouseDown}
          style={{
            background: '#000000',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
          }}
          className="cursor-move text-white px-6 py-4 flex justify-between rounded-t-3xl"
        >
          <span className="capitalize font-medium tracking-wide text-gray-100">{page}</span>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-all duration-300 text-xl leading-none hover:scale-125 hover:rotate-90"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div 
          className="p-6 text-gray-200 max-h-[500px] overflow-y-auto"
          style={{ 
            backdropFilter: 'blur(10px)', 
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(20,20,20,0.6) 100%)'
          }}
        >
          {page === "about" && <AboutPage />}
          {page === "portfolio" && <div className="text-center py-8"><p className="text-gray-400">Portfolio content coming soon...</p></div>}
          {page === "projects" && <div className="text-center py-8"><p className="text-gray-400">Projects content coming soon...</p></div>}
          {page === "contact" && <div className="text-center py-8"><p className="text-gray-400">Contact content coming soon...</p></div>}
          {page === "skills" && <div className="text-center py-8"><p className="text-gray-400">Skills content coming soon...</p></div>}
        </div>
      </div>
    </div>
  );
}
