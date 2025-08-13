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
                
                {/* Full Page Content Preview */}
                {hoveredNav === item.id && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[90vw] max-w-6xl bg-background/98 backdrop-blur-md border border-border rounded-lg shadow-strong z-50 animate-fade-in max-h-[80vh] overflow-y-auto">
                    {item.id === 'about' && (
                      <div className="p-6">
                        <div className="py-12 bg-gradient-subtle rounded-t-lg">
                          <div className="container mx-auto px-4">
                            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
                              About ZenInsight Group
                            </h1>
                            <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
                              ZenInsight Group LTD is a pioneering Kenyan consultancy dedicated to advancing sustainable development across Africa through integrated digital solutions, rigorous monitoring & evaluation (M&E), and transformative sectoral research.
                            </p>
                          </div>
                        </div>
                        
                        <div className="py-12">
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
                              
                              <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Board of Directors & Stakeholders</h2>
                              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                                {[
                                  { name: "Dr. Sarah Kimani", role: "Chairman of the Board", summary: "Former UN Development Programme Director with 25+ years in sustainable development across Africa." },
                                  { name: "James Mwangi", role: "CEO & Founder", summary: "Strategic consultant with expertise in digital transformation and business development in emerging markets." },
                                  { name: "Prof. Grace Wanjiku", role: "Chief Strategy Officer", summary: "Academic and policy expert specializing in monitoring & evaluation frameworks for development projects." },
                                  { name: "Michael Ochieng", role: "Managing Director", summary: "Operations leader with extensive experience in project management and organizational development." },
                                  { name: "Dr. Amina Hassan", role: "Director of Research", summary: "Research specialist focused on sectoral analysis and evidence-based policy recommendations." },
                                  { name: "David Kiprotich", role: "Chief Technology Officer", summary: "Technology innovator leading digital solutions and data analytics for development impact." }
                                ].map((member, index) => (
                                  <div key={index} className="text-center">
                                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                                      <Users className="w-8 h-8 text-primary-foreground" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-foreground">{member.name}</h3>
                                    <p className="text-primary text-sm mb-3 font-medium">{member.role}</p>
                                    <p className="text-muted-foreground text-sm">{member.summary}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {item.id === 'process' && (
                      <div className="p-6">
                        <div className="py-12 bg-gradient-subtle rounded-t-lg">
                          <div className="container mx-auto px-4">
                            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
                              Our Process
                            </h1>
                            <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
                              Our systematic approach ensures successful project delivery through structured phases and continuous stakeholder engagement.
                            </p>
                          </div>
                        </div>
                        
                        <div className="py-12">
                          <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                              <div className="grid gap-8">
                                {[
                                  { step: "01", title: "Discovery & Analysis", description: "Comprehensive assessment of current state and requirements" },
                                  { step: "02", title: "Strategy Development", description: "Collaborative strategy formulation with stakeholders" },
                                  { step: "03", title: "Implementation Planning", description: "Detailed roadmaps and resource allocation" },
                                  { step: "04", title: "Execution & Monitoring", description: "Active project management with continuous oversight" },
                                  { step: "05", title: "Evaluation & Learning", description: "Impact assessment and knowledge capture" },
                                  { step: "06", title: "Sustainability Planning", description: "Long-term sustainability and capacity transfer" }
                                ].map((phase, index) => (
                                  <div key={index} className="flex gap-6 items-start">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                                      <span className="text-primary-foreground font-bold text-lg">{phase.step}</span>
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="text-xl font-semibold mb-2 text-foreground">{phase.title}</h3>
                                      <p className="text-muted-foreground">{phase.description}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {item.id === 'contact' && (
                      <div className="p-6">
                        <div className="py-12 bg-gradient-subtle rounded-t-lg">
                          <div className="container mx-auto px-4">
                            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
                              Contact Us
                            </h1>
                            <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
                              Ready to start your transformation journey? Contact our team to discuss how we can support your sustainable development goals.
                            </p>
                          </div>
                        </div>
                        
                        <div className="py-12">
                          <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                              <div>
                                <h2 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h2>
                                <div className="space-y-4">
                                  <div>
                                    <h3 className="font-semibold mb-2 text-foreground">Email</h3>
                                    <p className="text-muted-foreground">info@zeninsightgroup.com</p>
                                  </div>
                                  <div>
                                    <h3 className="font-semibold mb-2 text-foreground">Phone</h3>
                                    <p className="text-muted-foreground">+254 700 123 456</p>
                                  </div>
                                  <div>
                                    <h3 className="font-semibold mb-2 text-foreground">Office</h3>
                                    <p className="text-muted-foreground">Nairobi, Kenya<br/>Westlands Business District</p>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h2 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h2>
                                <div className="space-y-4">
                                  <input type="text" placeholder="Your Name" className="w-full p-3 border border-border rounded-lg bg-background" />
                                  <input type="email" placeholder="Your Email" className="w-full p-3 border border-border rounded-lg bg-background" />
                                  <textarea placeholder="Your Message" rows={4} className="w-full p-3 border border-border rounded-lg bg-background resize-none"></textarea>
                                  <button className="w-full py-3 px-6 gradient-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">Send Message</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {item.id === 'services' && (
                      <div className="p-6">
                        <div className="py-12 bg-gradient-subtle rounded-t-lg">
                          <div className="container mx-auto px-4">
                            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
                              Our Services
                            </h1>
                            <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
                              Comprehensive consultancy solutions tailored to your business needs
                            </p>
                          </div>
                        </div>
                        
                        <div className="py-12">
                          <div className="container mx-auto px-4">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                              <div className="p-6 bg-card rounded-lg shadow-soft border border-border">
                                <h3 className="text-xl font-semibold mb-4 text-foreground">Strategic Planning</h3>
                                <p className="text-muted-foreground">Comprehensive strategic planning services to help your business achieve its goals.</p>
                              </div>
                              <div className="p-6 bg-card rounded-lg shadow-soft border border-border">
                                <h3 className="text-xl font-semibold mb-4 text-foreground">Business Development</h3>
                                <p className="text-muted-foreground">Expert guidance to expand your business and enter new markets successfully.</p>
                              </div>
                              <div className="p-6 bg-card rounded-lg shadow-soft border border-border">
                                <h3 className="text-xl font-semibold mb-4 text-foreground">Operations Optimization</h3>
                                <p className="text-muted-foreground">Streamline your operations for maximum efficiency and cost-effectiveness.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {item.id === 'careers' && (
                      <div className="p-6">
                        <div className="py-12 bg-gradient-subtle rounded-t-lg">
                          <div className="container mx-auto px-4">
                            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
                              Join Our Team
                            </h1>
                            <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
                              Build your career with a leading consultancy firm. We're always looking for talented professionals.
                            </p>
                          </div>
                        </div>
                        
                        <div className="py-12">
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
                                  <button className="mt-4 px-4 py-2 border border-border rounded-lg hover:bg-accent/10 transition-colors">Apply Now</button>
                                </div>
                                
                                <div className="p-6 bg-card rounded-lg shadow-soft border border-border">
                                  <h3 className="text-xl font-semibold mb-2 text-foreground">Operations Analyst</h3>
                                  <p className="text-muted-foreground mb-4">Analyze and optimize business processes for our clients</p>
                                  <div className="flex gap-4 flex-wrap">
                                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Full-time</span>
                                    <span className="px-3 py-1 bg-secondary/10 text-secondary-foreground rounded-full text-sm">Hybrid</span>
                                  </div>
                                  <button className="mt-4 px-4 py-2 border border-border rounded-lg hover:bg-accent/10 transition-colors">Apply Now</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {item.id === 'news' && (
                      <div className="p-6">
                        <div className="py-12 bg-gradient-subtle rounded-t-lg">
                          <div className="container mx-auto px-4">
                            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
                              News & Updates
                            </h1>
                            <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
                              Stay informed about our latest developments, partnerships, and insights
                            </p>
                          </div>
                        </div>
                        
                        <div className="py-12">
                          <div className="container mx-auto px-4 max-w-4xl">
                            <div className="grid gap-8">
                              <article className="bg-card rounded-lg shadow-soft border border-border overflow-hidden">
                                <div className="p-6">
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                    <span>Company News</span>
                                    <span>•</span>
                                    <time>December 15, 2024</time>
                                  </div>
                                  <h2 className="text-2xl font-bold mb-4 text-foreground">
                                    ZenInsight Group Expands Operations to East Africa
                                  </h2>
                                  <p className="text-muted-foreground mb-4">
                                    We are excited to announce the expansion of our operations to include new offices in Kenya, Tanzania, and Uganda, strengthening our commitment to driving sustainable development across the region.
                                  </p>
                                  <button className="text-primary hover:text-primary-dark font-medium">Read More →</button>
                                </div>
                              </article>
                              
                              <article className="bg-card rounded-lg shadow-soft border border-border overflow-hidden">
                                <div className="p-6">
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                    <span>Partnership</span>
                                    <span>•</span>
                                    <time>December 10, 2024</time>
                                  </div>
                                  <h2 className="text-2xl font-bold mb-4 text-foreground">
                                    Strategic Partnership with UN Development Programme
                                  </h2>
                                  <p className="text-muted-foreground mb-4">
                                    ZenInsight Group has entered into a strategic partnership with UNDP to implement digital transformation initiatives across 15 African countries, focusing on sustainable development goals.
                                  </p>
                                  <button className="text-primary hover:text-primary-dark font-medium">Read More →</button>
                                </div>
                              </article>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
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