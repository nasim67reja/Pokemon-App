import { useQuery } from "@apollo/client";

// components
import Hero from "@/components/Hero";
import SectionMain from "@/components/SectionMain";
import VerticalSlider from "@/components/Slider";

function HomePage() {
  return (
    <>
      <Hero />
      <SectionMain />
    </>
  );
}

export default HomePage;
