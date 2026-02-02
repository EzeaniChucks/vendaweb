// components/layout/footer.tsx
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ShoppingBag,
} from "lucide-react";

const footerLinks = {
  "African Fashion": [
    { label: "Women's Collections", href: "/collections/women" },
    { label: "Men's Collections", href: "/collections/men" },
    { label: "Accessories", href: "/collections/accessories" },
    { label: "New Arrivals", href: "/collections/new" },
  ],
  "Sell with Venda": [
    { label: "Become an Artisan", href: "/vendors" },
    { label: "Artisan Success Guide", href: "/guide" },
    { label: "African Pricing", href: "/pricing" },
    { label: "Success Stories", href: "/success-stories" },
  ],
  Company: [
    { label: "About African Fashion", href: "/about" },
    { label: "Careers in Africa", href: "/careers" },
    { label: "Press & Media", href: "/press" },
    { label: "Contact African Support", href: "/contact" },
  ],
  Support: [
    { label: "African Fashion FAQ", href: "/faq" },
    { label: "Pan-African Shipping", href: "/shipping" },
    { label: "Returns & Care", href: "/returns" },
    { label: "Privacy & Security", href: "/privacy" },
  ],
};

const socialLinks = [
  {
    icon: Facebook,
    href: "https://facebook.com/vendaafrica",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/venda.africa",
    label: "Instagram",
  },
  { icon: Twitter, href: "https://twitter.com/venda_africa", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com/vendaafrica", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-secondary to-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                <ShoppingBag className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                Venda
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Connecting African fashion artisans with conscious consumers
              worldwide. Celebrating heritage, craftsmanship, and sustainable
              commerce.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-card hover:bg-accent transition-colors border border-border group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-card-foreground mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm group flex items-center gap-2"
                    >
                      <div className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-border" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Venda Fashion Africa. Empowering
            artisans across the continent.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-primary transition-colors hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies"
              className="text-muted-foreground hover:text-primary transition-colors hover:underline"
            >
              Cookie Policy
            </Link>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Available across Africa:</span>
            <span className="font-bold text-primary">iOS</span>
            <span>&</span>
            <span className="font-bold text-primary">Android</span>
          </div>
        </div>

        {/* Regional offices */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Regional Offices: Lagos, Nigeria • Nairobi, Kenya • Accra, Ghana •
            Johannesburg, South Africa
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Supporting artisans in English, French, Swahili, and local languages
          </p>
        </div>
      </div>
    </footer>
  );
}
