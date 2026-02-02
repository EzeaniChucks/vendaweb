// app/designers/page.tsx
import { Button } from "../../components/ui/button";
import {
  Star,
  MapPin,
  Award,
  Users,
  Globe,
  Heart,
  TrendingUp,
} from "lucide-react";

export default function DesignersPage() {
  const featuredDesigners = [
    {
      name: "Maya Adebayo",
      location: "Lagos, Nigeria",
      specialty: "Ankara Contemporary",
      rating: 4.9,
      items: 42,
      countries: 12,
      image: "/designers/maya.jpg",
    },
    {
      name: "Kofi Ansah",
      location: "Accra, Ghana",
      specialty: "Kente Modern",
      rating: 4.8,
      items: 56,
      countries: 18,
      image: "/designers/kofi.jpg",
    },
    {
      name: "Lisa Folawiyo",
      location: "Abuja, Nigeria",
      specialty: "Jewel by Lisa",
      rating: 4.9,
      items: 28,
      countries: 24,
      image: "/designers/lisa.jpg",
    },
    {
      name: "David Tlale",
      location: "Johannesburg, SA",
      specialty: "African Couture",
      rating: 4.7,
      items: 34,
      countries: 15,
      image: "/designers/david.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-foreground">Discover African</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                Fashion Artisans
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Meet the talented designers and artisans preserving African
              heritage through fashion. Each creator brings unique cultural
              stories and craftsmanship to our community.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-pink-500"
            >
              Join as Artisan
            </Button>
          </div>
        </div>
      </section>

      {/* Designers Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDesigners.map((designer) => (
              <div
                key={designer.name}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-border"
              >
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-pink-500/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                      {designer.name.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-card/80 backdrop-blur-sm">
                      <Globe className="w-3 h-3 text-primary" />
                      <span className="text-xs font-medium text-card-foreground">
                        {designer.countries} countries
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">
                    {designer.name}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{designer.location}</span>
                  </div>

                  <p className="text-sm text-card-foreground mb-4 font-medium">
                    {designer.specialty}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-card-foreground">
                        {designer.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {designer.items} creations
                      </span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-pink-500">
                    View Collection
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Why African Artisans Choose Venda
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join a platform built to empower African fashion creators and help
              your cultural business thrive globally.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Fair African Rates",
                description:
                  "Only 12% commission for African artisans, with special rates for cooperative groups and women-led businesses.",
                color: "from-primary to-pink-500",
              },
              {
                icon: Users,
                title: "Global African Audience",
                description:
                  "Access thousands of fashion lovers worldwide who appreciate authentic African craftsmanship and heritage.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: TrendingUp,
                title: "Growth Support",
                description:
                  "Business development programs, export assistance, and partnerships with African fashion institutions.",
                color: "from-green-500 to-emerald-500",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="text-center p-8 rounded-2xl bg-card shadow-lg border border-border"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-6`}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
