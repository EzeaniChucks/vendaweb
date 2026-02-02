// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "../components/layout/navigation";
// import Footer from "../components/layout/footer";
import { ThemeProvider } from "../components/providers/theme-provider";
import Footer from "../components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Venda Fashion | Shop Local, Wear Unique",
  description:
    "Discover unique fashion from local designers. Shop, sell, or deliver with Venda Fashion app.",
  keywords: ["fashion", "local designers", "shopping app", "venda", "delivery"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://venda-fashion.com",
    title: "Venda Fashion",
    description: "Discover unique fashion from local designers",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider>
          <Navigation />
          <main className="pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
