import Hero from "@/components/Hero";
import AboutAuthor from "@/components/AboutAuthor";
import WhoIsItFor from "@/components/WhoIsItFor";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream font-golos overflow-x-hidden">
      <Hero />
      <AboutAuthor />
      <WhoIsItFor />
      <Results />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;