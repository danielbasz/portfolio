'use client';

import { Experience } from '../../models';
import { ExperienceSection } from '.';
import { useParallaxAnchored, useElementReveal } from '../../hooks';

interface EducationSectionsProps {
  education: Experience[];
}

export default function EducationSections({ education }: EducationSectionsProps) {
  // Use the WORK section leaving the viewport as the trigger
  const { out: workOut } = useElementReveal({ targetId: 'work' });

  // Tiny depth lag on Education once WORK is out
  const eduWrapperRef = useParallaxAnchored({ rate: workOut ? -0.05 : 0, enabled: workOut, maxUpPx: 300 });

  return (
    <div ref={eduWrapperRef}>
      <ExperienceSection
        title="EDU"
        showHeader={false}
        experiences={education}
        type="education"
        backgroundColor="white"
        backdropText="EDU"
        backdropOffsetPx={140}
        backdropRate={0}
      />
    </div>
  );
}
