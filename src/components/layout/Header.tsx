import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Briefcase } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-smooth ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-soft' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Strategic<span className="text-primary">Consult</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="relative text-white hover:text-primary-light transition-smooth px-4 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm group"
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="relative text-white hover:text-primary-light transition-smooth px-4 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm group"
            >
              <span className="relative z-10">Services</span>
              <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="relative text-white hover:text-primary-light transition-smooth px-4 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm group"
            >
              <span className="relative z-10">Process</span>
              <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </button>
            <a 
              href="/careers"
              className="relative text-white hover:text-primary-light transition-smooth px-4 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm group"
            >
              <span className="relative z-10">Careers</span>
              <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="relative text-white hover:text-primary-light transition-smooth px-4 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm group"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </button>
            <Button variant="gradient" size="sm">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border shadow-medium">
            <nav className="flex flex-col gap-4 p-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Process
              </button>
              <a 
                href="/careers"
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Careers
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Contact
              </button>
              <Button variant="gradient" size="sm" className="mt-2">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};