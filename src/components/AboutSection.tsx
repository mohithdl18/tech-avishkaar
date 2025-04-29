
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Award, Code } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="gradient-text">TechAvishkaar</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A
            24-hour national-level hackathon
            bringing together the brightest
            young minds in technology and
            innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">What is TechAvishkaar?</h3>
            <p className="text-gray-700 mb-4">
            TechAvishkaar is a premier 24-hour hackathon that challenges participants to build innovative solutions to real-world problems. Whether you're a seasoned developer or just starting out, HackFusion offers an inclusive environment for learning, collaboration, and growth.
            </p>
            <p className="text-gray-700 mb-4">
              With amazing prizes, mentorship opportunities, and networking events, HackFusion is more than just a coding competition—it's a community celebration of technology and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors p-2">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                  <Lightbulb className="text-white h-6 w-6" />
                </div>
                <h4 className="font-bold text-lg mb-2">Innovation</h4>
                <p className="text-gray-600">Push boundaries with cutting-edge solutions</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors p-2">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                  <Users className="text-white h-6 w-6" />
                </div>
                <h4 className="font-bold text-lg mb-2">Collaboration</h4>
                <p className="text-gray-600">Work with diverse teams to achieve goals</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors p-2">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                  <Code className="text-white h-6 w-6" />
                </div>
                <h4 className="font-bold text-lg mb-2">Learning</h4>
                <p className="text-gray-600">Gain new skills and knowledge through workshops</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors p-2">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                  <Award className="text-white h-6 w-6" />
                </div>
                <h4 className="font-bold text-lg mb-2">Prizes</h4>
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
