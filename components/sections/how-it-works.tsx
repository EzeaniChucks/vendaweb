// components/sections/how-it-works.tsx
"use client";

import { motion } from "framer-motion";
import { Search, Store, Package, ShoppingBag } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "Browse authentic African fashion from designers across the continent. Filter by region, style, or artisan.",
    color: "from-primary to-pink-500",
  },
  {
    icon: ShoppingBag,
    title: "Shop",
    description:
      "Add African pieces to your cart, choose delivery options, and checkout with secure pan-African payments.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Store,
    title: "Sell",
    description:
      "List your African fashion creations, connect with buyers worldwide, and grow your cultural business.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Package,
    title: "Deliver",
    description:
      "Join our delivery network across Africa and earn while connecting fashion lovers with creators.",
    color: "from-orange-500 to-red-500",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">How African Fashion</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
              {" "}
              Works Here
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple steps to embrace African fashion whether you're shopping,
            creating, or delivering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="relative bg-card rounded-2xl p-8 h-full shadow-lg group-hover:shadow-xl transition-shadow border border-border">
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity`}
                  />
                  <div
                    className={`relative w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-background flex items-center justify-center text-2xl font-bold text-primary border border-border">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-card-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>

                <div className="mt-8 pt-6 border-t border-border">
                  <div
                    className={`w-12 h-1 bg-gradient-to-r ${step.color} rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
