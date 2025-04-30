
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SponsorsSection = () => {
  // These would be actual logos in a real implementation
  const tierSponsors = {
    platinum: [
      { name: "TechGiant", logo: "TG" },
      { name: "InnovateNow", logo: "IN" }
    ],
    gold: [
      { name: "CloudService", logo: "CS" },
      { name: "DevTools", logo: "DT" },
      { name: "SecurityPlus", logo: "SP" }
    ],
    silver: [
      { name: "StartupHub", logo: "SH" },
      { name: "CodeMasters", logo: "CM" },
      { name: "DataSys", logo: "DS" },
      { name: "WebFuture", logo: "WF" }
    ],
    community: [
      { name: "TechCommunity", logo: "TC" },
      { name: "DevNetwork", logo: "DN" },
      { name: "AI Alliance", logo: "AA" },
      { name: "CodeCampus", logo: "CC" },
      { name: "HackersUnion", logo: "HU" },
      { name: "TechEdu", logo: "TE" }
    ]
  };

  return (
    <section id="sponsors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Sponsors</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            HackFusion wouldn't be possible without the generous support of our sponsors.
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 text-center">Platinum Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {tierSponsors.platinum.map((sponsor, index) => (
              <div key={index} className="w-64 h-32 bg-gray-50 rounded-lg flex items-center justify-center shadow-md">
                <div className="text-4xl font-bold text-gray-400">{sponsor.logo}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 text-center">Gold Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tierSponsors.gold.map((sponsor, index) => (
              <div key={index} className="w-48 h-24 bg-gray-50 rounded-lg flex items-center justify-center shadow-sm">
                <div className="text-3xl font-bold text-gray-400">{sponsor.logo}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 text-center">Silver Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tierSponsors.silver.map((sponsor, index) => (
              <div key={index} className="w-36 h-20 bg-gray-50 rounded-lg flex items-center justify-center shadow-sm">
                <div className="text-2xl font-bold text-gray-400">{sponsor.logo}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Partners */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 text-center">Community Partners</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tierSponsors.community.map((sponsor, index) => (
              <div key={index} className="w-28 h-16 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-xl font-bold text-gray-400">{sponsor.logo}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsor CTA */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Become a Sponsor</h3>
          <p className="text-gray-600 mb-6">
            Interested in sponsoring HackFusion? Connect with top talent, showcase your technology, and support the developer community.
          </p>
          <Button className="gradient-bg">
            <Link to='/sponsorship'>Get Sponsorship Info</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
