
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set the hackathon date - May 15, 2025
  const hackathonDate = new Date("2025-05-15T00:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = hackathonDate - now;
      
      if (distance < 0) {
        // Hackathon has started
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [hackathonDate]);

  return (
    <div className="relative min-h-screen hero-gradient flex flex-col items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#150029]/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 inline-block p-2 bg-white/20 backdrop-blur-sm rounded-full">
            <p className="text-sm font-medium px-3 py-1">
              <span className="text-[#3c0075] font-semibold">May 15-16, 2025</span> • ATME College of Engineering
            </p>
            <p className="text-sm font-medium px-3 py-1">
            In Collaboration with •  <span className="text-[#3c0075] font-semibold">IEEE and IET</span>
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#3c0075]">
            Tech<span className="gradient-text">Avishkar</span> 2.0
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-[#150029]">
          "Where ideas ignite and innovation never sleeps — join the 24-hour coding revolution!"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gradient-bg text-lg py-6 px-8" asChild>
              <a href="https://tally.so/r/3ygjYd">Register Now</a>
            </Button>
            <Button variant="outline" className="text-lg py-6 px-8 border-2 text-[#150029] hover:bg-accent/5" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center">
            <div className="animate-float">
              <div className="text-xs font-medium uppercase tracking-wider mb-2 text-[#150029]">
                Hackathon Starts In
              </div>
              <div className="glassy-card px-6 py-3 rounded-lg shadow-lg flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-mono font-bold text-[#150029]">{String(timeLeft.days).padStart(2, '0')}</span>
                  <span className="text-xs text-gray-500">DAYS</span>
                </div>
                <span className="text-2xl font-mono font-bold self-start text-[#150029]">:</span>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-mono font-bold text-[#150029]">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="text-xs text-gray-500">HOURS</span>
                </div>
                <span className="text-2xl font-mono font-bold self-start text-[#150029]">:</span>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-mono font-bold text-[#150029]">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="text-xs text-gray-500">MIN</span>
                </div>
                <span className="text-2xl font-mono font-bold self-start text-[#150029]">:</span>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-mono font-bold text-[#150029]">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="text-xs text-gray-500">SEC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#about" 
          className="animate-bounce flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#150029" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
