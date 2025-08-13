import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Users, TrendingUp, User, Crown, Shield, Briefcase, Award, Layers } from "lucide-react";
import { ScrollAnimationWrapper } from "@/hooks/useScrollAnimation";

export const About = () => {
  const boardMembers = [
    { 
      name: "Dr. Sarah Johnson", 
      role: "Chairman", 
      icon: Crown,
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&h=150&fit=crop&crop=face",
      summary: "Former UN Development Programme Director with 25+ years in sustainable development across Africa."
    },
    { 
      name: "Michael Chen", 
      role: "Chief Executive Officer", 
      icon: User,
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      summary: "Strategic leader with extensive experience in digital transformation and organizational growth."
    },
    { 
      name: "Dr. Elena Rodriguez", 
      role: "Chief Financial Officer", 
      icon: Shield,
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      summary: "Financial expert specializing in impact investing and sustainable business models in emerging markets."
    },
    { 
      name: "James Thompson", 
      role: "Chief Technology Officer", 
      icon: Layers,
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      summary: "Technology innovator leading digital solutions for development challenges across the continent."
    },
    { 
      name: "Priya Patel", 
      role: "Chief Operations Officer", 
      icon: Briefcase,
      photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      summary: "Operations specialist with proven track record in scaling consultancy services and project delivery."
    },
    { 
      name: "Dr. David Wilson", 
      role: "Director of Research", 
      icon: Award,
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      summary: "Research leader and policy expert focusing on evidence-based solutions for sustainable development."
    }
  ];

  return (
    <section id="about" className="py-20 gradient-subtle">
      <ScrollAnimationWrapper>
        <div className="container mx-auto px-4">
          {/* About Overview */}
          <div className="text-center mb-16">
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
            <ScrollAnimationWrapper delay={200}>
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
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={400}>
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
            </ScrollAnimationWrapper>
          </div>

          {/* Board of Directors & Stakeholders */}
          <div className="mb-16">
            <ScrollAnimationWrapper>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Board of Directors & Key Stakeholders
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Meet our distinguished leadership team bringing decades of experience 
                  and expertise to guide our strategic vision.
                </p>
              </div>
            </ScrollAnimationWrapper>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <ScrollAnimationWrapper key={member.name} delay={index * 100}>
                  <Card className="text-center shadow-medium hover:shadow-strong transition-smooth group">
                    <CardContent className="p-6">
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <img 
                          src={member.photo} 
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover shadow-medium group-hover:shadow-strong transition-smooth"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 gradient-primary rounded-full flex items-center justify-center shadow-medium">
                          <member.icon className="w-4 h-4 text-primary-foreground" />
                        </div>
                      </div>
                      <h4 className="font-bold text-foreground mb-2 text-lg">{member.name}</h4>
                      <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{member.summary}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ScrollAnimationWrapper delay={100}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">250+</div>
                <div className="text-muted-foreground">Clients Served</div>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={200}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={300}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={400}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Industries</div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </ScrollAnimationWrapper>
    </section>
  );
};