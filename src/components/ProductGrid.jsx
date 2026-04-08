import React from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1888&auto=format&fit=crop",
    brand: "H&M",
    name: "Classic White Crew Neck",
    price: "₹999",
    original: "₹1,299",
    discount: "23% OFF"
  },
  {
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1887&auto=format&fit=crop",
    brand: "ZARA",
    name: "Oversized Graphic Tee",
    price: "₹1,499",
    original: "₹1,999",
    discount: "25% OFF"
  },
  {
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1770&auto=format&fit=crop",
    brand: "UNIQLO",
    name: "Supima Cotton V-Neck",
    price: "₹1,299",
    original: "₹1,500",
    discount: "13% OFF"
  },
  {
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=1780&auto=format&fit=crop",
    brand: "PUMA",
    name: "Essential Logo Tee",
    price: "₹1,199",
    original: "₹1,499",
    discount: "20% OFF"
  },
  {
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1887&auto=format&fit=crop",
    brand: "NIKE",
    name: "Dri-FIT Training Tee",
    price: "₹2,495",
    original: "₹2,999",
    discount: "17% OFF"
  },
  {
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1974&auto=format&fit=crop",
    brand: "ADIDAS",
    name: "Originals Trefoil Tee",
    price: "₹1,799",
    original: "₹2,199",
    discount: "18% OFF"
  },
  {
    image: "https://images.unsplash.com/photo-1484662020986-75935d2ebc66?q=80&w=1827&auto=format&fit=crop",
    brand: "LEVIS",
    name: "Vintage Relaxed Fit Tee",
    price: "₹1,599",
    original: "₹1,999",
    discount: "20% OFF"
  },
  {
    image: "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?q=80&w=1999&auto=format&fit=crop",
    brand: "GAP",
    name: "100% Cotton Pocket Tee",
    price: "₹1,099",
    original: "₹1,399",
    discount: "21% OFF"
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
