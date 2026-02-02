// app/guide/page.tsx
import {
  CheckCircle,
  Rocket,
  TrendingUp,
  Shield,
  Users,
  Target,
} from "lucide-react";

export default function GuidePage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card mb-6 border border-border">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-card-foreground">
                African Fashion Success
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">African Artisan</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                Success Guide
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know to successfully sell authentic African
              fashion creations on Venda and reach global markets.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-card-foreground">
                Community Support
              </h3>
              <p className="text-muted-foreground">
                Join 2,000+ African artisans sharing knowledge and growing
                together.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-card-foreground">
                Global Reach
              </h3>
              <p className="text-muted-foreground">
                Access fashion lovers in 50+ countries appreciating African
                craftsmanship.
              </p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="flex items-center gap-3 text-foreground">
              <Rocket className="w-6 h-6 text-primary" />
              Launching Your African Fashion Journey
            </h2>
            <p className="text-card-foreground">
              Welcome to Venda Fashion! This comprehensive guide will help you
              establish your presence, showcase authentic African fashion, and
              build a sustainable business connecting with customers worldwide
              who value heritage and craftsmanship.
            </p>

            <div className="my-8 p-6 rounded-xl bg-gradient-to-r from-primary/5 to-pink-500/5 border border-border">
              <h3 className="text-xl font-bold mb-4 text-card-foreground">
                Quick Start Checklist
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-card-foreground">
                    Complete artisan verification
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-card-foreground">
                    Set up cultural story profile
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-card-foreground">
                    Upload high-quality product photos
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-card-foreground">
                    Configure African payment methods
                  </span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6 text-foreground">
              1. Create Your Artisan Profile
            </h3>
            <div className="bg-card p-6 rounded-xl border border-border mb-8">
              <p className="text-card-foreground mb-4">
                Your profile tells your cultural story. Include:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-card-foreground">
                    <strong>Cultural Heritage:</strong> Share the traditions and
                    techniques behind your craft
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-card-foreground">
                    <strong>Artisan Story:</strong> Explain your journey and
                    what makes your work unique
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-card-foreground">
                    <strong>Material Sourcing:</strong> Describe the authentic
                    African materials you use
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-card-foreground">
                    <strong>Production Process:</strong> Detail your traditional
                    or contemporary techniques
                  </span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6 text-foreground">
              2. Showcase Your African Collections
            </h3>
            <p className="text-card-foreground mb-6">
              Present your African fashion items in ways that resonate with
              global customers while honoring cultural authenticity:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h4 className="font-bold mb-3 text-card-foreground">
                  Photography Guidelines
                </h4>
                <ul className="space-y-2">
                  <li className="text-card-foreground">
                    • Use natural lighting to show true colors
                  </li>
                  <li className="text-card-foreground">
                    • Show cultural context and real-life wear
                  </li>
                  <li className="text-card-foreground">
                    • Include detail shots of craftsmanship
                  </li>
                  <li className="text-card-foreground">
                    • Feature diverse models when possible
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h4 className="font-bold mb-3 text-card-foreground">
                  Pricing Strategy
                </h4>
                <ul className="space-y-2">
                  <li className="text-card-foreground">
                    • Value your time and skill appropriately
                  </li>
                  <li className="text-card-foreground">
                    • Consider material costs and rarity
                  </li>
                  <li className="text-card-foreground">
                    • Factor in cultural significance
                  </li>
                  <li className="text-card-foreground">
                    • Research similar authentic pieces
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6 text-foreground">
              3. Manage African & International Orders
            </h3>
            <div className="bg-card p-6 rounded-xl border border-border mb-8">
              <p className="text-card-foreground mb-4">
                We've simplified logistics for African artisans:
              </p>
              <ul className="space-y-3">
                <li className="text-card-foreground">
                  <strong>Local Pickups:</strong> Arrange with our African
                  logistics partners
                </li>
                <li className="text-card-foreground">
                  <strong>Packaging:</strong> Use materials that protect while
                  telling your story
                </li>
                <li className="text-card-foreground">
                  <strong>Documentation:</strong> Include cultural information
                  and care instructions
                </li>
                <li className="text-card-foreground">
                  <strong>Tracking:</strong> All orders include real-time
                  tracking
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6 text-foreground">
              4. Grow Your African Fashion Business
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-pink-500/5 border border-border">
                <TrendingUp className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-lg font-bold mb-3 text-card-foreground">
                  Analytics & Insights
                </h4>
                <p className="text-muted-foreground">
                  Track which African designs resonate globally, understand
                  customer demographics, and optimize your offerings based on
                  data.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-pink-500/5 border border-border">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-lg font-bold mb-3 text-card-foreground">
                  Quality Standards
                </h4>
                <p className="text-muted-foreground">
                  Maintain authenticity while meeting international quality
                  expectations. We provide guidance on sustainable practices and
                  ethical production.
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary to-pink-500 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Share African Fashion?
              </h3>
              <p className="mb-6 opacity-90">
                Join thousands of African artisans already growing their
                businesses globally through Venda Fashion.
              </p>
              <button className="px-8 py-3 rounded-lg bg-white text-primary font-bold hover:bg-white/90 transition-colors">
                Start Your Artisan Journey
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
