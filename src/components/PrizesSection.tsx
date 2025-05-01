
import { Card, CardContent } from "@/components/ui/card";
import { Award, Trophy, Medal, Star } from "lucide-react";

const PrizesSection = () => {
  const mainPrizes = [
    {
      id: "grand",
      title: "Grand Prize",
      amount: "₹7,000",
      description: "The winning team across each tracks [AI/ML, IOT, Open Innovation]",
      icon: <Trophy className="h-12 w-12 text-yellow-500" />,
      color: "border-yellow-400 bg-yellow-50"
    },
    {
      id: "second",
      title: "Second Place",
      amount: "₹5,000",
      description: "The runner-up team across each tracks [AI/ML, IOT, Open Innovation]",
      icon: <Medal className="h-12 w-12 text-gray-400" />,
      color: "border-gray-300 bg-gray-50"
    },
    {
      id: "third",
      title: "Special Domain [Winner]",
      amount: "Internship Opportunity",
      description: "The winning team of [Special domain] gets an intership opportunity",
      icon: <Medal className="h-12 w-12 text-amber-700" />,
      color: "border-amber-600 bg-amber-50"
    }
  ];

  // const trackPrizes = [
  //   "Best AI & Machine Learning Project - $2,000",
  //   "Best Web3 & Blockchain Project - $2,000",
  //   "Best Climate Tech Solution - $2,000",
  //   "Best Health & Wellness Application - $2,000",
  //   "Best Open Innovation Project - $2,000"
  // ];

  // const specialPrizes = [
  //   "Best User Experience - $1,000",
  //   "Best Technical Implementation - $1,000",
  //   "Most Innovative Solution - $1,000",
  //   "Best First-Time Hackathon Team - $1,000",
  //   "People's Choice Award - $1,000"
  // ];

  return (
    <section id="prizes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Amazing <span className="gradient-text">Prizes</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over ₹30,000+ in cash and prizes to be won at TechAvishkar 2.0!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mainPrizes.map(prize => (
            <Card key={prize.id} className={`border-2 ${prize.color} overflow-hidden shadow-lg`}>
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">{prize.icon}</div>
                <h3 className="text-2xl font-bold mb-1">{prize.title}</h3>
                <div className="text-3xl font-bold gradient-text mb-3">{prize.amount}</div>
                <p className="text-gray-600">{prize.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6" />
              <span>Track Prizes</span>
            </h3>
            <ul className="space-y-4">
              {trackPrizes.map((prize, index) => (
                <li key={index} className="flex items-start">
                  <Star className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>{prize}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6" />
              <span>Special Recognition</span>
            </h3>
            <ul className="space-y-4">
              {specialPrizes.map((prize, index) => (
                <li key={index} className="flex items-start">
                  <Star className="h-5 w-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span>{prize}</span>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
        
        <div className="mt-16 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">Additional Perks</h3>
          <p>
            All participants will receive exclusive swag, and participation certificates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
