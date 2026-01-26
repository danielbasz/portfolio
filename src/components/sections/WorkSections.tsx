import { Experience } from '../../models';
import { Container } from '../ui';
import { ExperienceSection } from '.';

interface WorkSectionsProps {
  work: Experience[];
}

export default function WorkSections({ work }: WorkSectionsProps) {
  return (
    <Container background="dark">
      <div id="work" style={{ position: 'relative', zIndex: 2 }}>
        <ExperienceSection
          title="XP"
          showHeader={false}
          experiences={work}
          type="work"
          sectionZIndex={1}
          backdropText="WORK"
          backdropOffsetPx={0}
          backdropRate={0}
          backdropAlign="left"
        />
      </div>
    </Container>
  );
}
