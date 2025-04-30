
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageSquare, Building, Gift, Users, BriefcaseBusiness, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Sponsorship = () => {
  const sponsorshipTiers = [
    {
      name: "Platinum",
      price: "$10,000",
      color: "bg-gradient-to-r from-gray-200 to-gray-400",
      benefits: [
        "Prime logo placement on all materials",
        "Dedicated booth at the event (10x10)",
        "6 social media promotions",
        "First pick of mentors and judges",
        "5-minute presentation during opening",
        "Access to participant resumes",
        "Branded workshop or tech talk",
        "Opportunity to provide branded swag"
      ]
    },
    {
      name: "Gold",
      price: "$5,000",
      color: "bg-gradient-to-r from-yellow-200 to-yellow-400",
      benefits: [
        "Large logo on event materials",
        "Booth at the event (8x8)",
        "4 social media promotions",
        "Mentors and judges access",
        "2-minute presentation",
        "Access to participant resumes",
        "Branded workshop or tech talk"
      ]
    },
    {
      name: "Silver",
      price: "$2,500",
      color: "bg-gradient-to-r from-gray-300 to-gray-500",
      benefits: [
        "Medium logo on event materials",
        "Table at the event",
        "2 social media promotions",
        "Mentors and judges access",
        "Access to participant resumes"
      ]
    },
    {
      name: "Bronze",
      price: "$1,000",
      color: "bg-gradient-to-r from-amber-700/60 to-amber-500/60",
      benefits: [
        "Small logo on event materials",
        "Shared table at the event",
        "1 social media promotion"
      ]
    }
  ];

  return (
    <div className="min-h-screen soft-gradient-bg">
      <Navbar />
      
      <div className="pt-24 pb-20 relative">
        {/* Grid background */}
        <div className="absolute inset-0 grid-bg"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#150029]">
                Sponsor <span className="gradient-text">TechAvishkaar 2.0</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Connect with the brightest tech talent and showcase your brand at the premier
                hackathon event of the year.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
              <Card className="glassy-card border-2 border-[#150029]/10">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-[#150029] flex items-center justify-center mb-4">
                    <BriefcaseBusiness className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#150029]">Brand Visibility</h3>
                  <p className="text-gray-600 flex-grow">
                    Get your company logo and brand in front of hundreds of talented developers,
                    designers, and tech enthusiasts.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glassy-card border-2 border-[#150029]/10">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-[#150029] flex items-center justify-center mb-4">
                    <Users className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#150029]">Talent Recruitment</h3>
                  <p className="text-gray-600 flex-grow">
                    Connect with motivated students and professionals who demonstrate their skills
                    in a competitive environment.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glassy-card border-2 border-[#150029]/10">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-[#150029] flex items-center justify-center mb-4">
                    <Award className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#150029]">Community Impact</h3>
                  <p className="text-gray-600 flex-grow">
                    Support the next generation of tech leaders and contribute to the growth
                    of the technology ecosystem.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="text-3xl font-bold text-center mb-10 text-[#150029]">Sponsorship Tiers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {sponsorshipTiers.map((tier, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className={`h-16 ${tier.color} flex items-center justify-center`}>
                    <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <p className="text-3xl font-bold text-[#150029]">{tier.price}</p>
                    </div>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mr-2 mt-1 w-4 h-4 rounded-full gradient-bg flex items-center justify-center text-white text-xs">✓</div>
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-[#150029]">Interested in sponsoring?</h2>
              <p className="text-gray-700 mb-8">
                We're happy to discuss custom sponsorship packages that align with your company's goals.
                Contact our sponsorship team for more information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="gradient-bg" size="lg" asChild>
                  <a href="mailto:sponsors@techavishkaar.com">
                    <MessageSquare className="mr-2" size={18} />
                    Contact Sponsorship Team
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-[#150029] text-[#150029]" asChild>
                  <a href="/sponsorship-deck.pdf" download>
                    <Building className="mr-2" size={18} />
                    Download Sponsorship Deck
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Sponsorship;
