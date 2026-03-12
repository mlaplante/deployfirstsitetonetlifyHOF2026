import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { COLORS, FONTS, CaptionEntry } from '../styles/theme';
import { Caption } from '../components/Caption';

const captions: CaptionEntry[] = [
  { text: 'Welcome to the Full Sail Hall of Fame 2026 Workshop!', startFrame: 30, endFrame: 150 },
  { text: "Today we'll build and deploy your first website.", startFrame: 170, endFrame: 320 },
  { text: "You'll have a live portfolio site by the end of this video.", startFrame: 340, endFrame: 500 },
  { text: "Let's get started!", startFrame: 520, endFrame: 650 },
];

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({ fps, frame: frame - 15, config: { damping: 100 } });
  const subtitleOpacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const subtitleY = interpolate(frame, [40, 60], [30, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const lineWidth = interpolate(frame, [25, 50], [0, 500], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const badgeOpacity = interpolate(frame, [60, 80], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${COLORS.black} 0%, ${COLORS.gray} 100%)`,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: FONTS.primary,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            opacity: badgeOpacity,
            backgroundColor: COLORS.red,
            color: COLORS.white,
            padding: '8px 24px',
            borderRadius: 4,
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: 'uppercase',
            display: 'inline-block',
            marginBottom: 24,
          }}
        >
          Full Sail University — Hall of Fame 2026
        </div>

        <h1
          style={{
            color: COLORS.gold,
            fontSize: 90,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 4,
            transform: `scale(${titleScale})`,
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Build & Deploy
        </h1>
        <h2
          style={{
            color: COLORS.white,
            fontSize: 60,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 2,
            transform: `scale(${titleScale})`,
            margin: '8px 0 0 0',
          }}
        >
          Your First Website
        </h2>

        <div
          style={{
            height: 4,
            backgroundColor: COLORS.red,
            width: lineWidth,
            margin: '24px auto',
            borderRadius: 2,
          }}
        />

        <p
          style={{
            color: COLORS.lightGray,
            fontSize: 28,
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
            margin: 0,
          }}
        >
          From template to live site in minutes
        </p>
      </div>

      <Caption captions={captions} />
    </AbsoluteFill>
  );
};
