import { useState } from "react";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    title: "Small-group case building",
    category: "Research"
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    title: "Crossfire and CX drills",
    category: "Clash"
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80",
    title: "Speaking with confidence",
    category: "Delivery"
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    title: "Evidence and flowing practice",
    category: "Prep"
  },
  {
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80",
    title: "Team strategy sessions",
    category: "Strategy"
  },
  {
    src: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?auto=format&fit=crop&w=900&q=80",
    title: "Mock rounds and ballots",
    category: "Tournament"
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold mb-4">INSIDE A DEBATE CAMP</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
            From 1AC to first ballot.
          </h2>
          <p className="text-lg text-muted-foreground">
            Students learn the flow of a round, build arguments, practice speaking, and get real feedback from coaches who compete.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square"
              onClick={() => setSelectedImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold font-display">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Inside a Speech Spark debate camp"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
          />
          <button
            className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground text-4xl"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
