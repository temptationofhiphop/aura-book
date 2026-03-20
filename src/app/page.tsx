"use client";

import { motion } from "motion/react";
import { ShoppingBag, Search, Menu, ArrowRight, BookOpen, Star, Instagram, Twitter, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const books = [
  {
    id: 1,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: "$24.00",
    image: "https://picsum.photos/seed/book1/400/600",
    category: "Thriller"
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: "$28.00",
    image: "https://picsum.photos/seed/book2/400/600",
    category: "Self-Help"
  },
  {
    id: 3,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: "$22.00",
    image: "https://picsum.photos/seed/book3/400/600",
    category: "Fiction"
  },
  {
    id: 4,
    title: "Circe",
    author: "Madeline Miller",
    price: "$26.00",
    image: "https://picsum.photos/seed/book4/400/600",
    category: "Fantasy"
  }
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-6 flex items-center justify-between ${isScrolled ? "bg-white/80 backdrop-blur-md border-b border-black/5 py-4" : "bg-transparent"}`}>
        <div className="flex items-center gap-8">
          <a href="#" className="text-xl font-semibold tracking-tight">AURA</a>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium opacity-60">
            <a href="#" className="hover:opacity-100 transition-opacity">Shop</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Collections</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Journal</a>
            <a href="#" className="hover:opacity-100 transition-opacity">About</a>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors relative">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-black rounded-full border-2 border-white"></span>
          </button>
          <button className="md:hidden p-2 hover:bg-black/5 rounded-full transition-colors">
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-black/5 text-[10px] font-bold uppercase tracking-widest mb-6">Curated Selection</span>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-8">
            Literature for the <span className="italic font-serif font-light">Modern Soul</span>.
          </h1>
          <p className="text-lg md:text-xl opacity-60 max-w-md mb-10 leading-relaxed">
            Discover a handpicked collection of books that inspire, challenge, and transform. From timeless classics to contemporary masterpieces.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-[#1A1A1A] text-white rounded-full font-medium hover:bg-black transition-all flex items-center gap-2 group">
              Explore Collection
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-black/10 rounded-full font-medium hover:bg-black/5 transition-all">
              Our Story
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative aspect-[4/5] md:aspect-square"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent rounded-3xl -rotate-3"></div>
          <img
            src="https://picsum.photos/seed/aura-hero/1200/1500"
            alt="Minimalist book setup"
            className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block max-w-[200px]">
            <div className="flex items-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={12} fill="#1A1A1A" strokeWidth={0} />
              ))}
            </div>
            <p className="text-xs font-medium opacity-60">"The most beautiful bookshop experience I've ever had."</p>
            <p className="text-[10px] font-bold uppercase tracking-widest mt-2">— Emma R.</p>
          </div>
        </motion.div>
      </section>

      {/* Featured Books */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-4">New Arrivals</h2>
            <p className="opacity-60 max-w-md">Fresh perspectives and stories that just landed on our shelves this week.</p>
          </div>
          <a href="#" className="text-sm font-bold uppercase tracking-widest border-b border-black/20 pb-1 hover:border-black transition-all">View All</a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {books.map((book, idx) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl mb-6 bg-black/5">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ShoppingBag size={18} strokeWidth={1.5} />
                </button>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2">{book.category}</p>
              <h3 className="font-semibold text-lg mb-1 group-hover:underline underline-offset-4">{book.title}</h3>
              <p className="text-sm opacity-60 mb-2">{book.author}</p>
              <p className="font-medium">{book.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-[#1A1A1A] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px]"></div>
        </div>
        <div className="px-6 md:px-12 max-w-4xl mx-auto text-center relative z-10">
          <BookOpen size={48} strokeWidth={1} className="mx-auto mb-12 opacity-40" />
          <h2 className="text-3xl md:text-5xl font-serif italic font-light leading-tight mb-12">
            "A room without books is like a body without a soul."
          </h2>
          <p className="text-sm font-bold uppercase tracking-[0.3em] opacity-60">— Marcus Tullius Cicero</p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-black/5">
        <div className="bg-black/5 rounded-[40px] p-12 md:p-20 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Join the Aura Circle</h2>
          <p className="opacity-60 max-w-lg mx-auto mb-10">Receive curated reading lists, early access to limited editions, and invitations to our literary events.</p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-full bg-white border border-black/5 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
            />
            <button className="px-8 py-4 bg-[#1A1A1A] text-white rounded-full font-medium hover:bg-black transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="text-xl font-semibold tracking-tight mb-6 block">AURA</a>
            <p className="text-sm opacity-60 leading-relaxed mb-6">
              A curated bookshop for the curious mind. We believe in the power of stories to change the world.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 hover:bg-black/5 rounded-full transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 hover:bg-black/5 rounded-full transition-colors"><Twitter size={18} /></a>
              <a href="#" className="p-2 hover:bg-black/5 rounded-full transition-colors"><Mail size={18} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Shop</h4>
            <ul className="space-y-4 text-sm opacity-60">
              <li><a href="#" className="hover:opacity-100 transition-opacity">New Arrivals</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Best Sellers</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Limited Editions</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4 text-sm opacity-60">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Shipping</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Returns</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Visit</h4>
            <p className="text-sm opacity-60 leading-relaxed">
              123 Literary Lane<br />
              London, UK<br />
              Mon - Sat: 10am - 7pm
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5 gap-4">
          <p className="text-[10px] uppercase tracking-widest opacity-40">© 2026 Aura Books. All rights reserved.</p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest opacity-40">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
