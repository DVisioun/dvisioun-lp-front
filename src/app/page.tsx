import { BoxAboutUs } from "@/components/Molecule/BoxAboutUs/BoxAboutUs";
import ReasonsToInvest from "@/components/Molecule/ReasonsToInvest/ReasonsToInvest";
import { Footer } from "@/components/Organism/Footer/Footer";
import { Hero } from "@/components/Organism/Hero/Hero";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ReasonsToInvest />
      <Footer />
    </main>
  )
}
