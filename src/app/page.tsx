import SolutionSection from "@/components/Organism/SolutionSection/SolutionSection";
import { register } from "swiper/element/bundle";
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-flip";

export default function Home() {
  return (
    <>
      <SolutionSection />
    </>
  );
}
