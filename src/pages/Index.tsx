import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Statistics } from "@/components/sections/Statistics";
import { ProcessDiagram } from "@/components/sections/ProcessDiagram";
import { Services } from "@/components/sections/Services";
import { Recognitions } from "@/components/sections/Recognitions";
import { ClientLogos } from "@/components/sections/ClientLogos";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Statistics />
        <About />
        <div id="process">
          <ProcessDiagram />
        </div>
        <Services />
        <Recognitions />
        <ClientLogos />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
