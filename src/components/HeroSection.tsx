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
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-900"
    >
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen">
          {/* Text Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ml-8 md:ml-12 lg:ml-16 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold leading-tight text-white">
                  Hey there!
                </h1>
                <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight text-blue-400">
                  Juraij here
                </h2>
              </div>
              
              <div className="space-y-1">
                <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-slate-300">
                  your Partner for
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-orange-400">
                  Scroll-Stopping Content
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full"
                onClick={scrollToIntro}
              >
                Watch My Work
              </Button>
              <Button 
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 rounded-full"
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
            <div className="relative group flex justify-center lg:justify-end w-80 h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem]">
              
              {/* Profile Image - Much larger with high pixel outline border */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full overflow-hidden shadow-2xl bg-transparent">
                  <img
                    src="/profile.svg"
                    alt="Juraij - Video Editor"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 w-16 h-16 md:w-20 md:h-20 bg-blue-500/20 rounded-full blur-2xl animate-float" />
              <div className="absolute -bottom-6 md:-bottom-8 -left-6 md:-left-8 w-24 h-24 md:w-32 md:h-32 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={scrollToIntro}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group"
        >
          <span className="text-sm font-medium">See my work</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
