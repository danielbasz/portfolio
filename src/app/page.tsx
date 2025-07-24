import Hero from '../components/Hero/Hero';
import Section from '../components/Section/Section';
import ExperienceCard from '../components/ExperienceCard/ExperienceCard';
import Footer from '../components/Footer/Footer';
import { portfolioData } from '../lib/data';
import { CONTACT } from '../constants';

export default function Home() {
  return (
    <main>
      <Hero
        name={portfolioData.personal.name}
        title={portfolioData.personal.title}
        bio={portfolioData.personal.bio}
        profileImage={portfolioData.personal.profileImage}
        socialLinks={portfolioData.socialLinks}
        resumeUrl={CONTACT.RESUME_URL}
      />
      
      {/* Work Section - Combined with transitioning background */}
      <div style={{
        background: 'linear-gradient(to bottom, var(--background-light) 0%, var(--background-light) 60%, var(--white) 100%)',
        position: 'relative'
      }}>
        <Section
          title="Work"
          description="Professional experience spanning development and multimedia"
          headerImages={[
            "/assets/assets_task_01k0qecz8sf77agbqwdszf930z_1753133555_img_1.webp",
            "/assets/slate.webp"
          ]}
        >
          {portfolioData.work.map((work) => (
            <ExperienceCard
              key={work.id}
              experience={work}
              className={work.organization === 'Globo TV' ? 'globoCard' : ''}
            />
          ))}
        </Section>
      </div>
      
      <Footer
        socialLinks={portfolioData.socialLinks}
        copyrightText="© 2025 Daniel Barboza. Crafted with passion and purpose."
      />
    </main>
  );
}
