import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SideDecorations } from "@/components/layout/SideDecorations";

const Services = () => {
  return (
    <div className="min-h-screen relative">
      <SideDecorations />
      <Header />
      <main className="pt-16">
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-foreground">
              Our Services
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
              Comprehensive consultancy solutions tailored to your business needs
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-card rounded-lg shadow-soft">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Strategic Planning</h3>
                <p className="text-muted-foreground">Comprehensive strategic planning services to help your business achieve its goals.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-soft">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Business Development</h3>
                <p className="text-muted-foreground">Expert guidance to expand your business and enter new markets successfully.</p>
              </div>
              <div className="p-6 bg-card rounded-lg shadow-soft">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Operations Optimization</h3>
                <p className="text-muted-foreground">Streamline your operations for maximum efficiency and cost-effectiveness.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;