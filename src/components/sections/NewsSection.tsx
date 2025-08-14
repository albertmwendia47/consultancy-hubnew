import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight, FileText } from "lucide-react";

export const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "ZenInsight Group Partners with Global Development Fund",
      excerpt: "We're excited to announce our partnership with the Global Development Fund to support sustainable development initiatives across East Africa.",
      date: "2024-12-15",
      author: "James Mwangi",
      category: "Partnership",
      featured: true
    },
    {
      id: 2,
      title: "New Research Publication: Digital Transformation in African SMEs",
      excerpt: "Our latest research explores how small and medium enterprises across Africa are leveraging digital technologies for growth.",
      date: "2024-12-10",
      author: "Dr. Amina Hassan",
      category: "Research"
    },
    {
      id: 3,
      title: "ZenInsight Group Expands Operations to Uganda",
      excerpt: "Following successful projects in Kenya and Tanzania, we're proud to announce the opening of our new office in Kampala, Uganda.",
      date: "2024-12-05",
      author: "Michael Ochieng",
      category: "Company News"
    },
    {
      id: 4,
      title: "Upcoming Webinar: M&E Best Practices for Development Projects",
      excerpt: "Join our experts for an insightful webinar on implementing effective monitoring and evaluation frameworks.",
      date: "2024-12-20",
      author: "Prof. Grace Wanjiku",
      category: "Events"
    },
    {
      id: 5,
      title: "Impact Report 2024: Measuring Our Contribution to Sustainable Development",
      excerpt: "Our annual impact report showcases the measurable difference we've made across 50+ projects in 2024.",
      date: "2024-12-01",
      author: "Dr. Sarah Kimani",
      category: "Impact Report"
    },
    {
      id: 6,
      title: "Technology Innovation Award for Digital Agriculture Platform",
      excerpt: "Our digital agriculture platform wins recognition at the East Africa Technology Innovation Awards 2024.",
      date: "2024-11-28",
      author: "David Kiprotich",
      category: "Awards"
    }
  ];

  const featuredNews = news.filter(item => item.featured)[0];
  const regularNews = news.filter(item => !item.featured);

  return (
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
            Latest Updates
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            News & Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed about our latest developments, partnerships, research findings, and insights on sustainable development.
          </p>
        </div>

        {/* Featured News */}
        {featuredNews && (
          <div className="mb-16">
            <Card className="overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-primary flex items-center justify-center">
                    <FileText className="w-16 h-16 text-primary-foreground" />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <CardContent className="p-8 h-full flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="text-accent font-medium text-sm">
                        {featuredNews.category}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {featuredNews.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-lg">
                      {featuredNews.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredNews.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {featuredNews.author}
                        </div>
                      </div>
                      <Button variant="outline" className="group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Regular News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {regularNews.slice(0, 6).map((item, index) => (
            <Card
              key={item.id}
              className="group hover:shadow-medium transition-all duration-300 border-0 shadow-soft overflow-hidden animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gradient-subtle flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-accent font-medium text-sm">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <User className="w-3 h-3" />
                      {item.author}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="group">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <div className="bg-gradient-subtle rounded-2xl p-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 text-primary rounded-full mb-6">
              <FileText className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, insights, and updates on sustainable development and consultancy trends.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <Button size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};