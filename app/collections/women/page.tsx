// app/collections/women/page.tsx
import { CollectionGrid } from "@/components/sections/collection-grid";
import { FilterSidebar } from "@/components/sections/filter-sidebar";

export default function WomenCollectionsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-foreground">
                African Women's
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                Fashion
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover elegant and stylish African women's fashion from local designers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8">
            <FilterSidebar />
            <CollectionGrid />
          </div>
        </div>
      </section>
    </div>
  );
}