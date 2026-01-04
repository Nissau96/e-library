import React from 'react'

export default function Sidebar() {
  return (
    <div className='sidebar-theme'>
        {/* Logo */}
        <div className="p-6 border-b border-slate-200/5 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
            <img src="/src/assets/images/MoFEP_Logo__3_-removebg-preview.png" alt="Logo" className="h-16 w-16"/>
        </div>
        </div>
    </div>
  )
}
