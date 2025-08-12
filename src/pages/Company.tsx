import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SideDecorations } from "@/components/layout/SideDecorations";

const Company = () => {
  return (
    <div className="min-h-screen relative">
      <SideDecorations />
      <Header />
      <main className="pt-16">
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-foreground">
              About Our Company
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
              Learn more about our history, leadership, and commitment to excellence
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
                  <p className="text-muted-foreground mb-4">
                    Founded with a vision to transform businesses through strategic consulting, 
                    we have grown to become a trusted partner for companies across industries.
                  </p>
                  <p className="text-muted-foreground">
                    Our team of experienced consultants brings decades of expertise to help 
                    organizations achieve their most ambitious goals.
                  </p>
                </div>
                <div className="bg-primary/10 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Leadership</h3>
                  <p className="text-muted-foreground">
                    Our leadership team combines industry expertise with innovative thinking 
                    to deliver exceptional results for our clients.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Years Combined Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <p className="text-muted-foreground">Successful Projects</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <p className="text-muted-foreground">Team Members</p>
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

export default Company;