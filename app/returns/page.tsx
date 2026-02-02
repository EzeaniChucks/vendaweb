// app/returns/page.tsx
import {
  Package,
  RefreshCw,
  Shield,
  Clock,
  Truck,
  CheckCircle,
} from "lucide-react";

export default function ReturnsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card mb-6 border border-border">
              <Package className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-card-foreground">
                Hassle-Free Returns
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">African Fashion</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                Returns & Care
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Our simple, fair return policy designed for authentic African
              fashion pieces with special care instructions.
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
                21-Day Returns
              </h3>
              <p className="text-sm text-muted-foreground">
                Generous return window for African fashion
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <Truck className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-card-foreground">
                Free African Returns
              </h3>
              <p className="text-sm text-muted-foreground">
                On orders over $100 within Africa
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-card-foreground">
                Quality Guarantee
              </h3>
              <p className="text-sm text-muted-foreground">
                Authenticity and craftsmanship assured
              </p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="flex items-center gap-3 text-foreground">
              <RefreshCw className="w-6 h-6 text-primary" />
              Return Policy for African Fashion
            </h2>
            <p className="text-card-foreground">
              We want you to love your authentic African fashion purchase. If
              you're not completely satisfied, you can return most items within
              21 days of delivery. Please note that due to the handmade nature
              of many African pieces, some items may have slight variations that
              add to their unique character.
            </p>

            <div className="my-8 p-6 rounded-xl bg-gradient-to-r from-primary/5 to-pink-500/5 border border-border">
              <h3 className="text-xl font-bold mb-4 text-card-foreground">
                Return Conditions for African Pieces
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-card-foreground">
                    <strong>Original Condition:</strong> Items must be unworn,
                    unaltered, and in original condition
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-card-foreground">
                    <strong>Tags Attached:</strong> All original tags and labels
                    must be present
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-card-foreground">
                    <strong>Original Packaging:</strong> Return in original
                    packaging when possible to protect delicate items
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-card-foreground">
                    <strong>Proof of Purchase:</strong> Order confirmation or
                    receipt required
                  </span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6 text-foreground">
              How to Return African Fashion Items
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h4 className="text-lg font-bold mb-4 text-card-foreground">
                  Online Return Process
                </h4>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </span>
                    <span className="text-card-foreground">
                      Log into your Venda account and go to "My Orders"
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </span>
                    <span className="text-card-foreground">
                      Select the African fashion item you wish to return
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </span>
                    <span className="text-card-foreground">
                      Choose return reason and preferred return method
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      4
                    </span>
                    <span className="text-card-foreground">
                      Print return label or use QR code for drop-off
                    </span>
                  </li>
                </ol>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h4 className="text-lg font-bold mb-4 text-card-foreground">
                  African Return Options
                </h4>
                <ul className="space-y-3">
                  <li className="text-card-foreground">
                    <strong>Local Drop-off:</strong> Use our partner locations
                    across major African cities
                  </li>
                  <li className="text-card-foreground">
                    <strong>Home Pickup:</strong> Available in select urban
                    areas (additional fee may apply)
                  </li>
                  <li className="text-card-foreground">
                    <strong>International Returns:</strong> Contact support for
                    cross-border return assistance
                  </li>
                  <li className="text-card-foreground">
                    <strong>Artisan Direct Returns:</strong> For custom pieces,
                    coordinate directly with artisan
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6 text-foreground">
              African Fashion Care & Maintenance
            </h3>
            <div className="bg-card p-6 rounded-xl border border-border mb-8">
              <p className="text-card-foreground mb-4">
                To preserve your African fashion pieces:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3 text-card-foreground">
                    Fabric Care
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-card-foreground">
                      • Hand wash Ankara and delicate fabrics
                    </li>
                    <li className="text-card-foreground">
                      • Use mild detergent and cold water
                    </li>
                    <li className="text-card-foreground">
                      • Avoid direct sunlight when drying
                    </li>
                    <li className="text-card-foreground">
                      • Iron on low heat with cloth barrier
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-card-foreground">
                    Storage Tips
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-card-foreground">
                      • Store in cool, dry places
                    </li>
                    <li className="text-card-foreground">
                      • Use acid-free tissue for delicate pieces
                    </li>
                    <li className="text-card-foreground">
                      • Avoid plastic bags for long-term storage
                    </li>
                    <li className="text-card-foreground">
                      • Keep beaded items flat to prevent stretching
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Need help with returns or have questions about caring for your
                African fashion?
              </p>
              <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-pink-500 text-white font-medium hover:shadow-lg transition-shadow">
                Contact African Support Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
