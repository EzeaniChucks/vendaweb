// app/privacy/page.tsx
import { Shield, Lock, Eye, Database, RefreshCw, Users } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card mb-6 border border-border">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-card-foreground">
                Data Protection & Privacy
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Last updated: March 15, 2024 | Version 3.2
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <Lock className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-card-foreground">
                GDPR Compliant
              </h3>
              <p className="text-sm text-muted-foreground">
                Meeting European data protection standards
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <Database className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-card-foreground">
                African Data Localization
              </h3>
              <p className="text-sm text-muted-foreground">
                Data stored in African cloud regions
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <Eye className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-card-foreground">
                Transparent Control
              </h3>
              <p className="text-sm text-muted-foreground">
                You control your data at all times
              </p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-foreground">Our Commitment to Your Privacy</h2>
            <p className="text-card-foreground">
              At Venda Fashion, we believe that privacy is a fundamental right.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our platform to explore,
              purchase, or sell African fashion. We are committed to
              transparency and giving you control over your personal data.
            </p>

            <div className="my-8 p-6 rounded-xl bg-gradient-to-r from-primary/5 to-pink-500/5 border border-border">
              <h3 className="text-xl font-bold mb-3 text-card-foreground flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Information We Collect Responsibly
              </h3>
              <p className="text-card-foreground mb-4">
                We collect only what's necessary to provide our services:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2 text-card-foreground">
                    Personal Information
                  </h4>
                  <ul className="space-y-1">
                    <li className="text-card-foreground">
                      • Name and contact details
                    </li>
                    <li className="text-card-foreground">
                      • Shipping and billing addresses
                    </li>
                    <li className="text-card-foreground">
                      • Payment information (encrypted)
                    </li>
                    <li className="text-card-foreground">
                      • Communication preferences
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-card-foreground">
                    Platform Usage Data
                  </h4>
                  <ul className="space-y-1">
                    <li className="text-card-foreground">
                      • Browsing and purchase history
                    </li>
                    <li className="text-card-foreground">
                      • Device and browser information
                    </li>
                    <li className="text-card-foreground">
                      • Location data (with consent)
                    </li>
                    <li className="text-card-foreground">
                      • Interaction with our platform
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6 text-foreground">
              How We Use Your Information
            </h3>
            <div className="bg-card p-6 rounded-xl border border-border mb-8">
              <p className="text-card-foreground mb-4">
                We use your information to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-card-foreground">
                    <strong>Provide Services:</strong> Process transactions,
                    deliver orders, and provide customer support
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-card-foreground">
                    <strong>Personalize Experience:</strong> Show relevant
                    African fashion recommendations based on your preferences
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-card-foreground">
                    <strong>Improve Platform:</strong> Analyze usage patterns to
                    enhance functionality and user experience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-card-foreground">
                    <strong>Communicate:</strong> Send important updates,
                    security alerts, and promotional content (with consent)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-card-foreground">
                    <strong>Ensure Security:</strong> Protect against fraud,
                    unauthorized access, and other security threats
                  </span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6 text-foreground flex items-center gap-2">
              <RefreshCw className="w-6 h-6 text-primary" />
              Your Data Rights & Control
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h4 className="text-lg font-bold mb-3 text-card-foreground">
                  Access & Correction
                </h4>
                <p className="text-muted-foreground">
                  View and update your personal information anytime through your
                  account settings.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h4 className="text-lg font-bold mb-3 text-card-foreground">
                  Data Portability
                </h4>
                <p className="text-muted-foreground">
                  Request a copy of your data in a structured, commonly used
                  format.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h4 className="text-lg font-bold mb-3 text-card-foreground">
                  Deletion Rights
                </h4>
                <p className="text-muted-foreground">
                  Request deletion of your personal data, subject to legal
                  requirements.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h4 className="text-lg font-bold mb-3 text-card-foreground">
                  Consent Management
                </h4>
                <p className="text-muted-foreground">
                  Withdraw consent for marketing communications and
                  non-essential cookies.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6 text-foreground">
              African Data Protection
            </h3>
            <div className="bg-gradient-to-r from-primary/5 to-pink-500/5 p-6 rounded-xl border border-border mb-8">
              <p className="text-card-foreground">
                We comply with emerging African data protection regulations
                including:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="text-card-foreground">
                  • Nigeria Data Protection Regulation (NDPR)
                </li>
                <li className="text-card-foreground">
                  • Kenya Data Protection Act
                </li>
                <li className="text-card-foreground">
                  • South Africa Protection of Personal Information Act (POPIA)
                </li>
                <li className="text-card-foreground">
                  • Ghana Data Protection Act
                </li>
              </ul>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                For privacy-related inquiries or to exercise your data rights:
              </p>
              <p className="text-card-foreground">
                Email our Data Protection Officer at{" "}
                <a
                  href="mailto:dpo@venda-fashion.africa"
                  className="text-primary hover:underline font-medium"
                >
                  dpo@venda-fashion.africa
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
