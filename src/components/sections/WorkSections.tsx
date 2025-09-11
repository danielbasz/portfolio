'use client';

import { Experience } from '../../models';
import { Container } from '../ui';
import { ExperienceSection } from '.';
import { useParallaxAnchored, useElementReveal } from '../../hooks';
import { useHeroReveal } from '../../hooks/useHeroReveal';
import { useMemo } from 'react';

interface WorkSectionsProps {
  work: Experience[];
}

export default function WorkSections({ work }: WorkSectionsProps) {
  const { heroOut, progress } = useHeroReveal();

  // First Work parallax: accelerates as progress approaches 1 to create the gap
  const firstRate = heroOut ? Math.min(-0.15 - 0.35 * progress, -0.5) : 0; // ramps to ~-0.5
const firstWrapperRef = useParallaxAnchored({ rate: firstRate, enabled: heroOut, maxUpPx: 300 });

  const cra = useMemo(() => work.filter(e => e.organization === 'Canada Revenue Agency'), [work]);
  const media = useMemo(() => work.filter(e => ['Globo TV', 'Andarilho Filmes'].includes(e.organization)), [work]);

  // Reveal coordination for SECOND Work section (MEDIA)
  // Track when the FIRST Work (DEV) wrapper leaves to start creating the gap early
  const { out: devOut, progress: devProgress } = useElementReveal({ targetId: 'dev-wrapper' });
  const secondRate = devOut ? (-0.15 - 0.35 * devProgress) : 0; // ramp after DEV is out to create gap for Education

  return (
    <>
      <Container background="gradient">
        <div id="dev-wrapper" ref={firstWrapperRef as any} data-first-work style={{ position: 'relative', zIndex: 2 }}>
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

      {/* Second Work section: starts ramping when DEV leaves to create gap for Education */}
<div id="media" ref={useParallaxAnchored({ rate: secondRate, enabled: devOut, maxUpPx: 300 }) as any} style={{ position: 'relative', zIndex: 1 }}>
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
