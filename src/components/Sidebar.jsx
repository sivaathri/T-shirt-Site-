import React from 'react';
import { ShoppingCart, Search, User, Menu, Home, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[150] hidden lg:block">
      <div className="bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-[40px] px-3 py-10 flex flex-col items-center gap-10">
        
        {/* Home */}
        <button className="group relative">
           <Home size={26} fill="black" className="text-black transition-transform group-hover:scale-110" />
           <span className="absolute right-full mr-6 bg-black text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase">
             Home
           </span>
        </button>

        {/* Menu */}
        <button className="group relative">
           <Menu size={28} strokeWidth={2.5} className="text-black transition-transform group-hover:scale-110" />
           <span className="absolute right-full mr-6 bg-black text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase">
             Menu
           </span>
        </button>

        {/* User */}
        <button className="group relative">
           <User size={26} strokeWidth={1.5} className="text-black transition-transform group-hover:scale-110" />
           <span className="absolute right-full mr-6 bg-black text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase">
             Profile
           </span>
        </button>

        {/* Search */}
        <button className="group relative">
           <Search size={26} strokeWidth={1.5} className="text-black transition-transform group-hover:scale-110" />
           <span className="absolute right-full mr-6 bg-black text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase">
             Search
           </span>
        </button>

        {/* Cart */}
        <button className="group relative">
           <ShoppingCart size={26} strokeWidth={1.5} className="text-black transition-transform group-hover:scale-110" />
           <span className="absolute right-full mr-6 bg-black text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase">
             Cart
           </span>
           <span className="absolute -top-1 -right-1 bg-primary text-white text-[8px] font-black w-4 h-4 flex items-center justify-center rounded-full">
             0
           </span>
        </button>

        {/* Chat - Custom styling for the blue accent */}
        <button className="group relative">
           <div className="relative">
             <MessageSquare size={26} strokeWidth={1.5} className="text-black transition-transform group-hover:scale-110" />
             <div className="absolute -bottom-0.5 -right-0.5 bg-[#4FC3F7] w-3 h-3 rounded-sm flex items-center justify-center shadow-sm">
                <div className="flex gap-[1px]">
                  <div className="w-[1px] h-[1px] bg-white rounded-full"></div>
                  <div className="w-[1px] h-[1px] bg-white rounded-full"></div>
                  <div className="w-[1px] h-[1px] bg-white rounded-full"></div>
                </div>
             </div>
           </div>
           <span className="absolute right-full mr-6 bg-black text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase">
             Chat
           </span>
        </button>

      </div>
    </div>
  );
};

export default Sidebar;
