
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      title: "Email",
      value: "partnerships@99partners.in",
      icon: "📧",
      color: "from-[#3B82F6] to-[#10FFAB]"
    },
    {
      title: "Phone",
      value: "+91 98765 43210",
      icon: "📞",
      color: "from-[#A259FF] to-[#3B82F6]"
    },
    {
      title: "Address",
      value: "Business Hub, Tech City, Mumbai, India",
      icon: "📍",
      color: "from-[#10FFAB] to-[#A259FF]"
    },
    {
      title: "Working Hours",
      value: "Mon - Fri: 9:00 AM - 6:00 PM IST",
      icon: "⏰",
      color: "from-[#3D3A7D] to-[#10FFAB]"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#1F1F1F] via-[#3D3A7D] to-[#1F1F1F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#A259FF] bg-clip-text text-transparent">
              Contact
            </span>{" "}
            <span className="text-[#F7F7F7]">Us</span>
          </h1>
          <p className="text-xl text-[#F7F7F7] opacity-90 max-w-3xl mx-auto">
            Ready to start your partnership journey? Get in touch with our team to explore opportunities and discuss how we can grow together.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-[#1F1F1F] border-[#3D3A7D] hover:border-[#10FFAB] transition-all duration-300 text-center group">
                <CardContent className="p-6">
                  <div className={`text-4xl mb-4 p-4 rounded-full bg-gradient-to-r ${info.color} inline-block`}>
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#F7F7F7] mb-2 group-hover:text-[#10FFAB] transition-colors">
                    {info.title}
                  </h3>
                  <p className="text-[#F7F7F7] opacity-80 text-sm">
                    {info.value}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-gradient-to-r from-[#1F1F1F] to-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-[#1F1F1F] border-[#3D3A7D]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#F7F7F7]">Send us a Message</CardTitle>
                <p className="text-[#F7F7F7] opacity-80">
                  Fill out the form and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-[#F7F7F7]">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-[#2A2A2A] border-[#3D3A7D] text-[#F7F7F7] focus:border-[#10FFAB]"
                        required
                      />
                    </div>
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-[#F7F7F7]">Phone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-[#2A2A2A] border-[#3D3A7D] text-[#F7F7F7] focus:border-[#10FFAB]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-[#F7F7F7]">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        className="bg-[#2A2A2A] border-[#3D3A7D] text-[#F7F7F7] focus:border-[#10FFAB]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[#F7F7F7]">Message *</Label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="w-full h-32 bg-[#2A2A2A] border border-[#3D3A7D] text-[#F7F7F7] rounded-md px-3 py-2 focus:border-[#10FFAB] focus:outline-none resize-none"
                      placeholder="Tell us about your inquiry, partnership interests, or any questions you may have..."
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#3B82F6] to-[#A259FF] hover:from-[#A259FF] hover:to-[#3B82F6] text-white py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-8">
              <Card className="bg-[#1F1F1F] border-[#3D3A7D]">
                <CardHeader>
                  <CardTitle className="text-xl text-[#F7F7F7]">Quick Connect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">💼</span>
                    <div>
                      <h4 className="font-semibold text-[#F7F7F7]">Business Partnerships</h4>
                      <p className="text-sm text-[#F7F7F7] opacity-80">partnerships@99partners.in</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <h4 className="font-semibold text-[#F7F7F7]">General Inquiries</h4>
                      <p className="text-sm text-[#F7F7F7] opacity-80">info@99partners.in</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">🛠️</span>
                    <div>
                      <h4 className="font-semibold text-[#F7F7F7]">Technical Support</h4>
                      <p className="text-sm text-[#F7F7F7] opacity-80">support@99partners.in</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#1F1F1F] border-[#3D3A7D]">
                <CardHeader>
                  <CardTitle className="text-xl text-[#F7F7F7]">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#10FFAB] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-[#A259FF] to-[#3B82F6] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-[#10FFAB] to-[#A259FF] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
