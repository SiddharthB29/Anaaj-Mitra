import { Button } from "@/components/ui/button";
import { Download as DownloadIcon, Phone } from "lucide-react";
import heroImage from "@/assets/hero-farmer.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Indian farmer using smartphone in field" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full mb-6">
            <p className="text-sm font-semibold text-secondary">🇮🇳 Digital India Initiative</p>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Anaaj Mitra
          </h1>
          
          <p className="text-2xl md:text-3xl text-primary font-semibold mb-4">
            Smart Ration Management
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
            Empowering every citizen with intelligent ration management. Simplify your grain transactions, track in real-time, and access fair distribution - all from your mobile phone or through a simple phone call.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8 py-6 shadow-lifted hover:shadow-soft transition-all">
              <DownloadIcon className="w-5 h-5 mr-2" />
              Download Mobile App
            </Button>
            
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Phone className="w-5 h-5 mr-2" />
              Call Toll-Free
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span>Available in 12 Languages</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
