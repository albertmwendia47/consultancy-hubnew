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
            <span className={`text-xl font-bold ${isScrolled ? 'text-foreground' : 'text-white'} transition-smooth`}>
              ZenInsight<span className="text-primary">Group</span>
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
                  className={`relative ${isScrolled ? 'text-primary hover:text-primary-dark' : 'text-white hover:text-primary-light'} transition-smooth px-4 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm group`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </button>
                
                {/* Enhanced Hover Preview */}
                {hoveredNav === item.id && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-strong p-6 z-50 animate-fade-in">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                          <item.preview.icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground">{item.preview.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item.preview.description}</p>
                      <div className="pt-2 border-t border-border">
                        <div className="text-sm text-muted-foreground">
                          {item.id === 'about' && (
                            <div className="space-y-1">
                              <div>• Company history & values</div>
                              <div>• Board of directors</div>
                              <div>• Our mission & vision</div>
                            </div>
                          )}
                          {item.id === 'services' && (
                            <div className="space-y-1">
                              <div>• Strategic planning</div>
                              <div>• Business transformation</div>
                              <div>• Digital innovation</div>
                            </div>
                          )}
                          {item.id === 'process' && (
                            <div className="space-y-1">
                              <div>• Discovery & analysis</div>
                              <div>• Strategy development</div>
                              <div>• Implementation support</div>
                            </div>
                          )}
                          {item.id === 'careers' && (
                            <div className="space-y-1">
                              <div>• Open positions</div>
                              <div>• Company culture</div>
                              <div>• Benefits & growth</div>
                            </div>
                          )}
                          {item.id === 'contact' && (
                            <div className="space-y-1">
                              <div>• Schedule consultation</div>
                              <div>• Office locations</div>
                              <div>• Contact information</div>
                            </div>
                          )}
                        </div>
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