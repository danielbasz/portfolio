'use client';

import { Experience } from '../../models';
import { ExperienceSection } from '.';
import { useParallaxAnchored, useElementReveal } from '../../hooks';

interface EducationSectionsProps {
  education: Experience[];
}

export default function EducationSections({ education }: EducationSectionsProps) {
  // Use the MEDIA section leaving the viewport as the trigger
  const { out: mediaOut } = useElementReveal({ targetId: 'media' });

  // Tiny depth lag on Education once MEDIA is out
const eduWrapperRef = useParallaxAnchored<HTMLDivElement>({ rate: mediaOut ? -0.05 : 0, enabled: mediaOut, maxUpPx: 300 });

return (
<div ref={eduWrapperRef}>
      <ExperienceSection
        title="Education"
        showHeader={false}
        experiences={education}
        type="education"
        backgroundColor="white"
        backdropText="EDUCATION"
        backdropOffsetPx={140}
        backdropRate={0}
      />
    </div>
  );
}
