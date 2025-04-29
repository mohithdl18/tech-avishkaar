
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const timelineEvents = {
  day1: [
    {
      time: "9:00 AM",
      title: "Registration & Breakfast",
      description: "Check-in, grab your welcome kit and enjoy breakfast"
    },
    {
      time: "10:00 AM",
      title: "Opening Ceremony",
      description: "Welcome address and introduction to HackFusion"
    },
    {
      time: "11:00 AM",
      title: "Team Formation",
      description: "Find teammates or join an existing team"
    },
    {
      time: "12:00 PM",
      title: "Hacking Begins",
      description: "Start building your amazing projects"
    },
    {
      time: "1:00 PM",
      title: "Lunch",
      description: "Refuel with delicious food"
    },
    {
      time: "3:00 PM",
      title: "Workshop: AI Integration",
      description: "Learn how to integrate AI into your projects"
    },
    {
      time: "6:00 PM",
      title: "Dinner",
      description: "Time for some more delicious food"
    },
    {
      time: "8:00 PM",
      title: "Mentor Sessions",
      description: "Get help from industry experts"
    }
  ],
  day2: [
    {
      time: "8:00 AM",
      title: "Breakfast",
      description: "Start your day with a nutritious meal"
    },
    {
      time: "10:00 AM",
      title: "Workshop: Pitching Skills",
      description: "Learn how to effectively present your project"
    },
    {
      time: "12:00 PM",
      title: "Lunch",
      description: "Midday break with great food"
    },
    {
      time: "2:00 PM",
      title: "Midway Demos",
      description: "Share your progress and get feedback"
    },
    {
      time: "4:00 PM",
      title: "Energizer Activity",
      description: "Fun team building exercise to re-energize"
    },
    {
      time: "6:00 PM",
      title: "Dinner",
      description: "Enjoy a hearty dinner"
    },
    {
      time: "8:00 PM",
      title: "Workshop: UX Design",
      description: "Learn best practices for user experience"
    }
  ],
  
};

const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState("day1");

  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Event <span className="gradient-text">Schedule</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three days packed with coding, learning, and fun activities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="day1" className="w-full" onValueChange={(value) => setActiveDay(value)}>
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="day1">Day 1 - May 15</TabsTrigger>
              <TabsTrigger value="day2">Day 2 - May 16</TabsTrigger>
            </TabsList>
            
            {Object.keys(timelineEvents).map((day) => (
              <TabsContent key={day} value={day} className="space-y-4">
                {timelineEvents[day as keyof typeof timelineEvents].map((event, index) => (
                  <Card key={index} className="border-l-4 border-l-primary overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="bg-primary/5 p-4 md:w-1/4 text-center md:text-left">
                          <div className="font-mono font-bold text-primary">{event.time}</div>
                        </div>
                        <div className="p-4 md:w-3/4">
                          <h4 className="font-bold mb-1">{event.title}</h4>
                          <p className="text-gray-600 text-sm">{event.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
