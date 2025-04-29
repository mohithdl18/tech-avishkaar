
import { Card, CardContent } from "@/components/ui/card";

const TracksSection = () => {
  const tracks = [
    {
      id: 1,
      title: "AI & Machine Learning",
      description: "Build solutions using artificial intelligence, machine learning, or natural language processing.",
      icon: "🤖",
      color: "from-violet-500 to-purple-600"
    },
    {
      id: 2,
      title: "Web3 & Blockchain",
      description: "Create decentralized applications, smart contracts, or blockchain-based solutions.",
      icon: "⛓️",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      title: "Climate Tech",
      description: "Develop sustainable solutions addressing environmental challenges and climate change.",
      icon: "🌍",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 4,
      title: "Health & Wellness",
      description: "Build applications that improve health outcomes, patient care, or wellness tracking.",
      icon: "🏥",
      color: "from-red-400 to-rose-600"
    },
    {
      id: 5,
      title: "Open Innovation",
      description: "Create any innovative solution that doesn't fit within the other tracks.",
      icon: "💡",
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section id="tracks" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hackathon <span className="gradient-text">Tracks</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose one of our exciting themes to focus your project on, or go wild with the open innovation track!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map(track => (
            <Card key={track.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className={`h-2 bg-gradient-to-r ${track.color}`}></div>
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{track.icon}</div>
                <h3 className="text-xl font-bold mb-2">{track.title}</h3>
                <p className="text-gray-600">{track.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            Projects will be judged on creativity, technical complexity, design, and relevance to the chosen track.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
