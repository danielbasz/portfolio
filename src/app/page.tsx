import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
// import { Container } from '../components/ui';
// import { ExperienceSection } from '../components/sections';
import WorkSections from '../components/sections/WorkSections';
import { DemoReelSection } from '../components/sections';
import EducationSections from '../components/sections/EducationSections';
import MiscSections from '../components/sections/MiscSections';
import { portfolioData } from '../lib/data';
// import { siteConfig } from '../config/site'; // TODO: Re-import when resume feature is added

export default function Home() {
  return (
    <main>
      <Hero
        name={portfolioData.personal.name}
        title={portfolioData.personal.title}
        bio={portfolioData.personal.bio}
        profileImage={portfolioData.personal.profileImage}
        socialLinks={portfolioData.socialLinks}
        resumeUrl={portfolioData.resumeUrl}
        email={portfolioData.personal.email}
      />

      {/* Work Section - Combined with transitioning background */}
      <WorkSections work={portfolioData.work} />

      {/* Demo Reel Section */}
      <DemoReelSection videoId="WIard9Hzevo" />

      {/* Education Section (same choreography as Work transitions) */}
      <EducationSections education={portfolioData.education} />

      {/* Misc Section - Certifications and incomplete education */}
      <MiscSections misc={portfolioData.misc} />

      <Footer
        socialLinks={portfolioData.socialLinks}
        copyrightText="© 2026 Daniel Porto."
      />
    </main>
  );
}
