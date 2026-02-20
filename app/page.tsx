import AboutSecurity from "@/Components/Sections/AboutSecurity";
import AlArmanSection from "@/Components/Sections/AlarmanSection";
import AlAmanHero from "@/Components/Sections/hero";
import SecurityServices from "@/Components/Sections/SecurityService";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <AlAmanHero />
      <AboutSecurity />
      <SecurityServices />
      <AlArmanSection />
    </div>
  );
}
