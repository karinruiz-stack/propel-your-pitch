import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { Angels } from "@/components/site/Angels";
import { InfoCards } from "@/components/site/InfoCards";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Process />
        <Angels />
        <InfoCards />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
