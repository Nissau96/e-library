import { Bell, Filter, Menu, Search, Settings, Sun } from 'lucide-react';
import React from 'react';

export default function Header() {
  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 darker:border-slate-700/50 px-6 py-4'>
        <div className="flex items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
                <button className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <Menu className='w-5 h-5' />
                </button>

                <div className="hidden md:block">
                    <h1 className="text-2xl font-black text-slate-800 dark:text-slate-100">
                      E-Library
                    </h1>
                    <p className='text-slate-800 dark:text-slate-300'>Comprehensive Document Library</p>
                </div>
            </div>

            {/* Center Section */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className='w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400' />
                <input type="text" name="search-bar" id="search-bar" placeholder="Search Anything ..." className="search-input" />
                <button className="inline-input-icon">
                  <Filter className='w-4 h-4'/>
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              <button className="nav-icon-btn">
                <Sun className='w-5 h-5' />
              </button>

              {/* Notifications */}
              <button className="relative nav-icon-btn">
                <Bell className='w-5 h-5' />
                <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                  3
                </span>
              </button>
              
              {/* Settings */}
              <button className="nav-icon-btn">
                <Settings className='w-5 h-5' />
              </button>

              {/* user profile */}
              <div className="flex items-center space-x-3 pl-3 border-l border-slate-200 dark:border-slate-700">
                <img src="https://via.placeholder.com/32" alt="User Profile" className="w-8 h-8 rounded-full ring-2 ring-blue-500" />
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    John Doe
                  </p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
