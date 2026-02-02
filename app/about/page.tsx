// app/about/page.tsx
import { Button } from "../../components/ui/button";
import { Users, Target, Globe, Heart } from "lucide-react";
import { TeamSection } from "../../components/sections/team-section";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-foreground">Our African Fashion</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                Revolution
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're on a mission to revolutionize how people discover, buy, and
              sell African fashion by connecting local artisans with conscious
              consumers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Our African Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                To empower African fashion creators and make authentic,
                sustainable African fashion accessible to everyone, everywhere.
              </p>
              <p className="text-muted-foreground">
                We believe in fashion that tells African stories. Each piece on
                our platform represents the creativity, culture, and
                craftsmanship of talented artisans from across the continent.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Users,
                  title: "Community First",
                  desc: "Building supportive African fashion ecosystems",
                },
                {
                  icon: Target,
                  title: "Sustainability",
                  desc: "Promoting ethical, eco-friendly African fashion",
                },
                {
                  icon: Globe,
                  title: "Global Reach",
                  desc: "African designs, worldwide audience",
                },
                {
                  icon: Heart,
                  title: "Cultural Pride",
                  desc: "Celebrating African heritage through fashion",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-card shadow-lg border border-border"
                >
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold mb-2 text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-pink-500/5">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Fashion Enthusiasts</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-pink-500 mb-2">2K+</div>
              <div className="text-muted-foreground">African Artisans</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">15K+</div>
              <div className="text-muted-foreground">Monthly Deliveries</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-pink-500 mb-2">20+</div>
              <div className="text-muted-foreground">African Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <TeamSection />

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Join Our African Fashion Movement
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you're an artisan, fashion lover, or delivery partner,
            there's a place for you in the Venda community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-pink-500"
            >
              Become an Artisan
            </Button>
            <Button size="lg" variant="outline">
              Join as Delivery Partner
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
