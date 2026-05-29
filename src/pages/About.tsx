import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Our Story"
          title="About Speech Spark"
          description="Mission, story, and the people behind the program."
        />
        <section className="section-padding">
          <div className="container-custom grid md:grid-cols-2 gap-12">
            <div className="card-elevated p-8">
              <h2 className="text-2xl font-bold font-display mb-3">Our Mission</h2>
              <p className="text-muted-foreground">[Mission statement placeholder — add your text here.]</p>
            </div>
            <div className="card-elevated p-8">
              <h2 className="text-2xl font-bold font-display mb-3">Our Story</h2>
              <p className="text-muted-foreground">[Organizational story placeholder — add your text here.]</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
