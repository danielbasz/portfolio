'use client';

import { Experience } from '../../models';
import { Container } from '../ui';
import { ExperienceSection } from '.';
import { useParallaxAnchored } from '../../hooks';
import { useHeroReveal } from '../../hooks/useHeroReveal';

interface WorkSectionsProps {
  work: Experience[];
}

export default function WorkSections({ work }: WorkSectionsProps) {
  const { heroOut, progress } = useHeroReveal();

  // Single Work section parallax: accelerates as progress approaches 1 to create the hero→work gap
  const workRate = heroOut ? Math.min(-0.15 - 0.35 * progress, -0.5) : 0; // ramps to ~-0.5
  const workWrapperRef = useParallaxAnchored<HTMLDivElement>({ rate: workRate, enabled: heroOut, maxUpPx: 300 });

  return (
    <Container background="gradient">
      <div id="work" ref={workWrapperRef} data-work style={{ position: 'relative', zIndex: 2 }}>
        <ExperienceSection
          title="XP"
          showHeader={false}
          experiences={work}
          type="work"
          sectionZIndex={1}
          backdropText="EXP"
          backdropOffsetPx={140}
          backdropRate={0}
        />
      </div>
    </Container>
  );
}
