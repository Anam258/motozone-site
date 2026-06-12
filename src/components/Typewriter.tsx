'use client';

import { useState, useEffect } from 'react';

const PHRASES = [
  'Authorized 3S Dealership.',
  '100% Genuine Suzuki Parts.',
  'Certified Expert Mechanics.',
];

const TYPE_SPEED   = 75;   // ms per character typed
const DELETE_SPEED = 38;   // ms per character deleted
const PAUSE_AFTER  = 1800; // ms pause when phrase is fully typed

export default function Typewriter() {
  const [phraseIdx, setPhraseIdx]   = useState(0);
  const [charIdx,   setCharIdx]     = useState(0);
  const [deleting,  setDeleting]    = useState(false);
  const [pausing,   setPausing]     = useState(false);

  useEffect(() => {
    if (pausing) {
      const t = setTimeout(() => {
        setPausing(false);
        setDeleting(true);
      }, PAUSE_AFTER);
      return () => clearTimeout(t);
    }

    const current = PHRASES[phraseIdx];

    if (!deleting) {
      if (charIdx < current.length) {
        const t = setTimeout(() => setCharIdx(c => c + 1), TYPE_SPEED);
        return () => clearTimeout(t);
      } else {
        setPausing(true);
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => setCharIdx(c => c - 1), DELETE_SPEED);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setPhraseIdx(i => (i + 1) % PHRASES.length);
      }
    }
  }, [charIdx, deleting, pausing, phraseIdx]);

  const displayed = PHRASES[phraseIdx].slice(0, charIdx);

  return (
    <span className="inline-flex items-baseline gap-0.5">
      <span className="text-[#f4f4f5] font-light">{displayed}</span>
      {/* Blinking red cursor */}
      <span
        className="inline-block w-[2px] h-[1.1em] bg-[#E30613] align-middle animate-pulse ml-0.5"
        aria-hidden
      />
    </span>
  );
}
