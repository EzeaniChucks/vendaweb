// components/sections/team-section.tsx
"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const team = [
  {
    name: "Amina Diallo",
    role: "CEO & Founder",
    bio: "Former fashion buyer with 10+ years in African sustainable fashion.",
    image: "/team/amina.jpg",
  },
  {
    name: "Kwame Osei",
    role: "Head of Technology",
    bio: "Tech entrepreneur passionate about connecting African communities.",
    image: "/team/kwame.jpg",
  },
  {
    name: "Chiamaka Nwosu",
    role: "Creative Director",
    bio: "Award-winning African fashion designer and industry veteran.",
    image: "/team/chiamaka.jpg",
  },
  {
    name: "Sekou Touré",
    role: "Operations Lead",
    bio: "Expert in pan-African logistics and supply chain management.",
    image: "/team/sekou.jpg",
  },
];

export function TeamSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Meet Our</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
              African Leadership
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate individuals driving the future of African fashion
            commerce.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow border border-border">
                {/* Image placeholder */}
                <div className="h-64 bg-gradient-to-br from-primary/10 to-pink-500/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-pink-500 flex items-center justify-center text-white text-4xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-card-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-6">
                    {member.bio}
                  </p>

                  <div className="flex gap-3">
                    <button className="p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors">
                      <Twitter className="w-4 h-4 text-muted-foreground" />
                    </button>
                    <button className="p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors">
                      <Instagram className="w-4 h-4 text-muted-foreground" />
                    </button>
                    <button className="p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors">
                      <Facebook className="w-4 h-4 text-muted-foreground" />
                    </button>
                    <button className="p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                    </button>
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
