import { useState, useEffect, useRef } from "react";
import { MessageCircle, Mail, ExternalLink, X, Send, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactOptions = [
    {
      id: "whatsapp",
      name: "WhatsApp",
      description: "Quick response, usually within hours",
      icon: MessageCircle,
      color: "bg-green-500/10 text-green-500 border-green-500/20",
      hoverColor: "hover:bg-green-500/20",
      href: "https://wa.me/1234567890?text=Hi%2C%20I'm%20interested%20in%20your%20video%20editing%20services",
    },
    {
      id: "email",
      name: "Email",
      description: "For detailed project inquiries",
      icon: Mail,
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      hoverColor: "hover:bg-blue-500/20",
      href: "mailto:contact@framecraft.com?subject=Video%20Editing%20Inquiry",
    },
    {
      id: "upwork",
      name: "Upwork",
      description: "View profile and hire directly",
      icon: Briefcase,
      color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
      hoverColor: "hover:bg-emerald-500/20",
      href: "https://www.upwork.com/",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-dark"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Ready to Create?
          </span>
          <h2 className="section-title mb-6">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="section-subtitle mx-auto mb-12">
            Have a project in mind? Let's discuss how we can bring your vision to
            life with professional video editing that stands out.
          </p>

          {/* CTA Button */}
          <Button
            variant="hero"
            size="xl"
            className="text-lg px-12 py-6 h-auto animate-glow-pulse"
            onClick={() => setIsModalOpen(true)}
          >
            <Send className="w-5 h-5" />
            Hire Me Now
          </Button>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/30 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient">
                200+
              </div>
              <p className="text-muted-foreground mt-2">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient">
                50+
              </div>
              <p className="text-muted-foreground mt-2">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient">
                5M+
              </div>
              <p className="text-muted-foreground mt-2">Total Views</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-xl animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-foreground hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-card">
              <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                Choose Your Preferred Way
              </h3>
              <p className="text-muted-foreground mb-8">
                Select the platform that works best for you
              </p>

              <div className="space-y-4">
                {contactOptions.map((option) => (
                  <a
                    key={option.id}
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl border ${option.color} ${option.hoverColor} transition-all duration-300 group`}
                  >
                    <div className="p-3 rounded-lg bg-background/50">
                      <option.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">
                        {option.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {option.description}
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
