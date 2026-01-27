import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, CheckCircle, Send } from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/hero-plumber.jpg";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you within 30 minutes.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional plumber at work" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="text-primary-foreground animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">Available 24/7 for Emergencies</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight">
              Arlington's Most Trusted{" "}
              <span className="text-accent">Plumbing Experts</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-xl">
              From leaky faucets to complete gas line installations, we deliver affordable, reliable solutions with a 100% satisfaction guarantee.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {["Same-Day Service", "Upfront Pricing", "Licensed & Insured"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="tel:7038393910">
                <Button variant="hero" size="xl">
                  <Phone className="h-5 w-5" />
                  (703) 839-3910
                </Button>
              </a>
              <a href="#services">
                <Button variant="hero-outline" size="xl">
                  View Our Services
                </Button>
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="card-elevated p-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold font-display text-foreground mb-2">
                Get a Free Quote
              </h2>
              <p className="text-muted-foreground">
                We respond within 30 minutes!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-12"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="h-12"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-12"
              />
              <Textarea
                placeholder="Describe your plumbing issue..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                required
              />
              <Button type="submit" variant="accent" size="lg" className="w-full">
                <Send className="h-5 w-5" />
                Request Free Quote
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-4">
              🔒 Your information is secure and never shared
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
