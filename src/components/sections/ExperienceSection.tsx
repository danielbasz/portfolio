'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import Section from '../Section/Section';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import { Experience } from '../../models';

interface ExperienceSectionProps {
  title: string;
  description?: string;
  experiences: Experience[];
  type: 'work' | 'education' | 'misc';
  headerImages?: string[];
  backgroundColor?: 'light' | 'white' | 'transparent';
  className?: string;
  showHeader?: boolean; // default true; when false, hides the header (title/description/images)
  sectionZIndex?: number; // optional stacking override for this section
  backdropText?: string;
  backdropOffsetY?: number;
  backdropOffsetPx?: number;
  backdropRate?: number;
  backdropAlign?: 'left' | 'right';
}

export default function ExperienceSection({
  title,
  description,
  experiences,
  type,
  headerImages,
  backgroundColor = 'transparent',
  className,
  showHeader = true,
  sectionZIndex,
  backdropText,
  backdropOffsetY,
  backdropOffsetPx,
  backdropRate,
  backdropAlign,
}: ExperienceSectionProps) {
  // Track which card is currently expanded (only one at a time)
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Filter experiences by type
  const filteredExperiences = experiences.filter(exp => exp.type === type);

  // Handle card toggle - if same card clicked, collapse; otherwise expand the new one
  const handleCardToggle = useCallback((cardId: string) => {
    setExpandedCardId(prevId => (prevId === cardId ? null : cardId));
  }, []);

  // Click-outside detection to collapse expanded card
  useEffect(() => {
    if (!expandedCardId) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Check if click is outside any experience card
      const clickedCard = target.closest('[data-experience-card]');
      if (!clickedCard) {
        setExpandedCardId(null);
      }
    };

    // Use a slight delay to avoid immediate collapse on the same click that expanded
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [expandedCardId]);

  return (
    <div ref={sectionRef}>
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
        backdropAlign={backdropAlign}
      >
        {filteredExperiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            isExpanded={expandedCardId === experience.id}
            onToggle={() => handleCardToggle(experience.id)}
          />
        ))}
      </Section>
    </div>
  );
}
