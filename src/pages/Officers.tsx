import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { User } from "lucide-react";

const placeholders = ["President", "Vice President", "Director of Curriculum", "Outreach Lead", "Operations Lead", "Events Lead"];

const Officers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Meet the Team"
          title="Our Officers"
          description="Student leaders coordinating workshops, camps, and chapters."
        />
        <section className="section-padding">
          <div className="container-custom grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholders.map((role) => (
              <div key={role} className="card-elevated p-6 card-hover text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-secondary flex items-center justify-center mb-4">
                  <User className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="font-bold font-display text-lg">[Officer Name]</h3>
                <p className="text-accent font-semibold text-sm mb-2">{role}</p>
                <p className="text-muted-foreground text-sm">[Short bio placeholder.]</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Officers;
