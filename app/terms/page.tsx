// app/terms/page.tsx
import {
  FileText,
  Shield,
  Users,
  Globe,
  Scale,
  AlertCircle,
} from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card mb-6 border border-border">
              <Scale className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-card-foreground">
                Legal Framework
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">Terms of</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                Service Agreement
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Last updated: March 15, 2024 | Version 4.1
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <Globe className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-card-foreground">
                Pan-African Coverage
              </h3>
              <p className="text-sm text-muted-foreground">
                Applicable across African jurisdictions
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-card-foreground">
                Three-Party Framework
              </h3>
              <p className="text-sm text-muted-foreground">
                Shoppers, artisans, delivery partners
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-card-foreground">
                Protection Focus
              </h3>
              <p className="text-sm text-muted-foreground">
                Rights and responsibilities defined
              </p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-card p-6 rounded-xl border border-border mb-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-card-foreground">
                  Important Notice
                </h3>
              </div>
              <p className="text-card-foreground">
                By accessing and using Venda Fashion, you accept and agree to be
                bound by these Terms of Service. Please read them carefully as
                they govern your use of our platform for discovering,
                purchasing, selling, or delivering authentic African fashion.
              </p>
            </div>

            <h2 className="flex items-center gap-3 text-foreground">
              <FileText className="w-6 h-6 text-primary" />
              1. Agreement Overview
            </h2>
            <p className="text-card-foreground">
              This Terms of Service Agreement ("Agreement") constitutes a
              legally binding contract between you ("User") and Venda Fashion
              Ltd. ("Venda," "we," "us," or "our") governing your access to and
              use of the Venda Fashion platform, including our website, mobile
              applications, and related services ("Platform").
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4 text-foreground">
              Platform Purpose
            </h3>
            <div className="bg-card p-6 rounded-xl border border-border mb-6">
              <p className="text-card-foreground">Venda Fashion connects:</p>
              <ul className="space-y-3 mt-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-card-foreground">
                    <strong>Shoppers</strong> with authentic African fashion
                    pieces
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-card-foreground">
                    <strong>Artisans & Designers</strong> with global customers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-card-foreground">
                    <strong>Delivery Partners</strong> with flexible earning
                    opportunities
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="flex items-center gap-3 text-foreground mt-12">
              <Users className="w-6 h-6 text-primary" />
              2. User Accounts & Responsibilities
            </h2>
            <div className="bg-card p-6 rounded-xl border border-border mb-8">
              <p className="text-card-foreground mb-4">All users must:</p>
              <ul className="space-y-3">
                <li className="text-card-foreground">
                  <strong>Accuracy:</strong> Provide accurate and complete
                  registration information
                </li>
                <li className="text-card-foreground">
                  <strong>Security:</strong> Maintain confidentiality of account
                  credentials
                </li>
                <li className="text-card-foreground">
                  <strong>Compliance:</strong> Use the Platform in compliance
                  with applicable laws
                </li>
                <li className="text-card-foreground">
                  <strong>Age:</strong> Be at least 18 years old or the age of
                  majority in your jurisdiction
                </li>
                <li className="text-card-foreground">
                  <strong>Notification:</strong> Promptly notify us of any
                  unauthorized account use
                </li>
              </ul>
            </div>

            <h2 className="flex items-center gap-3 text-foreground mt-12">
              <Scale className="w-6 h-6 text-primary" />
              3. African Fashion Commerce Terms
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h4 className="text-lg font-bold mb-3 text-card-foreground">
                  For Shoppers
                </h4>
                <ul className="space-y-2">
                  <li className="text-card-foreground">
                    • Prices in local currency with transparent conversion
                  </li>
                  <li className="text-card-foreground">
                    • 21-day return policy for eligible items
                  </li>
                  <li className="text-card-foreground">
                    • Authenticity guarantee for African pieces
                  </li>
                  <li className="text-card-foreground">
                    • Secure payment processing
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h4 className="text-lg font-bold mb-3 text-card-foreground">
                  For Artisans
                </h4>
                <ul className="space-y-2">
                  <li className="text-card-foreground">
                    • Cultural authenticity verification required
                  </li>
                  <li className="text-card-foreground">
                    • Fair pricing and commission structure
                  </li>
                  <li className="text-card-foreground">
                    • Intellectual property protection
                  </li>
                  <li className="text-card-foreground">
                    • Quality standards compliance
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="flex items-center gap-3 text-foreground mt-12">
              <Shield className="w-6 h-6 text-primary" />
              4. Intellectual Property & Cultural Rights
            </h2>
            <div className="bg-card p-6 rounded-xl border border-border my-8">
              <p className="text-card-foreground mb-4">
                We respect and protect:
              </p>
              <ul className="space-y-3">
                <li className="text-card-foreground">
                  <strong>Cultural Designs:</strong> Traditional patterns and
                  techniques are attributed appropriately
                </li>
                <li className="text-card-foreground">
                  <strong>Artisan Rights:</strong> Creators retain rights to
                  their original designs
                </li>
                <li className="text-card-foreground">
                  <strong>Platform Content:</strong> Venda owns platform design,
                  code, and proprietary systems
                </li>
                <li className="text-card-foreground">
                  <strong>Cultural Respect:</strong> Prohibited: Cultural
                  appropriation and misrepresentation
                </li>
              </ul>
            </div>

            <h2 className="flex items-center gap-3 text-foreground mt-12">
              <AlertCircle className="w-6 h-6 text-primary" />
              5. Limitations & Dispute Resolution
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 rounded-xl bg-gradient-to-r from-primary/5 to-pink-500/5 border border-border">
                <h4 className="text-lg font-bold mb-3 text-card-foreground">
                  Liability Limitation
                </h4>
                <p className="text-muted-foreground">
                  Venda Fashion's liability is limited to the amount paid for
                  services. We are not liable for indirect, incidental, or
                  consequential damages.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-r from-primary/5 to-pink-500/5 border border-border">
                <h4 className="text-lg font-bold mb-3 text-card-foreground">
                  Dispute Resolution
                </h4>
                <p className="text-muted-foreground">
                  African arbitration preferred. Disputes will be resolved
                  through mediation in the user's home country where possible,
                  following local laws and customs.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                For questions about these terms or to request accessibility
                versions:
              </p>
              <p className="text-card-foreground">
                Contact:{" "}
                <a
                  href="mailto:legal@venda-fashion.africa"
                  className="text-primary hover:underline font-medium"
                >
                  legal@venda-fashion.africa
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
