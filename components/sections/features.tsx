// components/sections/features.tsx
"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Users, Truck, Shield } from "lucide-react";

const features = [
  {
    icon: ShoppingBag,
    title: "Shop African Fashion",
    description:
      "Discover unique African-inspired pieces from local designers. Support artisans while embracing heritage.",
    color: "from-primary to-pink-500",
  },
  {
    icon: Users,
    title: "Become a Vendor",
    description:
      "Sell your African fashion creations to a global audience. Manage your store and showcase your culture.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Truck,
    title: "Delivery Network",
    description:
      "Join our pan-African delivery network. Flexible opportunities to deliver fashion across the continent.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description:
      "Safe payments with buyer protection. All transactions are encrypted with African financial standards.",
    color: "from-orange-500 to-red-500",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">One Platform, </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
              African Excellence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're shopping for authentic African wear, selling your
            designs, or delivering across Africa, Venda has you covered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-30 transition duration-500 blur" />
              <div className="relative bg-card rounded-2xl p-8 h-full border border-border">
                <div
                  className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-6`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
