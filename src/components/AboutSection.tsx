
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Award, Code } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-gradient relative">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#150029]">About <span className="gradient-text">TechAvishkaar</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A
            24-hour national-level hackathon
            bringing together the brightest
            young minds in technology and
            innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glassy-card p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-[#150029]">What is TechAvishkaar?</h3>
            <p className="text-gray-700 mb-4">
            Welcome to TechAvishkar 2.0 – Ignite. Innovate. Impact.
TechAvishkar 2.0 is a premier 24-hour National Level Hackathon designed to push boundaries and spark innovation. Step into a high-energy arena where bright minds come together to craft tech-driven solutions to real-world challenges.
Whether you're a seasoned developer or a passionate beginner, TechAvishkar fosters an inclusive space that thrives on collaboration, creativity, and continuous learning.
With exciting prizes, hands-on mentorship,internship and unmatched networking opportunities, this isn’t just a coding competition — it's a celebration of technology, talent, and teamwork.
            </p>
            <p className="text-gray-700 mb-4">
              With amazing prizes, mentorship opportunities, and networking events, TechAvishkaar is more than just a coding competition—it's a community celebration of technology and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="glassy-card border-2 border-[#150029]/10 hover:border-[#150029]/30 transition-colors p-2">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#150029] flex items-center justify-center mb-4">
                  <Lightbulb className="text-white h-6 w-6" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-[#150029]">Innovation</h4>
                <p className="text-gray-600">Push boundaries with cutting-edge solutions</p>
              </CardContent>
            </Card>

            <Card className="glassy-card border-2 border-[#150029]/10 hover:border-[#150029]/30 transition-colors p-2">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#150029] flex items-center justify-center mb-4">
                  <Users className="text-white h-6 w-6" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-[#150029]">Collaboration</h4>
                <p className="text-gray-600">Work with diverse teams to achieve goals</p>
              </CardContent>
            </Card>

            <Card className="glassy-card border-2 border-[#150029]/10 hover:border-[#150029]/30 transition-colors p-2">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#150029] flex items-center justify-center mb-4">
                  <Code className="text-white h-6 w-6" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-[#150029]">Learning</h4>
                <p className="text-gray-600">Gain new skills and knowledge through mentorship</p>
              </CardContent>
            </Card>

            <Card className="glassy-card border-2 border-[#150029]/10 hover:border-[#150029]/30 transition-colors p-2">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#150029] flex items-center justify-center mb-4">
                  <Award className="text-white h-6 w-6" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-[#150029]">Prizes</h4>
                <p className="text-gray-600">Win amazing rewards valued at over $50,000</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
