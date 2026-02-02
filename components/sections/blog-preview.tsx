// components/sections/blog-preview.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const posts = [
  {
    slug: "sustainable-african-fashion-2024",
    title: "Sustainable African Fashion 2024",
    excerpt:
      "Discover how African designers are leading the sustainable fashion movement with traditional techniques.",
    author: "Amina Diallo",
    date: "Mar 15, 2024",
    category: "Sustainability",
    image: "/api/placeholder/400/300",
  },
  {
    slug: "styling-ankara-pieces",
    title: "How to Style Ankara in Modern Ways",
    excerpt:
      "Tips and tricks for incorporating traditional Ankara fabrics into contemporary wardrobes.",
    author: "Chiamaka Nwosu",
    date: "Mar 10, 2024",
    category: "Styling",
    image: "/api/placeholder/400/300",
  },
  {
    slug: "rise-of-african-fashion-marketplaces",
    title: "The Rise of African Fashion Marketplaces",
    excerpt:
      "How digital platforms are transforming traditional African textile markets and empowering artisans.",
    author: "Kwame Osei",
    date: "Mar 5, 2024",
    category: "Industry",
    image: "/api/placeholder/400/300",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Latest From</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                Our Blog
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay updated with African fashion trends, styling tips, and
              industry insights.
            </p>
          </div>
          <Link href={"/blog"}>
          <Button variant="outline" className="hidden md:flex gap-2 cursor-pointer">
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow border border-border">
                  {/* Image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-pink-500/10" />

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Button variant="outline" className="gap-2">
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
