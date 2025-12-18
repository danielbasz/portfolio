import { Experience } from '../../models';
import { Container } from '../ui';
import { ExperienceSection } from '.';

interface EducationSectionsProps {
  education: Experience[];
}

export default function EducationSections({ education }: EducationSectionsProps) {
  return (
    <Container background="gradient">
      <div style={{ height: '250px' }} /> {/* Spacer to reveal background - matches section-gap */}
      <div id="education" style={{ position: 'relative', zIndex: 2 }}>
        <ExperienceSection
          title="EDU"
          showHeader={false}
          experiences={education}
          type="education"
          backgroundColor="light"
          sectionZIndex={2}
          backdropText="EDU"
          backdropOffsetPx={140}
          backdropRate={0}
        />
      </div>
    </Container>
  );
}
