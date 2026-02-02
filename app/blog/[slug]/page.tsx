// app/blog/[slug]/page.tsx
"use client";

import React from "react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

const blogPosts = {
  "sustainable-african-fashion-2024": {
    title: "Sustainable African Fashion Trends 2024",
    excerpt:
      "Discover how African designers are leading the sustainable fashion movement with traditional techniques.",
    content: `
        <h2>The African Sustainable Fashion Movement</h2>
        <p>Sustainable fashion has deep roots in African traditions. In 2024, African designers are reclaiming and modernizing these eco-friendly practices, leading the global sustainable fashion movement.</p>
        
        <h3>Traditional Techniques Making a Comeback</h3>
        <ul>
          <li><strong>Adire & Bogolan:</strong> Traditional Nigerian and Malian indigo and mud cloth dyeing techniques that use natural dyes</li>
          <li><strong>Kente Weaving:</strong> Zero-waste weaving methods that utilize every thread</li>
          <li><strong>Bark Cloth:</strong> Ugandan artisans creating fabric from tree bark, a UNESCO-recognized intangible cultural heritage</li>
          <li><strong>Recycled Glass Beads:</strong> Ghanaian artisans transforming recycled glass into beautiful jewelry</li>
          <li><strong>Natural Fibers:</strong> Using sisal, raffia, banana fibers, and other locally-sourced materials</li>
        </ul>
        
        <h3>How African Artisans Are Innovating</h3>
        <p>Artisans on Venda Fashion are combining centuries-old techniques with modern designs, creating unique pieces that honor heritage while meeting contemporary tastes. From upcycled Ankara fabric accessories to organic cotton dresses with traditional embroidery, the options celebrate African sustainability.</p>
        
        <h3>Tips for Sustainable African Fashion Shopping</h3>
        <p>When shopping for sustainable African fashion, look for:
          <ul>
            <li>Traditional dyeing and weaving techniques</li>
            <li>Natural, organic, or upcycled materials</li>
            <li>Handmade craftsmanship that ensures longevity</li>
            <li>Fair trade certifications and transparent supply chains</li>
            <li>Pieces that tell cultural stories through their design</li>
          </ul>
        </p>
        
        <p>By choosing sustainable African fashion, you're supporting heritage preservation, environmental stewardship, and economic empowerment across the continent.</p>
      `,
    author: "Amina Diallo",
    date: "March 15, 2024",
    category: "Sustainability",
    readTime: "5 min read",
  },
  "styling-ankara-pieces": {
    title: "How to Style Ankara in Modern Ways",
    excerpt:
      "Tips and tricks for incorporating traditional Ankara fabrics into contemporary wardrobes.",
    content: `
        <h2>Modern Ankara Styling Masterclass</h2>
        <p>Ankara fabric, with its vibrant patterns and rich history, can elevate any wardrobe. Here's how to incorporate these beautiful African textiles into your modern style.</p>
        
        <h3>Mixing Ankara with Contemporary Basics</h3>
        <p>The key to styling Ankara is balance. Pair a statement Ankara top with simple, tailored trousers or jeans. Let the bold pattern be the focus while keeping everything else understated.</p>
        
        <p>For example:
          <ul>
            <li>An Ankara blouse with white trousers for a chic office look</li>
            <li>An Ankara skirt with a plain black t-shirt for casual elegance</li>
            <li>Ankara accessories (bag or shoes) with a monochrome outfit for a pop of color</li>
          </ul>
        </p>
        
        <h3>Ankara Layering Techniques</h3>
        <p>Don't be afraid to mix Ankara patterns! The key is to choose patterns that share colors. Try layering an Ankara jacket over a simple dress, or wear an Ankara scarf with modern separates. The contrast between traditional African prints and contemporary silhouettes creates stunning visual interest.</p>
        
        <h3>Seasonal Ankara Styling</h3>
        <p>Ankara works year-round with these approaches:</p>
        <ul>
          <li><strong>Spring:</strong> Lightweight Ankara dresses and scarves</li>
          <li><strong>Summer:</strong> Ankara shorts, skirts, and off-shoulder tops</li>
          <li><strong>Fall:</strong> Ankara blazers and midi skirts layered with knitwear</li>
          <li><strong>Winter:</strong> Ankara accessories and statement coats</li>
        </ul>
        
        <h3>Cultural Appreciation vs. Appropriation</h3>
        <p>When wearing Ankara, it's important to:
          <ul>
            <li>Learn about the fabric's history and cultural significance</li>
            <li>Buy from authentic African artisans and designers</li>
            <li>Respect the craftsmanship and stories behind each piece</li>
            <li>Celebrate the culture rather than just borrowing the aesthetic</li>
          </ul>
        </p>
        
        <h3>Confidence is Your Best Accessory</h3>
        <p>Wear your Ankara pieces with pride and confidence. Each pattern tells a story of African heritage, craftsmanship, and beauty.</p>
      `,
    author: "Chiamaka Nwosu",
    date: "March 10, 2024",
    category: "Styling",
    readTime: "4 min read",
  },
  "rise-of-african-fashion-marketplaces": {
    title: "The Rise of African Fashion Marketplaces",
    excerpt:
      "How digital platforms are transforming traditional African textile markets and empowering artisans.",
    content: `
        <h2>The Digital Revolution in African Fashion</h2>
        <p>African fashion is experiencing a digital renaissance. Platforms like Venda Fashion are connecting traditional artisans with global consumers, creating new economic opportunities while preserving cultural heritage.</p>
        
        <h3>Why Digital Marketplaces Are Transforming African Fashion</h3>
        <p>Several factors contribute to this digital transformation:</p>
        <ul>
          <li><strong>Global Access:</strong> Artisans can reach customers worldwide, not just in local markets</li>
          <li><strong>Preservation:</strong> Traditional techniques find new relevance in global markets</li>
          <li><strong>Economic Empowerment:</strong> Direct sales mean better income for artisans</li>
          <li><strong>Cultural Exchange:</strong> Authentic African fashion reaches new audiences</li>
          <li><strong>Quality Showcase:</strong> Digital platforms highlight craftsmanship that was previously undervalued</li>
        </ul>
        
        <h3>The Impact on African Economies</h3>
        <p>When you buy from African artisans through digital platforms, you're directly supporting:
          <ul>
            <li>Multi-generational family businesses preserving heritage crafts</li>
            <li>Women-led cooperatives and entrepreneurship</li>
            <li>Youth employment in creative industries</li>
            <li>Rural economic development through craft preservation</li>
            <li>African-owned businesses retaining value within the continent</li>
          </ul>
        </p>
        
        <h3>The Future of African Fashion Commerce</h3>
        <p>As global consumers seek authentic, meaningful purchases, African fashion marketplaces are positioned for significant growth. The combination of unique craftsmanship, cultural storytelling, and sustainable practices makes them increasingly attractive to conscious consumers worldwide.</p>
        
        <h3>Challenges and Opportunities</h3>
        <p>While digital platforms offer immense opportunities, challenges remain:
          <ul>
            <li>Digital literacy and access for remote artisans</li>
            <li>Infrastructure for reliable shipping and payments</li>
            <li>Protecting intellectual property and cultural designs</li>
            <li>Ensuring fair pricing and ethical practices</li>
          </ul>
        </p>
        
        <p>Platforms like Venda Fashion are working to address these challenges, creating a more equitable and sustainable future for African fashion.</p>
      `,
    author: "Kwame Osei",
    date: "March 5, 2024",
    category: "Industry",
    readTime: "6 min read",
  },
  // ... (other posts would follow the same pattern with African-focused content)
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = (React.use as any)(params);

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-pink-500 flex items-center justify-center mx-auto mb-8">
            <span className="text-white text-4xl">404</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Post Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <a
            href="/blog"
            className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-pink-500 text-white font-medium hover:shadow-lg transition-shadow"
          >
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {post.category}
              </span>
              <span className="text-muted-foreground">{post.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-pink-500 flex items-center justify-center text-white font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-card-foreground">
                  {post.author}
                </div>
                <div className="text-muted-foreground">{post.date}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                lineHeight: "1.8",
                fontSize: "1.125rem",
                color: "var(--foreground)",
              }}
            />
          </article>

          {/* Share buttons */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-bold mb-4 text-foreground">
              Share this post
            </h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                Share on Facebook
              </button>
              <button className="px-4 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition-colors">
                Share on Twitter
              </button>
              <button className="px-4 py-2 rounded-lg bg-pink-600 text-white hover:bg-pink-700 transition-colors">
                Share on Instagram
              </button>
              <button className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900 transition-colors">
                Copy Link
              </button>
            </div>
          </div>

          {/* Back to blog */}
          <div className="mt-8 text-center">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              ← Back to all articles
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
