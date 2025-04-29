
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FaqSection = () => {
  const faqItems = [
    {
      question: "Who can participate in HackFusion?",
      answer: "HackFusion is open to everyone, from students to professionals! Whether you're a seasoned developer or just getting started with coding, you're welcome to join. We encourage diversity and participants from all backgrounds."
    },
    {
      question: "Do I need to have a team to register?",
      answer: "No, you can register individually and form a team during the event. We'll have team formation activities to help you find teammates with complementary skills. Teams can have up to 4 members."
    },
    {
      question: "Is HackFusion completely free?",
      answer: "Yes! HackFusion is completely free for all participants. We provide meals, snacks, swag, and access to workshops and mentors during the event."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Bring your laptop, charger, any specific hardware you plan to use for your project, and your ID. If you're attending in person, consider bringing a change of clothes and personal items if you plan to stay overnight."
    },
    {
      question: "Can I start working on my project before the hackathon?",
      answer: "All projects should be started during the hackathon. You can come with ideas, but coding and building should begin when the hacking period officially starts."
    },
    {
      question: "How does judging work?",
      answer: "Projects will be judged based on innovation, technical complexity, design, and potential impact. Our panel of judges includes industry experts and sponsors who will evaluate projects during the final presentation round."
    },
    {
      question: "Can I participate virtually?",
      answer: "Absolutely! HackFusion offers a fully hybrid experience. Virtual participants will have access to the same workshops, mentorship, and judging opportunities as in-person attendees."
    },
    {
      question: "What kind of prizes can I win?",
      answer: "We have a total prize pool valued at over $50,000, including cash prizes, tech gadgets, internship opportunities, and more. There are also specific prizes for category winners and sponsor challenges."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about HackFusion.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Still have questions? Contact us at <a href="mailto:info@hackfusion.io" className="text-primary font-medium hover:underline">info@hackfusion.io</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
