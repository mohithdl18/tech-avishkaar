
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen hero-gradient flex flex-col items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 inline-block p-2 bg-white/10 backdrop-blur-sm rounded-full">
            <p className="text-sm font-medium px-3 py-1">
              <span className="gradient-text font-semibold">May 15-17, 2025</span> • San Francisco & Virtual
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hack<span className="gradient-text">Fusion</span> 2025
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Where innovation meets collaboration. Join 1000+ developers, designers, and entrepreneurs for a 48-hour coding marathon.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gradient-bg text-lg py-6 px-8" asChild>
              <a href="#register">Register Now</a>
            </Button>
            <Button variant="outline" className="text-lg py-6 px-8 border-2 hover:bg-accent/5" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center">
            <div className="animate-float">
              <div className="text-xs font-medium uppercase tracking-wider mb-2 text-gray-500">
                Registration Closes
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg">
                <span className="text-2xl font-mono font-bold">23</span>
                <span className="mx-2">:</span>
                <span className="text-2xl font-mono font-bold">14</span>
                <span className="mx-2">:</span>
                <span className="text-2xl font-mono font-bold">56</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#about" 
          className="animate-bounce flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
