import { Card } from "@/components/ui/card";
import { Smartphone, Search, CheckCircle, Bell } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    step: "1",
    title: "Register & Submit",
    description: "Sign up using your Aadhaar or phone number. Submit your grain details - quantity, type, moisture level through app or IVR call."
  },
  {
    icon: Search,
    step: "2",
    title: "AI Matching",
    description: "Our AI analyzes your location, grain type, and FCI center availability to find the best procurement center for you."
  },
  {
    icon: CheckCircle,
    step: "3",
    title: "Get Confirmation",
    description: "Receive a booking ID with scheduled date and time. Get instant SMS confirmation and pickup details."
  },
  {
    icon: Bell,
    step: "4",
    title: "Track & Deliver",
    description: "Track your request status in real-time. Deliver grain at scheduled time and receive payment directly to your bank account."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps from registration to payment. It's that easy.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 relative overflow-hidden bg-card border-border hover:shadow-soft transition-all duration-300"
                >
                  {/* Step Number Background */}
                  <div className="absolute -top-4 -right-4 text-8xl font-bold text-muted/10">
                    {item.step}
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-secondary" />
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Connection Lines for Desktop */}
          <div className="hidden md:block relative -mt-8">
            <svg className="w-full h-24" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: 'hsl(var(--secondary))', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: 'hsl(var(--secondary))', stopOpacity: 0.6 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
