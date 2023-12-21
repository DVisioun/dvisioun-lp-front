import { Footer } from "@/components/Organism/Footer/Footer";
import { Hero } from "@/components/Organism/Hero/Hero";
import { PainSection } from "@/components/Organism/PainSection/PainSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <PainSection />
      <Footer />
    </main>
  )
}
