// components/sections/filter-sidebar.tsx
"use client";

import { useState } from "react";
import { Filter, ChevronDown } from "lucide-react";

const categories = [
  "All Collections",
  "Ankara",
  "Kente",
  "African Streetwear",
  "Traditional",
  "Modern African",
  "Accessories",
  "Handmade",
];

const designers = [
  "All Designers",
  "Maya Adebayo",
  "Kofi Ansah",
  "Lisa Folawiyo",
  "David Tlale",
  "Zahra Ali",
  "Amaka Osakwe",
];

const priceRanges = [
  "All Prices",
  "Under $50",
  "$50 - $100",
  "$100 - $200",
  "Over $200",
];

export function FilterSidebar() {
  const [selectedCategory, setSelectedCategory] = useState("All Collections");
  const [selectedDesigner, setSelectedDesigner] = useState("All Designers");
  const [selectedPrice, setSelectedPrice] = useState("All Prices");

  return (
    <div className="lg:w-64 space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-lg text-foreground">Filters</h3>
        </div>

        <div className="space-y-6">
          {/* Categories */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-foreground">Categories</h4>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedCategory === category
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Designers */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-foreground">African Designers</h4>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              {designers.map((designer) => (
                <button
                  key={designer}
                  onClick={() => setSelectedDesigner(designer)}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedDesigner === designer
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {designer}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-foreground">Price Range</h4>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              {priceRanges.map((price) => (
                <button
                  key={price}
                  onClick={() => setSelectedPrice(price)}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedPrice === price
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {price}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Clear filters button */}
      <button className="w-full py-3 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary/10 transition-colors">
        Clear All Filters
      </button>
    </div>
  );
}
