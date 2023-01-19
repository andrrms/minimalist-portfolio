import ContactSection from "../../components/ContactSection";
import LandingHero from "../../components/LandingHero";
import Navbar from "../../components/Navbar";
import ProjectsSection from "../../components/ProjectsSection";
import { LandingPageContainer } from "./styles";

export default function LandingPage() {
  return (
    <LandingPageContainer>
      <Navbar />
      <main>
        <LandingHero />
        <ProjectsSection />
        <ContactSection />
      </main>
    </LandingPageContainer>
  );
}
