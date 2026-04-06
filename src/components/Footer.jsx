import React from 'react';
import { Link2, Camera, Send, Video, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t pt-20 pb-10 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-b pb-12 mb-12">
           <div className="max-w-md text-center md:text-left">
              <h4 className="text-3xl font-serif font-black tracking-tight mb-2">THE TIMEKEEPERS <span className="text-primary italic">SINCE 1946</span></h4>
              <p className="text-gray-400 text-sm font-medium tracking-wide">Subscribe to receive updates on new launches, exclusive offers, and the latest watch news.</p>
           </div>
           
           <div className="w-full max-w-lg relative group transition-transform duration-500 hover:scale-[1.02]">
              <input 
                type="email" 
                placeholder="YOUR EMAIL ADDRESS" 
                className="w-full bg-[#f8f8f8] border-none py-6 pl-8 pr-20 outline-none font-bold text-xs tracking-widest focus:ring-1 focus:ring-primary rounded-full transition-all"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-black text-white p-4 rounded-full hover:bg-primary transition-colors hover:scale-110 active:scale-95 duration-300">
                <Send size={20} />
              </button>
           </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20 text-center md:text-left">
           
           <div className="space-y-6">
              <h5 className="font-black text-xs tracking-[0.3em] text-[#222]">ONLINE SHOPPING</h5>
              <ul className="space-y-3 text-sm text-gray-500 font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">MEN SECTION</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">WOMEN SECTION</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">KIDS SECTION</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">SMART WATCHES</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">ACCESSORIES</a></li>
              </ul>
           </div>

           <div className="space-y-6">
              <h5 className="font-black text-xs tracking-[0.3em] text-[#222]">CUSTOMER POLICIES</h5>
              <ul className="space-y-3 text-sm text-gray-500 font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">REFUND POLICY</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">SHIPPING POLICY</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">TERMS & CONDITIONS</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">PRIVACY POLICY</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">CONTACT US</a></li>
              </ul>
           </div>

           <div className="space-y-6">
              <h5 className="font-black text-xs tracking-[0.3em] text-[#222]">USEFUL LINKS</h5>
              <ul className="space-y-3 text-sm text-gray-500 font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">MY ACCOUNT</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">WISH LIST</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">STORE LOCATOR</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">OFFICIAL SERVICE</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">ABOUT US</a></li>
              </ul>
           </div>

           <div className="space-y-6 col-span-2 lg:col-span-1">
              <h5 className="font-black text-xs tracking-[0.3em] text-[#222]">CORPORATE OFFICE</h5>
              <div className="space-y-4 text-sm text-gray-500 font-medium">
                <p className="leading-relaxed flex gap-3 text-left">
                  <MapPin size={18} className="text-primary flex-shrink-0" />
                  Swiss Time House, 4th Floor, <br /> Broadway, Ernakulam, <br /> Kerala - 682031
                </p>
                <p className="flex items-center gap-3"><Phone size={18} className="text-primary" /> +91 484 2351234</p>
                <p className="flex items-center gap-3"><Mail size={18} className="text-primary" /> info@swisstimehouse.com</p>
              </div>
           </div>

           <div className="col-span-full lg:col-span-1 space-y-6">
              <h5 className="font-black text-xs tracking-[0.3em] text-[#222] text-center lg:text-left">FOLLOW US</h5>
              <div className="flex justify-center lg:justify-start gap-4">
                 {[Link2, Camera, Send, Video].map((Icon, i) => (
                    <a key={i} href="#" className="bg-gray-100 p-4 rounded-full hover:bg-primary hover:text-white hover:scale-110 active:scale-95 transition-all duration-300">
                      <Icon size={20} />
                    </a>
                 ))}
              </div>
           </div>

        </div>

        {/* Copyright & SEO keywords cloud */}
        <div className="border-t pt-10 flex flex-col items-center">
           <div className="flex flex-wrap justify-center gap-4 text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-10 text-center">
              <span>CASIO WATCHES</span>
              <span>TISSOT WATCHES</span>
              <span>ROLEX WATCHES</span>
              <span>FOSSIL WATCHES</span>
              <span>SEIKO WATCHES</span>
              <span>CITIZEN WATCHES</span>
              <span>GARMIN WATCHES</span>
              <span>luxury watches india</span>
           </div>
           
           <p className="text-[10px] font-bold text-gray-400 tracking-[0.5em] text-center">
             &copy; 2026 SWISS TIME HOUSE. ALL RIGHTS RESERVED. DESIGNED FOR EXCELLENCE.
           </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
