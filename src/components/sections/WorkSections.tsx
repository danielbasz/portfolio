'use client';

import { Experience } from '../../models';
import { Container } from '../ui';
import { ExperienceSection } from '.';
import { useParallax, useParallaxAnchored } from '../../hooks';
import { useHeroReveal } from '../../hooks/useHeroReveal';
import { useMemo } from 'react';

interface WorkSectionsProps {
  work: Experience[];
}

export default function WorkSections({ work }: WorkSectionsProps) {
  const { heroOut, progress } = useHeroReveal();

  // First Work parallax: accelerates as progress approaches 1 to create the gap
  const firstRate = heroOut ? Math.min(-0.15 - 0.35 * progress, -0.5) : 0; // ramps to ~-0.5
  const firstWrapperRef = useParallaxAnchored({ rate: firstRate, enabled: heroOut });

  const cra = useMemo(() => work.filter(e => e.organization === 'Canada Revenue Agency'), [work]);
  const media = useMemo(() => work.filter(e => ['Globo TV', 'Andarilho Filmes'].includes(e.organization)), [work]);

  return (
    <>
      <Container background="gradient">
        <div ref={firstWrapperRef as any} data-first-work>
          <ExperienceSection
            title="Work"
            showHeader={false}
            experiences={cra}
            type="work"
            sectionZIndex={1}
            backdropText="DEV"
            backdropOffsetPx={140}
            backdropRate={0}
          />
        </div>
      </Container>

      {/* Second Work section: normal pace with tiny parallax lag for depth */}
     
      <div ref={useParallaxAnchored({ rate: heroOut ? -0.05 : 0, enabled: heroOut }) as any}>
      <ExperienceSection
        title="Web Content Editor"
        showHeader={false}
        experiences={media}
        type="work"
        sectionZIndex={0}
        backdropText="MEDIA"
        backdropOffsetPx={140}
        backdropRate={0}
      />
      </div>
    </>
  );
}
