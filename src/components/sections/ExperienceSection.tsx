import Section from '../Section/Section';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import { Experience } from '../../models';

interface ExperienceSectionProps {
  title: string;
  description?: string;
  experiences: Experience[];
  type: 'work' | 'education';
  headerImages?: string[];
  backgroundColor?: 'light' | 'white';
  className?: string;
  showHeader?: boolean; // default true; when false, hides the header (title/description/images)
  sectionZIndex?: number; // optional stacking override for this section
  // Optional decorative backdrop props
  backdropText?: string;
  backdropOffsetY?: number;
  backdropOffsetPx?: number;
  backdropRate?: number;
}

export default function ExperienceSection({
  title,
  description,
  experiences,
  type,
  headerImages,
  backgroundColor = 'white',
  className,
  showHeader = true,
  sectionZIndex,
  backdropText,
  backdropOffsetY,
  backdropOffsetPx,
  backdropRate,
}: ExperienceSectionProps) {
  // Filter experiences by type
  const filteredExperiences = experiences.filter(exp => exp.type === type);

  return (
    <Section
      title={title}
      description={description || ''}
      headerImages={headerImages}
      backgroundColor={backgroundColor}
      className={className}
      hideHeader={!showHeader}
      zIndex={sectionZIndex}
      backdropText={backdropText}
      backdropOffsetY={backdropOffsetY}
      backdropOffsetPx={backdropOffsetPx}
      backdropRate={backdropRate}
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
