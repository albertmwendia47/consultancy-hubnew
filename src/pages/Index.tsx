import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Statistics } from "@/components/sections/Statistics";
import { ProcessDiagram } from "@/components/sections/ProcessDiagram";
import { Services } from "@/components/sections/Services";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { CareersSection } from "@/components/sections/CareersSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SideDecorations } from "@/components/layout/SideDecorations";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <SideDecorations />
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <Statistics />
        <div id="about">
          <About />
        </div>
        <div id="process">
          <ProcessDiagram />
        </div>
        <div id="services">
          <Services />
        </div>
        <ClientLogos />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
