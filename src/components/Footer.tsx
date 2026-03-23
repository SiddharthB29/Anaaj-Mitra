import { Wheat, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Wheat className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Anaaj Mitra</h3>
                <p className="text-xs text-muted-foreground">Smart Ration Management</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Empowering every Indian citizen with smart ration management. Making grain distribution smarter, transparent, and more efficient for all.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#download" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-secondary mt-0.5" />
                <span className="text-sm text-muted-foreground">1800-XXX-XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-secondary mt-0.5" />
                <span className="text-sm text-muted-foreground">support@anaajmitra.in</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary mt-0.5" />
                <span className="text-sm text-muted-foreground">New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Anaaj Mitra. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
