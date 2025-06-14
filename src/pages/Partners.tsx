
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Partners = () => {
  const partnerCategories = [
    {
      category: "E-Commerce",
      color: "from-[#3B82F6] to-[#10FFAB]",
      partners: [
        { 
          name: "Nutraio", 
          logo: "🌱", 
          description: "AI-driven personalized nutrition and wellness platform offering customized health solutions.",
          specialties: ["Nutrition", "AI Health", "Wellness"]
        },
        { 
          name: "99bowls", 
          logo: "🍽️", 
          description: "Premium food delivery service connecting customers with quality restaurants and gourmet meals.",
          specialties: ["Food Delivery", "Restaurant Network", "Gourmet"]
        },
        { 
          name: "GudGoodlife", 
          logo: "✨", 
          description: "Sustainable lifestyle brand promoting eco-friendly products and conscious living.",
          specialties: ["Sustainability", "Lifestyle", "Eco-Products"]
        },
        { 
          name: "Perlmillet", 
          logo: "🌾", 
          description: "Organic agriculture platform connecting farmers with consumers for sustainable food production.",
          specialties: ["Organic Farming", "Sustainability", "Agriculture"]
        },
        { 
          name: "CHAAH Tea", 
          logo: "🍵", 
          description: "Premium tea company offering artisanal blends with direct farmer partnerships.",
          specialties: ["Premium Tea", "Artisanal", "Fair Trade"]
        }
      ]
    },
    {
      category: "IT & Marketing",
      color: "from-[#A259FF] to-[#3B82F6]",
      partners: [
        { 
          name: "Biztech.one", 
          logo: "⚡", 
          description: "Business technology consulting firm specializing in digital transformation and enterprise solutions.",
          specialties: ["Digital Transformation", "Enterprise Solutions", "Consulting"]
        },
        { 
          name: "Doctor Dairy", 
          logo: "🏥", 
          description: "Healthcare technology platform connecting patients with medical professionals and services.",
          specialties: ["Healthcare Tech", "Telemedicine", "Medical Services"]
        },
        { 
          name: "eBranding Studio", 
          logo: "🎨", 
          description: "Creative design studio providing comprehensive branding and digital identity solutions.",
          specialties: ["Branding", "Design", "Digital Identity"]
        },
        { 
          name: "ARKinfoserv", 
          logo: "📊", 
          description: "Information services provider offering data management and business intelligence solutions.",
          specialties: ["Data Management", "Business Intelligence", "Analytics"]
        }
      ]
    },
    {
      category: "Finance",
      color: "from-[#10FFAB] to-[#A259FF]",
      partners: [
        { 
          name: "ICICI Bank", 
          logo: "🏦", 
          description: "Leading private sector bank offering comprehensive financial services and innovative banking solutions.",
          specialties: ["Banking", "Loans", "Financial Services"]
        },
        { 
          name: "Kotak Bank", 
          logo: "💎", 
          description: "Premium banking services with focus on personalized financial solutions and wealth management.",
          specialties: ["Premium Banking", "Wealth Management", "Investment"]
        },
        { 
          name: "Bank of Baroda", 
          logo: "🏛️", 
          description: "Trusted public sector bank providing reliable financial services and business banking solutions.",
          specialties: ["Business Banking", "SME Loans", "Financial Solutions"]
        },
        { 
          name: "Tata Capital", 
          logo: "🌟", 
          description: "Comprehensive financial services company offering diversified lending and investment solutions.",
          specialties: ["Financial Services", "Investment", "Capital Solutions"]
        }
      ]
    },
    {
      category: "Wellness",
      color: "from-[#3D3A7D] to-[#10FFAB]",
      partners: [
        { 
          name: "Joshidada.com", 
          logo: "🔮", 
          description: "Expert astrology platform providing spiritual guidance and cosmic insights from experienced practitioners.",
          specialties: ["Astrology", "Spiritual Guidance", "Cosmic Insights"]
        },
        { 
          name: "Panchkarma Kutir", 
          logo: "🌿", 
          description: "Authentic Ayurvedic treatment center offering traditional Panchkarma therapies and wellness programs.",
          specialties: ["Ayurveda", "Panchkarma", "Traditional Healing"]
        },
        { 
          name: "BigBirthday.in", 
          logo: "🎉", 
          description: "Event management company specializing in spiritual ceremonies and meaningful life celebrations.",
          specialties: ["Event Management", "Spiritual Ceremonies", "Celebrations"]
        },
        { 
          name: "Lilvan.com", 
          logo: "🌸", 
          description: "Wellness marketplace connecting individuals with holistic health practitioners and services.",
          specialties: ["Wellness Marketplace", "Holistic Health", "Mind-Body Wellness"]
        },
        { 
          name: "Yoga Studio", 
          logo: "🕉️", 
          description: "Professional yoga centers offering authentic instruction and meditation practices for all levels.",
          specialties: ["Yoga Instruction", "Meditation", "Spiritual Practice"]
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
              Partners
            </span>
          </h1>
          <p className="text-xl text-[#F7F7F7] opacity-90 max-w-3xl mx-auto">
            Meet the innovative companies and organizations that make up our thriving ecosystem. Together, we're building the future of business partnerships.
          </p>
        </div>
      </section>

      {/* Partners by Category */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {partnerCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#F7F7F7] mb-4">
                    <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.category}
                    </span>{" "}
                    Partners
                  </h2>
                  <div className={`h-1 w-24 bg-gradient-to-r ${category.color} mx-auto rounded-full`}></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.partners.map((partner, partnerIndex) => (
                    <Card key={partnerIndex} className="bg-[#1F1F1F] border-[#3D3A7D] hover:border-[#10FFAB] transition-all duration-300 hover:scale-105 group">
                      <CardHeader>
                        <div className="flex items-center mb-4">
                          <span className="text-4xl mr-4">{partner.logo}</span>
                          <div>
                            <CardTitle className="text-lg text-[#F7F7F7] group-hover:text-[#10FFAB] transition-colors">
                              {partner.name}
                            </CardTitle>
                          </div>
                        </div>
                        <div className={`h-1 w-full bg-gradient-to-r ${category.color} rounded-full`}></div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-[#F7F7F7] opacity-80 mb-4 text-sm leading-relaxed">
                          {partner.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {partner.specialties.map((specialty, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs bg-[#3D3A7D] text-[#F7F7F7] hover:bg-[#10FFAB] hover:text-[#1F1F1F]">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Stats */}
      <section className="py-16 bg-gradient-to-r from-[#1F1F1F] to-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#10FFAB] bg-clip-text text-transparent mb-2">
                25+
              </div>
              <p className="text-[#F7F7F7] text-lg">Active Partners</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#A259FF] to-[#3B82F6] bg-clip-text text-transparent mb-2">
                4
              </div>
              <p className="text-[#F7F7F7] text-lg">Key Domains</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#10FFAB] to-[#A259FF] bg-clip-text text-transparent mb-2">
                100+
              </div>
              <p className="text-[#F7F7F7] text-lg">Successful Projects</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#3D3A7D] to-[#10FFAB] bg-clip-text text-transparent mb-2">
                99%
              </div>
              <p className="text-[#F7F7F7] text-lg">Partner Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#3B82F6] via-[#A259FF] to-[#10FFAB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Become a Partner
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Join our thriving ecosystem and accelerate your business growth with strategic partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join-us">
              <Button size="lg" className="bg-white text-[#3B82F6] hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Apply for Partnership
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#3B82F6] px-8 py-4 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
