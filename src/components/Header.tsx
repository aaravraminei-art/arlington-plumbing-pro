import { Phone, Clock, MapPin, Star } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground">
      {/* Top bar */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-custom section-padding !py-2 flex flex-wrap items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:7038393910" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">(703) 839-3910</span>
            </a>
            <div className="hidden sm:flex items-center gap-2 text-primary-foreground/80">
              <Clock className="h-4 w-4" />
              <span>Mon-Fri: 8AM - 5PM</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-warning text-warning" />
              <span className="font-semibold">4.9</span>
              <span className="text-primary-foreground/70">(129 reviews)</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-primary-foreground/80">
              <MapPin className="h-4 w-4" />
              <span>Arlington, VA</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container-custom section-padding !py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
              <span className="text-2xl font-bold text-accent-foreground">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold font-display">Affordable Plumbing & Gas</h1>
              <p className="text-xs text-primary-foreground/70">Licensed & Insured</p>
            </div>
          </div>
          <a 
            href="tel:7038393910" 
            className="hidden md:flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-bold hover:bg-accent/90 transition-all shadow-glow"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
