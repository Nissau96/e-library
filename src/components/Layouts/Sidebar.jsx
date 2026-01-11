import React from "react";

export default function Sidebar() {
  return (
    <div className="w-72 sidebar-theme flex flex-col h-full bg-white dark:bg-slate-900 transition-colors duration-300">
      
      {/* ================= TOP SECTION (Ministry Logo) ================= */}
      <div className="p-6 border-b border-slate-200 dark:border-slate-700/50">
        <div className="flex items-center justify-center">
          
          {/* 1. Light Mode Logo (Visible by default, hidden in dark mode) */}
          <img
            src="/src/assets/images/Asset-8.svg"
            alt="Ministry of Finance"
            className="w-48 h-16 object-contain mx-auto block dark:hidden" 
          />

          {/* 2. Dark Mode Logo (Hidden by default, visible in dark mode) */}
          <img
            src="/src/assets/images/LOGO copy.png"
            alt="Ministry of Finance"
            className="w-48 h-16 object-contain mx-auto hidden dark:block" 
          />
          
        </div>
      </div>

      {/* ================= NAVIGATION ================= */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {/* Nav items go here */}
      </nav>

      {/* ================= BOTTOM SECTION (PEER Logo) ================= */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-700/50">
        <div className="flex justify-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
           
           {/* 1. Light Mode PEER Logo */}
           <img 
             src="/src/assets/images/peerblack.svg" 
             alt="PEER Logo" 
             className="w-48 h-16 object-contain mx-auto block dark:hidden"
           />

           {/* 2. Dark Mode PEER Logo */}
           <img 
             src="/src/assets/images/PEER-white.png" 
             alt="PEER Logo" 
             className="w-48 h-16 object-contain mx-auto hidden dark:block"
           />

        </div>
      </div>
    </div>
  );
}