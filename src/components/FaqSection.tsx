
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FaqSection = () => {
  const faqItems = [
    {
      question: "Who can participate in TechAvishkar 2.0?",
      answer: "TechAvishkar 2.O is open students From Btech/B.E./BCA/MCA/MBA. Whether you're a seasoned developer or just getting started with coding, you're welcome to join. We encourage diversity and participants from all backgrounds."
    },
    {
      question: "Do I need to have a team to register?",
      answer: "Yes, The Team should contain 2 to 4 members . Minimum 2 members are compulsory."
    },
    {
      question: "Is TechAvishkar 2.O is free?",
      answer: "Nope, the registration fee is 699rs per team."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Bring your laptop, charger, any specific hardware you plan to use for your project, and your college ID. If you're attending in person, consider bringing a change of clothes and personal items if you plan to stay overnight."
    },
    {
      question: "Can I start working on my project before the hackathon?",
      answer: "All projects should be started during the hackathon. You can come with ideas, but coding and building should begin when the hacking period officially starts."
    },
    {
      question: "How does the judging works?",
      answer: "Projects will be judged based on innovation, technical complexity, design, and potential impact. Our panel of judges includes industry experts and sponsors who will evaluate projects during the final presentation round."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about TechAvishkar.
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
            Still have questions? Contact us at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=techavishkar.2.o@gmail.com.com" className="text-primary font-medium hover:underline">techavishkar.2.o@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
