
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, BookOpen, Maximize } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

const TracksSection = () => {
  const [activeTrackId, setActiveTrackId] = useState<number | null>(null);
  const [selectedProblem, setSelectedProblem] = useState<{
    title: string;
    description: string;
    trackTitle: string;
    trackColor: string;
  } | null>(null);

  const tracks = [
    {
      id: 1,
      title: "AI & Machine Learning",
      description: "Build solutions using artificial intelligence, machine learning, or natural language processing.",
      icon: "🤖",
      color: "from-violet-500 to-purple-600",
      problemStatements: [
        {
          title: "Smart Healthcare & Wellbeing",
          description: "Leveraging AI and ML to deliver predictive, personalized healthcare and promote holistic wellbeing through smart diagnostics and real-time monitoring."
        },
        {
          title: "Cultural Apps & Gamification",
          description: "Using AI and ML to personalize cultural content, enable intelligent storytelling, and gamify heritage learning for deeper, engaging experiences."
        },
        {
          title: "Public Safety & Civic Engagement",
          description: "Applying AI and ML to enhance threat detection, streamline emergency response, and enable data-driven civic participation and decision-making."
        }
      ]
    },
    {
      id: 2,
      title: "Internet of Things",
      description: "Create smart solutions using connected devices and real-time sensors to automate and optimize.",
      icon: "⛓️",
      color: "from-blue-500 to-cyan-600",
      problemStatements: [
        {
          title: "Renewable Energy Management",
          description: "Harnessing IoT for real-time monitoring, optimization, and intelligent distribution of renewable energy sources to ensure sustainable power systems."
        },
        {
          title: "Assistive Tech & Accessibility",
          description: "Utilizing IoT-enabled devices to enhance independence and accessibility for people with disabilities and old age through smart environments and adaptive interfaces."
        },
        {
          title: "Smart Cities & Urban Mobility",
          description: "Integrating IoT to optimize urban infrastructure, manage traffic flow, and enable seamless, data-driven mobility in connected smart cities."
        }
      ]
    },
    {
      id: 3,
      title: "Special Statements",
      description: "Develop unique solutions addressing niche problems or innovative use cases beyond standard categories.",
      icon: "🌍",
      color: "from-green-500 to-emerald-600",
      problemStatements: [
        {
          title: "AI & ML",
          description: "Pick a food product (like Frooti or Maaza). Scan it for its nutritional values. After scanning, compare it with other food products in its category (juices) and suggest a healthier choice. (Select parameters like sugar content, vitamins, preservatives, freshness & shelf life, and more as needed)."
        },
        {
          title: "Cyber Security",
          description: "Build a chatbot that can be integrated with your antivirus server, patch management server, and domain server. With the chat commands, it should be able to update antivirus and patches in the end-user system."
        }
      ]
    },
    {
      id: 4,
      title: "Open Innovation",
      description: "Create any innovative solution that doesn't fit within the other tracks.",
      icon: "💡",
      color: "from-amber-500 to-orange-600",
      problemStatements: [
        {
          title: "Digital Inclusion Platform",
          description: "Build a solution that bridges the digital divide by making technology more accessible to underserved populations, addressing barriers such as connectivity, device access, or digital literacy."
        },
        {
          title: "Educational Resource Equalizer",
          description: "Create a platform that democratizes access to quality educational resources regardless of geographic or economic limitations, potentially using peer-to-peer connections or alternative distribution methods."
        }
      ]
    }
  ];

  const toggleTrackDetails = (trackId: number) => {
    if (activeTrackId === trackId) {
      setActiveTrackId(null);
    } else {
      setActiveTrackId(trackId);
    }
  };

  const openProblemDetail = (
    problem: { title: string; description: string },
    trackTitle: string,
    trackColor: string
  ) => {
    setSelectedProblem({
      ...problem,
      trackTitle,
      trackColor,
    });
  };

  return (
    <section id="tracks" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hackathon <span className="gradient-text">Tracks</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose one of our exciting themes to focus your project on, or go
            wild with the open innovation track!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {tracks.map((track) => (
            <div key={track.id} className="flex flex-col">
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow flex-grow">
                <div
                  className={`h-2 bg-gradient-to-r ${track.color}`}
                ></div>
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{track.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{track.title}</h3>
                  <p className="text-gray-600 mb-4">{track.description}</p>
                  <Button
                    onClick={() => toggleTrackDetails(track.id)}
                    variant="outline"
                    className="mt-2 w-full"
                  >
                    {activeTrackId === track.id ? (
                      <>
                        <BookOpen className="mr-2" /> Hide Problem Statements
                      </>
                    ) : (
                      <>
                        <Book className="mr-2" /> View Problem Statements
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {activeTrackId === track.id && (
                <Card className="mt-4 border border-dashed border-primary/50 bg-primary/5">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-4">
                      Problem Statements
                    </h4>
                    <div className="space-y-6">
                      {track.problemStatements.map((problem, index) => (
                        <div
                          key={index}
                          className="rounded-lg bg-white p-4 shadow group cursor-pointer hover:shadow-md transition-all"
                          onClick={() =>
                            openProblemDetail(
                              problem,
                              track.title,
                              track.color
                            )
                          }
                        >
                          <div className="flex justify-between items-center">
                            <h5 className="font-semibold mb-2">
                              {problem.title}
                            </h5>
                            <Maximize className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                          </div>
                          <p className="text-gray-700 line-clamp-2">
                            {problem.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            Projects will be judged on creativity, technical complexity, design,
            and relevance to the chosen track.
          </p>
        </div>
      </div>

      {/* Full-screen dialog for problem statement details */}
      <Dialog
        open={selectedProblem !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedProblem(null);
        }}
      >
        <DialogContent fullScreen className="flex flex-col">
          {selectedProblem && (
            <>
              <DialogHeader>
                <div
                  className={`h-2 bg-gradient-to-r ${selectedProblem.trackColor} -mt-6 -mx-6`}
                ></div>
                <div className="flex items-center gap-2 mb-2 mt-4">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {selectedProblem.trackTitle}
                  </span>
                </div>
                <DialogTitle className="text-3xl md:text-4xl">
                  {selectedProblem.title}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-8 flex-grow overflow-y-auto">
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl">
                  {selectedProblem.description}
                </p>
              </div>
              <div className="mt-8 flex justify-center md:justify-end">
                <DialogClose asChild>
                  <Button size="lg" className="gradient-bg">Got it</Button>
                </DialogClose>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TracksSection;
