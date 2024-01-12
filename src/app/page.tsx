import { AboutUs } from "@/components/Organism/AboutUs/AboutUs";
import { Footer } from "@/components/Organism/Footer/Footer";
import { Hero } from "@/components/Organism/Hero/Hero";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <AboutUs />
      <Footer />
    </main>
  )
}
