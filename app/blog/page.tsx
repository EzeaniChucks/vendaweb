// app/blog/page.tsx
import React from "react";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    slug: "sustainable-african-fashion-2024",
    title: "Sustainable African Fashion Trends 2024",
    excerpt:
      "Discover how African designers are leading the sustainable fashion movement with traditional techniques.",
    author: "Amina Diallo",
    date: "March 15, 2024",
    category: "Sustainability",
    readTime: "5 min read",
    image: "/blog/sustainable.jpg",
  },
  {
    slug: "styling-ankara-pieces",
    title: "How to Style Ankara in Modern Ways",
    excerpt:
      "Tips and tricks for incorporating traditional Ankara fabrics into contemporary wardrobes.",
    author: "Chiamaka Nwosu",
    date: "March 10, 2024",
    category: "Styling",
    readTime: "4 min read",
    image: "/blog/styling.jpg",
  },
  {
    slug: "rise-of-african-fashion-marketplaces",
    title: "The Rise of African Fashion Marketplaces",
    excerpt:
      "How digital platforms are transforming traditional African textile markets and empowering artisans.",
    author: "Kwame Osei",
    date: "March 5, 2024",
    category: "Industry",
    readTime: "6 min read",
    image: "/blog/marketplace.jpg",
  },
  {
    slug: "interview-with-top-african-designer",
    title: "Interview with Award-Winning African Designer",
    excerpt:
      "We sat down with renowned designer Maya Adebayo to discuss her journey preserving cultural heritage.",
    author: "Emma Wilson",
    date: "February 28, 2024",
    category: "Interview",
    readTime: "7 min read",
    image: "/blog/interview.jpg",
  },
  {
    slug: "african-fashion-guide-spring-2024",
    title: "African Fashion Guide: Spring 2024",
    excerpt: "What to wear this spring featuring authentic African styles.",
    author: "James Lee",
    date: "February 20, 2024",
    category: "Guide",
    readTime: "5 min read",
    image: "/blog/spring.jpg",
  },
  {
    slug: "behind-the-scenes-venda-fashion",
    title: "Behind the Scenes: Building African Fashion Bridges",
    excerpt:
      "How we connect African artisans with global fashion lovers through technology and community.",
    author: "Sarah Johnson",
    date: "February 15, 2024",
    category: "Company",
    readTime: "8 min read",
    image: "/blog/behind-scenes.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">Venda</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                African Fashion Blog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover African fashion tips, cultural insights, and stories from
              our community of artisans and designers.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-card rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow h-full border border-border">
                    {/* Image placeholder */}
                    <div className="h-48 bg-gradient-to-br from-primary/10 to-pink-500/10" />

                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-pink-500 flex items-center justify-center text-white text-sm font-bold">
                            {post.author.charAt(0)}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-card-foreground">
                              {post.author}
                            </div>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3" />
                              {post.date}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Load more button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary/10 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
