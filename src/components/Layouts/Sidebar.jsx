import React from "react";
import { navMenuGroups } from "./nav-menu-links";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function Sidebar({ collapsed, onToggle, currentPage, onPageChange }) {

  // Initialize state (using a Set for O(1) lookups)
  const [expandedItems, setExpandedItems] = React.useState(new Set([]));

  const toggleExpanded = (itemId) => {
    setExpandedItems((prev) => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(itemId)) {
        newExpanded.delete(itemId); 
      } else {
        newExpanded.add(itemId);    
      }
      return newExpanded;
    });
  };

  return (
    <div className={`${collapsed ? "w-24" : "w-72"} sidebar-theme`}>

      {/* ================= TOP SECTION (Ministry Logo) ================= */}
      <div className="p-6">
        <div className="flex items-center justify-center">
          {!collapsed ? (
            /* EXPANDED: Show Large Logo */
            <>
              <img src="/src/assets/images/Asset-8.svg" alt="Ministry of Finance" className="w-48 h-16 object-contain mx-auto block dark:hidden" />
              <img src="/src/assets/images/LOGO copy.png" alt="Ministry of Finance" className="w-48 h-16 object-contain mx-auto hidden dark:block" />
            </>
          ) : (
            /* COLLAPSED: Show Small Icon (FIXED WIDTH) */
            /* Changed w-48 to w-12 to fit inside the w-24 sidebar */
            <>
              <img src="/src/assets/images/MoFEP_Logo__6_-removebg-preview.png" alt="Ministry of Finance" className="w-12 h-auto object-contain mx-auto block dark:hidden" />
              <img src="/src/assets/images/MoFEP_Logo__3_-removebg-preview.png" alt="Ministry of Finance" className="w-12 h-auto object-contain mx-auto hidden dark:block" />
            </>
          )}
        </div>
      </div>

      {/* ================= NAVIGATION ================= */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navMenuGroups.map((group, groupIndex) => (
          <div key={groupIndex}>

            {/* Group Title - Hide text when collapsed for cleaner look */}
            <h3 className={`px-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 mt-5 ${collapsed ? 'text-center' : ''}`}>
              {collapsed ? ' ' : group.title}
            </h3>

            {/* Group Items */}
            <div className="space-y-1">
              {group.items.map((item) => {
                const hasSubmenu = item.submenu && item.submenu.length > 0;
                const isActive = item.id === currentPage;
                const isExpanded = expandedItems.has(item.id);

                return (
                  <div key={item.id}>

                    {/* Main Item */}
                    <div
                      onClick={() => hasSubmenu ? toggleExpanded(item.id) : onPageChange(item.id)}
                      className={`
                        flex items-center ${collapsed ? 'justify-center' : 'justify-between'} p-4 rounded-xl transition-all duration-200 cursor-pointer select-none
                        ${isActive
                          ? 'bg-gradient-to-r from-[#2e5797] to-blue-500 text-white shadow-lg shadow-blue-200/50 dark:shadow-none'
                          : 'hover:bg-slate-100 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300'
                        }
                      `}
                    >
                      {/* Left Side: Icon + Label */}
                      <div className="flex items-center space-x-3">
                        <item.icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-slate-600 dark:text-slate-400'}`} />
                        {!collapsed && <span className="font-medium text-sm">{item.label}</span>}
                      </div>

                      {/* Right Side: Badge & Chevron (Hidden when collapsed) */}
                      {!collapsed && (
                        <div className="flex items-center gap-2">
                          {item.badge && (
                            <span className={`
                              px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm
                              ${isActive ? 'bg-white text-blue-600' : 'bg-red-500 text-white'}
                            `}>
                              {item.badge}
                            </span>
                          )}

                          {hasSubmenu && (
                            <ChevronDown
                              size={16}
                              className={`transition-transform duration-200 ${isActive ? 'text-white/80' : 'text-slate-400'} ${isExpanded ? 'rotate-180' : ''}`}
                            />
                          )}
                        </div>
                      )}
                    </div>

                    {/* Submenu Items - Only show if NOT collapsed */}
                    {!collapsed && hasSubmenu && isExpanded && (
                      <div className="mt-1 ml-4 pl-4 border-l border-slate-200 dark:border-slate-700 space-y-1 animate-in slide-in-from-top-2 duration-200">
                        {item.submenu.map((subItem) => {
                          const isSubActive = subItem.id === currentPage;

                          return (
                            <div
                              key={subItem.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                onPageChange(subItem.id);
                              }}
                              className={`
                                flex items-center justify-between px-4 py-2 text-sm rounded-lg transition-colors cursor-pointer
                                ${isSubActive
                                  ? 'text-white bg-gradient-to-r from-[#2e5797] to-blue-500 font-medium'
                                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/30'
                                }
                              `}
                            >
                              <span>{subItem.label}</span>
                              {subItem.badge && (
                                <span className="bg-slate-200 text-blue-600 dark:bg-slate-700 dark:text-blue-300 px-2 py-1 rounded text-[10px] font-semibold">
                                  {subItem.badge}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* ================= BOTTOM SECTION ================= */}
      {/* Optimization: Hide bottom logo when collapsed to prevent layout break */}
      {!collapsed && (
        <div className="p-4 border-t border-slate-200 dark:border-slate-700/50">
          <div className="flex justify-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <img src="/src/assets/images/peerblack.svg" alt="PEER Logo" className="w-48 h-16 object-contain mx-auto block dark:hidden" />
            <img src="/src/assets/images/PEER-white.png" alt="PEER Logo" className="w-48 h-16 object-contain mx-auto hidden dark:block" />
          </div>
        </div>
      )}
    </div>
  );
}