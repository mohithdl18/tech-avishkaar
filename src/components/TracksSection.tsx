
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
          title: "Healthcare Diagnosis Assistant",
          description: "Develop an AI system that helps healthcare professionals diagnose common illnesses more accurately based on symptom input and patient history. The system should improve diagnostic accuracy and suggest potential treatment options."
        },
        {
          title: "Sustainable Smart City Planner",
          description: "Create an ML-powered platform that analyzes urban data to optimize city planning for sustainability, reducing energy consumption and traffic congestion while maximizing green spaces and public transportation efficiency."
        }
      ]
    },
    {
      id: 2,
      title: "Web3 & Blockchain",
      description: "Create decentralized applications, smart contracts, or blockchain-based solutions.",
      icon: "⛓️",
      color: "from-blue-500 to-cyan-600",
      problemStatements: [
        {
          title: "Transparent Supply Chain Tracker",
          description: "Build a blockchain solution that enables consumers to verify the entire supply chain of products they purchase, ensuring ethical sourcing and manufacturing, while giving businesses tools to prove their sustainability claims."
        },
        {
          title: "Decentralized Identity Verification",
          description: "Develop a system that allows users to own and control their digital identity across platforms without relying on centralized authorities, while maintaining privacy and compliance with verification requirements."
        }
      ]
    },
    {
      id: 3,
      title: "Climate Tech",
      description: "Develop sustainable solutions addressing environmental challenges and climate change.",
      icon: "🌍",
      color: "from-green-500 to-emerald-600",
      problemStatements: [
        {
          title: "Renewable Energy Optimizer",
          description: "Create a solution that helps homeowners and businesses optimize their renewable energy usage based on weather predictions, energy prices, and consumption patterns to reduce costs and carbon footprint."
        },
        {
          title: "Waste Reduction Platform",
          description: "Design an application that connects businesses with excess food, materials, or products to organizations or individuals who can use them, reducing waste while creating economic and social value."
        }
      ]
    },
    {
      id: 4,
      title: "Health & Wellness",
      description: "Build applications that improve health outcomes, patient care, or wellness tracking.",
      icon: "🏥",
      color: "from-red-400 to-rose-600",
      problemStatements: [
        {
          title: "Mental Health Support Network",
          description: "Design a platform that provides personalized mental health resources, connects users with appropriate support groups, and offers tools for tracking emotional wellbeing while maintaining user privacy and security."
        },
        {
          title: "Preventive Health Assistant",
          description: "Develop an application that helps users maintain preventive health practices through personalized recommendations, reminders for screenings, and integration with healthcare providers."
        }
      ]
    },
    {
      id: 5,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
