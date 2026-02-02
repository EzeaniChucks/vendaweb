// app/page.tsx
import Hero from "../components/sections/hero";
import Collections from "../components/sections/collections";
import Features from "../components/sections/features";
import AppShowcase from "../components/sections/app-showcase";
import HowItWorks from "../components/sections/how-it-works";
import Testimonials from "../components/sections/testimonials";
import CTASection from "../components/sections/cta-section";
import BlogPreview from "../components/sections/blog-preview";

export default function Home() {
  return (
    <>
      <Hero />
      <Collections />
      <Features />
      <HowItWorks />
      <AppShowcase />
      <Testimonials />
      <BlogPreview />
      <CTASection />
    </>
  );
}
