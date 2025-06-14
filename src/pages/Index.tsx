
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const highlights = [
    {
      title: "Digital Commerce",
      description: "ONDC integration and e-commerce solutions",
      icon: "🔗",
      color: "from-[#3B82F6] to-[#10FFAB]"
    },
    {
      title: "IT & Marketing",
      description: "KPO, BPO, LPO and digital strategy services",
      icon: "💻",
      color: "from-[#A259FF] to-[#3B82F6]"
    },
    {
      title: "Financial Services",
      description: "SME loan facilitation and funding support",
      icon: "💰",
      color: "from-[#10FFAB] to-[#A259FF]"
    },
    {
      title: "Spiritual Ecosystem",
      description: "Yoga, meditation, and wellness services",
      icon: "🧘",
      color: "from-[#3D3A7D] to-[#10FFAB]"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1F1F1F] via-[#3D3A7D] to-[#1F1F1F] py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzQjgyRjYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#3B82F6] via-[#10FFAB] to-[#A259FF] bg-clip-text text-transparent">
              Empowering Businesses
            </span>
            <br />
            <span className="text-[#F7F7F7]">with Strategic Partnerships</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#F7F7F7] mb-8 max-w-3xl mx-auto opacity-90">
            Connecting you with the right partners to accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-[#3B82F6] to-[#A259FF] hover:from-[#A259FF] hover:to-[#3B82F6] text-white px-8 py-4 text-lg">
              Find Your Perfect Partner
            </Button>
            <Button size="lg" variant="outline" className="border-[#10FFAB] text-[#10FFAB] hover:bg-[#10FFAB] hover:text-[#1F1F1F] px-8 py-4 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-[#1F1F1F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg md:text-xl text-[#F7F7F7] leading-relaxed">
            <span className="text-[#10FFAB] font-semibold">99 Partners</span> is a dynamic ecosystem connecting businesses across{" "}
            <span className="text-[#3B82F6]">Digital Commerce</span>,{" "}
            <span className="text-[#A259FF]">IT & Marketing</span>,{" "}
            <span className="text-[#10FFAB]">Financial Services</span>, and the{" "}
            <span className="text-[#3D3A7D]">Spiritual Wellness</span> domain.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-to-br from-[#1F1F1F] to-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#F7F7F7]">
            Our <span className="bg-gradient-to-r from-[#3B82F6] to-[#A259FF] bg-clip-text text-transparent">Domains</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-[#1F1F1F] border-[#3D3A7D] hover:border-[#10FFAB] transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className={`text-4xl mb-4 p-4 rounded-full bg-gradient-to-r ${highlight.color} inline-block`}>
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#F7F7F7] mb-3 group-hover:text-[#10FFAB] transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-[#F7F7F7] opacity-80">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/domains">
              <Button className="bg-gradient-to-r from-[#3B82F6] to-[#A259FF] hover:from-[#A259FF] hover:to-[#3B82F6] text-white">
                Explore All Domains
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#3B82F6] via-[#A259FF] to-[#10FFAB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Join our ecosystem of successful partnerships and unlock new opportunities for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join-us">
              <Button size="lg" className="bg-white text-[#3B82F6] hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Apply for Partnership
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#3B82F6] px-8 py-4 text-lg">
                Let's Grow Together!
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
