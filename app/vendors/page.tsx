// app/vendors/page.tsx
import { Button } from "../../components/ui/button";
import {
  CheckCircle,
  BarChart,
  Users,
  Shield,
  Globe,
  TrendingUp,
  Award,
  Package,
} from "lucide-react";

export default function VendorsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card mb-6 border border-border">
              <Package className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-card-foreground">
                African Fashion Marketplace
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-foreground">Sell Authentic</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                African Fashion
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join 2,000+ African artisans and designers selling authentic
              cultural pieces to global customers who value heritage,
              craftsmanship, and unique style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-pink-500"
              >
                Start Your Artisan Journey
              </Button>
              <Button size="lg" variant="outline">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Grow Your African Business",
                description:
                  "Access customers in 50+ countries while maintaining cultural authenticity and fair pricing for your craftsmanship.",
                color: "from-primary to-pink-500",
              },
              {
                icon: Users,
                title: "Built-in Global Audience",
                description:
                  "Connect with fashion lovers worldwide seeking authentic African pieces - no marketing expertise needed.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Shield,
                title: "Secure African Payments",
                description:
                  "Receive payments in local currency via Mobile Money, bank transfer, or digital wallets with transparent conversion.",
                color: "from-green-500 to-emerald-500",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="text-center p-8 rounded-2xl bg-card shadow-lg border border-border hover:shadow-xl transition-shadow"
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

      {/* How to Start */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Launch Your African Fashion Presence in 5 Steps
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Create Your Artisan Profile",
                description:
                  "Share your cultural story, craftsmanship techniques, and cultural heritage that makes your work unique.",
                icon: <Users className="w-6 h-6" />,
              },
              {
                title: "Upload Authentic Collections",
                description:
                  "Showcase your African fashion pieces with high-quality photos and detailed cultural descriptions.",
                icon: <Package className="w-6 h-6" />,
              },
              {
                title: "Set Fair Cultural Pricing",
                description:
                  "Price your work appropriately considering materials, time, skill, and cultural significance.",
                icon: <BarChart className="w-6 h-6" />,
              },
              {
                title: "Connect with Global Customers",
                description:
                  "Start selling to fashion lovers worldwide who appreciate authentic African craftsmanship.",
                icon: <Globe className="w-6 h-6" />,
              },
              {
                title: "Receive Secure African Payments",
                description:
                  "Get paid directly to your Mobile Money, bank account, or digital wallet with minimal fees.",
                icon: <Shield className="w-6 h-6" />,
              },
            ].map((step, index) => (
              <div
                key={step.title}
                className="flex items-center gap-6 p-6 rounded-2xl bg-card shadow border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-pink-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex items-center justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      {step.icon}
                      <span className="text-lg font-medium text-card-foreground">
                        {step.title}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card mb-6 border border-border">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-card-foreground">
              Special African Programs
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Ready to Share African Fashion with the World?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of successful African artisans. We offer special
            support for women-led businesses, youth entrepreneurs, cooperatives,
            and cultural preservation initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-pink-500"
            >
              Apply as Artisan
            </Button>
            <Button size="lg" variant="outline">
              View Special Programs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
