export const ClientLogos = () => {
  const clients = [
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Google", logo: "https://logo.clearbit.com/google.com" },
    { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
    { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
    { name: "Meta", logo: "https://logo.clearbit.com/meta.com" },
    { name: "Tesla", logo: "https://logo.clearbit.com/tesla.com" },
    { name: "Nike", logo: "https://logo.clearbit.com/nike.com" },
    { name: "Coca-Cola", logo: "https://logo.clearbit.com/coca-cola.com" },
    { name: "Samsung", logo: "https://logo.clearbit.com/samsung.com" },
    { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
    { name: "Intel", logo: "https://logo.clearbit.com/intel.com" },
    { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We are proud to work with some of the world's most innovative companies across diverse industries.
          </p>
        </div>

        {/* Scrolling logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-16">
            {/* First set */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain filter"
                  loading="lazy"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain filter"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Join the ranks of successful companies we've helped transform their business.
          </p>
        </div>
      </div>
    </section>
  );
};