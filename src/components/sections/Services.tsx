import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  Briefcase,
  TrendingUp,
  Settings,
  HeartHandshake
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Strategic Planning",
      description: "Comprehensive strategic roadmaps that align with your business objectives and market opportunities.",
      features: ["Market Analysis", "Competitive Intelligence", "Growth Strategy", "Risk Assessment"]
    },
    {
      icon: Users,
      title: "Organizational Development",
      description: "Transform your organization's culture, structure, and capabilities for optimal performance.",
      features: ["Leadership Development", "Change Management", "Team Building", "Performance Optimization"]
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Navigate the digital landscape with cutting-edge solutions and technology integration.",
      features: ["Digital Strategy", "Process Automation", "Technology Integration", "Data Analytics"]
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Accelerate your growth through market expansion, innovation, and operational excellence.",
      features: ["Market Expansion", "Product Development", "Sales Optimization", "Partnership Strategy"]
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Identify, assess, and mitigate risks while building resilient business operations.",
      features: ["Risk Assessment", "Compliance Framework", "Crisis Management", "Business Continuity"]
    },
    {
      icon: Settings,
      title: "Operations Consulting",
      description: "Optimize your operations for efficiency, quality, and sustainable performance.",
      features: ["Process Improvement", "Supply Chain", "Quality Management", "Cost Optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive consulting solutions designed to address your unique challenges 
            and unlock your organization's full potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="shadow-medium hover:shadow-strong transition-smooth group cursor-pointer border-primary/10 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-primary group-hover:text-primary-dark transition-smooth">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <div className="bg-card rounded-lg p-8 shadow-medium max-w-2xl mx-auto">
            <HeartHandshake className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how our expertise can help you achieve your strategic objectives 
              and drive sustainable growth.
            </p>
            <Button variant="gradient" size="lg" className="text-lg px-8">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};