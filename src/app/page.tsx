"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Star,
  ChevronLeft,
  ChevronRight,
  UtensilsCrossed,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import HeroScroll from "@/components/HeroScroll";

/* ─── Data ─── */
const menuCategories = [
  {
    name: "Starters",
    items: [
      { name: "Paneer Tikka", price: "₹249", desc: "Marinated cottage cheese grilled in tandoor", veg: true },
      { name: "Amritsari Fish", price: "₹349", desc: "Crispy battered river fish with mint chutney", veg: false },
      { name: "Dahi Ke Kebab", price: "₹199", desc: "Creamy yogurt kebabs with cashew crumble", veg: true },
      { name: "Chicken Malai Tikka", price: "₹299", desc: "Cream-marinated chicken, charcoal kissed", veg: false },
    ],
  },
  {
    name: "Mains",
    items: [
      { name: "Chole Bhature", price: "₹199", desc: "Our signature! Fluffy bhature with spiced chickpeas", veg: true },
      { name: "Kadhi Chawal", price: "₹179", desc: "Grandma's yogurt curry with pakoras & steamed rice", veg: true },
      { name: "Butter Chicken", price: "₹329", desc: "Tandoori chicken in rich tomato-butter gravy", veg: false },
      { name: "Dal Makhani", price: "₹249", desc: "24-hour slow-cooked black lentils with cream", veg: true },
    ],
  },
  {
    name: "Breads",
    items: [
      { name: "Garlic Naan", price: "₹69", desc: "Soft tandoori bread with fresh garlic & butter", veg: true },
      { name: "Lachha Paratha", price: "₹59", desc: "Flaky layered whole wheat bread", veg: true },
      { name: "Stuffed Kulcha", price: "₹89", desc: "Amritsari kulcha with spiced potato filling", veg: true },
      { name: "Missi Roti", price: "₹49", desc: "Gram flour flatbread with carom seeds", veg: true },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Gulab Jamun", price: "₹129", desc: "Soft milk dumplings soaked in rose syrup", veg: true },
      { name: "Phirni", price: "₹149", desc: "Chilled ground rice pudding in earthen pots", veg: true },
      { name: "Jalebi with Rabri", price: "₹159", desc: "Crispy spirals with thick clotted cream", veg: true },
      { name: "Kulfi Falooda", price: "₹179", desc: "Traditional Indian ice cream with vermicelli", veg: true },
    ],
  },
];

const specials = [
  { name: "Thali Royale", desc: "A grand platter of 12 items", price: "₹499", badge: "Chef's Pick" },
  { name: "Tandoori Platter", desc: "Assorted kebabs for 2", price: "₹599", badge: "Bestseller" },
  { name: "Lassi Tower", desc: "Three flavors stacked tall", price: "₹199", badge: "Insta Hit" },
  { name: "Bhature Bonanza", desc: "3 bhature with 2 curries", price: "₹299", badge: "Value Deal" },
  { name: "Pind da Feast", desc: "Family platter for 4", price: "₹999", badge: "Weekend Special" },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2070&auto=format&fit=crop",
    alt: "Chole Bhature Feast",
    span: "col-span-1 md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    alt: "Restaurant Ambience",
    span: "col-span-1 md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1585937421612-70a008356f36?q=80&w=2070&auto=format&fit=crop",
    alt: "Spices & Ingredients",
    span: "col-span-1 md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop",
    alt: "Tandoori Delights",
    span: "col-span-1 md:col-span-1 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop",
    alt: "Rich Curries",
    span: "col-span-1 md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=2017&auto=format&fit=crop",
    alt: "Sweet Endings",
    span: "col-span-1 md:col-span-2 md:row-span-1",
  },
];

/* ─── Gallery ─── */
function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-teal-dark texture-plaster relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 text-teal-dark -translate-y-[1px]">
        <svg viewBox="0 0 1200 40" className="w-full rotate-180" preserveAspectRatio="none">
          <path
            d="M0,40 L0,20 Q30,0 60,20 Q90,40 120,20 Q150,0 180,20 Q210,40 240,20 Q270,0 300,20 Q330,40 360,20 Q390,0 420,20 Q450,40 480,20 Q510,0 540,20 Q570,40 600,20 Q630,0 660,20 Q690,40 720,20 Q750,0 780,20 Q810,40 840,20 Q870,0 900,20 Q930,40 960,20 Q990,0 1020,20 Q1050,40 1080,20 Q1110,0 1140,20 Q1170,40 1200,20 L1200,40 Z"
            fill="#1a5c5a"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="The Feast Gallery" subtitle="A glimpse through our Jharokha" light />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[250px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className={`relative group rounded-3xl overflow-hidden cursor-pointer ${img.span}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 0.98 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-mustard font-[family-name:var(--font-rozha)] text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </p>
                <div className="w-12 h-1 bg-mustard mt-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom scallop */}
      <div className="absolute bottom-0 left-0 right-0 text-cream">
        <svg viewBox="0 0 1200 40" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,40 L0,20 Q30,0 60,20 Q90,40 120,20 Q150,0 180,20 Q210,40 240,20 Q270,0 300,20 Q330,40 360,20 Q390,0 420,20 Q450,40 480,20 Q510,0 540,20 Q570,40 600,20 Q630,0 660,20 Q690,40 720,20 Q750,0 780,20 Q810,40 840,20 Q870,0 900,20 Q930,40 960,20 Q990,0 1020,20 Q1050,40 1080,20 Q1110,0 1140,20 Q1170,40 1200,20 L1200,40 Z"
            fill="#fdf6e3"
          />
        </svg>
      </div>
    </section>
  );
}

const testimonials = [
  { name: "Priya S.", text: "Best Chole Bhature outside of Chandni Chowk! The flavors took me right back to my Nani's kitchen.", rating: 5 },
  { name: "Rahul M.", text: "The ambiance is incredible - those mosaic lamps and brass thalis make you feel like royalty. Butter chicken is divine!", rating: 5 },
  { name: "Ananya K.", text: "Came for the Instagram-worthy interiors, stayed for the Kadhi Chawal. Now it's my comfort food spot every weekend.", rating: 5 },
  { name: "Vikram J.", text: "The Thali Royale is absolutely worth it. 12 items, each one better than the last. Balle Balle!", rating: 4 },
];

/* ─── Components ─── */

function SteamEffect() {
  return (
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-1 pointer-events-none">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="steam-particle w-1 h-3 rounded-full bg-white/30"
          style={{ animationDelay: `${i * 0.5}s` }}
        />
      ))}
    </div>
  );
}

function MosaicDivider() {
  return <div className="mosaic-divider w-full" />;
}

function ArchFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`arch-clip overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

function SectionHeading({ title, subtitle, light = false }: { title: string; subtitle?: string; light?: boolean }) {
  return (
    <div className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`font-[family-name:var(--font-rozha)] text-4xl md:text-5xl lg:text-6xl mb-4 ${light ? "text-cream" : "text-teal-dark"
          }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-lg ${light ? "text-cream/80" : "text-brown-light"}`}
        >
          {subtitle}
        </motion.p>
      )}
      <div className="mt-6 mx-auto w-24">
        <MosaicDivider />
      </div>
    </div>
  );
}

/* ─── Navbar ─── */
import logoImg from "../assests/chaturebhaturetext.png";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Split links for desktop layout
  const leftLinks = ["About", "Menu", "Specials"];
  const rightLinks = ["Gallery", "Reviews"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-teal-dark/95 backdrop-blur-md border-b border-brass/20 h-20 md:h-24 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full relative">

          {/* Mobile Toggle (Left on mobile) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-cream p-2 z-50"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-cream transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-cream transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-cream transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>

          {/* Left Menu Items (Desktop) */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-end pr-12">
            {leftLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-cream/80 hover:text-mustard transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Center Logo */}
          <a href="#" className="flex-shrink-0 relative z-10 transform hover:scale-105 transition-transform duration-300">
            <div className="relative w-44 md:w-64 h-14 md:h-20">
              <Image
                src={logoImg}
                alt="Chature Bhature"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Right Menu Items (Desktop) */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-start pl-12">
            {rightLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-cream/80 hover:text-mustard transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-mustard text-teal-dark px-5 py-2 rounded-full font-semibold text-sm hover:bg-mustard-light transition-colors"
            >
              Reserve
            </a>
          </div>

          {/* Empty spacer for mobile balance */}
          <div className="w-10 md:hidden"></div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden absolute top-full left-0 right-0 bg-teal-dark/95 backdrop-blur-md border-b border-brass/20"
          >
            {[...leftLinks, ...rightLinks, "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="block py-4 px-6 text-cream/80 hover:text-mustard transition-colors text-sm font-medium tracking-wide uppercase border-b border-cream/10 text-center"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}



/* ─── About ─── */
function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream lotus-watermark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Our Story" subtitle="Where tradition meets a twist of chatur-ness" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Arch image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <ArchFrame className="w-72 h-96 md:w-80 md:h-[28rem]">
              <div className="w-full h-full bg-gradient-to-b from-teal via-teal-light to-teal-dark flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,160,23,0.15),transparent_70%)]" />
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-mustard/20 border border-brass/30 flex items-center justify-center">
                    <span className="text-6xl">🏠</span>
                  </div>
                  <p className="text-cream/80 text-sm px-6">The warmth of a Punjabi home</p>
                </div>
              </div>
            </ArchFrame>
          </motion.div>

          {/* Story text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-brown-light text-lg leading-relaxed">
              Born from a love affair with Punjab&apos;s rustic kitchens and highway dhabas,{" "}
              <span className="text-rust font-semibold">Chature Bhature</span> is where every meal
              is a homecoming.
            </p>
            <p className="text-brown-light leading-relaxed">
              We bring the soul of North India to your plate - from the sizzling tandoors of
              Amritsar to the sweet lanes of Old Delhi. Our chefs follow recipes passed down through
              generations, using hand-ground spices and time-honored techniques.
            </p>
            <p className="text-brown-light leading-relaxed">
              The name? A little <span className="text-rust font-semibold italic">chatur</span>{" "}
              (clever) twist on everyone&apos;s favorite comfort food. Because here, every bite is
              as smart as it is satisfying.
            </p>
            <div className="flex gap-6 pt-4">
              <div className="text-center">
                <span className="font-[family-name:var(--font-rozha)] text-3xl text-teal">15+</span>
                <p className="text-sm text-brown-light">Years of Flavor</p>
              </div>
              <div className="text-center">
                <span className="font-[family-name:var(--font-rozha)] text-3xl text-teal">50+</span>
                <p className="text-sm text-brown-light">Authentic Dishes</p>
              </div>
              <div className="text-center">
                <span className="font-[family-name:var(--font-rozha)] text-3xl text-teal">1M+</span>
                <p className="text-sm text-brown-light">Happy Tummies</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Menu ─── */
function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="relative py-20 md:py-28 bg-teal-dark texture-plaster">
      {/* Scalloped top */}
      <div className="absolute top-0 left-0 right-0 text-teal-dark -translate-y-[1px]">
        <svg viewBox="0 0 1200 40" className="w-full rotate-180" preserveAspectRatio="none">
          <path
            d="M0,40 L0,20 Q30,0 60,20 Q90,40 120,20 Q150,0 180,20 Q210,40 240,20 Q270,0 300,20 Q330,40 360,20 Q390,0 420,20 Q450,40 480,20 Q510,0 540,20 Q570,40 600,20 Q630,0 660,20 Q690,40 720,20 Q750,0 780,20 Q810,40 840,20 Q870,0 900,20 Q930,40 960,20 Q990,0 1020,20 Q1050,40 1080,20 Q1110,0 1140,20 Q1170,40 1200,20 L1200,40 Z"
            fill="#1a5c5a"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Our Menu" subtitle="Chatur choices for every craving" light />

        {/* Category tabs */}
        <div className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap">
          {menuCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${activeCategory === i
                ? "bg-mustard text-teal-dark"
                : "border border-cream/30 text-cream/70 hover:text-mustard hover:border-mustard/50"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {menuCategories[activeCategory].items.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-teal-light/20 border border-brass/20 rounded-2xl p-5 hover:border-brass/50 transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`w-3 h-3 rounded-sm border-2 ${item.veg ? "border-green-500" : "border-red-500"
                        }`}
                    >
                      <span
                        className={`block w-1.5 h-1.5 rounded-full m-[1px] ${item.veg ? "bg-green-500" : "bg-red-500"
                          }`}
                      />
                    </span>
                    <h3 className="text-cream font-semibold text-lg group-hover:text-mustard transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-cream/60 text-sm">{item.desc}</p>
                </div>
                <div className="relative">
                  <span className="font-[family-name:var(--font-rozha)] text-mustard text-xl">
                    {item.price}
                  </span>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <SteamEffect />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 gold-shimmer text-teal-dark px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            <ShoppingBag size={18} />
            Order Now
          </a>
        </motion.div>
      </div>

      {/* Scalloped bottom */}
      <div className="absolute bottom-0 left-0 right-0 text-cream">
        <svg viewBox="0 0 1200 40" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,40 L0,20 Q30,0 60,20 Q90,40 120,20 Q150,0 180,20 Q210,40 240,20 Q270,0 300,20 Q330,40 360,20 Q390,0 420,20 Q450,40 480,20 Q510,0 540,20 Q570,40 600,20 Q630,0 660,20 Q690,40 720,20 Q750,0 780,20 Q810,40 840,20 Q870,0 900,20 Q930,40 960,20 Q990,0 1020,20 Q1050,40 1080,20 Q1110,0 1140,20 Q1170,40 1200,20 L1200,40 Z"
            fill="#fdf6e3"
          />
        </svg>
      </div>
    </section>
  );
}

/* ─── Specials ─── */
function SpecialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
    }
  };

  return (
    <section id="specials" className="py-20 md:py-28 bg-cream lotus-watermark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Balle Balle Bites" subtitle="Our chef's most chatur creations" />

        {/* Scroll arrows */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 w-10 h-10 rounded-full bg-teal-dark text-cream flex items-center justify-center shadow-lg hover:bg-teal transition-colors hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 w-10 h-10 rounded-full bg-teal-dark text-cream flex items-center justify-center shadow-lg hover:bg-teal transition-colors hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>

          {/* Horizontal scroll cards */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory"
          >
            {specials.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="min-w-[260px] md:min-w-[300px] snap-center flex-shrink-0"
              >
                <div className="bg-teal-dark rounded-3xl overflow-hidden border border-brass/20 hover:border-brass/50 transition-all group">
                  {/* Card top with gradient */}
                  <div className="h-40 bg-gradient-to-br from-teal via-teal-light to-mustard/30 relative flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-cream/10 border border-brass/30 flex items-center justify-center">
                      <UtensilsCrossed className="text-mustard" size={36} />
                    </div>
                    {/* Badge */}
                    <span className="absolute top-3 right-3 bg-rust text-cream text-xs font-bold px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  {/* Card body */}
                  <div className="p-5">
                    <h3 className="font-[family-name:var(--font-rozha)] text-cream text-xl mb-1 group-hover:text-mustard transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-cream/60 text-sm mb-3">{item.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-[family-name:var(--font-rozha)] text-mustard text-2xl">
                        {item.price}
                      </span>

                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



/* ─── Testimonials ─── */
function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-cream lotus-watermark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="What They Say" subtitle="Real words from real foodies" />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-cream-dark/50 border border-brass/20 rounded-2xl p-6 hover:border-brass/40 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    size={16}
                    className={si < t.rating ? "text-mustard fill-mustard" : "text-brass/30"}
                  />
                ))}
              </div>
              <p className="text-brown-light leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center">
                  <span className="text-cream font-semibold text-sm">{t.name[0]}</span>
                </div>
                <span className="font-semibold text-brown">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact / Footer ─── */
function FooterSection() {
  return (
    <footer id="contact" className="bg-teal-dark texture-plaster relative pt-20 pb-28 md:pb-12">
      <div className="absolute top-0 left-0 right-0 text-teal-dark -translate-y-[1px]">
        <svg viewBox="0 0 1200 40" className="w-full rotate-180" preserveAspectRatio="none">
          <path
            d="M0,40 L0,20 Q30,0 60,20 Q90,40 120,20 Q150,0 180,20 Q210,40 240,20 Q270,0 300,20 Q330,40 360,20 Q390,0 420,20 Q450,40 480,20 Q510,0 540,20 Q570,40 600,20 Q630,0 660,20 Q690,40 720,20 Q750,0 780,20 Q810,40 840,20 Q870,0 900,20 Q930,40 960,20 Q990,0 1020,20 Q1050,40 1080,20 Q1110,0 1140,20 Q1170,40 1200,20 L1200,40 Z"
            fill="#1a5c5a"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-mustard flex items-center justify-center float-badge">
                <span className="font-[family-name:var(--font-rozha)] text-teal-dark text-2xl">CB</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-rozha)] text-cream text-xl">
                  Chature Bhature
                </h3>
                <p className="text-cream/60 text-sm">Punjab di Feel, Har Meal</p>
              </div>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              A modern tribute to traditional Punjabi hospitality. Every dish tells a story, every
              bite is a journey home.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-cream hover:bg-mustard hover:text-teal-dark transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-cream hover:bg-mustard hover:text-teal-dark transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-[family-name:var(--font-rozha)] text-cream text-xl mb-6">Visit Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-mustard mt-0.5 shrink-0" size={18} />
                <p className="text-cream/70 text-sm">
                  42, Sector 29, Gurugram
                  <br />
                  Haryana 122002
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-mustard mt-0.5 shrink-0" size={18} />
                <p className="text-cream/70 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-mustard mt-0.5 shrink-0" size={18} />
                <div className="text-cream/70 text-sm">
                  <p>Mon - Fri: 11:00 AM - 11:00 PM</p>
                  <p>Sat - Sun: 10:00 AM - 12:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-[family-name:var(--font-rozha)] text-cream text-xl mb-6">Quick Links</h4>
            <div className="space-y-3">
              {["About Us", "Full Menu", "Specials", "Gallery", "Reviews", "Reserve a Table"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                    className="block text-cream/70 text-sm hover:text-mustard transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        <MosaicDivider />

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/50 text-sm">
            &copy; 2026 Chature Bhature. All rights reserved.
          </p>
          <p className="text-cream/50 text-xs">
            Made with love and a whole lot of ghee
          </p>
        </div>
      </div>
    </footer>
  );
}



/* ─── Main Page ─── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroScroll />
        <AboutSection />
        <MenuSection />
        <SpecialsSection />
        <GallerySection />
        <TestimonialsSection />
      </main>
      <FooterSection />
    </>
  );
}
