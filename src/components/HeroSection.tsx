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
      {/* Navigation Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-white font-semibold">Juraij</span>
          </div>
          <Button
            variant="default"
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
            onClick={() => {
              const element = document.querySelector("#contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </Button>
        </div>
      </div>

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* Circular Halo and Portrait */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Halo Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 rounded-full border-8 border-blue-500 opacity-80" />
            </div>

            {/* Software Badges */}
            <div className="absolute inset-0 w-96 h-96 mx-auto">
              {/* Top Left - Premiere Pro */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center border-2 border-blue-500">
                <span className="text-blue-400 font-bold text-sm">Pr</span>
              </div>
              
              {/* Top Right - After Effects */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center border-2 border-blue-500">
                <span className="text-blue-400 font-bold text-sm">Ae</span>
              </div>
              
              {/* Center Left - DaVinci Resolve */}
              <div className="absolute top-1/2 left-8 -translate-y-1/2 w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center border-2 border-blue-500">
                <span className="text-blue-400 font-bold text-sm">Da</span>
              </div>
              
              {/* Center Right - Final Cut Pro */}
              <div className="absolute top-1/2 right-8 -translate-y-1/2 w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center border-2 border-blue-500">
                <span className="text-blue-400 font-bold text-sm">Fc</span>
              </div>
            </div>

            {/* Portrait Image */}
            <div className="relative z-10 w-80 h-80 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl">
              <img
                src="https://i.pinimg.com/736x/ff/58/29/ff58298ea6b60fe2abbf725973e3ee53.jpg"
                alt="Juraij - Video Editor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`mt-12 text-center space-y-6 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Hey there!
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400">
                Juraij here
              </h2>
            </div>
            
            <p className="text-xl md:text-2xl text-slate-300 font-semibold">
              your Partner for
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-400">
              Scroll-Stopping Content
            </p>
          </div>

          {/* Buttons */}
          <div
            className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
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
