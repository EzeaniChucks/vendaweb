// components/layout/navigation.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Menu, X, ShoppingBag, User, Sun, Moon } from "lucide-react";
import { useTheme } from "../providers/theme-provider";
import { cn } from "../../lib/utils";
import Image from "next/image";

// If logo.png is in public folder
// OR import it if it's in assets folder:
// import LogoImage from "../../assets/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "Designers", href: "/designers" },
  { label: "For Vendors", href: "/vendors" },
  { label: "For Riders", href: "/riders" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 pb-2 pt-2",
        scrolled
          ? "bg-background/90 backdrop-blur-lg shadow-lg"
          : "bg-background"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Fixed */}
          <Link href="/" className="flex items-center gap-2 min-w-[150px]">
            {/* Option 1: If logo is in public folder */}
            <Image
              src="/assets/logo.png"
              alt="Venda Fashion Logo"
              width={400}
              height={400}
              className="h-40 w-40"
            />

            {/* <img src="/assets/logo.png" alt="Logo" className="h-50 w-50" /> */}
            {/* Option 2: Fallback if no image */}
            {/* <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-primary-foreground" />
            </div> */}

            {/* <span className="text-2xl font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              Venda
            </span> */}
          </Link>

          {/* Rest of your navigation code remains the same */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm text-center font-medium transition-colors hover:text-primary relative",
                  pathname === item.href ? "text-primary" : "text-foreground/80"
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-pink-500" />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>

            <div className="hidden lg:flex items-center gap-3">
              <Button variant="outline" size="sm" className="gap-2">
                <User className="w-4 h-4" />
                Sign In
              </Button>
              <Button
                size="sm"
                className="gap-2 bg-gradient-to-r from-primary to-pink-500"
              >
                <ShoppingBag className="w-4 h-4" />
                Download App
              </Button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden border-t border-border mt-2 py-4 rounded-b-lg shadow-lg">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg transition-colors mx-2",
                    pathname === item.href
                      ? "bg-accent text-primary font-medium"
                      : "hover:bg-accent"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 px-4 pt-4 border-t border-border mt-2">
                <Button
                  variant="outline"
                  className="w-full justify-center gap-2"
                >
                  <User className="w-4 h-4" />
                  Sign In
                </Button>
                <Button className="w-full justify-center gap-2 bg-gradient-to-r from-primary to-pink-500">
                  <ShoppingBag className="w-4 h-4" />
                  Download App
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
