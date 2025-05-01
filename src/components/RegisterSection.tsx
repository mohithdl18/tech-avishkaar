
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const RegisterSection = () => {
  return (
    <section id="register" className="py-20 section-gradient relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Register for <span className="gradient-text">TechAvishkaar</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure your spot for the most exciting hackathon of the year.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="glassy-card border-2 border-[#150029]/10">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#150029]">Why Register?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 w-5 h-5 rounded-full gradient-bg flex items-center justify-center text-white">✓</div>
                      <div>
                        <span className="font-medium text-[#150029]">Connect with Top Talent</span>
                        <p className="text-gray-600 text-sm">Meet fellow developers, designers, and tech enthusiasts</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 w-5 h-5 rounded-full gradient-bg flex items-center justify-center text-white">✓</div>
                      <div>
                        <span className="font-medium text-[#150029]">Learn New Skills</span>
                        <p className="text-gray-600 text-sm">Attend workshops led by industry experts</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 w-5 h-5 rounded-full gradient-bg flex items-center justify-center text-white">✓</div>
                      <div>
                        <span className="font-medium text-[#150029]">Win Amazing Prizes</span>
                        <p className="text-gray-600 text-sm">Over $50,000 in prizes and opportunities</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 w-5 h-5 rounded-full gradient-bg flex items-center justify-center text-white">✓</div>
                      <div>
                        <span className="font-medium text-[#150029]">Build Your Portfolio</span>
                        <p className="text-gray-600 text-sm">Create projects that showcase your skills</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-center justify-center space-y-6 text-center">
                  <div className="mb-2">
                    <h4 className="font-bold mb-1 text-lg text-[#150029]">Registration Deadline</h4>
                    <p className="text-gray-600">May 10, 2025 or until spots are filled</p>
                  </div>
                  <Button size="lg" className="gradient-bg w-full text-lg py-7" asChild>
                    <a href="https://tally.so/r/3ygjYd" target="_blank" rel="noopener noreferrer">
                      Register Now <ArrowRight className="ml-2" size={18} />
                    </a>
                  </Button>
                  <p className="text-xs text-gray-500">
                    By registering, you agree to our Code of Conduct and Event Terms
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
