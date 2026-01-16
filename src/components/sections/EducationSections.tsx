import { Experience } from '../../models';
import { Container } from '../ui';
import { ExperienceSection } from '.';

interface EducationSectionsProps {
  education: Experience[];
}

export default function EducationSections({ education }: EducationSectionsProps) {
  return (
    <Container background="dark">
      <div style={{ height: '125px' }} /> {/* Spacer to reveal background */}
      <div id="education" style={{ position: 'relative', zIndex: 2 }}>
        <ExperienceSection
          title="EDU"
          showHeader={false}
          experiences={education}
          type="education"
          backgroundColor="transparent"
          sectionZIndex={2}
          backdropText="Education"
          backdropOffsetPx={0}
          backdropRate={0}
          backdropAlign="left"
        />
      </div>
    </Container>
  );
}
