import { useState, useEffect, useRef } from "react";
import { Play, Quote, X } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
  videoUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marcus Chen",
    role: "Content Creator",
    company: "TechReviews Pro",
    text: "The editing quality transformed my channel. Views doubled within two months. The pacing and transitions are absolutely flawless.",
    image: testimonial1,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "Velocity Brands",
    text: "Our brand videos have never looked better. The attention to detail and understanding of our vision exceeded all expectations.",
    image: testimonial2,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Lifestyle Influencer",
    company: "@emmalifestyle",
    text: "Working together was seamless. The edits capture exactly the aesthetic I was going for. My engagement has skyrocketed!",
    image: testimonial3,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  },
];

const TestimonialsSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll(".testimonial-card");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-24">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Client Stories
          </span>
          <h2 className="section-title mb-4 leading-tight">
            <span className="text-lg md:text-xl lg:text-2xl text-muted-foreground">Hear It From My</span><br />
            <span className="text-gradient">Happy Clients...</span>
          </h2>
          <p className="section-subtitle mx-auto leading-relaxed">
            Nothing speaks louder than real experiences! Hear directly from my clients about how my video editing services have transformed their content.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="space-y-16 md:space-y-24">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              data-index={index}
              className={`testimonial-card grid md:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-700 ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Text Content */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Quote className="w-12 h-12 text-primary/30" />
                <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                  />
                  <div>
                    <h4 className="font-display font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Video Card */}
              <div
                className={`${index % 2 === 1 ? "md:order-1" : ""}`}
              >
                <div
                  className="video-card group cursor-pointer"
                  onClick={() => setActiveVideo(testimonial.videoUrl)}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name} video testimonial`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-background/40 transition-opacity duration-300" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary shadow-button">
                        <Play className="w-8 h-8 text-primary-foreground fill-current ml-1" />
                      </div>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
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

export default TestimonialsSection;
