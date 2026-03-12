import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
} from 'remotion';
import { COLORS, FONTS, CaptionEntry } from '../styles/theme';
import { Caption } from '../components/Caption';

const captions: CaptionEntry[] = [
  { text: "Congratulations! You've deployed your first website!", startFrame: 30, endFrame: 200 },
  { text: 'Here are some next steps to keep growing as a developer.', startFrame: 250, endFrame: 500 },
  { text: 'Thank you for joining the Full Sail Hall of Fame 2026 workshop!', startFrame: 1000, endFrame: 1300 },
];

const nextSteps = [
  { emoji: '🚀', title: 'Share it!', description: 'Add to your resume, LinkedIn, and job applications' },
  { emoji: '📈', title: 'Keep improving', description: 'Add blog posts, showcase more projects' },
  { emoji: '📚', title: 'Learn more', description: 'freeCodeCamp, MDN Web Docs, CSS-Tricks' },
  { emoji: '🤝', title: 'Network', description: 'Join dev communities, attend meetups' },
];

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${COLORS.black} 0%, ${COLORS.gray} 100%)`,
        fontFamily: FONTS.primary,
      }}
    >
      {/* Next Steps (frames 0-999) */}
      <Sequence from={0} durationInFrames={1000}>
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 80,
          }}
        >
          <h2
            style={{
              color: COLORS.gold,
              fontSize: 56,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 3,
              marginBottom: 40,
              textAlign: 'center',
            }}
          >
            Next Steps
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%', maxWidth: 900 }}>
            {nextSteps.map((step, i) => {
              const delay = 200 + i * 80;
              const itemOpacity = interpolate(frame, [delay, delay + 20], [0, 1], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              });
              const itemX = interpolate(frame, [delay, delay + 20], [-30, 0], {
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp',
              });

              return (
                <div
                  key={step.title}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 20,
                    opacity: itemOpacity,
                    transform: `translateX(${itemX}px)`,
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    padding: '16px 24px',
                    borderRadius: 8,
                    borderLeft: `4px solid ${COLORS.red}`,
                  }}
                >
                  <span style={{ fontSize: 36 }}>{step.emoji}</span>
                  <div>
                    <div style={{ color: COLORS.gold, fontSize: 24, fontWeight: 700 }}>
                      {step.title}
                    </div>
                    <div style={{ color: COLORS.white, fontSize: 18, opacity: 0.8 }}>
                      {step.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* Closing card (frames 1000-1349) */}
      <Sequence from={1000} durationInFrames={350}>
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                backgroundColor: COLORS.red,
                color: COLORS.white,
                padding: '12px 32px',
                borderRadius: 4,
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: 24,
              }}
            >
              Full Sail University
            </div>
            <h1
              style={{
                color: COLORS.gold,
                fontSize: 72,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: 4,
                margin: '0 0 16px 0',
              }}
            >
              Hall of Fame 2026
            </h1>
            <p style={{ color: COLORS.white, fontSize: 28, opacity: 0.7, margin: 0 }}>
              Now go build something amazing!
            </p>
          </div>
        </AbsoluteFill>
      </Sequence>

      <Caption captions={captions} />
    </AbsoluteFill>
  );
};
