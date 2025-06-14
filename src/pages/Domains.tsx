
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Domains = () => {
  const [activeTab, setActiveTab] = useState(0);

  const domains = [
    {
      id: 0,
      title: "Digital Commerce",
      website: "99digicom.com",
      icon: "🔗",
      color: "from-[#3B82F6] to-[#10FFAB]",
      overview: "Leading the digital transformation of commerce through innovative technology solutions and strategic partnerships. We enable businesses to thrive in the digital marketplace with comprehensive e-commerce platforms and integration services.",
      services: [
        "ONDC Integration & Implementation",
        "E-commerce Platform Development",
        "Digital Marketplace Solutions",
        "Co-branding for E-commerce Products",
        "Payment Gateway Integration",
        "Inventory Management Systems"
      ],
      partners: [
        { 
          name: "99bowls", 
          logo: "🍽️", 
          description: "Premium food delivery platform offering gourmet meals and restaurant partnerships across multiple cities."
        },
        { 
          name: "Nutraio", 
          logo: "🌱", 
          description: "Advanced nutrition and wellness products with AI-driven personalized health recommendations."
        },
        { 
          name: "GudGoodlife", 
          logo: "✨", 
          description: "Comprehensive lifestyle brand focusing on sustainable living and wellness solutions."
        },
        { 
          name: "Perlmillet", 
          logo: "🌾", 
          description: "Sustainable agriculture platform promoting organic farming and eco-friendly food production."
        },
        { 
          name: "CHAAH Tea", 
          logo: "🍵", 
          description: "Premium tea experiences with direct farmer partnerships and artisanal blends."
        }
      ]
    },
    {
      id: 1,
      title: "IT & Marketing",
      website: "99infosource.com",
      icon: "💻",
      color: "from-[#A259FF] to-[#3B82F6]",
      overview: "Comprehensive IT infrastructure and digital marketing solutions designed to optimize business operations and enhance market reach. We provide end-to-end technology services that drive efficiency and growth.",
      services: [
        "Knowledge Process Outsourcing (KPO)",
        "Business Process Outsourcing (BPO)",
        "Legal Process Outsourcing (LPO)",
        "Digital Strategy & Consulting",
        "IT Infrastructure Management",
        "Marketing Automation & Analytics"
      ],
      partners: [
        { 
          name: "eBranding Studio", 
          logo: "🎨", 
          description: "Creative branding and design studio specializing in digital identity and brand development."
        },
        { 
          name: "Biztech.one", 
          logo: "⚡", 
          description: "Business technology consulting firm providing enterprise solutions and digital transformation."
        },
        { 
          name: "Doctor Dairy", 
          logo: "🏥", 
          description: "Healthcare technology platform connecting patients with medical professionals and services."
        },
        { 
          name: "ARKinfoserv", 
          logo: "📊", 
          description: "Information services provider specializing in data management and business intelligence."
        }
      ]
    },
    {
      id: 2,
      title: "Financial Services",
      website: "99finserv.com",
      icon: "💰",
      color: "from-[#10FFAB] to-[#A259FF]",
      overview: "Comprehensive financial solutions tailored for SMEs and growing businesses. We facilitate access to funding, provide financial advisory services, and create pathways for sustainable business growth through strategic financial partnerships.",
      services: [
        "SME Loan Facilitation",
        "Customized Funding Support",
        "Financial Planning & Advisory",
        "Investment Solutions",
        "Business Credit Assessment",
        "Working Capital Management"
      ],
      partners: [
        { 
          name: "ICICI Bank", 
          logo: "🏦", 
          description: "Leading private sector bank offering comprehensive financial services and innovative banking solutions."
        },
        { 
          name: "Bank of Baroda", 
          logo: "🏛️", 
          description: "Trusted banking institution providing reliable financial services and business banking solutions."
        },
        { 
          name: "Kotak Bank", 
          logo: "💎", 
          description: "Premium banking services with focus on personalized financial solutions and wealth management."
        },
        { 
          name: "Tata Capital", 
          logo: "🌟", 
          description: "Comprehensive financial services company offering loans, investments, and advisory services."
        }
      ]
    },
    {
      id: 3,
      title: "Spiritual Ecosystem",
      website: "harmonyhights.com",
      icon: "🧘",
      color: "from-[#3D3A7D] to-[#10FFAB]",
      overview: "Holistic wellness ecosystem connecting individuals with authentic spiritual practices, ancient wisdom, and modern wellness solutions. We bridge traditional healing methods with contemporary lifestyle needs for complete mind-body-spirit wellness.",
      services: [
        "Yoga & Meditation Programs",
        "Panchkarma & Ayurveda Treatments",
        "Astrology Consultations",
        "Spiritual Rituals (Karmkand)",
        "Star Gazing & Cosmic Wellness",
        "Wellness Retreat Planning"
      ],
      partners: [
        { 
          name: "Joshidada.com", 
          logo: "🔮", 
          description: "Expert astrology services and spiritual guidance platform with experienced practitioners."
        },
        { 
          name: "BigBirthday.in", 
          logo: "🎉", 
          description: "Celebration and event management specializing in spiritual ceremonies and milestone events."
        },
        { 
          name: "Lilvan.com", 
          logo: "🌸", 
          description: "Wellness and lifestyle platform promoting holistic health and spiritual well-being."
        },
        { 
          name: "Yoga Studio", 
          logo: "🕉️", 
          description: "Professional yoga instruction and meditation centers offering authentic spiritual practices."
        }
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
              Domains
            </span>
          </h1>
          <p className="text-xl text-[#F7F7F7] opacity-90">
            Explore our four specialized ecosystems designed to accelerate your business growth.
          </p>
        </div>
      </section>

      {/* Interactive Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {domains.map((domain, index) => (
              <Button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${domain.color} text-white`
                    : "bg-[#2A2A2A] text-[#F7F7F7] hover:bg-[#3D3A7D] border border-[#3D3A7D]"
                }`}
              >
                <span className="mr-2">{domain.icon}</span>
                {domain.title}
              </Button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Overview */}
            <div className="lg:col-span-2">
              <Card className="bg-[#1F1F1F] border-[#3D3A7D] h-full">
                <CardHeader>
                  <div className={`h-2 w-full bg-gradient-to-r ${domains[activeTab].color} rounded-full mb-4`}></div>
                  <CardTitle className="text-2xl text-[#F7F7F7] flex items-center">
                    <span className="text-3xl mr-3">{domains[activeTab].icon}</span>
                    {domains[activeTab].title}
                  </CardTitle>
                  <p className="text-[#10FFAB] font-medium">{domains[activeTab].website}</p>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold text-[#F7F7F7] mb-4">Overview</h3>
                  <p className="text-[#F7F7F7] opacity-90 mb-6 leading-relaxed">
                    {domains[activeTab].overview}
                  </p>
                  
                  <h3 className="text-xl font-semibold text-[#F7F7F7] mb-4">Services Offered</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {domains[activeTab].services.map((service, idx) => (
                      <div key={idx} className="flex items-center text-[#F7F7F7]">
                        <span className="w-2 h-2 bg-[#10FFAB] rounded-full mr-3 flex-shrink-0"></span>
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Partners */}
            <div>
              <Card className="bg-[#1F1F1F] border-[#3D3A7D] h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-[#F7F7F7]">Key Partners</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {domains[activeTab].partners.map((partner, idx) => (
                      <div key={idx} className="p-4 bg-[#2A2A2A] rounded-lg border border-[#3D3A7D] hover:border-[#10FFAB] transition-colors">
                        <div className="flex items-center mb-2">
                          <span className="text-2xl mr-3">{partner.logo}</span>
                          <h4 className="font-semibold text-[#F7F7F7]">{partner.name}</h4>
                        </div>
                        <p className="text-sm text-[#F7F7F7] opacity-80">{partner.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#3B82F6] via-[#A259FF] to-[#10FFAB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Ecosystem?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Discover partnership opportunities in your domain of expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#3B82F6] hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Become a Partner
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#3B82F6] px-8 py-4 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Domains;
