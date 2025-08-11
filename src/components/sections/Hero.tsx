import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cityscape.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional business cityscape and corporate headquarters" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary-dark/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-4">
            <span className="inline-block bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold uppercase tracking-wider rounded">
              Global Excellence
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Strategic Business
            <span className="block text-accent">
              Consultancy
            </span>
            <span className="block text-primary-foreground">Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            With Deep Expertise Across Industries
          </p>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            We provide result-oriented services solving clients' challenges where others cannot. Your achievement is the reason for our existence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-6 animate-scale-in"
            >
              Get Started Today
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 animate-scale-in bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-primary-light/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
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