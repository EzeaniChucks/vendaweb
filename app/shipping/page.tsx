// app/shipping/page.tsx
import { Truck, Clock, Globe, Shield, Package, MapPin } from "lucide-react";

export default function ShippingPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card mb-6 border border-border">
              <Truck className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-card-foreground">
                Pan-African Logistics
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">African Fashion</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                Shipping & Delivery
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Transparent shipping options, realistic delivery timelines, and
              reliable tracking for authentic African fashion pieces.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-card-foreground">
                Realistic Timelines
              </h3>
              <p className="text-sm text-muted-foreground">
                Accurate estimates for African logistics
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-card-foreground">
                Secure Handling
              </h3>
              <p className="text-sm text-muted-foreground">
                Special care for delicate African fabrics
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-card-foreground">
                Wide Coverage
              </h3>
              <p className="text-sm text-muted-foreground">
                Across Africa & worldwide
              </p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-foreground">African Shipping Options</h2>
            <p className="text-card-foreground">
              We've partnered with reliable logistics providers across Africa to
              offer multiple shipping options designed for fashion items:
            </p>

            <div className="my-8 space-y-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-card-foreground">
                    Standard African Shipping
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li className="text-card-foreground">
                    <strong>Delivery:</strong> 5-7 business days within Africa
                  </li>
                  <li className="text-card-foreground">
                    <strong>Cost:</strong> Free on orders over $75 within Africa
                  </li>
                  <li className="text-card-foreground">
                    <strong>Tracking:</strong> Full end-to-end tracking with SMS
                    updates
                  </li>
                  <li className="text-card-foreground">
                    <strong>Coverage:</strong> Major cities across 25 African
                    countries
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-card-foreground">
                    Express African Delivery
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li className="text-card-foreground">
                    <strong>Delivery:</strong> 2-3 business days within Africa
                  </li>
                  <li className="text-card-foreground">
                    <strong>Cost:</strong> Additional $12.99 (waived over $150)
                  </li>
                  <li className="text-card-foreground">
                    <strong>Priority:</strong> Expedited processing and handling
                  </li>
                  <li className="text-card-foreground">
                    <strong>Features:</strong> Real-time tracking and delivery
                    alerts
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-card-foreground">
                    Same-Day City Delivery
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li className="text-card-foreground">
                    <strong>Availability:</strong> Lagos, Nairobi, Accra,
                    Johannesburg, Cairo
                  </li>
                  <li className="text-card-foreground">
                    <strong>Cut-off:</strong> Order before 1 PM for same-day
                    delivery
                  </li>
                  <li className="text-card-foreground">
                    <strong>Cost:</strong> Additional $9.99
                  </li>
                  <li className="text-card-foreground">
                    <strong>Service:</strong> Hand-delivered by verified Venda
                    Riders
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6 text-foreground flex items-center gap-2">
              <Globe className="w-6 h-6 text-primary" />
              International Shipping from Africa
            </h3>
            <div className="bg-card p-6 rounded-xl border border-border mb-8">
              <p className="text-card-foreground mb-4">
                We ship authentic African fashion worldwide with special
                handling for cultural pieces:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3 text-card-foreground">
                    Standard International
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-card-foreground">
                      • 10-15 business days worldwide
                    </li>
                    <li className="text-card-foreground">
                      • Customs documentation included
                    </li>
                    <li className="text-card-foreground">
                      • Tracked with international partners
                    </li>
                    <li className="text-card-foreground">
                      • Starting at $24.99
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-card-foreground">
                    Express International
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-card-foreground">
                      • 5-7 business days worldwide
                    </li>
                    <li className="text-card-foreground">
                      • Priority customs clearance
                    </li>
                    <li className="text-card-foreground">
                      • Real-time global tracking
                    </li>
                    <li className="text-card-foreground">
                      • Starting at $39.99
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-pink-500/5 p-6 rounded-xl border border-primary/20">
              <h4 className="text-lg font-bold mb-3 text-card-foreground">
                Important Notes for African Fashion Shipping
              </h4>
              <ul className="space-y-2">
                <li className="text-card-foreground">
                  • Delicate fabrics (Ankara, Kente, etc.) receive special
                  protective packaging
                </li>
                <li className="text-card-foreground">
                  • Rural area deliveries may have extended timelines
                </li>
                <li className="text-card-foreground">
                  • Some countries have import restrictions on cultural
                  artifacts - check before ordering
                </li>
                <li className="text-card-foreground">
                  • All shipments include care instructions for African fabrics
                </li>
              </ul>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Need specific shipping information for your location?
              </p>
              <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-pink-500 text-white font-medium hover:shadow-lg transition-shadow">
                Check Shipping to Your Location
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
