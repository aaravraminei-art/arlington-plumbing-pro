import { Droplets, Flame, Wrench, ShowerHead, Thermometer, PipetteIcon, CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wrench,
    title: "General Plumbing Repairs",
    description: "Expert repairs for leaks, clogs, and all plumbing issues. Fast, reliable service.",
    features: ["Leak Detection", "Pipe Repair", "Fixture Installation"]
  },
  {
    icon: Droplets,
    title: "Drain Cleaning",
    description: "Professional drain cleaning to clear stubborn clogs and prevent future blockages.",
    features: ["Hydro Jetting", "Camera Inspection", "Root Removal"]
  },
  {
    icon: Thermometer,
    title: "Water Heater Services",
    description: "Installation, repair, and maintenance for all types of water heaters.",
    features: ["Tankless Systems", "Traditional Tanks", "Emergency Repairs"]
  },
  {
    icon: Flame,
    title: "Gas Line Services",
    description: "Safe and certified gas line installation, repair, and leak detection.",
    features: ["Gas Leak Detection", "Line Installation", "Appliance Hookups"]
  },
  {
    icon: ShowerHead,
    title: "Bathroom Plumbing",
    description: "Complete bathroom plumbing services from faucets to full renovations.",
    features: ["Toilet Repair", "Shower Installation", "Faucet Upgrades"]
  },
  {
    icon: PipetteIcon,
    title: "Sewer Line Services",
    description: "Comprehensive sewer line inspection, cleaning, and repair services.",
    features: ["Sewer Inspection", "Line Replacement", "Trenchless Repair"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold mb-4">OUR SERVICES</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
            Professional Plumbing & Gas Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From simple repairs to complex installations, we handle all your plumbing and gas needs with expertise and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-elevated card-hover p-8 group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <service.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground" />
              </div>
              
              <h3 className="text-xl font-bold font-display text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                    <CircleCheck className="h-4 w-4 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Don't see what you need? We offer many more services!
          </p>
          <a href="tel:7038393910">
            <Button variant="accent" size="lg">
              Call for Custom Solutions
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
