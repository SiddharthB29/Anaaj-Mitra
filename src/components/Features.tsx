import { Card } from "@/components/ui/card";
import appIcon from "@/assets/app-icon.png";
import aiIcon from "@/assets/ai-icon.png";
import ivrIcon from "@/assets/ivr-icon.png";
import trackingIcon from "@/assets/tracking-icon.png";

const features = [
  {
    icon: appIcon,
    title: "Multi-Platform Access",
    description: "Access through mobile app, web portal, or simple IVR phone calls. No internet? No problem - call our toll-free number.",
    benefits: ["Web & Mobile App", "Voice IVR System", "12 Regional Languages"]
  },
  {
    icon: aiIcon,
    title: "Smart Matching",
    description: "Smart algorithms match you with the nearest FCI procurement center based on location, grain type, and availability.",
    benefits: ["Shortest Distance", "Best Price Match", "Quick Processing"]
  },
  {
    icon: ivrIcon,
    title: "Farmer-Friendly Design",
    description: "Simple interface designed for rural areas. Speak in your language, get instant responses, and easy-to-understand instructions.",
    benefits: ["Voice Commands", "Local Language", "Simple Steps"]
  },
  {
    icon: trackingIcon,
    title: "Real-Time Tracking",
    description: "Track your grain submission from request to payment. Get SMS updates at every step and complete transparency.",
    benefits: ["Live Status Updates", "SMS Notifications", "Payment Tracking"]
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Anaaj Mitra?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designed for all ration card holders across India, making grain management simple, transparent, and efficient.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-lifted transition-all duration-300 bg-card border-border"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
