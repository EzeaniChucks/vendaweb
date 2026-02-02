// components/sections/app-showcase.tsx
"use client";

import { motion } from "framer-motion";
import { Apple, Store, Smartphone, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import { useRef } from "react";

export default function AppShowcase() {
  const containerRef = useRef(null);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />

      <div ref={containerRef} className="relative container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Download </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                Venda Fashion
              </span>
              <span className="text-foreground"> App</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8">
              Experience African fashion shopping like never before. Available
              on both iOS and Android platforms.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Browse thousands of unique African fashion items",
                "Real-time order tracking",
                "Secure in-app payments",
                "Chat with artisans directly",
                "Flexible delivery options across Africa",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-pink-500" />
                  <span className="text-card-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="gap-3 bg-foreground text-background hover:bg-foreground/90"
                >
                  <Apple className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-bold">App Store</div>
                  </div>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="gap-3">
                  <Store className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="font-bold">Google Play</div>
                  </div>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <div className="relative">
            {/* Floating Devices */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Main Device */}
                <div className="relative z-10">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary to-pink-500 rounded-[2.5rem] blur-xl opacity-20" />
                  <div className="relative bg-gradient-to-br from-secondary to-muted rounded-[2rem] p-3 border border-border">
                    <div className="bg-card rounded-2xl overflow-hidden">
                      <div className="h-96 bg-gradient-to-br from-primary/20 via-pink-500/20 to-transparent" />
                    </div>
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-muted rounded-full" />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5"
                >
                  <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                    <Smartphone className="w-10 h-10 text-blue-500" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-8 -left-8 w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 p-0.5"
                >
                  <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-green-500" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
