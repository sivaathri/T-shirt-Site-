import React from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1888&auto=format&fit=crop",
    brand: "CASIO",
    name: "Classic Chronograph MTP",
    price: "₹4,995",
    original: "₹5,500",
    discount: "9% OFF"
  },
  {
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1887&auto=format&fit=crop",
    brand: "TISSOT",
    name: "Tradition Powermatic 80",
    price: "₹68,500",
    original: "₹72,000",
    discount: "5% OFF"
  },
  {
    image: "https://images.unsplash.com/photo-1594533055237-458633384d43?q=80&w=1770&auto=format&fit=crop",
    brand: "FOSSIL",
    name: "Modern Machine",
    price: "₹12,495",
    original: "₹14,000",
    discount: "11% OFF"
  },
  {
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1780&auto=format&fit=crop",
    brand: "SEIKO",
    name: "Presage Cocktail Time",
    price: "₹42,000",
    original: "₹45,000",
    discount: "7% OFF"
  },
  {
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=1887&auto=format&fit=crop",
    brand: "GARMIN",
    name: "Fenix 7 Solar Sapphire",
    price: "₹92,990",
    original: "₹1,00,000",
    discount: "7% OFF"
  },
  {
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595dd?q=80&w=1974&auto=format&fit=crop",
    brand: "TITAN",
    name: "Edge Ceramic Black",
    price: "₹24,995",
    original: "₹28,000",
    discount: "11% OFF"
  },
  {
    image: "https://images.unsplash.com/photo-1508685096489-7as10d18a00?q=80&w=1827&auto=format&fit=crop",
    brand: "ROLEX",
    name: "Submariner Date 41mm",
    price: "₹12,45,000",
    original: "₹13,00,000",
    discount: "4% OFF"
  },
  {
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop",
    brand: "OMEGA",
    name: "Seamaster Aqua Terra",
    price: "₹5,42,000",
    original: "₹5,80,000",
    discount: "7% OFF"
  }
];

const ProductGrid = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
      {products.slice(0, count).map((product, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative flex flex-col bg-white p-4 hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden border border-gray-100"
        >
          {/* Badge */}
          <div className="absolute top-4 left-4 z-10 bg-primary text-white text-[10px] font-black px-2 py-1 tracking-widest rounded shadow-md">
            {product.discount}
          </div>

          <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
             <button className="p-2 bg-white rounded-full shadow-lg hover:bg-black hover:text-white transition-colors">
               <Heart size={18} />
             </button>
             <button className="p-2 bg-white rounded-full shadow-lg hover:bg-black hover:text-white transition-colors">
               <Eye size={18} />
             </button>
          </div>

          {/* Product Image */}
          <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded flex items-center justify-center p-2">
            <img 
               src={product.image} 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
               alt={product.name} 
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
            
            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] bg-black text-white text-xs font-bold tracking-[0.2em] py-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl flex items-center justify-center gap-2">
              <ShoppingCart size={14} /> ADD TO CART
            </button>
          </div>

          <div className="mt-auto space-y-1 text-center">
            <h4 className="text-gray-400 text-[10px] font-bold tracking-[0.3em] font-sans uppercase">{product.brand}</h4>
            <h3 className="text-black text-sm font-semibold truncate px-2 group-hover:text-primary transition-colors">{product.name}</h3>
            
            <div className="flex items-center justify-center gap-3 pt-2">
               <span className="text-black font-bold text-lg">{product.price}</span>
               <span className="text-gray-400 line-through text-xs font-medium">{product.original}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGrid;
