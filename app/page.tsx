import AboutSecurity from "@/Components/Sections/AboutSecurity";
import AlArmanSection from "@/Components/Sections/AlarmanSection";
import ClientTestimonials from "@/Components/Sections/ClientsTestomonials";
import EliteTacticalFooter from "@/Components/Sections/EliteTractical";
import AlAmanHero from "@/Components/Sections/hero";
import NationwideNetwork from "@/Components/Sections/NationNetwork";
import SecurityServices from "@/Components/Sections/SecurityService";
import SecuritySupportCTA from "@/Components/Sections/SupportCta";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <AlAmanHero />
      <AboutSecurity />
      <SecurityServices />
      <AlArmanSection />
      <NationwideNetwork />
      <SecuritySupportCTA />
      <ClientTestimonials />
      <EliteTacticalFooter />
    </div>
  );
}
