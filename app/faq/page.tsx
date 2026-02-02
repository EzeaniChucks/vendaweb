// app/faq/page.tsx
"use client";

import { useState } from "react";
import {
  ChevronDown,
  Search,
  ShoppingBag,
  User,
  Truck,
  CreditCard,
  Package,
  Globe,
  Shield,
} from "lucide-react";
import { Input } from "../../components/ui/input";

const faqCategories = [
  {
    icon: ShoppingBag,
    label: "African Fashion Shopping",
    color: "from-primary to-pink-500",
  },
  {
    icon: User,
    label: "Artisans & Vendors",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Truck,
    label: "Pan-African Delivery",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: CreditCard,
    label: "African Payments",
    color: "from-orange-500 to-red-500",
  },
];

const faqs = {
  "african fashion shopping": [
    {
      question: "How do I shop for authentic African fashion on Venda?",
      answer:
        "Download the Venda Fashion app, create an account, and explore curated African fashion collections. Filter by region (West Africa, East Africa, etc.), fabric type (Ankara, Kente, Bogolan), or artisan to find authentic pieces.",
    },
    {
      question: "How can I verify the authenticity of African pieces?",
      answer:
        "Each product includes artisan verification, material source transparency, and cultural origin information. We work with cultural experts and artisan cooperatives to ensure authenticity and proper cultural representation.",
    },
    {
      question: "What's your return policy for African fashion items?",
      answer:
        "We offer a 21-day return policy for African fashion items. Returns are accepted for size exchanges or quality issues. Custom-made or personalized items may have different return conditions as indicated at purchase.",
    },
    {
      question: "How do I care for African fabrics like Ankara and Kente?",
      answer:
        "We provide specific care instructions for each item. Generally, hand wash African fabrics in cold water with mild detergent, avoid direct sunlight when drying, and iron on low heat with a cloth barrier to preserve colors and patterns.",
    },
  ],
  "artisans & vendors": [
    {
      question: "How do I become an African fashion artisan on Venda?",
      answer:
        "Apply through our Artisan Portal with documentation of your craftsmanship, cultural heritage, and business registration. We prioritize traditional artisans, women-led businesses, and community cooperatives across Africa.",
    },
    {
      question: "What support do you provide to African artisans?",
      answer:
        "We offer fair pricing guidance, international shipping assistance, business development workshops, access to sustainable materials, and connections to global fashion markets through our partnerships.",
    },
    {
      question: "How are artisans verified on your platform?",
      answer:
        "We conduct cultural authenticity verification, craftsmanship assessment, and community validation. Many artisans are verified through established artisan cooperatives, cultural institutions, and Ministry of Culture partnerships.",
    },
  ],
  "pan-african delivery": [
    {
      question: "How does delivery work across African countries?",
      answer:
        "We've partnered with reliable logistics providers across Africa. Delivery times vary: 3-5 days within countries, 7-14 days for cross-border African delivery, and 10-21 days for international shipping from Africa.",
    },
    {
      question: "What are the delivery costs for African orders?",
      answer:
        "Local delivery: $3-8. Cross-border Africa: $12-25. International from Africa: Based on destination. We offer free delivery for orders over $150 within Africa and have special rates for artisan cooperatives.",
    },
    {
      question: "How do I track my African fashion order?",
      answer:
        "Track through the app with real-time updates. For rural areas in Africa, we provide SMS tracking. For international orders, we offer end-to-end tracking from artisan workshop to your doorstep.",
    },
  ],
  "african payments": [
    {
      question: "What African payment methods do you accept?",
      answer:
        "Mobile Money (M-Pesa, MTN MoMo, Airtel Money), local bank transfers in 15+ African currencies, credit/debit cards, and digital wallets. We're adding more local payment options across the continent.",
    },
    {
      question: "How are artisans paid across Africa?",
      answer:
        "Artisans receive payments in their local currency via Mobile Money or bank transfer within 3-5 business days after order confirmation. We handle currency conversion and minimize transaction fees.",
    },
    {
      question: "Is my payment information secure for African transactions?",
      answer:
        "Yes! We use PCI-DSS compliant payment processing with bank-level encryption. All transactions are secured with 256-bit SSL encryption and comply with local financial regulations across Africa.",
    },
  ],
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(
    "african fashion shopping"
  );
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs =
    faqs[activeCategory as keyof typeof faqs]?.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-foreground">African Fashion</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                Help Center
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers about shopping authentic African fashion, becoming an
              artisan, delivery across Africa, and secure payments.
            </p>

            {/* Search */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search African fashion questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-3 text-lg rounded-full border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {faqCategories.map((category) => (
              <button
                key={category.label}
                onClick={() => {
                  setActiveCategory(category.label.toLowerCase());
                  setOpenIndex(0);
                }}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all border ${
                  activeCategory === category.label.toLowerCase()
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg border-transparent`
                    : "bg-card hover:shadow-lg border-border"
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.label}</span>
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl shadow-lg overflow-hidden border border-border"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-accent/50 transition-colors"
                  >
                    <span className="text-lg font-medium text-card-foreground">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform text-muted-foreground ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`px-6 transition-all duration-300 ${
                      openIndex === index ? "pb-4" : "max-h-0 overflow-hidden"
                    }`}
                  >
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Still have questions */}
            <div className="mt-16 text-center bg-card p-8 rounded-2xl border border-border">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Pan-African Support
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                Need African Fashion Support?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our support team across Africa speaks English, French, Swahili,
                Portuguese, and local languages. We understand African fashion
                nuances and cultural contexts.
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
