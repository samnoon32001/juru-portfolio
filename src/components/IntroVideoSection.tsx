import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

const IntroVideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const element = document.querySelector("#testimonials");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="intro-video"
      className="relative py-24 md:py-32 overflow-hidden bg-background"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-[#C3DEFC]/20 to-background" />
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[200px] -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center space-y-12">
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Why <span className="text-primary">Choose Me?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              See my work in action - from cinematic storytelling to engaging short-form content
            </p>
          </div>

          <div
            className={`max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative group">
              {/* Video Container */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-border">
                <div className="aspect-video bg-muted">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/SdctcW_cG9Y?si=w2yXF6_Zwl-6nyk5&autoplay=1&mute=1&rel=0&modestbranding=1&controls=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>

                {/* Glow Border Effect */}
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-8 w-24 h-24 bg-blue-500/15 rounded-full blur-3xl animate-float pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: "3s" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-sm font-medium">Continue exploring</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default IntroVideoSection;
