
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      category: "Digital Commerce",
      color: "from-[#3B82F6] to-[#10FFAB]",
      posts: [
        {
          title: "The Future of E-commerce: ONDC Integration Benefits",
          excerpt: "Explore how Open Network for Digital Commerce is revolutionizing the e-commerce landscape and creating new opportunities for businesses.",
          date: "Dec 10, 2024",
          readTime: "5 min read",
          image: "🛒"
        },
        {
          title: "Co-branding Strategies for Digital Success",
          excerpt: "Learn effective co-branding approaches that can amplify your digital presence and create mutually beneficial partnerships.",
          date: "Dec 8, 2024",
          readTime: "7 min read",
          image: "🤝"
        },
        {
          title: "Building Sustainable E-commerce Partnerships",
          excerpt: "Discover the key elements of creating long-lasting partnerships in the digital commerce ecosystem.",
          date: "Dec 5, 2024",
          readTime: "6 min read",
          image: "🌱"
        }
      ]
    },
    {
      category: "IT & Marketing",
      color: "from-[#A259FF] to-[#3B82F6]",
      posts: [
        {
          title: "Digital Transformation: A Strategic Approach",
          excerpt: "Understanding the essential steps for successful digital transformation in modern businesses.",
          date: "Dec 9, 2024",
          readTime: "8 min read",
          image: "⚡"
        },
        {
          title: "Marketing Automation: Maximizing ROI",
          excerpt: "Best practices for implementing marketing automation tools that drive engagement and conversions.",
          date: "Dec 7, 2024",
          readTime: "6 min read",
          image: "🎯"
        },
        {
          title: "The Rise of KPO Services in Business Growth",
          excerpt: "How Knowledge Process Outsourcing is becoming a key driver for business efficiency and growth.",
          date: "Dec 4, 2024",
          readTime: "5 min read",
          image: "📊"
        }
      ]
    },
    {
      category: "Financial Services",
      color: "from-[#10FFAB] to-[#A259FF]",
      posts: [
        {
          title: "SME Financing: Navigating the New Landscape",
          excerpt: "Understanding the evolving SME financing options and how to choose the right funding strategy.",
          date: "Dec 6, 2024",
          readTime: "7 min read",
          image: "💰"
        },
        {
          title: "Building Financial Resilience for SMEs",
          excerpt: "Strategies for small and medium enterprises to build financial stability and growth.",
          date: "Dec 3, 2024",
          readTime: "6 min read",
          image: "🏦"
        },
        {
          title: "Investment Trends in 2024: What SMEs Need to Know",
          excerpt: "Key investment trends and opportunities that SMEs should consider for sustainable growth.",
          date: "Dec 1, 2024",
          readTime: "8 min read",
          image: "📈"
        }
      ]
    },
    {
      category: "Spiritual Ecosystem",
      color: "from-[#3D3A7D] to-[#10FFAB]",
      posts: [
        {
          title: "The Business of Wellness: Market Opportunities",
          excerpt: "Exploring the growing wellness industry and opportunities for businesses in the spiritual ecosystem.",
          date: "Dec 2, 2024",
          readTime: "6 min read",
          image: "🧘"
        },
        {
          title: "Integrating Ancient Wisdom with Modern Business",
          excerpt: "How traditional practices like Ayurveda and yoga are creating new business opportunities.",
          date: "Nov 30, 2024",
          readTime: "7 min read",
          image: "🌿"
        },
        {
          title: "Digital Platforms for Spiritual Services",
          excerpt: "The rise of digital platforms in making spiritual and wellness services more accessible.",
          date: "Nov 28, 2024",
          readTime: "5 min read",
          image: "✨"
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
              Blog
            </span>
          </h1>
          <p className="text-xl text-[#F7F7F7] opacity-90 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and strategies across our four key domains. Learn from industry experts and discover new opportunities for growth.
          </p>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {blogPosts.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#F7F7F7] mb-4">
                    <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.category}
                    </span>{" "}
                    Insights
                  </h2>
                  <div className={`h-1 w-24 bg-gradient-to-r ${category.color} mx-auto rounded-full`}></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.posts.map((post, postIndex) => (
                    <Card key={postIndex} className="bg-[#1F1F1F] border-[#3D3A7D] hover:border-[#10FFAB] transition-all duration-300 hover:scale-105 group cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center mb-4">
                          <span className="text-4xl mr-4">{post.image}</span>
                          <Badge variant="secondary" className={`bg-gradient-to-r ${category.color} text-white`}>
                            {category.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg text-[#F7F7F7] group-hover:text-[#10FFAB] transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-[#F7F7F7] opacity-80 mb-4 text-sm leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex justify-between items-center text-sm text-[#F7F7F7] opacity-60">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                        <Button variant="ghost" className="w-full mt-4 text-[#10FFAB] hover:bg-[#10FFAB] hover:text-[#1F1F1F]">
                          Read More
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-[#3B82F6] via-[#A259FF] to-[#10FFAB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Subscribe to our newsletter and never miss the latest insights and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <Button className="bg-white text-[#3B82F6] hover:bg-gray-100 px-8 py-3 font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Stats */}
      <section className="py-16 bg-gradient-to-r from-[#1F1F1F] to-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#10FFAB] bg-clip-text text-transparent mb-2">
                50+
              </div>
              <p className="text-[#F7F7F7] text-lg">Articles Published</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#A259FF] to-[#3B82F6] bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <p className="text-[#F7F7F7] text-lg">Monthly Readers</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#10FFAB] to-[#A259FF] bg-clip-text text-transparent mb-2">
                4
              </div>
              <p className="text-[#F7F7F7] text-lg">Domain Expertise</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#3D3A7D] to-[#10FFAB] bg-clip-text text-transparent mb-2">
                Weekly
              </div>
              <p className="text-[#F7F7F7] text-lg">New Content</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
