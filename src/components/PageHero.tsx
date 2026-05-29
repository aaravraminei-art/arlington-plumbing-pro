interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

const PageHero = ({ eyebrow, title, description }: PageHeroProps) => {
  return (
    <section
      className="text-primary-foreground"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="container-custom section-padding text-center">
        {eyebrow && (
          <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 animate-fade-up">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl mx-auto text-lg text-primary-foreground/80 animate-fade-up">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
