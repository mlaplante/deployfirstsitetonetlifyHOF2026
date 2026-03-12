import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { COLORS, FONTS, CaptionEntry } from '../styles/theme';

type CaptionProps = {
  captions: CaptionEntry[];
};

export const Caption: React.FC<CaptionProps> = ({ captions }) => {
  const frame = useCurrentFrame();

  const activeCaption = captions.find(
    (c) => frame >= c.startFrame && frame <= c.endFrame
  );

  if (!activeCaption) return null;

  const fadeIn = interpolate(
    frame,
    [activeCaption.startFrame, activeCaption.startFrame + 10],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const fadeOut = interpolate(
    frame,
    [activeCaption.endFrame - 10, activeCaption.endFrame],
    [1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'flex-end',
        alignItems: 'center',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          padding: '16px 32px',
          marginBottom: 60,
          borderRadius: 8,
          maxWidth: '80%',
          opacity: Math.min(fadeIn, fadeOut),
        }}
      >
        <span
          style={{
            color: COLORS.white,
            fontSize: 32,
            fontFamily: FONTS.primary,
            lineHeight: 1.4,
            textAlign: 'center',
          }}
        >
          {activeCaption.text}
        </span>
      </div>
    </AbsoluteFill>
  );
};
