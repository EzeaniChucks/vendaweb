// app/careers/page.tsx
export default function CareersPage() {
  const positions = [
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote (Africa)",
      type: "Full-time",
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "Lagos, Nigeria",
      type: "Full-time",
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote (Africa)",
      type: "Full-time",
    },
    {
      title: "Customer Support",
      department: "Operations",
      location: "Remote (Africa)",
      type: "Full-time",
    },
    {
      title: "African Fashion Curator",
      department: "Creative",
      location: "Accra, Ghana",
      type: "Full-time",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">Join Our African</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                Fashion Mission
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Help us revolutionize African fashion commerce while growing your
              career across the continent.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Open Positions Across Africa
            </h2>

            <div className="space-y-6">
              {positions.map((position) => (
                <div
                  key={position.title}
                  className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-border"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-card-foreground">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-muted-foreground">
                        <span>{position.department}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                        <span>•</span>
                        <span>{position.type}</span>
                      </div>
                    </div>

                    <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-pink-500 text-white font-medium hover:shadow-lg transition-shadow whitespace-nowrap">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
