import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ProcessDiagram } from "@/components/sections/ProcessDiagram";
import { Services } from "@/components/sections/Services";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <div id="process">
          <ProcessDiagram />
        </div>
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
