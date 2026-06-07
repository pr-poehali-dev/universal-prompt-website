import Hero from "@/components/Hero";
import WhoIsItFor from "@/components/WhoIsItFor";
import Results from "@/components/Results";
import Pricing from "@/components/Pricing";
import ProgramDescription from "@/components/ProgramDescription";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream font-golos overflow-x-hidden">
      <Hero />
      <WhoIsItFor />
      <Results />
      <Pricing />
      <ProgramDescription />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;