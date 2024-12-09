import AboutUsSection from "@/components/AboutUsSection";
import CounterSection from "@/components/CounterSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import HowSection from "@/components/HowSection";
import JoinSection from "@/components/JoinSection";
import MakeSection from "@/components/MakeSection";
import NavbarSection from "@/components/NavbarSection";
import SupplySection from "@/components/SupplySection";
import TeamSection from "@/components/TeamSection";
import UuiSection from "@/components/UuiSection";

export default function HomePage() {

  return (
    <>
      <main>
        <NavbarSection />
        <HeroSection />
        <AboutUsSection />
        <SupplySection />
        <CounterSection />
        <HowSection />
        <MakeSection />
        <TeamSection />
        <UuiSection />
        <JoinSection />
        <FooterSection />
      </main>
    </>
  );
}