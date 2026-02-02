// app/riders/page.tsx
import { Button } from "../../components/ui/button";
import {
  DollarSign,
  Clock,
  MapPin,
  Shield,
  Bike,
  Car,
  Smartphone,
  Globe,
} from "lucide-react";

export default function RidersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card mb-6 border border-border">
              <Bike className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-card-foreground">
                Pan-African Delivery
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-foreground">Become a Venda</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                Delivery Partner
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Earn competitive income delivering authentic African fashion
              across cities. Join our trusted network of delivery partners
              connecting artisans with fashion lovers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-pink-500"
              >
                Apply Now in Your City
              </Button>
              <Button size="lg" variant="outline">
                Rider Earnings Calculator
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: DollarSign,
                title: "African Competitive Rates",
                description:
                  "Earn $15-25 per hour in local currency, plus tips and peak-time bonuses across African cities.",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Clock,
                title: "True Flexibility",
                description:
                  "Work full-time, part-time, or during peak hours. Perfect for students, entrepreneurs, and gig workers.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: MapPin,
                title: "Optimized African Routes",
                description:
                  "Smart routing technology designed for African cities with real-time traffic and security alerts.",
                color: "from-primary to-pink-500",
              },
              {
                icon: Shield,
                title: "Safety First",
                description:
                  "All deliveries insured, emergency support, and secure cashless payments across Africa.",
                color: "from-orange-500 to-red-500",
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

      {/* How to Join */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Start Delivering in 4 Simple Steps
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "African Application",
                description:
                  "Complete our simple online application with local KYC requirements for your country.",
                icon: <Globe className="w-6 h-6" />,
              },
              {
                step: "2",
                title: "Document Verification",
                description:
                  "Upload required documents - we verify through secure African digital systems.",
                icon: <Shield className="w-6 h-6" />,
              },
              {
                step: "3",
                title: "Download Venda Rider App",
                description:
                  "Get our specialized rider app with training modules for African delivery scenarios.",
                icon: <Smartphone className="w-6 h-6" />,
              },
              {
                step: "4",
                title: "Start Earning",
                description:
                  "Accept delivery requests and begin earning immediately with our instant payment system.",
                icon: <DollarSign className="w-6 h-6" />,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-6 p-6 rounded-2xl bg-card shadow border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-pink-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {item.icon}
                    <h3 className="text-xl font-bold text-card-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              African Delivery Requirements
            </h2>
            <p className="text-xl text-muted-foreground">
              What you need to become a Venda Delivery Partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Bike className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-card-foreground">
                  For Bike & Motorcycle Riders
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Valid national driver's license (Class A)",
                  "Vehicle registration and insurance",
                  "Comprehensive third-party liability insurance",
                  "Smartphone with 4G data (Android 8+/iOS 12+)",
                  "18+ years with clean driving record",
                  "Knowledge of local city routes and traffic patterns",
                ].map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span className="text-card-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Car className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-card-foreground">
                  For Car Drivers
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Valid driver's license (Class B or higher)",
                  "Vehicle registration and roadworthiness certificate",
                  "Comprehensive motor insurance",
                  "Smartphone with GPS and data capabilities",
                  "Clean driving record (no major violations)",
                  "Knowledge of regional and cross-border routes",
                ].map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span className="text-card-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-primary/5 to-pink-500/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-center text-card-foreground">
              Special Programs
            </h3>
            <p className="text-center text-muted-foreground mb-6">
              We offer additional support for women delivery partners, youth
              programs, and special incentives for rural area coverage across
              Africa.
            </p>
            <div className="text-center">
              <Button variant="outline">
                Learn About Special Rider Programs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
