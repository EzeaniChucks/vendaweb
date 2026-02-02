// app/collections/[slug]/page.tsx
"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import {
  Heart,
  ShoppingBag,
  Share2,
  Star,
  Truck,
  Shield,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Mock data for collections - In a real app, this would come from your database
const collectionsData = {
  "ankara-collection-2024": {
    id: 1,
    title: "Ankara Modern Collection 2024",
    designer: "Maya Adebayo",
    location: "Lagos, Nigeria",
    price: "$89.99 - $249.99",
    rating: 4.9,
    reviewCount: 128,
    description:
      "Contemporary Ankara pieces blending traditional West African prints with modern silhouettes. Each piece tells a story of cultural heritage meeting contemporary fashion.",
    story:
      "Maya Adebayo comes from a long line of Nigerian textile artists. Her grandmother taught her traditional Adire dyeing techniques, which she now combines with modern fashion design to create pieces that honor heritage while embracing the future.",
    materials: [
      "100% African Cotton",
      "Natural Dyes",
      "Handwoven Ankara Fabric",
      "Traditional Adire Techniques",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "Custom"],
    colors: [
      { name: "Royal Blue", value: "#1e3a8a" },
      { name: "Sunset Orange", value: "#ea580c" },
      { name: "Forest Green", value: "#166534" },
      { name: "Gold", value: "#ca8a04" },
    ],
    images: [
      "/collections/ankara-1.jpg",
      "/collections/ankara-2.jpg",
      "/collections/ankara-3.jpg",
      "/collections/ankara-4.jpg",
    ],
    items: [
      { name: "Ankara Midi Dress", price: "$129.99" },
      { name: "Ankara Blouse", price: "$89.99" },
      { name: "Ankara Palazzo Pants", price: "$99.99" },
      { name: "Ankara Jacket", price: "$149.99" },
      { name: "Ankara Skirt", price: "$79.99" },
      { name: "Ankara Accessory Set", price: "$49.99" },
    ],
    delivery: "5-7 days within Africa, 10-14 days international",
    returnPolicy: "21-day return policy, free returns within Africa",
    sustainability: "Ethically sourced materials, fair wages for artisans",
  },
  "kente-heritage": {
    id: 2,
    title: "Kente Heritage Collection",
    designer: "Kofi Ansah",
    location: "Kumasi, Ghana",
    price: "$149.99 - $499.99",
    rating: 4.8,
    reviewCount: 96,
    description:
      "Authentic Kente cloth pieces handwoven by master weavers in Ghana. Each pattern carries specific meanings and stories from Ashanti culture.",
    story:
      "Kofi Ansah is a third-generation Kente weaver from Kumasi. His family has been weaving Kente for over 100 years, preserving the intricate patterns and meanings that make this fabric so special.",
    materials: [
      "Handwoven Kente Cloth",
      "Silk & Cotton Blend",
      "Natural Fibers",
      "Traditional Loom Techniques",
    ],
    sizes: ["One Size", "Custom Measurements"],
    colors: [
      { name: "Gold & Black", value: "#ca8a04" },
      { name: "Red & Green", value: "#dc2626" },
      { name: "Blue & White", value: "#1e40af" },
      { name: "Multi-color", value: "#7c3aed" },
    ],
    images: [
      "/collections/kente-1.jpg",
      "/collections/kente-2.jpg",
      "/collections/kente-3.jpg",
      "/collections/kente-4.jpg",
    ],
    items: [
      { name: "Kente Stole", price: "$149.99" },
      { name: "Kente Wrap Skirt", price: "$199.99" },
      { name: "Kente Men's Agbada", price: "$499.99" },
      { name: "Kente Headwrap", price: "$79.99" },
      { name: "Kente Clutch", price: "$129.99" },
      { name: "Kente Cushion Cover", price: "$89.99" },
    ],
    delivery: "7-10 days worldwide",
    returnPolicy: "30-day return policy, special care for cultural items",
    sustainability: "Supporting traditional weaving communities",
  },
  "bohemian-africa": {
    id: 3,
    title: "Bohemian Africa Collection",
    designer: "Sahara Threads Cooperative",
    location: "Marrakech, Morocco",
    price: "$69.99 - $199.99",
    rating: 4.7,
    reviewCount: 84,
    description:
      "Free-spirited pieces inspired by North African nomadic traditions. Flowing silhouettes, intricate embroidery, and earthy tones.",
    story:
      "Sahara Threads is a women's cooperative in Morocco that empowers rural artisans. Each piece supports traditional embroidery techniques while providing sustainable income for women in remote communities.",
    materials: [
      "Linen & Cotton",
      "Hand Embroidery",
      "Natural Dyes",
      "Recycled Materials",
    ],
    sizes: ["S", "M", "L", "Oversized"],
    colors: [
      { name: "Terracotta", value: "#9a3412" },
      { name: "Sahara Sand", value: "#fbbf24" },
      { name: "Olive Green", value: "#3f6212" },
      { name: "Indigo", value: "#3730a3" },
    ],
    images: [
      "/collections/bohemian-1.jpg",
      "/collections/bohemian-2.jpg",
      "/collections/bohemian-3.jpg",
      "/collections/bohemian-4.jpg",
    ],
    items: [
      { name: "Embroidered Kaftan", price: "$149.99" },
      { name: "Moroccan Pouf", price: "$199.99" },
      { name: "Embroidered Tunic", price: "$89.99" },
      { name: "Wide-Leg Pants", price: "$99.99" },
      { name: "Fringed Shawl", price: "$69.99" },
      { name: "Embroidered Bag", price: "$129.99" },
    ],
    delivery: "5-8 days worldwide",
    returnPolicy: "14-day return policy",
    sustainability: "Women-led cooperative, eco-friendly practices",
  },
  "urban-african-streetwear": {
    id: 4,
    title: "Urban African Streetwear",
    designer: "Lagos Styles Collective",
    location: "Lagos, Nigeria",
    price: "$49.99 - $179.99",
    rating: 4.9,
    reviewCount: 156,
    description:
      "Contemporary streetwear inspired by Lagos youth culture. Bold graphics, comfortable fits, and Afro-urban aesthetics.",
    story:
      "Lagos Styles Collective is a group of young designers redefining African fashion for the urban generation. They blend traditional fabrics with modern streetwear silhouettes, creating looks that are both culturally rooted and globally relevant.",
    materials: [
      "African Print Fabrics",
      "Organic Cotton",
      "Sustainable Materials",
      "Local Production",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "Cream", value: "#fef3c7" },
      { name: "Navy", value: "#1e3a8a" },
      { name: "Olive", value: "#3f6212" },
    ],
    images: [
      "/collections/streetwear-1.jpg",
      "/collections/streetwear-2.jpg",
      "/collections/streetwear-3.jpg",
      "/collections/streetwear-4.jpg",
    ],
    items: [
      { name: "Graphic Tee", price: "$49.99" },
      { name: "Cargo Pants", price: "$89.99" },
      { name: "Hoodie", price: "$79.99" },
      { name: "Track Jacket", price: "$129.99" },
      { name: "Bucket Hat", price: "$39.99" },
      { name: "Crossbody Bag", price: "$59.99" },
    ],
    delivery: "3-5 days within Nigeria, 7-10 days international",
    returnPolicy: "14-day return policy, easy exchanges",
    sustainability: "Local manufacturing, reduced carbon footprint",
  },
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}
export default function CollectionDetailPage({ params }: BlogPostPageProps) {
  const { slug } = (React.use as any)(params);
  console.log(slug);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [selectedColor, setSelectedColor] = useState<string>("Royal Blue");
  const [quantity, setQuantity] = useState(1);

  const collection = collectionsData[slug as keyof typeof collectionsData];

  if (!collection) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero with Breadcrumb */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="mb-6">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-primary transition-colors">
                Home
              </a>
              <span>›</span>
              <a
                href="/collections"
                className="hover:text-primary transition-colors"
              >
                Collections
              </a>
              <span>›</span>
              <span className="text-foreground font-medium">
                {collection.title}
              </span>
            </nav>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-pink-500/10 mb-4">
                {/* Main Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-4xl font-bold text-primary/20">
                      {collection.title.charAt(0)}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                {collection.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-pink-500/10 ${
                      selectedImage === index ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-lg font-bold text-primary/20">
                        {index + 1}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    African Collection
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(collection.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      ({collection.reviewCount} reviews)
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl font-bold mb-4 text-foreground">
                  {collection.title}
                </h1>

                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-pink-500 flex items-center justify-center text-white text-sm font-bold">
                      {collection.designer.charAt(0)}
                    </div>
                    <span className="font-medium text-card-foreground">
                      {collection.designer}
                    </span>
                  </div>
                  <span className="text-muted-foreground">•</span>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Truck className="w-4 h-4" />
                    <span className="text-sm">{collection.location}</span>
                  </div>
                </div>

                <div className="text-3xl font-bold text-primary mb-6">
                  {collection.price}
                </div>

                <p className="text-card-foreground mb-8">
                  {collection.description}
                </p>
              </div>

              {/* Color Selection */}
              <div className="mb-8">
                <h3 className="font-bold mb-3 text-card-foreground">Color</h3>
                <div className="flex gap-3">
                  {collection.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`flex flex-col items-center gap-2 p-2 rounded-lg ${
                        selectedColor === color.name
                          ? "bg-accent ring-2 ring-primary"
                          : "hover:bg-accent"
                      }`}
                    >
                      <div
                        className="w-8 h-8 rounded-full border border-border"
                        style={{ backgroundColor: color.value }}
                      />
                      <span className="text-xs text-card-foreground">
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-card-foreground">Size</h3>
                  <button className="text-sm text-primary hover:underline">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {collection.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="mb-8">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-3 hover:bg-accent transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-3 text-card-foreground">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-3 hover:bg-accent transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <Button className="flex-1 gap-2 bg-gradient-to-r from-primary to-pink-500">
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-card-foreground">
                      Delivery
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {collection.delivery}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-card-foreground">
                      Returns
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {collection.returnPolicy}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs: Description, Story, Items */}
      <section className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="border-b border-border">
              <div className="flex gap-8">
                <button className="pb-4 font-medium text-card-foreground border-b-2 border-primary">
                  Collection Details
                </button>
                <button className="pb-4 font-medium text-muted-foreground hover:text-card-foreground">
                  Artisan Story
                </button>
                <button className="pb-4 font-medium text-muted-foreground hover:text-card-foreground">
                  Items in Collection
                </button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Description & Materials */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                About This Collection
              </h3>
              <p className="text-card-foreground mb-8 leading-relaxed">
                {collection.story}
              </p>

              <div className="mb-8">
                <h4 className="font-bold mb-4 text-card-foreground">
                  Materials & Craftsmanship
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {collection.materials.map((material) => (
                    <div key={material} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-card-foreground">{material}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Items in Collection */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h4 className="font-bold mb-6 text-card-foreground">
                Items in This Collection
              </h4>
              <div className="space-y-4">
                {collection.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors"
                  >
                    <div>
                      <div className="font-medium text-card-foreground">
                        {item.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Available in all sizes
                      </div>
                    </div>
                    <div className="font-bold text-primary">{item.price}</div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-6">
                View All Items
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Note */}
      <section className="py-12 px-4 bg-gradient-to-r from-primary/5 to-pink-500/5">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card mb-6 border border-border">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-card-foreground">
              Ethical Fashion
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Sustainable & Ethical
          </h3>
          <p className="text-card-foreground mb-6 max-w-2xl mx-auto">
            {collection.sustainability}
          </p>
          <Button variant="outline">
            Learn About Our Sustainability Practices
          </Button>
        </div>
      </section>

      {/* Related Collections */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-foreground">
              You Might Also Like
            </h3>
            <Button variant="outline">View All Collections</Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(collectionsData)
              .filter(([key]) => key !== slug)
              .slice(0, 4)
              .map(([key, coll]) => (
                <a key={key} href={`/collections/${key}`} className="group">
                  <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-primary/10 to-pink-500/10 flex items-center justify-center">
                      <div className="text-4xl font-bold text-primary/20">
                        {coll.title.charAt(0)}
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                        {coll.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        by {coll.designer}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-primary">
                          {coll.price}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{coll.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
