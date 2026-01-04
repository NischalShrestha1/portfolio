"use client";

import Image from "next/image";
import { FaFolder, FaUser, FaEnvelope, FaCode, FaLightbulb } from "react-icons/fa";

const icons = [
  { name: "Portfolio", key: "portfolio", icon: FaFolder, color: "from-blue-500/20 to-blue-600/20" },
  { name: "About", key: "about", icon: FaUser, color: "from-purple-500/20 to-purple-600/20" },
  { name: "Contact", key: "contact", icon: FaEnvelope, color: "from-pink-500/20 to-pink-600/20" },
  { name: "Projects", key: "projects", icon: FaCode, color: "from-green-500/20 to-green-600/20" },
  { name: "Skills", key: "skills", icon: FaLightbulb, color: "from-orange-500/20 to-orange-600/20" },
];

export default function Sidebar({
  openPopup,
  activePopup,
}) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col items-center px-6 pt-10">
        <div className="space-y-6">
          {icons.map((icon, index) => {
            const isActive = activePopup === icon.key;
            const Icon = icon.icon;

            return (
              <button
                key={icon.key}
                onClick={() => openPopup(icon.key)}
                className="group flex flex-col items-center select-none transform transition-all duration-300 hover:scale-110"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon Container */}
                <div
                  className={`relative w-16 h-16 flex items-center justify-center
                  rounded-2xl transition-all duration-300 transform
                  ${isActive 
                    ? `bg-gradient-to-br ${icon.color} border border-white/30 shadow-lg shadow-white/10 scale-110` 
                    : 'bg-black/30 border border-white/10 hover:border-white/20 hover:bg-black/50 hover:shadow-lg hover:shadow-white/5'
                  }`}
                >
                  {/* Glow effect */}
                  {isActive && (
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${icon.color} blur-xl opacity-50`}></div>
                  )}
                  
                  {/* Icon */}
                  <Icon 
                    className={`text-2xl transition-all duration-300 relative z-10 ${
                      isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                    }`} 
                  />

                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -bottom-1 w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>

                {/* Label */}
                <span
                  className={`mt-3 text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-white/50 group-hover:text-white/80'
                  }`}
                >
                  {icon.name}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <div className="md:hidden bg-black/30 backdrop-blur-xl px-6 py-4 border-t border-white/10">
        <div className="grid grid-cols-5 gap-4 justify-items-center">
          {icons.map((icon) => {
            const isActive = activePopup === icon.key;
            const Icon = icon.icon;

            return (
              <button
                key={icon.key}
                onClick={() => openPopup(icon.key)}
                className="group flex flex-col items-center select-none transform transition-all duration-300 hover:scale-105"
              >
                {/* Icon Container */}
                <div
                  className={`relative w-12 h-12 flex items-center justify-center
                  rounded-xl transition-all duration-300
                  ${isActive 
                    ? `bg-gradient-to-br ${icon.color} border border-white/30 scale-110` 
                    : 'bg-black/30 border border-white/10 hover:bg-black/50'
                  }`}
                >
                  {/* Icon */}
                  <Icon 
                    className={`text-lg transition-all duration-300 ${
                      isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                    }`} 
                  />

                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -bottom-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
                  )}
                </div>

                {/* Label */}
                <span
                  className={`mt-1.5 text-xs font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-white/50'
                  }`}
                >
                  {icon.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
