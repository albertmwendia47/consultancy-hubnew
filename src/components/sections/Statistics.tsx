import { TrendingUp, Users, Globe, Award } from "lucide-react";

export const Statistics = () => {
  const stats = [
    {
      icon: Users,
      number: "150+",
      label: "Professionals",
      description: "Expert consultants worldwide"
    },
    {
      icon: Globe,
      number: "25+",
      label: "Countries",
      description: "Global presence and reach"
    },
    {
      icon: TrendingUp,
      number: "$2.8B",
      label: "Transaction Value",
      description: "Successfully completed in 2024"
    },
    {
      icon: Award,
      number: "500+",
      label: "Projects Delivered",
      description: "Across diverse industries"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Driving Excellence Through
            <span className="block text-primary">Proven Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our track record speaks for itself. With a growing number of clients who see us as trusted long-term advisors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6">
                <stat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
              <h4 className="text-xl font-semibold text-foreground mb-2">{stat.label}</h4>
              <p className="text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};