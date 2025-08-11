import { Award, Star, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Recognitions = () => {
  const recognitions = [
    {
      icon: Trophy,
      title: "Best Consultancy Firm",
      year: "2024",
      organization: "Global Business Excellence Awards",
      description: "Recognized for outstanding performance in strategic consulting"
    },
    {
      icon: Star,
      title: "Top Workplace Certified",
      year: "2024",
      organization: "Great Place to Work®",
      description: "Certified for our commitment to positive workplace culture"
    },
    {
      icon: Award,
      title: "Deal of the Year",
      year: "2023",
      organization: "M&A Worldwide",
      description: "Outstanding achievement in cross-border transactions"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
            Awards & Recognition
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Industry Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence has been recognized by leading industry organizations worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recognitions.map((recognition, index) => (
            <Card
              key={index}
              className="group hover:shadow-medium transition-all duration-300 border-0 shadow-soft animate-slide-in-right"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 text-accent rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <recognition.icon className="w-10 h-10" />
                </div>
                <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                  {recognition.year}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {recognition.title}
                </h3>
                <div className="text-primary font-semibold mb-4">
                  {recognition.organization}
                </div>
                <p className="text-muted-foreground">
                  {recognition.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};