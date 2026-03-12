import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { COLORS, FONTS } from '../styles/theme';

type TerminalLine = {
  text: string;
  startFrame: number;
  isCommand?: boolean;
  color?: string;
};

type TerminalProps = {
  lines: TerminalLine[];
  title?: string;
};

export const Terminal: React.FC<TerminalProps> = ({
  lines,
  title = 'Terminal',
}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 80,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1400,
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        }}
      >
        {/* Title bar */}
        <div
          style={{
            backgroundColor: '#3C3C3C',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FF5F57' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#28C840' }} />
          <span
            style={{
              color: '#999',
              fontSize: 13,
              marginLeft: 8,
              fontFamily: FONTS.mono,
            }}
          >
            {title}
          </span>
        </div>
        {/* Terminal body */}
        <div
          style={{
            backgroundColor: '#1E1E1E',
            padding: 24,
            minHeight: 400,
            fontFamily: FONTS.mono,
            fontSize: 22,
            lineHeight: 1.8,
          }}
        >
          {lines.map((line, i) => {
            if (frame < line.startFrame) return null;

            if (line.isCommand) {
              const charsToShow = Math.floor(
                interpolate(
                  frame,
                  [line.startFrame, line.startFrame + line.text.length * 2],
                  [0, line.text.length],
                  { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
                )
              );
              const visibleText = line.text.slice(0, charsToShow);
              const showCursor =
                frame >= line.startFrame &&
                (i === lines.length - 1 || frame < (lines[i + 1]?.startFrame ?? Infinity));

              return (
                <div key={i} style={{ color: line.color || '#28C840' }}>
                  <span style={{ color: COLORS.gold }}>$ </span>
                  {visibleText}
                  {showCursor && (
                    <span
                      style={{
                        opacity: Math.round(frame / 15) % 2 === 0 ? 1 : 0,
                        backgroundColor: '#28C840',
                        width: 10,
                        height: 22,
                        display: 'inline-block',
                        marginLeft: 2,
                      }}
                    />
                  )}
                </div>
              );
            }

            return (
              <div key={i} style={{ color: line.color || COLORS.white }}>
                {line.text}
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
