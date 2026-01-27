import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We proudly serve Arlington and all of Northern Virginia, including Alexandria, Falls Church, Fairfax, McLean, Tysons, and surrounding areas. If you're unsure if we cover your location, give us a call!"
  },
  {
    question: "Do you offer emergency plumbing services?",
    answer: "Yes! We understand plumbing emergencies can't wait. We offer 24/7 emergency services for urgent issues like major leaks, burst pipes, and sewer backups. Call us anytime at (703) 839-3910."
  },
  {
    question: "How much does a plumbing service call cost?",
    answer: "We provide free estimates for most services. Our pricing is transparent and upfront—you'll know exactly what you're paying before we start any work. No hidden fees, ever."
  },
  {
    question: "Are your plumbers licensed and insured?",
    answer: "Absolutely! All our technicians are fully licensed in the state of Virginia and carry comprehensive insurance. We also conduct background checks on all team members for your peace of mind."
  },
  {
    question: "How quickly can you come out for a service call?",
    answer: "For emergencies, we aim to respond within 1-2 hours. For scheduled appointments, we often have same-day or next-day availability. We'll work with your schedule to find a convenient time."
  },
  {
    question: "Do you offer warranties on your work?",
    answer: "Yes! We stand behind our work with a 100% satisfaction guarantee. Parts and labor are typically warrantied for 1 year, and many fixtures and appliances come with manufacturer warranties as well."
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept all major credit cards, debit cards, checks, and cash. For larger projects, we also offer financing options to help manage costs."
  },
  {
    question: "Can you help with gas line installation?",
    answer: "Yes! We're certified for gas line work including installation, repair, and leak detection. Whether you need a new gas line for your grill, dryer, or stove, we've got you covered safely and professionally."
  }
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Header & CTA */}
          <div className="lg:sticky lg:top-8">
            <span className="inline-block text-accent font-semibold mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Got questions? We've got answers. If you don't see what you're looking for, give us a call—we're always happy to help.
            </p>
            
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
              <h3 className="text-xl font-bold font-display text-foreground mb-3">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-4">
                Our friendly team is here to help. Call us for immediate assistance.
              </p>
              <a href="tel:7038393910">
                <Button variant="accent" size="lg" className="w-full">
                  <Phone className="h-5 w-5" />
                  (703) 839-3910
                </Button>
              </a>
            </div>
          </div>

          {/* Right - FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-lg transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
