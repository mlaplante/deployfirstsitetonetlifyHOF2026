import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { FONTS } from '../styles/theme';

type BrowserProps = {
  url: string;
  children: React.ReactNode;
  scrollY?: number;
  scrollStartFrame?: number;
  scrollEndFrame?: number;
};

export const Browser: React.FC<BrowserProps> = ({
  url,
  children,
  scrollY = 0,
  scrollStartFrame = 0,
  scrollEndFrame = 30,
}) => {
  const frame = useCurrentFrame();

  const currentScroll = interpolate(
    frame,
    [scrollStartFrame, scrollEndFrame],
    [0, scrollY],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1500,
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          backgroundColor: '#FFFFFF',
        }}
      >
        {/* Chrome bar */}
        <div
          style={{
            backgroundColor: '#E8E8E8',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FF5F57' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#28C840' }} />
          <div
            style={{
              flex: 1,
              backgroundColor: '#FFFFFF',
              borderRadius: 6,
              padding: '6px 12px',
              marginLeft: 12,
              fontSize: 14,
              fontFamily: FONTS.mono,
              color: '#666',
            }}
          >
            {url}
          </div>
        </div>
        {/* Content area */}
        <div
          style={{
            height: 700,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              transform: `translateY(-${currentScroll}px)`,
              position: 'absolute',
              width: '100%',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
