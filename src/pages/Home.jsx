import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "../components/ThemToggle";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkilllSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { FooterSection } from "../components/FooterSection";


export const Home = () => {

    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
       {/* Theme toggle  */}
        <ThemeToggle />

        {/* Background effect*/}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* main content */}

        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
        <FooterSection />
    </div>;
     
};