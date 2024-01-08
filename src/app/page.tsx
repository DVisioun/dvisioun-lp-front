import { BoxAboutUs } from "@/components/Molecule/BoxAboutUs/BoxAboutUs";
import ReasonsToInvest from "@/components/Molecule/ReasonsToInvest/ReasonsToInvest";
import { Footer } from "@/components/Organism/Footer/Footer";
import { Hero } from "@/components/Organism/Hero/Hero";
import Portfolio from "@/components/Molecule/Portfolio/Portfolio";
import { PainSection } from "@/components/Organism/PainSection/PainSection";
import SolutionSection from "@/components/Organism/SolutionSection/SolutionSection";
import { Ratings } from "@/components/Molecule/Ratings/Ratings";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-flip";
import "swiper/css/grid";

register();

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <PainSection />
      <SolutionSection />
      <Portfolio />
      <Ratings />
      <Footer />
    </main>
  );
}
