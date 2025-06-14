
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const domains = [
    {
      name: "99digicom.com",
      title: "Digital Commerce",
      description: "Leading digital commerce solutions and ONDC integration services.",
      color: "from-[#3B82F6] to-[#10FFAB]"
    },
    {
      name: "99infosource.com",
      title: "IT & Marketing",
      description: "Comprehensive IT infrastructure and digital marketing strategies.",
      color: "from-[#A259FF] to-[#3B82F6]"
    },
    {
      name: "99finserv.com",
      title: "Financial Services",
      description: "SME loan facilitation and customized financial solutions.",
      color: "from-[#10FFAB] to-[#A259FF]"
    },
    {
      name: "harmonyhights.com",
      title: "Spiritual Ecosystem",
      description: "Holistic wellness through yoga, meditation, and spiritual practices.",
      color: "from-[#3D3A7D] to-[#10FFAB]"
    }
  ];

  const values = [
    {
      title: "Collaboration",
      description: "We believe in the power of working together to achieve extraordinary results.",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "Constantly pushing boundaries to deliver cutting-edge solutions.",
      icon: "💡"
    },
    {
      title: "Inclusivity",
      description: "Creating opportunities for businesses of all sizes and backgrounds.",
      icon: "🌍"
    },
    {
      title: "Impact",
      description: "Making meaningful differences in the lives of our partners and their customers.",
      icon: "🎯"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#1F1F1F] via-[#3D3A7D] to-[#1F1F1F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#A259FF] bg-clip-text text-transparent">
              About
            </span>{" "}
            <span className="text-[#F7F7F7]">99Partners</span>
          </h1>
          <p className="text-xl text-[#F7F7F7] opacity-90">
            Empowering businesses and individuals with robust partnerships and cutting-edge solutions.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((domain, index) => (
              <Card key={index} className="bg-[#1F1F1F] border-[#3D3A7D] hover:border-[#10FFAB] transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className={`h-2 w-full bg-gradient-to-r ${domain.color} rounded-full mb-4`}></div>
                  <CardTitle className="text-[#F7F7F7] text-lg">{domain.title}</CardTitle>
                  <p className="text-sm text-[#10FFAB] font-medium">{domain.name}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-[#F7F7F7] opacity-80 text-sm">{domain.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-r from-[#1F1F1F] to-[#2A2A2A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F7F7F7] mb-8">
            Our <span className="bg-gradient-to-r from-[#3B82F6] to-[#A259FF] bg-clip-text text-transparent">Mission</span>
          </h2>
          <p className="text-lg md:text-xl text-[#F7F7F7] leading-relaxed">
            At 99Partners, we are dedicated to{" "}
            <span className="text-[#10FFAB] font-semibold">empowering businesses and individuals</span>{" "}
            with robust partnerships and cutting-edge solutions. We bridge the gap between innovation and implementation,
            creating value-driven ecosystems that foster growth, collaboration, and success across diverse industries.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#F7F7F7]">
            Our Core <span className="bg-gradient-to-r from-[#3B82F6] to-[#A259FF] bg-clip-text text-transparent">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-[#1F1F1F] border-[#3D3A7D] hover:border-[#10FFAB] transition-all duration-300 text-center group">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-[#F7F7F7] mb-4 group-hover:text-[#10FFAB] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-[#F7F7F7] opacity-80">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#3B82F6] via-[#A259FF] to-[#10FFAB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Growing Ecosystem
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Discover how our values-driven approach can accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join-us">
              <Button size="lg" className="bg-white text-[#3B82F6] hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Become a Partner
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#3B82F6] px-8 py-4 text-lg">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
