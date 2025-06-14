
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      domain: "Digital Commerce",
      website: "99digicom.com",
      color: "from-[#3B82F6] to-[#10FFAB]",
      services: [
        "ONDC integration",
        "Co-branding for e-commerce products",
        "Digital marketplace solutions",
        "E-commerce platform development"
      ],
      partners: [
        { name: "99bowls", description: "Premium food delivery solutions" },
        { name: "Nutraio", description: "Nutrition and wellness products" },
        { name: "GudGoodlife", description: "Lifestyle and wellness brand" },
        { name: "Perlmillet", description: "Sustainable agriculture solutions" },
        { name: "CHAAH Tea", description: "Premium tea experiences" }
      ]
    },
    {
      domain: "IT & Marketing",
      website: "99infosource.com",
      color: "from-[#A259FF] to-[#3B82F6]",
      services: [
        "KPO, BPO, LPO services",
        "Digital strategy & IT infrastructure",
        "Marketing automation",
        "Data analytics and insights"
      ],
      partners: [
        { name: "eBranding Studio", description: "Creative branding solutions" },
        { name: "Biztech.one", description: "Business technology consulting" },
        { name: "Doctor Dairy", description: "Healthcare technology platform" },
        { name: "ARKinfoserv", description: "Information services provider" }
      ]
    },
    {
      domain: "Financial Services",
      website: "99finserv.com",
      color: "from-[#10FFAB] to-[#A259FF]",
      services: [
        "SME loan facilitation",
        "Customized funding support",
        "Financial planning and advisory",
        "Investment solutions"
      ],
      partners: [
        { name: "ICICI Bank", description: "Leading private sector bank" },
        { name: "Bank of Baroda", description: "Trusted banking partner" },
        { name: "Kotak Bank", description: "Premium banking services" },
        { name: "Tata Capital", description: "Comprehensive financial services" }
      ]
    },
    {
      domain: "Spiritual Ecosystem",
      website: "harmonyhights.com",
      color: "from-[#3D3A7D] to-[#10FFAB]",
      services: [
        "Yoga & meditation programs",
        "Panchkarma & Ayurveda treatments",
        "Astrology consultations",
        "Rituals (Karmkand) and Star Gazing"
      ],
      partners: [
        { name: "Joshidada.com", description: "Astrology and spiritual guidance" },
        { name: "BigBirthday.in", description: "Celebration and event management" },
        { name: "Lilvan.com", description: "Wellness and lifestyle platform" },
        { name: "Yoga Studio", description: "Professional yoga instruction" }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#1F1F1F] via-[#3D3A7D] to-[#1F1F1F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#F7F7F7]">Our</span>{" "}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#A259FF] bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-[#F7F7F7] opacity-90">
            Comprehensive solutions across four key domains to accelerate your business growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="bg-[#1F1F1F] border-[#3D3A7D] overflow-hidden">
                <CardHeader className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-10`}></div>
                  <div className="relative">
                    <div className={`h-1 w-full bg-gradient-to-r ${service.color} mb-4`}></div>
                    <CardTitle className="text-2xl md:text-3xl text-[#F7F7F7] mb-2">
                      {service.domain}
                    </CardTitle>
                    <p className="text-[#10FFAB] font-medium">{service.website}</p>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Services */}
                    <div>
                      <h3 className="text-xl font-semibold text-[#F7F7F7] mb-4">Services Offered</h3>
                      <ul className="space-y-2">
                        {service.services.map((item, idx) => (
                          <li key={idx} className="flex items-center text-[#F7F7F7]">
                            <span className="w-2 h-2 bg-[#10FFAB] rounded-full mr-3"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Partners */}
                    <div>
                      <h3 className="text-xl font-semibold text-[#F7F7F7] mb-4">Key Partners</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.partners.map((partner, idx) => (
                          <div key={idx} className="p-3 bg-[#2A2A2A] rounded-lg border border-[#3D3A7D] hover:border-[#10FFAB] transition-colors">
                            <h4 className="font-semibold text-[#F7F7F7] text-sm mb-1">{partner.name}</h4>
                            <p className="text-xs text-[#F7F7F7] opacity-70">{partner.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Let's discuss how our comprehensive services can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join-us">
              <Button size="lg" className="bg-white text-[#3B82F6] hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Apply for Partnership
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#3B82F6] px-8 py-4 text-lg">
                Get Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
