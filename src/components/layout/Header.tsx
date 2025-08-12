import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Briefcase, Users, Cog, FileText, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const navigate = useNavigate();

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

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    setHoveredNav(null);
  };

  const navItems = [
    { 
      id: 'about', 
      label: 'About', 
      action: () => scrollToSection('about'),
      preview: {
        title: 'About Us',
        description: 'Learn about our company history, values, and commitment to excellence.',
        icon: Building
      }
    },
    { 
      id: 'services', 
      label: 'Services', 
      action: () => scrollToSection('services'),
      preview: {
        title: 'Our Services',
        description: 'Comprehensive consulting solutions tailored to your business needs.',
        icon: Cog
      }
    },
    { 
      id: 'process', 
      label: 'Process', 
      action: () => scrollToSection('process'),
      preview: {
        title: 'Our Process',
        description: 'Discover our proven methodology for delivering successful outcomes.',
        icon: FileText
      }
    },
    { 
      id: 'careers', 
      label: 'Careers', 
      action: () => handleNavigation('/careers'),
      preview: {
        title: 'Join Our Team',
        description: 'Explore exciting career opportunities and grow with our company.',
        icon: Users
      }
    },
    { 
      id: 'contact', 
      label: 'Contact', 
      action: () => scrollToSection('contact'),
      preview: {
        title: 'Get In Touch',
        description: 'Ready to start your transformation? Contact us today.',
        icon: Briefcase
      }
    }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-smooth ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-soft' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-white">
              Strategic<span className="text-primary-light">Consult</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 relative">
            {navItems.map((item) => (
              <div 
                key={item.id}
                className="relative"
                onMouseEnter={() => setHoveredNav(item.id)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                <button 
                  onClick={item.action}
                  className="relative text-white hover:text-primary-light transition-smooth px-4 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </button>
                
                {/* Hover Preview */}
                {hoveredNav === item.id && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-elegant p-4 z-50 animate-fade-in">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.preview.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.preview.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.preview.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
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