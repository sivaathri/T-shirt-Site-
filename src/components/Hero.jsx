import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const banners = [
  {
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1974&auto=format&fit=crop",
    title: "WEAR YOUR STORY",
    sub: "NEW SEASON GRAPHIC TEES",
    accent: "EXCLUSIVELY AT SWISS HOUSE",
    link: "SHOP NOW"
  },
  {
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1999&auto=format&fit=crop",
    title: "PREMIUM COMFORT",
    sub: "CRAFTED FOR EVERYDAY STYLE",
    accent: "ICONIC COLLECTIONS",
    link: "EXPLORE TEES"
  },
  {
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1958&auto=format&fit=crop",
    title: "FRESH ARRIVALS",
    sub: "PREMIUM WOMEN'S COLLECTION",
    accent: "MODERN ESSENTIALS",
    link: "SHOP WOMEN'S"
  }
];

const Hero = () => {
  return (
    <section className="h-[90vh] md:h-screen w-full relative group overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1500}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full w-full"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className="relative h-full w-full flex items-center justify-center">
                
                {/* Background Image with Zoom effect */}
                <div className="absolute inset-0">
                  <img 
                    src={banner.image} 
                    className={`w-full h-full object-cover transition-transform duration-[4000ms] ease-out ${isActive ? 'scale-110' : 'scale-100'}`}
                    alt={banner.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
                  <div className="flex flex-col items-start space-y-6">
                    <motion.p 
                      initial={{ opacity: 0, x: -30 }}
                      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="text-accent font-semibold tracking-[0.4em] text-xs md:text-sm drop-shadow-md"
                    >
                      {banner.accent}
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight drop-shadow-2xl">
                        {banner.title.split(' ')[0]} <br className="hidden md:block" /> {banner.title.split(' ')[1]}
                      </h1>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                      className="text-white/80 font-sans tracking-[0.2em] text-sm md:text-lg max-w-lg font-medium"
                    >
                      {banner.sub}
                    </motion.p>

                    <motion.button
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary mt-4 tracking-widest text-sm shadow-xl"
                    >
                      {banner.link}
                    </motion.button>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
