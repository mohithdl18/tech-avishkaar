
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const RegisterSection = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    role: "",
    skill: "",
    teamStatus: "",
    why: ""
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formState.name || !formState.email) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Form submission would happen here
    toast({
      title: "Registration Submitted!",
      description: "Check your email for confirmation details.",
    });
    
    // Reset form
    setFormState({
      name: "",
      email: "",
      role: "",
      skill: "",
      teamStatus: "",
      why: ""
    });
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="register" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Register for <span className="gradient-text">HackFusion</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure your spot for the most exciting hackathon of the year.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Why Register?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 w-5 h-5 rounded-full gradient-bg flex items-center justify-center text-white">✓</div>
                    <div>
                      <span className="font-medium">Connect with Top Talent</span>
                      <p className="text-gray-600 text-sm">Meet fellow developers, designers, and tech enthusiasts</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 w-5 h-5 rounded-full gradient-bg flex items-center justify-center text-white">✓</div>
                    <div>
                      <span className="font-medium">Learn New Skills</span>
                      <p className="text-gray-600 text-sm">Attend workshops led by industry experts</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 w-5 h-5 rounded-full gradient-bg flex items-center justify-center text-white">✓</div>
                    <div>
                      <span className="font-medium">Win Amazing Prizes</span>
                      <p className="text-gray-600 text-sm">Over $50,000 in prizes and opportunities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 w-5 h-5 rounded-full gradient-bg flex items-center justify-center text-white">✓</div>
                    <div>
                      <span className="font-medium">Build Your Portfolio</span>
                      <p className="text-gray-600 text-sm">Create projects that showcase your skills</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-2">Registration Deadline</h4>
                  <p className="text-sm text-gray-600">April 30, 2025 or until spots are filled</p>
                  <div className="h-px bg-gray-200 my-4"></div>
                  <h4 className="font-bold mb-2">Event Dates</h4>
                  <p className="text-sm text-gray-600">May 15-17, 2025</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          placeholder="Your full name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="your.email@example.com"
                          value={formState.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="role">Your Role</Label>
                          <Select 
                            value={formState.role}
                            onValueChange={(value) => handleSelectChange("role", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="developer">Developer</SelectItem>
                              <SelectItem value="designer">Designer</SelectItem>
                              <SelectItem value="product">Product Manager</SelectItem>
                              <SelectItem value="student">Student</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="skill">Experience Level</Label>
                          <Select
                            value={formState.skill}
                            onValueChange={(value) => handleSelectChange("skill", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Your experience" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="beginner">Beginner</SelectItem>
                              <SelectItem value="intermediate">Intermediate</SelectItem>
                              <SelectItem value="advanced">Advanced</SelectItem>
                              <SelectItem value="expert">Expert</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="teamStatus">Team Status</Label>
                        <Select
                          value={formState.teamStatus}
                          onValueChange={(value) => handleSelectChange("teamStatus", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="solo">I'm joining solo</SelectItem>
                            <SelectItem value="forming">I want to join a team</SelectItem>
                            <SelectItem value="have-team">I have a team already</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="why">Why do you want to participate?</Label>
                        <Textarea 
                          id="why" 
                          name="why" 
                          placeholder="Tell us a bit about yourself and why you're excited about HackFusion"
                          value={formState.why}
                          onChange={handleChange}
                          rows={4}
                        />
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full gradient-bg">
                      Submit Registration
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      By registering, you agree to our Code of Conduct and Event Terms
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
