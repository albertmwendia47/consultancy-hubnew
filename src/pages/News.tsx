import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { ScrollAnimationWrapper } from "@/hooks/useScrollAnimation";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "ZenInsight Group Expands Operations Across East Africa",
      excerpt: "We're excited to announce our expansion into Tanzania and Uganda, strengthening our commitment to sustainable development across the region.",
      date: "2024-01-15",
      readTime: "3 min read",
      category: "Company News",
      featured: true
    },
    {
      id: 2,
      title: "New Partnership with UN-Habitat for Urban Development",
      excerpt: "ZenInsight Group partners with UN-Habitat to drive innovative urban development solutions across African cities.",
      date: "2024-01-10",
      readTime: "5 min read",
      category: "Partnerships",
      featured: true
    },
    {
      id: 3,
      title: "Digital Innovation Awards Recognition",
      excerpt: "Our digital transformation initiatives have been recognized at the African Digital Innovation Awards 2024.",
      date: "2024-01-05",
      readTime: "2 min read",
      category: "Awards",
      featured: false
    },
    {
      id: 4,
      title: "Sustainability Report 2024 Released",
      excerpt: "Our comprehensive sustainability report showcases our impact on environmental and social development across Africa.",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "Reports",
      featured: false
    },
    {
      id: 5,
      title: "M&E Framework Implementation Success",
      excerpt: "Successful implementation of our new monitoring & evaluation framework has improved project outcomes by 40%.",
      date: "2023-12-20",
      readTime: "4 min read",
      category: "Research",
      featured: false
    },
    {
      id: 6,
      title: "New Research on Climate Adaptation Strategies",
      excerpt: "Publishing groundbreaking research on climate adaptation strategies for small-scale farmers in Kenya.",
      date: "2023-12-15",
      readTime: "6 min read",
      category: "Research",
      featured: false
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Company News': 'bg-primary/10 text-primary',
      'Partnerships': 'bg-accent/10 text-accent',
      'Awards': 'bg-yellow-500/10 text-yellow-600',
      'Reports': 'bg-green-500/10 text-green-600',
      'Research': 'bg-purple-500/10 text-purple-600'
    };
    return colors[category as keyof typeof colors] || 'bg-muted text-muted-foreground';
  };

  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 gradient-primary text-white">
          <ScrollAnimationWrapper>
            <div className="container mx-auto px-4">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  News & Updates
                </h1>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  Stay informed about our latest developments, partnerships, and insights 
                  as we continue to drive sustainable development across Africa.
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </section>

        {/* Featured News */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollAnimationWrapper>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Featured Stories
              </h2>
            </ScrollAnimationWrapper>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {featuredNews.map((item, index) => (
                <ScrollAnimationWrapper key={item.id} delay={index * 200}>
                  <Card className="shadow-medium hover:shadow-strong transition-smooth group cursor-pointer h-full">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className={getCategoryColor(item.category)}>
                          {item.category}
                        </Badge>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(item.date)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {item.readTime}
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Regular News */}
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4">
            <ScrollAnimationWrapper>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Latest Updates
              </h2>
            </ScrollAnimationWrapper>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((item, index) => (
                <ScrollAnimationWrapper key={item.id} delay={index * 150}>
                  <Card className="shadow-medium hover:shadow-strong transition-smooth group cursor-pointer h-full">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className={getCategoryColor(item.category)}>
                          {item.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(item.date)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {item.readTime}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-primary text-primary-foreground">
          <ScrollAnimationWrapper>
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Subscribe to our newsletter to receive the latest news, insights, 
                and updates from ZenInsight Group directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-foreground"
                />
                <button className="px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-smooth">
                  Subscribe
                </button>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default News;