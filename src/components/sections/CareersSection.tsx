import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, MapPin, Clock, Users } from "lucide-react";

export const CareersSection = () => {
  const positions = [
    {
      title: "Senior Business Consultant",
      department: "Strategy",
      location: "Nairobi, Kenya",
      type: "Full-time",
      description: "Lead strategic consulting projects and client relationships across diverse industries",
      requirements: ["MBA or equivalent experience", "5+ years consulting experience", "Strong analytical skills"]
    },
    {
      title: "Operations Analyst",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      description: "Analyze and optimize business processes for our clients across Africa",
      requirements: ["Bachelor's degree in relevant field", "3+ years operations experience", "Data analysis expertise"]
    },
    {
      title: "M&E Specialist",
      department: "Research",
      location: "Dar es Salaam, Tanzania",
      type: "Contract",
      description: "Design and implement monitoring & evaluation frameworks for development projects",
      requirements: ["Master's in development studies", "M&E certification", "Project management skills"]
    },
    {
      title: "Digital Solutions Developer",
      department: "Technology",
      location: "Kampala, Uganda",
      type: "Full-time",
      description: "Develop innovative digital solutions for sustainable development initiatives",
      requirements: ["Computer Science degree", "Full-stack development", "Mobile app experience"]
    }
  ];

  return (
    <section id="careers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
            Join Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Career Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build your career with Africa's leading consultancy firm. Join us in creating sustainable impact across the continent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {positions.map((position, index) => (
            <Card
              key={index}
              className="group hover:shadow-medium transition-all duration-300 border-0 shadow-soft animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {position.title}
                    </h3>
                    <div className="text-primary font-semibold mb-3">
                      {position.department}
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6" />
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {position.description}
                </p>
                
                <div className="flex gap-4 flex-wrap mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {position.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {position.type}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                    Key Requirements
                  </h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full group-hover:shadow-lg transition-all duration-300">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-subtle rounded-2xl p-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 text-primary rounded-full mb-6">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Don't see the right role?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute to sustainable development across Africa.
            </p>
            <Button size="lg" variant="outline">
              Send General Application
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};