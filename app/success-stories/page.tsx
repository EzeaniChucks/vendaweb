// app/success-stories/page.tsx
import { TrendingUp, Globe, Users, Award, Star, Heart } from "lucide-react";

export default function SuccessStoriesPage() {
  const stories = [
    {
      name: "Amina Diallo",
      business: "Ankara Modern",
      location: "Dakar, Senegal",
      story:
        "Started selling traditional Senegalese prints online, now supplies boutiques in 12 countries while preserving Wolof textile traditions.",
      growth: "650%",
      years: "3",
      image: "/stories/amina.jpg",
    },
    {
      name: "Kofi Mensah",
      business: "Kente Heritage",
      location: "Kumasi, Ghana",
      story:
        "Revitalized family weaving business, now employs 15 artisans and exports authentic Kente cloth to museums and collectors worldwide.",
      growth: "420%",
      years: "2",
      image: "/stories/kofi.jpg",
    },
    {
      name: "Fatima Hassan",
      business: "Swahili Silks",
      location: "Zanzibar, Tanzania",
      story:
        "Combined traditional Swahili designs with contemporary fashion, creating a sustainable brand that supports 30 women artisans.",
      growth: "800%",
      years: "4",
      image: "/stories/fatima.jpg",
    },
  ];

  const milestones = [
    { value: "2,000+", label: "African Artisans", icon: Users },
    { value: "50+", label: "Countries Reached", icon: Globe },
    { value: "$2.5M+", label: "Annual Sales", icon: TrendingUp },
    { value: "4.9★", label: "Satisfaction", icon: Star },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card mb-6 border border-border">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-card-foreground">
                African Fashion Success
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">African Artisan</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                Success Stories
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Real stories from African artisans who transformed cultural
              heritage into thriving global businesses through Venda.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {milestones.map((milestone) => (
              <div
                key={milestone.label}
                className="text-center p-6 rounded-xl bg-card border border-border"
              >
                <milestone.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1 text-card-foreground">
                  {milestone.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {milestone.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story) => (
              <div
                key={story.name}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-border group"
              >
                <div className="h-48 bg-gradient-to-br from-primary/10 to-pink-500/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-pink-500 flex items-center justify-center text-white text-3xl font-bold">
                      {story.name.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-card/80 backdrop-blur-sm">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-bold text-card-foreground">
                        {story.growth} growth
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-4xl font-bold text-primary mb-1">
                        {story.growth}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        in {story.years} years
                      </div>
                    </div>
                    <div className="text-right">
                      <h3 className="text-2xl font-bold text-card-foreground">
                        {story.name}
                      </h3>
                      <p className="text-muted-foreground">{story.business}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <Heart className="w-3 h-3" />
                        <span>{story.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-card-foreground mb-6">"{story.story}"</p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      Featured on Venda
                    </span>
                    <button className="text-primary text-sm font-medium hover:underline group-hover:text-primary transition-colors">
                      Read Full Story →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-card p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">
              Share Your African Fashion Journey
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Are you an African artisan growing your business through Venda?
              We'd love to feature your success story and inspire others.
            </p>
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-pink-500 text-white font-medium hover:shadow-lg transition-shadow">
              Share Your Story
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
