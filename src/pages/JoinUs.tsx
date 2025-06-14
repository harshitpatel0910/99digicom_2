
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const JoinUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    designation: "",
    email: "",
    phone: "",
    website: "",
    businessType: [],
    businessDescription: "",
    partnershipGoals: "",
    targetAudience: "",
    consent: false
  });

  const businessTypes = [
    "Digital Commerce",
    "IT & Marketing", 
    "Financial Services",
    "Spiritual Ecosystem"
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBusinessTypeChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      businessType: prev.businessType.includes(type)
        ? prev.businessType.filter(t => t !== type)
        : [...prev.businessType, type]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll review your application and get back to you within 48 hours.",
    });
    
    // Reset form
    setFormData({
      fullName: "",
      company: "",
      designation: "",
      email: "",
      phone: "",
      website: "",
      businessType: [],
      businessDescription: "",
      partnershipGoals: "",
      targetAudience: "",
      consent: false
    });
  };

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#1F1F1F] via-[#3D3A7D] to-[#1F1F1F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#A259FF] bg-clip-text text-transparent">
              Join
            </span>{" "}
            <span className="text-[#F7F7F7]">Our Ecosystem</span>
          </h1>
          <p className="text-xl text-[#F7F7F7] opacity-90 max-w-3xl mx-auto">
            Ready to accelerate your business growth? Apply for partnership and become part of our dynamic ecosystem.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#F7F7F7]">
            Partnership <span className="bg-gradient-to-r from-[#3B82F6] to-[#A259FF] bg-clip-text text-transparent">Benefits</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: "🚀", title: "Accelerated Growth", description: "Leverage our network to scale faster" },
              { icon: "🤝", title: "Strategic Partnerships", description: "Connect with industry leaders" },
              { icon: "💡", title: "Innovation Access", description: "Stay ahead with cutting-edge solutions" },
              { icon: "🌍", title: "Market Expansion", description: "Reach new audiences and markets" }
            ].map((benefit, index) => (
              <Card key={index} className="bg-[#1F1F1F] border-[#3D3A7D] hover:border-[#10FFAB] transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-[#F7F7F7] mb-2">{benefit.title}</h3>
                  <p className="text-[#F7F7F7] opacity-80 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-16 bg-gradient-to-r from-[#1F1F1F] to-[#2A2A2A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-[#1F1F1F] border-[#3D3A7D]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#F7F7F7] text-center">Partnership Application</CardTitle>
              <p className="text-[#F7F7F7] opacity-80 text-center">
                Tell us about your business and partnership goals
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="fullName" className="text-[#F7F7F7]">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="bg-[#2A2A2A] border-[#3D3A7D] text-[#F7F7F7] focus:border-[#10FFAB]"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-[#F7F7F7]">Company *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="bg-[#2A2A2A] border-[#3D3A7D] text-[#F7F7F7] focus:border-[#10FFAB]"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="designation" className="text-[#F7F7F7]">Designation *</Label>
                    <Input
                      id="designation"
                      value={formData.designation}
                      onChange={(e) => handleInputChange("designation", e.target.value)}
                      className="bg-[#2A2A2A] border-[#3D3A7D] text-[#F7F7F7] focus:border-[#10FFAB]"
                      required
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-[#F7F7F7]">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-[#2A2A2A] border-[#3D3A7D] text-[#F7F7F7] focus:border-[#10FFAB]"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-[#F7F7F7]">Phone *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-[#2A2A2A] border-[#3D3A7D] text-[#F7F7F7] focus:border-[#10FFAB]"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="website" className="text-[#F7F7F7]">Website</Label>
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                      className="bg-[#2A2A2A] border-[#3D3A7D] text-[#F7F7F7] focus:border-[#10FFAB]"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                </div>

                {/* Business Type */}
                <div>
                  <Label className="text-[#F7F7F7] mb-3 block">Type of Business (Select one or more) *</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {businessTypes.map((type, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={`business-${index}`}
                          checked={formData.businessType.includes(type)}
                          onChange={() => handleBusinessTypeChange(type)}
                          className="w-4 h-4 text-[#10FFAB] bg-[#2A2A2A] border-[#3D3A7D] rounded focus:ring-[#10FFAB]"
                        />
                        <Label htmlFor={`business-${index}`} className="text-[#F7F7F7]">{type}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Description */}
                <div>
                  <Label htmlFor="businessDescription" className="text-[#F7F7F7]">Describe Your Business *</Label>
                  <textarea
                    id="businessDescription"
                    value={formData.businessDescription}
                    onChange={(e) => handleInputChange("businessDescription", e.target.value)}
                    className="w-full h-24 bg-[#2A2A2A] border border-[#3D3A7D] text-[#F7F7F7] rounded-md px-3 py-2 focus:border-[#10FFAB] focus:outline-none resize-none"
                    placeholder="Tell us about your business, products/services, and current market position..."
                    required
                  />
                </div>

                {/* Partnership Goals */}
                <div>
                  <Label htmlFor="partnershipGoals" className="text-[#F7F7F7]">Partnership Goals *</Label>
                  <textarea
                    id="partnershipGoals"
                    value={formData.partnershipGoals}
                    onChange={(e) => handleInputChange("partnershipGoals", e.target.value)}
                    className="w-full h-24 bg-[#2A2A2A] border border-[#3D3A7D] text-[#F7F7F7] rounded-md px-3 py-2 focus:border-[#10FFAB] focus:outline-none resize-none"
                    placeholder="What do you hope to achieve through partnership with 99Partners?"
                    required
                  />
                </div>

                {/* Target Audience */}
                <div>
                  <Label htmlFor="targetAudience" className="text-[#F7F7F7]">Target Audience *</Label>
                  <textarea
                    id="targetAudience"
                    value={formData.targetAudience}
                    onChange={(e) => handleInputChange("targetAudience", e.target.value)}
                    className="w-full h-24 bg-[#2A2A2A] border border-[#3D3A7D] text-[#F7F7F7] rounded-md px-3 py-2 focus:border-[#10FFAB] focus:outline-none resize-none"
                    placeholder="Describe your target market and customer demographics..."
                    required
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={(e) => handleInputChange("consent", e.target.checked)}
                    className="w-4 h-4 text-[#10FFAB] bg-[#2A2A2A] border-[#3D3A7D] rounded focus:ring-[#10FFAB] mt-1"
                    required
                  />
                  <Label htmlFor="consent" className="text-[#F7F7F7] text-sm leading-relaxed">
                    I consent to the processing of my personal data and agree to be contacted regarding partnership opportunities. 
                    I understand that 99Partners will use this information to evaluate my application and provide relevant updates. *
                  </Label>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#3B82F6] to-[#A259FF] hover:from-[#A259FF] hover:to-[#3B82F6] text-white py-4 text-lg"
                  disabled={!formData.consent || !formData.fullName || !formData.email || formData.businessType.length === 0}
                >
                  Submit Partnership Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#F7F7F7] mb-8">What Happens Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#10FFAB] rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">1</div>
              <h3 className="text-lg font-semibold text-[#F7F7F7]">Application Review</h3>
              <p className="text-[#F7F7F7] opacity-80">Our team reviews your application within 48 hours</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#A259FF] to-[#3B82F6] rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">2</div>
              <h3 className="text-lg font-semibold text-[#F7F7F7]">Initial Discussion</h3>
              <p className="text-[#F7F7F7] opacity-80">We schedule a call to discuss partnership opportunities</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#10FFAB] to-[#A259FF] rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">3</div>
              <h3 className="text-lg font-semibold text-[#F7F7F7]">Partnership Launch</h3>
              <p className="text-[#F7F7F7] opacity-80">We onboard you and begin our collaboration</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
