import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustBadges />
        <ServicesSection />

        {/* High-level overview placeholder */}
        <section className="section-padding">
          <div className="container-custom grid md:grid-cols-3 gap-8 text-center">
            {[
              { stat: "500+", label: "Students Coached" },
              { stat: "12", label: "Workshops Hosted" },
              { stat: "100%", label: "Free for Families" },
            ].map((s) => (
              <div key={s.label} className="card-elevated p-8 card-hover">
                <div className="text-5xl font-bold font-display text-accent mb-2">{s.stat}</div>
                <div className="text-muted-foreground font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
