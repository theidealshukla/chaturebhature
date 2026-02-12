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
  { alt: "Chole Bhature", color: "from-amber-700 to-yellow-600" },
  { alt: "Butter Chicken", color: "from-red-700 to-orange-500" },
  { alt: "Kadhi Chawal", color: "from-yellow-600 to-amber-500" },
  { alt: "Tandoori Platter", color: "from-red-800 to-red-500" },
  { alt: "Brass Thali", color: "from-amber-600 to-yellow-400" },
  { alt: "Gulab Jamun", color: "from-rose-700 to-pink-500" },
];

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
        className={`font-[family-name:var(--font-rozha)] text-4xl md:text-5xl lg:text-6xl mb-4 ${
          light ? "text-cream" : "text-teal-dark"
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
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-teal-dark/95 backdrop-blur-md border-b border-brass/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-mustard flex items-center justify-center float-badge">
              <span className="font-[family-name:var(--font-rozha)] text-teal-dark text-lg md:text-xl">CB</span>
            </div>
            <span className="font-[family-name:var(--font-rozha)] text-cream text-lg md:text-xl hidden sm:block">
              Chature Bhature
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["About", "Menu", "Specials", "Gallery", "Reviews"].map((item) => (
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
              Reserve a Table
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-cream p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-cream transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-cream transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-cream transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden pb-4"
          >
            {["About", "Menu", "Specials", "Gallery", "Reviews", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-cream/80 hover:text-mustard transition-colors text-sm font-medium tracking-wide uppercase border-b border-cream/10"
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

/* ─── Hero ─── */
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-teal-dark texture-plaster">
      {/* Parallax background pattern */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #d4a017 1px, transparent 1px), radial-gradient(circle at 75% 75%, #d4a017 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />
      </motion.div>

      {/* Arch frame with food visual */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20 md:pt-0">
        {/* Decorative arch */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="w-64 h-80 md:w-80 md:h-96 arch-clip bg-gradient-to-b from-mustard/30 to-rust/20 p-1">
            <div className="w-full h-full arch-clip bg-gradient-to-b from-amber-700 via-orange-600 to-yellow-700 flex items-center justify-center relative overflow-hidden">
              {/* Food visual placeholder with warm glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-yellow-500 via-amber-600 to-orange-700 shadow-2xl flex items-center justify-center">
                  <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-brass-light/50 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-rozha)] text-cream text-3xl md:text-4xl text-center leading-tight">
                      Punjab<br />di Feel
                    </span>
                  </div>
                </div>
              </div>
              {/* Warm glow */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-60 h-20 bg-mustard/30 blur-3xl rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h1 className="font-[family-name:var(--font-rozha)] text-5xl md:text-7xl lg:text-8xl text-cream mb-4">
            <span className="text-rust-light">Punjab di Feel,</span>
            <br />
            <span className="text-mustard">Har Meal</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-cream/80 text-lg md:text-xl max-w-md mb-8"
        >
          Authentic North Indian flavors, served with nostalgia.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#menu"
            className="gold-shimmer text-teal-dark px-8 py-3.5 rounded-full font-semibold text-lg hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            <UtensilsCrossed size={20} />
            View Menu
          </a>
          <a
            href="#contact"
            className="border-2 border-cream/40 text-cream px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-cream/10 transition-colors inline-flex items-center gap-2"
          >
            <ShoppingBag size={20} />
            Order Online
          </a>
        </motion.div>

        {/* Logo stamp */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
          className="mt-12 w-20 h-20 rounded-full border-2 border-brass bg-teal-dark flex items-center justify-center float-badge"
        >
          <span className="font-[family-name:var(--font-rozha)] text-mustard text-2xl">CB</span>
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
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                activeCategory === i
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
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
                      className={`w-3 h-3 rounded-sm border-2 ${
                        item.veg ? "border-green-500" : "border-red-500"
                      }`}
                    >
                      <span
                        className={`block w-1.5 h-1.5 rounded-full m-[1px] ${
                          item.veg ? "bg-green-500" : "bg-red-500"
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
                      <button className="bg-mustard/20 text-mustard px-4 py-1.5 rounded-full text-sm font-medium hover:bg-mustard hover:text-teal-dark transition-colors">
                        Add to Cart
                      </button>
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

/* ─── Gallery ─── */
function GallerySection() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-teal-dark texture-plaster relative">
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`${i === 0 || i === 5 ? "row-span-2" : ""}`}
            >
              <ArchFrame className={`w-full ${i === 0 || i === 5 ? "h-80 md:h-[28rem]" : "h-40 md:h-52"}`}>
                <div className={`w-full h-full bg-gradient-to-br ${img.color} flex items-end justify-center relative group cursor-pointer`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  {/* Warm glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_center,rgba(212,160,23,0.2),transparent_70%)]" />
                  <span className="text-cream/90 font-medium text-sm pb-4 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.alt}
                  </span>
                </div>
              </ArchFrame>
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

/* ─── Mobile Bottom Bar ─── */
function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-teal-dark/95 backdrop-blur-md border-t border-brass/20">
      <div className="flex items-center justify-around py-3 px-4">
        <a
          href="#menu"
          className="flex flex-col items-center gap-1 text-cream/80 hover:text-mustard transition-colors"
        >
          <UtensilsCrossed size={20} />
          <span className="text-xs font-medium">Menu</span>
        </a>
        <a
          href="tel:+919876543210"
          className="flex flex-col items-center gap-1 text-cream/80 hover:text-mustard transition-colors"
        >
          <Phone size={20} />
          <span className="text-xs font-medium">Call</span>
        </a>
        <a
          href="#contact"
          className="flex items-center gap-2 bg-mustard text-teal-dark px-6 py-2.5 rounded-full font-semibold text-sm"
        >
          <ShoppingBag size={16} />
          Order
        </a>
        <a
          href="#contact"
          className="flex flex-col items-center gap-1 text-cream/80 hover:text-mustard transition-colors"
        >
          <MapPin size={20} />
          <span className="text-xs font-medium">Visit</span>
        </a>
        <a
          href="#contact"
          className="flex flex-col items-center gap-1 text-cream/80 hover:text-mustard transition-colors"
        >
          <Clock size={20} />
          <span className="text-xs font-medium">Hours</span>
        </a>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <SpecialsSection />
        <GallerySection />
        <TestimonialsSection />
      </main>
      <FooterSection />
      <MobileBottomBar />
    </>
  );
}
