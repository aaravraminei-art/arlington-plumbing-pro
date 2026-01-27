import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-accent text-accent-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
              Ready to Solve Your Plumbing Problems?
            </h2>
            <p className="text-xl text-accent-foreground/90 mb-8">
              Don't wait for a small issue to become a big problem. Contact us today for fast, affordable, professional service.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="tel:7038393910">
                <Button 
                  size="xl" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg font-bold"
                >
                  <Phone className="h-5 w-5" />
                  Call Now: (703) 839-3910
                </Button>
              </a>
              <a href="#contact-form">
                <Button 
                  size="xl" 
                  variant="outline"
                  className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 bg-transparent"
                >
                  Get Free Quote
                </Button>
              </a>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="bg-primary/20 backdrop-blur-sm rounded-2xl p-8 border border-primary/30">
            <h3 className="text-2xl font-bold font-display mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-lg">(703) 839-3910</p>
                  <p className="text-accent-foreground/75">24/7 Emergency Line</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-lg">3804 Wilson Blvd #1030</p>
                  <p className="text-accent-foreground/75">Arlington, VA 22203</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Mon - Fri: 8AM - 5PM</p>
                  <p className="text-accent-foreground/75">Emergency: 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-lg">info@affordableplumbingva.com</p>
                  <p className="text-accent-foreground/75">We respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
