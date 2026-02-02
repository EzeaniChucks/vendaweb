// components/sections/testimonials.tsx
"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aisha Bello",
    role: "Fashion Blogger",
    content:
      "Venda Fashion transformed how I discover authentic African pieces. The quality from local artisans is exceptional!",
    rating: 5,
    avatar: "AB",
  },
  {
    name: "Kofi Mensah",
    role: "Ankara Designer",
    content:
      "As an Accra-based designer, Venda connected me with global customers. My traditional designs now reach worldwide!",
    rating: 5,
    avatar: "KM",
  },
  {
    name: "Fatima Hassan",
    role: "Delivery Partner",
    content:
      "Delivering beautiful African fashion across Nairobi is rewarding. Great flexibility around my university schedule.",
    rating: 5,
    avatar: "FH",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card mb-6 border border-border">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              African Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">What Our African Community</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
              Says About Us
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
              <div className="relative bg-card rounded-2xl p-8 shadow-lg border border-border">
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-primary/70 mb-6" />
                <p className="text-lg text-card-foreground mb-8 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-pink-500 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-card-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
