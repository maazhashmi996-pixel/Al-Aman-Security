import AboutSecurity from "@/Components/Sections/AboutSecurity";
import AlAmanHero from "@/Components/Sections/hero";
import PremiumCounter from "@/Components/Sections/PremiumCounter";
import SecurityServices from "@/Components/Sections/SecurityService";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <AlAmanHero />
      <AboutSecurity />
      <SecurityServices />
      <PremiumCounter />
    </div>
  );
}
