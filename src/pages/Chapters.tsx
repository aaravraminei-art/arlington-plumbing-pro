import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { MapPin } from "lucide-react";

const chapters = ["Sterling", "McLean", "South Riding"];

const Chapters = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Where We Are"
          title="Our Chapters"
          description="Active regional locations bringing free debate coaching to middle schoolers."
        />
        <section className="section-padding">
          <div className="container-custom grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {chapters.map((c) => (
              <div key={c} className="card-elevated p-8 card-hover">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold font-display mb-2">{c}</h3>
                <p className="text-muted-foreground text-sm">[Chapter details placeholder — venue, meeting times, lead officer.]</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Chapters;
