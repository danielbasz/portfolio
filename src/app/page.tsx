import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import { Container } from '../components/ui';
import { ExperienceSection } from '../components/sections';
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
      <Container background="gradient">
        <ExperienceSection
          title="Work"
          description="Professional experience spanning development and multimedia"
          experiences={portfolioData.work}
          type="work"
          headerImages={[
            "assets/assets_task_01k0qecz8sf77agbqwdszf930z_1753133555_img_1.webp",
            "assets/slate.webp"
          ]}
        />
      </Container>

      {/* Education Section */}
      <ExperienceSection
        title="Education"
        description="Academic foundation and continuous learning journey"
        experiences={portfolioData.education}
        type="education"
        backgroundColor="white"
      />
      
      <Footer
        socialLinks={portfolioData.socialLinks}
        copyrightText="© 2025 Daniel Barboza. Crafted with passion and purpose."
      />
    </main>
  );
}
