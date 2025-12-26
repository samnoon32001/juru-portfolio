import { useState, useEffect, useRef } from "react";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import videoThumb1 from "@/assets/video-thumb-1.jpg";
import videoThumb2 from "@/assets/video-thumb-2.jpg";
import videoThumb3 from "@/assets/video-thumb-3.jpg";
import videoThumb4 from "@/assets/video-thumb-4.jpg";

interface LongVideo {
  id: number;
  title: string;
  category: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
}

const longVideos: LongVideo[] = [
  {
    id: 1,
    title: "Neon Nights Documentary",
    category: "Documentary",
    duration: "24:30",
    thumbnail: videoThumb1,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: 2,
    title: "Coastal Journey",
    category: "Travel",
    duration: "18:45",
    thumbnail: videoThumb2,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 3,
    title: "Luxury Brand Film",
    category: "Commercial",
    duration: "12:20",
    thumbnail: videoThumb3,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  },
  {
    id: 4,
    title: "Artisan Stories",
    category: "Documentary",
    duration: "32:15",
    thumbnail: videoThumb4,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  },
  {
    id: 5,
    title: "Urban Exploration",
    category: "Lifestyle",
    duration: "15:40",
    thumbnail: videoThumb1,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: 6,
    title: "Mountain Peak",
    category: "Adventure",
    duration: "28:00",
    thumbnail: videoThumb2,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 7,
    title: "Tech Review Special",
    category: "Technology",
    duration: "22:10",
    thumbnail: videoThumb3,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  },
  {
    id: 8,
    title: "Creative Process",
    category: "Behind Scenes",
    duration: "19:55",
    thumbnail: videoThumb4,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  },
  {
    id: 9,
    title: "City Lights Film",
    category: "Cinematic",
    duration: "16:30",
    thumbnail: videoThumb1,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: 10,
    title: "Sunset Sessions",
    category: "Music",
    duration: "21:45",
    thumbnail: videoThumb2,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 11,
    title: "Fashion Forward",
    category: "Fashion",
    duration: "14:20",
    thumbnail: videoThumb3,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  },
  {
    id: 12,
    title: "Maker Movement",
    category: "Documentary",
    duration: "26:40",
    thumbnail: videoThumb4,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  },
];

const ITEMS_PER_PAGE = 8;

const LongFormSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(longVideos.length / ITEMS_PER_PAGE);
  const currentVideos = longVideos.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="longform"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden bg-background"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Full Productions
          </span>
          <h2 className="section-title mb-4">
            <span className="text-gradient">Long-Form</span> Projects
          </h2>
          <p className="section-subtitle mx-auto">
            In-depth documentaries, commercials, and cinematic pieces that tell
            compelling stories from start to finish.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentVideos.map((video, index) => (
            <div
              key={video.id}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="video-card group cursor-pointer"
                onClick={() => setActiveVideo(video.videoUrl)}
              >
                <div className="aspect-video relative overflow-hidden rounded-xl">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="play-button">
                    <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-button group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-primary-foreground fill-current ml-1" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-background/70 backdrop-blur-sm text-xs font-medium text-foreground">
                    {video.duration}
                  </div>

                  {/* Video Info */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-xs text-primary font-medium">
                      {video.category}
                    </span>
                    <h3 className="font-display font-semibold text-foreground mt-1 line-clamp-1">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === i
                    ? "bg-primary text-primary-foreground shadow-button"
                    : "bg-secondary text-foreground hover:bg-primary/20"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
            }
            disabled={currentPage === totalPages - 1}
            className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-xl animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-foreground hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="rounded-2xl overflow-hidden shadow-card border border-border/50">
              <video
                src={activeVideo}
                controls
                autoPlay
                className="w-full aspect-video"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LongFormSection;
