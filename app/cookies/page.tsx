// app/cookies/page.tsx
import { Shield, Cookie, Settings, Eye, Lock, RefreshCw } from "lucide-react";

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card mb-6 border border-border">
              <Cookie className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-card-foreground">
                Privacy & Transparency
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">Cookie & Tracking</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                Transparency Center
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Learn how we use cookies and similar technologies to enhance your
              African fashion shopping experience while protecting your privacy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-2xl bg-card border border-border">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-card-foreground">
                Privacy First
              </h3>
              <p className="text-muted-foreground">
                GDPR & African data protection compliant
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card border border-border">
              <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-card-foreground">
                Complete Control
              </h3>
              <p className="text-muted-foreground">
                Manage your preferences anytime
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card border border-border">
              <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-card-foreground">
                Data Protection
              </h3>
              <p className="text-muted-foreground">
                Bank-level encryption for all data
              </p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="flex items-center gap-3 text-foreground">
              <Cookie className="w-6 h-6 text-primary" />
              Understanding Digital Cookies
            </h2>
            <p className="text-card-foreground">
              Cookies are small text files that websites store on your device to
              remember information about your visit. At Venda Fashion, we use
              cookies thoughtfully to enhance your experience while shopping for
              African fashion, ensuring both convenience and privacy.
            </p>

            <div className="my-8 p-6 rounded-xl bg-gradient-to-r from-primary/5 to-pink-500/5 border border-border">
              <h3 className="text-xl font-bold mb-3 text-card-foreground flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                How We Use Cookies Responsibly
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-card-foreground">
                    <strong>Personalized Recommendations:</strong> Suggest
                    African fashion items based on your browsing history and
                    preferences
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-card-foreground">
                    <strong>Shopping Convenience:</strong> Remember items in
                    your cart, size preferences, and shipping addresses
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-card-foreground">
                    <strong>Site Performance:</strong> Load pages faster and
                    remember your language and currency preferences
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-card-foreground">
                    <strong>Security Enhancement:</strong> Protect your account
                    and prevent fraudulent activities
                  </span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6 text-foreground">
              Categories of Cookies We Use
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h4 className="text-lg font-bold mb-3 text-card-foreground">
                  Essential Cookies
                </h4>
                <p className="text-muted-foreground mb-3">
                  Required for core functionality:
                </p>
                <ul className="space-y-1">
                  <li className="text-card-foreground">
                    • User authentication and session management
                  </li>
                  <li className="text-card-foreground">
                    • Shopping cart functionality
                  </li>
                  <li className="text-card-foreground">
                    • Security and fraud prevention
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h4 className="text-lg font-bold mb-3 text-card-foreground">
                  Analytics Cookies
                </h4>
                <p className="text-muted-foreground mb-3">
                  Help us improve your experience:
                </p>
                <ul className="space-y-1">
                  <li className="text-card-foreground">
                    • Understand how users navigate our platform
                  </li>
                  <li className="text-card-foreground">
                    • Identify popular African fashion trends
                  </li>
                  <li className="text-card-foreground">
                    • Optimize page loading and performance
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h4 className="text-lg font-bold mb-3 text-card-foreground">
                  Functionality Cookies
                </h4>
                <p className="text-muted-foreground mb-3">
                  Enhance your shopping experience:
                </p>
                <ul className="space-y-1">
                  <li className="text-card-foreground">
                    • Remember language and currency preferences
                  </li>
                  <li className="text-card-foreground">
                    • Save favorite designers and artisans
                  </li>
                  <li className="text-card-foreground">
                    • Store size and fit preferences
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h4 className="text-lg font-bold mb-3 text-card-foreground">
                  Marketing Cookies
                </h4>
                <p className="text-muted-foreground mb-3">
                  Show relevant African fashion content:
                </p>
                <ul className="space-y-1">
                  <li className="text-card-foreground">
                    • Display personalized fashion recommendations
                  </li>
                  <li className="text-card-foreground">
                    • Show relevant African designer promotions
                  </li>
                  <li className="text-card-foreground">
                    • Measure campaign effectiveness
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6 text-foreground flex items-center gap-3">
              <RefreshCw className="w-6 h-6 text-primary" />
              Managing Your Cookie Preferences
            </h3>
            <div className="bg-card p-6 rounded-xl border border-border mb-8">
              <p className="text-card-foreground mb-4">
                You have complete control over cookie settings. Here's how to
                manage them:
              </p>
              <ol className="space-y-4">
                <li className="text-card-foreground">
                  <strong>Browser Settings:</strong> Most browsers allow you to
                  block or delete cookies. Visit your browser's help section for
                  instructions.
                </li>
                <li className="text-card-foreground">
                  <strong>Cookie Consent Banner:</strong> Use our cookie consent
                  banner to select which types of cookies you accept.
                </li>
                <li className="text-card-foreground">
                  <strong>Opt-Out Tools:</strong> Use industry opt-out tools
                  like the Digital Advertising Alliance's opt-out page for
                  advertising cookies.
                </li>
                <li className="text-card-foreground">
                  <strong>Platform Settings:</strong> Manage preferences in your
                  Venda Fashion account settings under "Privacy & Security".
                </li>
              </ol>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-pink-500/10 p-6 rounded-xl border border-primary/20">
              <h4 className="text-lg font-bold mb-3 text-card-foreground">
                Important Note
              </h4>
              <p className="text-card-foreground">
                <strong>Essential cookies cannot be disabled</strong> as they
                are necessary for the basic functionality of our platform.
                Disabling other cookies may affect features like personalized
                recommendations, saved preferences, and shopping cart
                functionality.
              </p>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Last updated: March 15, 2024 | Version 2.1
              </p>
              <p className="text-card-foreground">
                For questions about our cookie policy or data practices, please
                contact our privacy team at{" "}
                <a
                  href="mailto:privacy@venda-fashion.africa"
                  className="text-primary hover:underline"
                >
                  privacy@venda-fashion.africa
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
