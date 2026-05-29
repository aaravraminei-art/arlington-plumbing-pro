import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Calendar } from "lucide-react";

const groups = [
  { title: "Current Workshops", items: ["[Workshop name placeholder]", "[Workshop name placeholder]"] },
  { title: "Upcoming Camps", items: ["[Upcoming camp placeholder]", "[Upcoming camp placeholder]"] },
  { title: "Past Events", items: ["[Past event placeholder]", "[Past event placeholder]"] },
];

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="What's Happening"
          title="Events & Workshops"
          description="Current programs, upcoming camps, and past highlights."
        />
        <section className="section-padding space-y-12">
          <div className="container-custom space-y-12">
            {groups.map((group) => (
              <div key={group.title}>
                <h2 className="text-2xl font-bold font-display mb-6">{group.title}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {group.items.map((item, i) => (
                    <div key={i} className="card-elevated p-6 card-hover flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <Calendar className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold font-display mb-1">{item}</h3>
                        <p className="text-muted-foreground text-sm">[Event details placeholder — date, location, description.]</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
