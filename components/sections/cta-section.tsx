// components/sections/cta-section.tsx
"use client";

import { motion } from "framer-motion";
import { Apple, Store, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "../providers/theme-provider";

export default function CTASection() {
  const { theme } = useTheme();

  console.log(theme)
  
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-pink-500 to-orange-500 animate-gradient" />

      {/* Simple dots pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">
                Join the African Fashion Revolution
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Ready to Experience
              <span className="block">African Fashion?</span>
            </h2>

            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Download Venda Fashion now and join thousands discovering unique
              African fashion pieces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="gap-3 bg-card text-card-foreground hover:bg-accent shadow-lg hover:shadow-xl transition-all border border-border"
              >
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-white/80">
                    Download on
                  </div>
                  <div className="font-bold text-lg">App Store</div>
                </div>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className={`gap-3 border-2 border-white ${
                  theme === "light" ? "text-black/90" : "text-white/90"
                } hover:bg-white/20 hover:border-white/80 backdrop-blur-sm`}
              >
                <Store className="w-6 h-6" />
                <div className="text-left">
                  <div
                    className={`text-xs ${
                      theme === "light" ? "text-black/90" : "text-white/90"
                    }`}
                  >
                    Get it on
                  </div>
                  <div className="font-bold text-lg">Google Play</div>
                </div>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-white/80 text-sm">Fashion Lovers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2K+</div>
              <div className="text-white/80 text-sm">African Artisans</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">4.8★</div>
              <div className="text-white/80 text-sm">App Rating</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-1/4 left-10 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 right-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-1/4 w-4 h-4 rounded-full bg-white/10 backdrop-blur-sm"
      />
    </section>
  );
}
