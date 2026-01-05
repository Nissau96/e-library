import React from 'react'

export default function Sidebar() {
  return (
    <div className='sidebar-theme'>
        {/* Logo */}
        <div className="p-6 border-b border-slate-200/5 dark:border-slate-700/50">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center shadow-lg">
            <img src="/src/assets/images/LOGO copy.png" alt="Logo" className="w-auto h-16"/>
            </div>
          </div>

          {/* Conditional Rendering */}
          {/* <div >
            
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Admin Panel</p>
          </div> */}
        </div>
         {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto"></nav>
          {/* User Profile */}
        <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2" alt="user" className="w-10 h-10 rounded-full ring-2 ring-blue-500" />
            <div className="flex-1 min-w-0">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 dark:text-white truncate">John Doe</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Administrator</p>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}
