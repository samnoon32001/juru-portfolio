import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToIntro = () => {
    const element = document.querySelector("#intro-video");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/5" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[200px] -translate-y-1/2" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-tight">
                  Hey there!
                </h1>
                <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-gradient leading-tight">
                  Juraij here
                </h2>
              </div>
              
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
                  your Partner for
                </p>
                <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient">
                  Scroll-Stopping Content
                </p>
              </div>
            </div>


            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="xl"
                onClick={scrollToIntro}
              >
                Watch My Work
              </Button>
              <Button 
                variant="glass" 
                size="xl"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Let's Connect
              </Button>
            </div>
          </div>

          {/* Portrait Image */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative group">
              {/* Image Container */}
              <div className="relative rounded-full overflow-hidden shadow-2xl border border-border/30 w-80 h-80 mx-auto">
                <img
                  src="https://i.pinimg.com/736x/ff/58/29/ff58298ea6b60fe2abbf725973e3ee53.jpg"
                  alt="Juraij - Video Editor"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-float" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={scrollToIntro}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-sm font-medium">See my work</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
