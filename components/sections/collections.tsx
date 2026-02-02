// components/sections/collections.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { collections } from "./collection-grid";

export default function Collections() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">Featured</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                  Collections
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Discover handpicked African fashion collections from talented
                local designers.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href={"/collections"}>
              <Button
                variant="outline"
                className="gap-2 mt-4 md:mt-0 cursor-pointer"
              >
                View All Collections
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link
                href={`/collections/${collection.id
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all h-full border border-border">
                  {/* Image placeholder */}
                  <div className="h-48 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-pink-500/20 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-sm font-medium">
                          {collection.items} items
                        </span>
                        <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">
                            {collection.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                      {collection.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      by {collection.designer}
                    </p>

                    <div className="flex items-center justify-between">
                      <Button
                        size="sm"
                        className="gap-2 bg-gradient-to-r from-primary to-pink-500"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        Shop Now
                      </Button>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">African Designers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-500 mb-2">10K+</div>
              <div className="text-muted-foreground">Unique Pieces</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">African Cities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-500 mb-2">4.8★</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
