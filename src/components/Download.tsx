import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download as DownloadIcon, Smartphone, Phone } from "lucide-react";

const Download = () => {
  return (
    <section id="download" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Start Using Anaaj Mitra Today
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Download the app or call our toll-free number to get started. Available for both Android and iOS.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-8 bg-card text-card-foreground border-0">
              <Smartphone className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Mobile App</h3>
              <p className="text-muted-foreground mb-6">
                Download our user-friendly mobile application. Works on both Android and iOS devices.
              </p>
              <div className="space-y-3">
                <Button size="lg" className="w-full">
                  <DownloadIcon className="w-5 h-5 mr-2" />
                  Download for Android
                </Button>
                <Button size="lg" variant="outline" className="w-full">
                  <DownloadIcon className="w-5 h-5 mr-2" />
                  Download for iOS
                </Button>
              </div>
            </Card>

            <Card className="p-8 bg-card text-card-foreground border-0">
              <Phone className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-3">IVR System</h3>
              <p className="text-muted-foreground mb-6">
                No smartphone? No problem. Call our toll-free number and use voice commands in your language.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-secondary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Toll-Free Number</p>
                  <p className="text-3xl font-bold text-secondary">1800-XXX-XXXX</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Available 24/7 in 12 regional languages
                </p>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-sm text-primary-foreground/80">
              🇮🇳 Supported by Digital India Initiative | Compliant with PM-KISAN standards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
