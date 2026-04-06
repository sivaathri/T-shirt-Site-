import React from 'react';
import { motion } from 'framer-motion';

const StackingSection = ({ title, image, reversed, bgClass, subTitle, highlight, textColor = "text-white", zIndex }) => {
  return (
    <section 
      style={{ zIndex }}
      className={`sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden ${bgClass}`}
    >
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000 opacity-80" 
          alt={title} 
        />
        <div className={`absolute inset-0 bg-gradient-to-${reversed ? 'l' : 'r'} from-black/80 via-black/40 to-transparent`}></div>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col ${reversed ? 'items-end text-right' : 'items-start text-left'}`}>
        <motion.div 
          initial={{ opacity: 0, x: reversed ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={textColor}
        >
          <p className="text-accent font-semibold tracking-[0.5em] text-sm md:text-base mb-2">{highlight}</p>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif font-black tracking-tight leading-none mb-6">
            {title}
          </h2>
          <p className="max-w-md text-gray-300 font-sans tracking-widest text-sm md:text-lg mb-8 uppercase">
            {subTitle}
          </p>
          <button className={`px-10 py-4 border border-white text-white font-bold tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-500 rounded-full`}>
            EXPLORE COLLECTION
          </button>
        </motion.div>
      </div>

      {/* Adding a subtle border-t to create a visible layering effect when stacking */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 z-20"></div>
    </section>
  );
};

export default StackingSection;
