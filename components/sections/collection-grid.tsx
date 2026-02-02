// components/sections/collection-grid.tsx
"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";

const collections = [
  {
    name: "Ankara Collection 2024",
    designer: "Maya Adebayo",
    price: "$89.99",
    image: "/api/placeholder/400/500",
    category: "Traditional",
  },
  {
    name: "Urban Streetwear",
    designer: "Lagos Styles",
    price: "$65.50",
    image: "/api/placeholder/400/500",
    category: "Streetwear",
  },
  {
    name: "Bohemian Elegance",
    designer: "Sahara Threads",
    price: "$120.00",
    image: "/api/placeholder/400/500",
    category: "Ethnic",
  },
  {
    name: "Minimalist Basics",
    designer: "Afro Minimal",
    price: "$45.99",
    image: "/api/placeholder/400/500",
    category: "Casual",
  },
  {
    name: "Evening Glamour",
    designer: "Velvet & Kente",
    price: "$199.99",
    image: "/api/placeholder/400/500",
    category: "Formal",
  },
  {
    name: "Activewear",
    designer: "Eco Motion Africa",
    price: "$75.00",
    image: "/api/placeholder/400/500",
    category: "Activewear",
  },
];

export function CollectionGrid() {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group"
          >
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
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-card-foreground">
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

                <Button className="w-full gap-2 bg-gradient-to-r from-primary to-pink-500">
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
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
