import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Users, TrendingUp } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        {/* About Overview */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Our Consultancy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With over two decades of combined experience, we are a premier consultancy firm 
            dedicated to driving transformational change and sustainable growth for businesses 
            across diverse industries. Our proven methodologies and innovative approaches 
            have helped countless organizations achieve their strategic objectives.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-medium hover:shadow-strong transition-smooth group">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl font-bold text-primary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center leading-relaxed">
                To empower organizations with strategic insights, innovative solutions, and 
                transformational guidance that drives sustainable growth, operational excellence, 
                and market leadership in an ever-evolving business landscape.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover:shadow-strong transition-smooth group">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl font-bold text-primary">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center leading-relaxed">
                To be the globally recognized leader in strategic consultancy, known for our 
                innovative approaches, exceptional client outcomes, and our ability to anticipate 
                and navigate the challenges of tomorrow's business environment.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center animate-slide-in-right">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">250+</div>
            <div className="text-muted-foreground">Clients Served</div>
          </div>
          <div className="text-center animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">20+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Industries</div>
          </div>
        </div>
      </div>
    </section>
  );
};