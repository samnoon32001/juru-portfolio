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
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[200px] -translate-y-1/2" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen">
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
                  Hey there!
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-gradient leading-tight">
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

            <div className="space-y-4 max-w-xl">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Welcome to my creative space! I'm Juraij — the mind behind captivating video edits. I turn raw footage into unforgettable visual stories that hooks hearts and attention.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Whether it's motion graphics, visual effects, or seamless storytelling, my passion is to make your vision unforgettable. Let's create something extraordinary together!
              </p>
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

          {/* Portrait Image with Halo and Badges */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative group flex justify-center">
              {/* Halo Ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 md:border-8 border-primary opacity-80" />
              </div>

              {/* Software Badges */}
              <div className="absolute inset-0 w-72 h-72 md:w-96 md:h-96 mx-auto">
                {/* Top Left - Premiere Pro */}
                <div className="absolute top-4 md:top-8 left-4 md:left-8 w-12 h-12 md:w-16 md:h-16 bg-muted rounded-full flex items-center justify-center border-2 border-primary">
                  <span className="text-primary font-bold text-xs md:text-sm">Pr</span>
                </div>
                
                {/* Top Right - After Effects */}
                <div className="absolute top-4 md:top-8 right-4 md:right-8 w-12 h-12 md:w-16 md:h-16 bg-muted rounded-full flex items-center justify-center border-2 border-primary">
                  <span className="text-primary font-bold text-xs md:text-sm">Ae</span>
                </div>
                
                {/* Center Left - DaVinci Resolve */}
                <div className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-muted rounded-full flex items-center justify-center border-2 border-primary">
                  <span className="text-primary font-bold text-xs md:text-sm">Da</span>
                </div>
                
                {/* Center Right - Final Cut Pro */}
                <div className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-muted rounded-full flex items-center justify-center border-2 border-primary">
                  <span className="text-primary font-bold text-xs md:text-sm">Fc</span>
                </div>
              </div>

              {/* Portrait Image */}
              <div className="relative z-10 w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-border shadow-2xl">
                <img
                  src="https://i.pinimg.com/736x/ff/58/29/ff58298ea6b60fe2abbf725973e3ee53.jpg"
                  alt="Juraij - Video Editor"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full blur-2xl animate-float" />
              <div className="absolute -bottom-6 md:-bottom-8 -left-6 md:-left-8 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
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
