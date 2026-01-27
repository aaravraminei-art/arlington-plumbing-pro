import { CheckCircle, Phone, Clock, DollarSign, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: DollarSign,
    title: "Affordable & Transparent Pricing",
    description: "No hidden fees, no surprises. We provide upfront quotes so you know exactly what to expect before work begins."
  },
  {
    icon: Clock,
    title: "Fast Response Times",
    description: "Emergency or scheduled—we're there when you need us. Same-day service available for most issues."
  },
  {
    icon: Shield,
    title: "Licensed & Fully Insured",
    description: "Peace of mind with every job. Our team is certified, background-checked, and fully insured."
  },
  {
    icon: Award,
    title: "16+ Years of Excellence",
    description: "Serving Arlington and Northern Virginia since 2008 with consistent 5-star quality work."
  },
  {
    icon: Users,
    title: "Family-Owned & Operated",
    description: "We treat your home like our own. Personal service and attention to detail on every job."
  },
  {
    icon: CheckCircle,
    title: "100% Satisfaction Guarantee",
    description: "Not happy? We'll make it right. Our work is backed by our iron-clad satisfaction guarantee."
  }
];

const WhyUsSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold mb-4">WHY CHOOSE US</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
            The Affordable Plumbing Difference
          </h2>
          <p className="text-lg text-primary-foreground/80">
            We've built our reputation on trust, quality, and honest pricing. Here's why thousands of Arlington residents choose us.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <reason.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/75">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-primary-foreground/80 mb-4 text-lg">
            Ready to experience the difference?
          </p>
          <a href="tel:7038393910">
            <Button variant="hero" size="xl">
              <Phone className="h-5 w-5" />
              Call (703) 839-3910
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
