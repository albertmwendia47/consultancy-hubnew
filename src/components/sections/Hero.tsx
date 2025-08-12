import { Button } from "@/components/ui/button";
import heroImage from "@/assets/nairobi-cityscape.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Nairobi Kenya cityscape showing modern business district and skyscrapers" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent"></div>
      </div>
      
      {/* Left-aligned Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Strategic Business
            <span className="block text-accent mt-4">
              Excellence
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-lg">
            Transforming businesses through innovative consulting solutions in Kenya and beyond.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mt-12">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-10 py-6 animate-scale-in bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Discover Our Services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};