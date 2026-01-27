import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding !py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-lg font-bold text-accent-foreground">A</span>
              </div>
              <div>
                <h3 className="font-bold font-display">Affordable Plumbing</h3>
                <p className="text-xs text-primary-foreground/70">& Gas LLC</p>
              </div>
            </div>
            <p className="text-primary-foreground/75 text-sm mb-4">
              Serving Arlington and Northern Virginia with professional plumbing and gas services since 2008.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-warning text-lg">★</span>
              <span className="font-semibold">4.9</span>
              <span className="text-primary-foreground/60">/ 5 (129 reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold font-display mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/75">
              <li><a href="#services" className="hover:text-accent transition-colors">General Repairs</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Drain Cleaning</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Water Heaters</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Gas Line Services</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Bathroom Plumbing</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Sewer Services</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold font-display mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/75">
              <li>Arlington, VA</li>
              <li>Alexandria, VA</li>
              <li>Falls Church, VA</li>
              <li>Fairfax, VA</li>
              <li>McLean, VA</li>
              <li>Tysons, VA</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold font-display mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:7038393910" className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                (703) 839-3910
              </a>
              <a href="mailto:info@affordableplumbingva.com" className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                info@affordableplumbingva.com
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/75">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>3804 Wilson Blvd #1030<br />Arlington, VA 22203</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {currentYear} Affordable Plumbing & Gas LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
