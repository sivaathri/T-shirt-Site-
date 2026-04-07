import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import BrandBar from './components/BrandBar';
import StackingSection from './components/StackingSection';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import imgHer from './assets/img1.png';
import imgHim from './assets/5.png';
import imgHimHover from './assets/2.png';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar isScrolled={isScrolled} />
      <Sidebar />
      <main>
        <Hero />
        <BrandBar />
        
        {/* Stacking Sections as requested by user */}
        <div id="collections" className="relative bg-black">
          {/* FOR HIM - Top layer (Moves as normal scroll) */}
          <div className="h-[100vh] relative z-30">
            <StackingSection 
              title="FOR HIM" 
              image={imgHim}
              centerImage={imgHimHover}
              reversed={false}
              bgClass="bg-[#000000]"
              subTitle="Elevate your style with timeless elegance"
              highlight="LUXURY CHRONOGRAPHS"
              zIndex={30}
            />
          </div>

          {/* FOR HER - Middle layer (Revealed immediately as HIM moves up) */}
          <div className="h-[200vh] relative z-20 -mt-[100vh]">
            <StackingSection 
              title="FOR HER" 
              image={imgHer}
              reversed={true}
              bgClass="bg-[#1a1a1a]"
              textColor="text-white"
              subTitle="Graceful designs for every occasion"
              highlight="DIVINE COLLECTION"
              zIndex={20}
            />
          </div>
        </div>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="section-title">New Arrivals</h2>
            <ProductGrid />
          </div>
        </section>

        <section className="py-20 bg-[#F4F4F4]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="section-title">Trending Now</h2>
            <ProductGrid count={4} />
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
             <div className="flex flex-col md:flex-row gap-8 items-center bg-[#000000] text-white p-12 rounded-lg overflow-hidden relative">
                <div className="flex-1 space-y-4 z-10 transition-transform duration-700 hover:scale-[1.02]">
                  <h3 className="text-3xl font-serif text-accent">TRUSTED BY MILLIONS</h3>
                  <p className="text-gray-300 max-w-md">Experience excellence with official warranties and authentic timepieces from the world's leading brands.</p>
                  <button className="btn-primary mt-4">DISCOVER OUR HERITAGE</button>
                </div>
                <div className="flex-1 relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1508685096489-7as10d18a00?q=80&w=1827&auto=format&fit=crop" 
                    className="w-full h-80 object-cover rounded shadow-2xl transition-transform duration-700 group-hover:scale-110" 
                    alt="Heritage" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
             </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default App;
