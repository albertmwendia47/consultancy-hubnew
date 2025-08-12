import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SideDecorations } from "@/components/layout/SideDecorations";
import { Button } from "@/components/ui/button";

const Careers = () => {
  return (
    <div className="min-h-screen relative">
      <SideDecorations />
      <Header />
      <main className="pt-16">
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-foreground">
              Join Our Team
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
              Build your career with a leading consultancy firm. We're always looking for talented professionals.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Open Positions</h2>
              
              <div className="space-y-6">
                <div className="p-6 bg-card rounded-lg shadow-soft border border-border">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Senior Business Consultant</h3>
                  <p className="text-muted-foreground mb-4">Lead strategic consulting projects and client relationships</p>
                  <div className="flex gap-4 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Full-time</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Remote</span>
                  </div>
                  <Button className="mt-4" variant="outline">Apply Now</Button>
                </div>
                
                <div className="p-6 bg-card rounded-lg shadow-soft border border-border">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Operations Analyst</h3>
                  <p className="text-muted-foreground mb-4">Analyze and optimize business processes for our clients</p>
                  <div className="flex gap-4 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Full-time</span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary-foreground rounded-full text-sm">Hybrid</span>
                  </div>
                  <Button className="mt-4" variant="outline">Apply Now</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;