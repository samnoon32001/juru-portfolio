import { useEffect, useState } from "react";
import { ArrowDown, User } from "lucide-react";
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
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-[#C3DEFC]/30 to-background" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          {/* Profile Image - Now on left */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative group flex justify-center md:justify-start w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80">
              
              {/* Profile Image - Smaller */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl bg-transparent">
                  <img
                    src="/profile.svg"
                    alt="Juraij - Video Editor"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 md:-top-3 -right-2 md:-right-3 w-12 h-12 md:w-16 md:h-16 bg-blue-500/20 rounded-full blur-2xl animate-float" />
              <div className="absolute -bottom-3 md:-bottom-4 -left-3 md:-left-4 w-16 h-16 md:w-24 md:h-24 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
            </div>
          </div>

          {/* Text Content - Now on right */}
          {/* Text content section - fixed syntax */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-display font-bold leading-tight text-foreground">
                  Hey there!
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight text-gradient">
                  Juraij here
                </h2>
              </div>
              
              <div className="space-y-1">
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold" style={{ color: "#000000" }}>
                  your Partner for
                </p>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold" style={{ color: "#636fcb", backgroundColor: "#636fcb", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Scroll-Stopping Content
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={scrollToIntro}
                >
                  Watch My Work
                </Button>
                <Button 
                  variant="outline"
                  className="border-border text-foreground hover:bg-accent px-8 py-3 rounded-full"
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Hire Me
                </Button>
              </div>
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
