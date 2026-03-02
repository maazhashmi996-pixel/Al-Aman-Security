import AboutSecurity from "@/Components/Sections/AboutSecurity";
import AlArmanSection from "@/Components/Sections/AlarmanSection";
import ClientTestimonials from "@/Components/Sections/ClientsTestomonials";
import EliteTacticalFooter from "@/Components/Sections/EliteTractical";
import AlAmanHero from "@/Components/Sections/hero";
import NationwideNetwork from "@/Components/Sections/NationNetwork";
import SecurityServices from "@/Components/Sections/SecurityService";
import SecuritySupportCTA from "@/Components/Sections/LeaderShip";
import Image from "next/image";
import LeadershipSection from "@/Components/Sections/LeaderShip";

export default function Home() {
  return (
    <div>
      <AlAmanHero />
      <AboutSecurity />
      <SecurityServices />
      <AlArmanSection />
      <NationwideNetwork />
      <LeadershipSection />
      <ClientTestimonials />
      <EliteTacticalFooter />
    </div>
  );
}
