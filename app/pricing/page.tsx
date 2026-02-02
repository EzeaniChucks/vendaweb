// app/pricing/page.tsx
import {
  CheckCircle,
  Star,
  Globe,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Artisan Starter",
      price: "12%",
      description:
        "Perfect for individual African artisans and emerging creators",
      badge: "Most Popular",
      features: [
        "No monthly fees or hidden charges",
        "Up to 100 product listings",
        "Basic sales analytics dashboard",
        "Standard African support (email/chat)",
        "Mobile Money & local payment processing",
        "Cultural storytelling profile setup",
        "Access to African artisan community",
      ],
      popular: true,
    },
    {
      name: "Cooperative Pro",
      price: "9%",
      description:
        "For artisan cooperatives and established African fashion businesses",
      features: [
        "No monthly fees, special cooperative rates",
        "Unlimited product listings",
        "Advanced analytics and insights",
        "Priority multilingual support",
        "Bulk upload and inventory tools",
        "Custom storefront customization",
        "Export documentation assistance",
        "Business development workshops",
      ],
    },
    {
      name: "Cultural Enterprise",
      price: "Custom",
      description:
        "For cultural institutions, museums, and large African fashion houses",
      features: [
        "Custom commission structure",
        "Dedicated African account manager",
        "API access and custom integrations",
        "White-label solutions available",
        "International trade compliance",
        "Cultural preservation partnerships",
        "Premium marketing placement",
        "24/7 dedicated support",
      ],
    },
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Global African Reach",
      description:
        "Access customers in 50+ countries who value authentic African fashion",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description:
        "Bank-level security with African payment methods and fair currency conversion",
    },
    {
      icon: TrendingUp,
      title: "Growth Support",
      description:
        "Tools and resources to scale your African fashion business sustainably",
    },
    {
      icon: Users,
      title: "Community Network",
      description:
        "Connect with 2,000+ African artisans sharing knowledge and opportunities",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card mb-6 border border-border">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-card-foreground">
                African Artisan Focus
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">Fair & Transparent</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                African Pricing
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Designed for African artisans: Pay only when you sell. No monthly
              fees, special rates for cooperatives.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl overflow-hidden border ${
                  plan.popular
                    ? "border-primary shadow-xl scale-105 z-10"
                    : "border-border"
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-pink-500 text-white px-4 py-2 text-sm font-bold rounded-bl-lg">
                    {plan.badge}
                  </div>
                )}
                <div className="bg-card p-8">
                  <h3 className="text-2xl font-bold mb-2 text-card-foreground">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold text-card-foreground">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground ml-2">
                        commission per sale
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-8">
                    {plan.description}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-card-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-lg font-medium transition-shadow ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary to-pink-500 text-white hover:shadow-lg"
                        : "bg-card border border-primary text-primary hover:bg-primary/10"
                    }`}
                  >
                    {plan.price === "Custom"
                      ? "Contact for Pricing"
                      : "Start Selling"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Why African Artisans Choose Venda
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <benefit.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2 text-card-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-pink-500/5 rounded-2xl p-8 border border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                Special Programs for African Artisans
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We offer additional support for women-led businesses, youth
                entrepreneurs, rural artisans, and cultural preservation
                initiatives across Africa.
              </p>
              <button className="px-8 py-3 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary/10 transition-colors">
                Learn About Special Programs
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
