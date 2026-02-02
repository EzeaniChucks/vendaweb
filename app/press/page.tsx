// app/press/page.tsx
import { Newspaper, ExternalLink, Globe, Award, Users } from "lucide-react";

export default function PressPage() {
  const press = [
    {
      outlet: "African Fashion Daily",
      title: "Venda Connects African Artisans to Global Fashion Markets",
      date: "March 15, 2024",
      excerpt:
        "How Venda is revolutionizing access to authentic African fashion while preserving cultural heritage and creating economic opportunities.",
      category: "Business",
      readTime: "5 min",
    },
    {
      outlet: "Tech Africa",
      title: "Digital Platform Empowers African Fashion Creators",
      date: "February 28, 2024",
      excerpt:
        "Interview with Venda's African leadership on sustainable fashion technology and pan-African e-commerce infrastructure.",
      category: "Technology",
      readTime: "7 min",
    },
    {
      outlet: "Global Fashion Review",
      title: "From Local Workshops to Global Runways",
      date: "January 10, 2024",
      excerpt:
        "How African artisans on Venda reached customers in 50+ countries while maintaining cultural authenticity and fair trade practices.",
      category: "Culture",
      readTime: "6 min",
    },
    {
      outlet: "Sustainable Business Africa",
      title: "Preserving Heritage Through Digital Commerce",
      date: "December 5, 2023",
      excerpt:
        "Venda's model for sustainable economic development while protecting traditional African textile arts and craftsmanship.",
      category: "Sustainability",
      readTime: "8 min",
    },
  ];

  const stats = [
    { value: "2,000+", label: "African Artisans", icon: Users },
    { value: "50+", label: "Countries Reached", icon: Globe },
    { value: "15+", label: "African Languages", icon: Award },
    { value: "4.8", label: "Average Rating", icon: Newspaper },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card mb-6 border border-border">
              <Newspaper className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-card-foreground">
                African Fashion Media
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">African Fashion</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                In The News
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Latest coverage about how Venda is transforming African fashion
              commerce and empowering artisans across the continent.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-card border border-border"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1 text-card-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {press.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-border group"
              >
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {item.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {item.date}
                  </span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">
                    {item.readTime} read
                  </span>
                </div>
                <div className="text-sm font-medium text-primary mb-2">
                  {item.outlet}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-card-foreground mb-6">{item.excerpt}</p>
                <div className="flex items-center justify-between">
                  <button className="text-primary font-medium hover:underline flex items-center gap-2">
                    Read Full Article
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <span className="text-sm text-muted-foreground">
                    International Coverage
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-card p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">
              Press Inquiries
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Journalists and media professionals interested in African fashion,
              sustainable commerce, or technology innovation in Africa can
              contact our press team.
            </p>
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-pink-500 text-white font-medium hover:shadow-lg transition-shadow">
              Contact Press Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
