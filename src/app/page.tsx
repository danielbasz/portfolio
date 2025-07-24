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
      
      {/* Development Section */}
      <Section
        title="Development"
        description="Full-stack projects and technical solutions"
        headerImage="/assets/assets_task_01k0qecz8sf77agbqwdszf930z_1753133555_img_1.webp"
        backgroundColor="light"
      >
        {portfolioData.work
          .filter(work => work.organization === 'Canada Revenue Agency')
          .map((work) => (
            <ExperienceCard
              key={work.id}
              experience={work}
            />
          ))
        }
      </Section>
      
      {/* Multimedia Section */}
      <Section
        title="Multimedia"
        description="Creative projects spanning video, audio, and digital art"
        headerImage="/assets/slate.webp"
      >
        {portfolioData.work
          .filter(work => ['Globo TV', 'Andarilho Filmes'].includes(work.organization))
          .map((work) => (
            <ExperienceCard
              key={work.id}
              experience={work}
              className={work.organization === 'Globo TV' ? 'globoCard' : ''}
            />
          ))
        }
      </Section>
      
      <Footer
        socialLinks={portfolioData.socialLinks}
        copyrightText="© 2025 Daniel Barboza. Crafted with passion and purpose."
      />
    </main>
  );
}
