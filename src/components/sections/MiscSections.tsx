import { Experience } from '../../models';
import { Container } from '../ui';
import { ExperienceSection } from '.';

interface MiscSectionsProps {
  misc: Experience[];
}

export default function MiscSections({ misc }: MiscSectionsProps) {
  return (
    <Container background="dark">
      <div style={{ height: '60px' }} /> {/* Spacer to reveal background */}
      <div id="misc" style={{ position: 'relative', zIndex: 2 }}>
        <ExperienceSection
          title="Misc"
          showHeader={false}
          experiences={misc}
          type="misc"
          backgroundColor="transparent"
          sectionZIndex={3}
          backdropText="MISC"
          backdropOffsetPx={0}
          backdropRate={0}
          backdropAlign="right"
        />
      </div>
    </Container>
  );
}
