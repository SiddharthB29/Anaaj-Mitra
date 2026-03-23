import { Button } from "@/components/ui/button";
import { Wheat } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Wheat className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Anaaj Mitra</h1>
            <p className="text-xs text-muted-foreground">Smart Ration Management</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#download" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Download
          </a>
        </nav>

        <Button asChild size="lg" className="hidden md:flex">
          <a href="#download">Download App</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
