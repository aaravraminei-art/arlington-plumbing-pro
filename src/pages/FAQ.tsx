import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          description="Everything families and students ask about our free debate program."
        />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
