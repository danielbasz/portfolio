import Section from '../Section/Section';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import { Experience } from '../../models';

interface ExperienceSectionProps {
  title: string;
  description: string;
  experiences: Experience[];
  type: 'work' | 'education';
  headerImages?: string[];
  backgroundColor?: 'light' | 'white';
  className?: string;
}

export default function ExperienceSection({
  title,
  description,
  experiences,
  type,
  headerImages,
  backgroundColor = 'white',
  className
}: ExperienceSectionProps) {
  // Filter experiences by type
  const filteredExperiences = experiences.filter(exp => exp.type === type);

  return (
    <Section
      title={title}
      description={description}
      headerImages={headerImages}
      backgroundColor={backgroundColor}
      className={className}
    >
      {filteredExperiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          className={
            // Apply special styling for specific organizations
            experience.organization === 'Globo TV' ? 'globoCard' : ''
          }
        />
      ))}
    </Section>
  );
}