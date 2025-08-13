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
        title: 'About ZenInsight Group',
        description: 'ZenInsight Group LTD is a pioneering Kenyan consultancy dedicated to advancing sustainable development across Africa through integrated digital solutions, rigorous monitoring & evaluation (M&E), and transformative sectoral research.',
        icon: Building,
        content: [
          'Company History & Mission: Founded to drive sustainable development across Africa',
          'Board of Directors: Distinguished leadership team with decades of experience',
          'Our Vision: To be the globally recognized leader in strategic consultancy in Africa',
          'Core Values: Innovation, Excellence, Sustainability, and Impact',
          'Experience: Over two decades of combined expertise in consultancy services',
          'Global Reach: Serving clients across 25+ countries with local expertise'
        ]
      }
    },
    { 
      id: 'services', 
      label: 'Services', 
      action: () => scrollToSection('services'),
      preview: {
        title: 'Our Comprehensive Services',
        description: 'We offer integrated solutions spanning digital innovation, monitoring & evaluation, and sectoral research to drive sustainable development.',
        icon: Cog,
        content: [
          'Digital Solutions: Cutting-edge digital transformation and innovation services',
          'Monitoring & Evaluation: Rigorous M&E frameworks for project success measurement',
          'Sectoral Research: Transformative research across key development sectors',
          'Strategic Planning: Comprehensive business strategy and transformation consulting',
          'Capacity Building: Training and development programs for organizations',
          'Project Management: End-to-end project delivery and implementation support'
        ]
      }
    },
    { 
      id: 'process', 
      label: 'Process', 
      action: () => scrollToSection('process'),
      preview: {
        title: 'Our Proven Methodology',
        description: 'Our systematic approach ensures successful project delivery through structured phases and continuous stakeholder engagement.',
        icon: FileText,
        content: [
          'Discovery & Analysis: Comprehensive assessment of current state and requirements',
          'Strategy Development: Collaborative strategy formulation with stakeholders',
          'Implementation Planning: Detailed roadmaps and resource allocation',
          'Execution & Monitoring: Active project management with continuous oversight',
          'Evaluation & Learning: Impact assessment and knowledge capture',
          'Sustainability Planning: Long-term sustainability and capacity transfer'
        ]
      }
    },
    { 
      id: 'news', 
      label: 'News', 
      action: () => handleNavigation('/news'),
      preview: {
        title: 'Latest News & Updates',
        description: 'Stay informed about our latest developments, partnerships, research findings, and insights on sustainable development.',
        icon: FileText,
        content: [
          'Company Announcements: Latest organizational developments and milestones',
          'Partnership News: New collaborations and strategic alliances',
          'Research Publications: Groundbreaking research and policy insights',
          'Awards & Recognition: Industry recognition and achievements',
          'Thought Leadership: Expert insights on development challenges and solutions',
          'Event Updates: Upcoming conferences, workshops, and speaking engagements'
        ]
      }
    },
    { 
      id: 'careers', 
      label: 'Careers', 
      action: () => handleNavigation('/careers'),
      preview: {
        title: 'Join Our Impact-Driven Team',
        description: 'Explore exciting career opportunities where you can make a meaningful difference in sustainable development across Africa.',
        icon: Users,
        content: [
          'Open Positions: Current job opportunities across various departments',
          'Company Culture: Collaborative, innovative, and impact-focused environment',
          'Benefits & Growth: Competitive compensation and professional development',
          'Remote Work: Flexible working arrangements and global collaboration',
          'Learning Opportunities: Continuous skill development and training programs',
          'Impact Focus: Contribute to meaningful sustainable development projects'
        ]
      }
    },
    { 
      id: 'contact', 
      label: 'Contact', 
      action: () => scrollToSection('contact'),
      preview: {
        title: 'Get In Touch With Us',
        description: 'Ready to start your transformation journey? Contact our team to discuss how we can support your sustainable development goals.',
        icon: Briefcase,
        content: [
          'Schedule Consultation: Free initial consultation to discuss your needs',
          'Office Locations: Multiple offices across East Africa for local support',
          'Contact Information: Phone, email, and address details for each location',
          'Response Time: Typically respond within 24 hours to all inquiries',
          'Project Inquiry: Detailed project scoping and proposal development',
          'Partnership Opportunities: Explore collaboration and partnership possibilities'
        ]
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
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-strong p-6 z-50 animate-fade-in">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                          <item.preview.icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground">{item.preview.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm">{item.preview.description}</p>
                      <div className="pt-2 border-t border-border">
                        <div className="text-sm text-muted-foreground space-y-2">
                          {item.preview.content?.map((contentItem, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{contentItem}</span>
                            </div>
                          ))}
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
              <button 
                onClick={() => handleNavigation('/careers')}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Careers
              </button>
              <button 
                onClick={() => handleNavigation('/news')}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                News
              </button>
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