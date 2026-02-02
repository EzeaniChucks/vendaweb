// components/sections/collection-grid.tsx - Updated
"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export const collections = [
  {
    id: "ankara-collection-2024",
    name: "Ankara Modern Collection 2024",
    designer: "Maya Adebayo",
    price: "$89.99",
    image: "/collections/ankara.jpg",
    category: "Traditional",
    items: 12,
    rating: 4.9,
  },
  {
    id: "urban-african-streetwear",
    name: "Urban African Streetwear",
    designer: "Lagos Styles Collective",
    price: "$65.50",
    image: "/collections/streetwear.jpg",
    category: "Streetwear",
    items: 19,
    rating: 4.8,
  },
  {
    id: "bohemian-africa",
    name: "Bohemian Africa Collection",
    designer: "Sahara Threads Cooperative",
    price: "$120.00",
    image: "/collections/bohemian.jpg",
    category: "Ethnic",
    items: 30,
    rating: 4.7,
  },
  {
    id: "kente-heritage",
    name: "Kente Heritage Collection",
    designer: "Kofi Ansah",
    price: "$149.99",
    image: "/collections/kente.jpg",
    category: "Traditional",
    items: 24,
    rating: 4.9,
  },
  {
    id: "african-minimalist",
    name: "African Minimalist",
    designer: "Afro Minimal",
    price: "$45.99",
    image: "/collections/minimalist.jpg",
    category: "Casual",
    items: 4,
    rating: 4.6,
  },
  {
    id: "evening-glamour",
    name: "African Evening Glamour",
    designer: "Velvet & Kente",
    price: "$199.99",
    image: "/collections/evening.jpg",
    category: "Formal",
    items: 60,
    rating: 4.8,
  },
];

export function CollectionGrid() {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <Link href={`/collections/${item.id}`}>
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all border border-border">
                {/* Image placeholder */}
                <div className="h-64 bg-gradient-to-br from-primary/10 to-pink-500/10 relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <button className="p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors">
                      <Heart className="w-5 h-5 text-muted-foreground hover:text-primary" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-primary/20">
                      {item.name.charAt(0)}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-card-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        by {item.designer}
                      </p>
                    </div>
                    <span className="text-xl font-bold text-primary">
                      {item.price}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < Math.floor(item.rating)
                              ? "bg-yellow-400"
                              : "bg-border"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">
                        {item.rating}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      View Details →
                    </span>
                  </div>

                  <Button className="w-full gap-2 bg-gradient-to-r from-primary to-pink-500">
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Load more button */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Load More Collections
        </Button>
      </div>
    </div>
  );
}
