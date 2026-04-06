import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, ChevronLeft, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] font-sans">
      
      {/* Top Announcement Bar */}
      <div className="bg-black text-white py-2 text-[10px] font-bold tracking-widest flex items-center justify-between px-6 md:px-12">
        <ChevronLeft size={14} className="cursor-pointer opacity-70 hover:opacity-100" />
        <div className="flex-1 text-center uppercase">
          SAVE MORE WITH CODE - <span className="text-primary italic">SHOPNOW</span>
        </div>
        <ChevronRight size={14} className="cursor-pointer opacity-70 hover:opacity-100" />
      </div>

      {/* Main Navbar */}
      <nav className={cn(
        "bg-white transition-all duration-300 border-b border-gray-100",
        isScrolled ? "py-2 shadow-md" : "py-4"
      )}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            
            {/* Left: MENU, MEN, WOMEN */}
            <div className="flex items-center space-x-10 flex-1">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="flex items-center gap-2 group"
              >
                <span className="font-extrabold text-[13px] tracking-widest text-[#1a1a1a]">MENU</span>
                <Menu size={20} className="text-[#1a1a1a]" strokeWidth={2.5} />
              </button>

              <div className="hidden lg:flex items-center space-x-8">
                <a href="#" className="font-extrabold text-[13px] tracking-widest text-[#1a1a1a] hover:text-primary transition-colors">MEN</a>
                <a href="#" className="font-extrabold text-[13px] tracking-widest text-[#1a1a1a] hover:text-primary transition-colors">WOMEN</a>
              </div>
            </div>

            {/* Center: Logo */}
            <div className="flex flex-col items-center flex-1">
              <a href="/" className="flex flex-col items-center">
                <div className="text-[28px] leading-none font-serif font-black tracking-[-0.02em] text-primary">
                  SWISS TIME HOUSE
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-[#E4211D]/80 -mt-1">
                  Since <span className="italic">1946</span>
                </div>
              </a>
            </div>

            {/* Right: Search and Cart */}
            <div className="flex items-center justify-end space-x-8 flex-1">
              <div className="hidden md:flex items-center bg-[#F9F9F9] border border-gray-200 rounded-full px-4 py-2 w-full max-w-[280px] group focus-within:border-primary transition-all">
                <Search size={18} className="text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search our catalog" 
                  className="bg-transparent border-none outline-none text-xs w-full ml-3 placeholder-gray-400 font-medium"
                />
              </div>

              <div className="flex items-center space-x-6">
                <button className="flex items-center gap-3 group">
                   <ShoppingCart size={22} className="text-[#1a1a1a] group-hover:text-primary transition-colors" />
                   <span className="font-bold text-[13px] tracking-widest text-[#1a1a1a]">₹ 0</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </nav>

      {/* Side drawer for mobile menu (keeping this for functionality) */}
      <div className={cn(
        "fixed inset-0 bg-black/50 z-[200] backdrop-blur-sm transition-opacity duration-300",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )} onClick={() => setIsMenuOpen(false)}>
        <div className={cn(
          "absolute top-0 left-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 p-8 flex flex-col",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )} onClick={(e) => e.stopPropagation()}>
           <div className="mb-12">
              <div className="text-2xl font-serif font-black tracking-tighter text-primary">
                SWISS TIME HOUSE
              </div>
              <div className="text-[10px] font-bold text-primary/60">SINCE 1946</div>
           </div>
           
           <div className="flex flex-col space-y-8 text-sm font-black tracking-[0.2em]">
              <a href="#" className="hover:text-primary transition-colors border-b pb-4">MEN SECTION</a>
              <a href="#" className="hover:text-primary transition-colors border-b pb-4">WOMEN SECTION</a>
              <a href="#" className="hover:text-primary transition-colors border-b pb-4">NEW ARRIVALS</a>
              <a href="#" className="hover:text-primary transition-colors border-b pb-4">BRANDS</a>
           </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
