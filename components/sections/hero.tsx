// components/sections/hero.tsx
"use client";

import { motion } from "framer-motion";
import {
  Download,
  ArrowRight,
  Sparkles,
  ChevronDown,
  ShoppingBag,
  Heart,
  Share2,
} from "lucide-react";
import { Button } from "../ui/button";
import { useRef } from "react";
import Image from "next/image";
import { useTheme } from "../providers/theme-provider";
import Link from "next/link";

export default function Hero() {
  const constraintsRef = useRef(null);
  const { theme } = useTheme();

  // Theme-aware image URLs
  const lightImage =
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
  const darkImage =
    "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80";

  // Alternative dark-skinned African model options
  const alternativeImages = {
    light: [
      "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80", // African fashion model in market
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80", // Stylish African woman
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80", // African fashion designer
    ],
    dark: [
      "https://images.unsplash.com/photo-1519167149625-a95e19e000b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80", // African model in dark setting
      "https://images.unsplash.com/photo-1570155308257-4919cec4a3d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80", // Elegant African woman in evening
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1376&q=80", // Portrait in moody lighting
    ],
  };

  const selectedImage = theme === "dark" ? darkImage : lightImage;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Elegant gradient background with subtle pattern - theme-aware */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 z-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-pink-500 blur-3xl" />
        </div>
      </div>

      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #8f57ef 1px, transparent 1px),
                            linear-gradient(to bottom, #8f57ef 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Animated floating elements - theme-aware opacity */}
      <div ref={constraintsRef} className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              theme === "dark" ? "bg-primary/20" : "bg-primary/10"
            }`}
            initial={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
            }}
            animate={{
              x: [null, Math.random() * 100 + "vw"],
              y: [null, Math.random() * 100 + "vh"],
            }}
            transition={{
              duration: 30 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Premium badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-pink-500/10 border border-primary/20 text-primary mb-8">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide">
                  AFRICAN FASHION REVOLUTION
                </span>
              </div>
              <div className="w-1 h-1 rounded-full bg-primary/40" />
              <span className="text-sm font-medium">EST. 2024</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-tight">
              <span className="block text-foreground font-display">
                Celebrate Local.
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-pink-500 font-display">
                Wear African.
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Discover authentic African fashion from talented local designers
              and artisans. Each piece tells a story, celebrates heritage, and
              supports independent creators across the continent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <Button
                  size="lg"
                  className="w-full gap-3 bg-gradient-to-r from-primary to-pink-500 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 border-0"
                >
                  <div className="flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    <span className="font-semibold">Download App</span>
                  </div>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <Link href={"/collections"}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 cursor-pointer"
                  >
                    <span className="font-semibold">Browse Collections</span>
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Stats - Elegant design */}
            <div className="grid grid-cols-3 gap-6 max-w-md">
              {[
                {
                  value: "50K+",
                  label: "African Designers",
                  color: "from-primary to-primary/70",
                },
                {
                  value: "2K+",
                  label: "Local Artisans",
                  color: "from-pink-500 to-pink-400",
                },
                {
                  value: "15K+",
                  label: "Cultural Pieces",
                  color: "from-primary/70 to-pink-500/70",
                },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Fashion image showcase - theme-aware */}
            <div className="relative mx-auto w-full max-w-lg">
              {/* Outer glow - theme-aware */}
              <div
                className={`absolute -inset-8 rounded-3xl blur-3xl ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-primary/30 via-pink-500/30 to-primary/30"
                    : "bg-gradient-to-r from-primary/20 via-pink-500/20 to-primary/20"
                }`}
              />

              {/* Main image container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                {/* Fashion Image - Theme-aware */}
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={selectedImage}
                    alt="African fashion model showcasing contemporary African design"
                    fill
                    className="object-cover transition-opacity duration-500"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Gradient overlay - theme-aware */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      theme === "dark"
                        ? "from-black/70 via-black/30 to-transparent"
                        : "from-black/50 via-black/20 to-transparent"
                    }`}
                  />

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    {/* Featured badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4">
                      <Sparkles className="w-3 h-3 text-white" />
                      <span className="text-xs font-semibold text-white">
                        AFRICAN COLLECTION
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      Ankara Elegance
                    </h3>
                    <p className="text-white/90 text-sm mb-4">
                      Contemporary African designs by local artisans
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-pink-500 flex items-center justify-center">
                          <ShoppingBag className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-white text-sm">From</div>
                          <div className="text-white font-bold">$79.99</div>
                        </div>
                      </div>

                      <div className="text-sm text-white/80">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-green-400" />
                          <span>Handmade in Lagos</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 ml-auto">
                        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors">
                          <Heart className="w-4 h-4 text-white" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors">
                          <Share2 className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/30 to-pink-500/30 border border-primary/40 backdrop-blur-sm flex items-center justify-center"
                animate={{ rotate: [0, 5, 0], y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-br from-pink-500/30 to-primary/30 border border-pink-500/40 backdrop-blur-sm flex items-center justify-center"
                animate={{ rotate: [0, -5, 0], y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </motion.div>

              {/* Floating tag - theme-aware */}
              <motion.div
                className="absolute -right-8 top-1/4 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-pink-500 shadow-lg"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-white text-sm font-semibold whitespace-nowrap">
                  MADE IN AFRICA
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground tracking-widest font-medium">
            SCROLL
          </span>
          <div className="w-6 h-10 rounded-full border border-border/50 flex justify-center items-start p-1">
            <motion.div
              className="w-1.5 h-3 rounded-full bg-gradient-to-b from-primary to-pink-500"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
