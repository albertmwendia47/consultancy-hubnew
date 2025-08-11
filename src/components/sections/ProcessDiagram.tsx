import processImage from "@/assets/process-diagram.jpg";
import { ArrowRight, Search, Lightbulb, Cog, TrendingUp } from "lucide-react";

export const ProcessDiagram = () => {
  const steps = [
    {
      icon: Search,
      title: "Analysis",
      description: "Comprehensive assessment of current state and opportunities"
    },
    {
      icon: Lightbulb,
      title: "Strategy",
      description: "Innovative solutions tailored to your specific challenges"
    },
    {
      icon: Cog,
      title: "Implementation",
      description: "Seamless execution with continuous monitoring and support"
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Sustainable results and long-term value creation"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Proven Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to delivering exceptional results through 
            strategic planning and meticulous execution.
          </p>
        </div>

        {/* Process Visualization */}
        <div className="relative mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Process Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 animate-slide-in-right" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-primary ml-4 hidden md:block" />
                  )}
                </div>
              ))}
            </div>

            {/* Process Diagram */}
            <div className="relative animate-scale-in">
              <img 
                src={processImage} 
                alt="Business process workflow diagram" 
                className="w-full h-auto rounded-lg shadow-medium"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Process Flow Visual */}
        <div className="hidden lg:block">
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center max-w-48">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-8 h-8 text-primary mt-4 absolute translate-x-24" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};