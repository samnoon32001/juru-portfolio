import { useState, useRef, useEffect } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import reelThumb1 from "@/assets/reel-thumb-1.jpg";
import reelThumb2 from "@/assets/reel-thumb-2.jpg";
import reelThumb3 from "@/assets/reel-thumb-3.jpg";
import reelThumb4 from "@/assets/reel-thumb-4.jpg";

interface ShortVideo {
  id: number;
  title: string;
  thumbnail: string;
  views: string;
  videoUrl: string;
}

const shortVideos: ShortVideo[] = [
  {
    id: 1,
    title: "Street Style Edit",
    thumbnail: reelThumb1,
    views: "2.4M views",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: 2,
    title: "Cooking Vibes",
    thumbnail: reelThumb2,
    views: "1.8M views",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: 3,
    title: "Fitness Motivation",
    thumbnail: reelThumb3,
    views: "3.2M views",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: 4,
    title: "Travel Adventures",
    thumbnail: reelThumb4,
    views: "5.1M views",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: 5,
    title: "Behind The Scenes",
    thumbnail: reelThumb1,
    views: "980K views",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  },
  {
    id: 6,
    title: "Product Launch",
    thumbnail: reelThumb2,
    views: "1.5M views",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  },
];

const ShortFormSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
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

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="shorts"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-dark"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Reels & Shorts
          </span>
          <h2 className="section-title mb-4">
            <span className="text-gradient">Short-Form</span> Content
          </h2>
          <p className="section-subtitle mx-auto">
            Viral-worthy vertical content crafted for maximum engagement on TikTok,
            Instagram Reels, and YouTube Shorts.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-2 mb-6">
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors border border-border"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors border border-border"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {shortVideos.map((video, index) => (
            <div
              key={video.id}
              className={`flex-shrink-0 w-64 snap-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredId(video.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="video-card group cursor-pointer">
                <div className="aspect-[9/16] relative overflow-hidden rounded-xl">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                  
                  {/* Play Button */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                      hoveredId === video.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-button animate-glow-pulse">
                      <Play className="w-6 h-6 text-primary-foreground fill-current ml-1" />
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{video.views}</p>
                  </div>

                  {/* Platform Icons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-background/40 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-4 h-4 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShortFormSection;
