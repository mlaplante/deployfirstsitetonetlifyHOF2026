import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { COLORS, FONTS } from '../styles/theme';

type BrandedSlideProps = {
  title: string;
  subtitle?: string;
  backgroundColor?: string;
};

export const BrandedSlide: React.FC<BrandedSlideProps> = ({
  title,
  subtitle,
  backgroundColor,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({
    fps,
    frame,
    config: { damping: 100, stiffness: 200 },
  });

  const subtitleOpacity = interpolate(frame, [20, 35], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const subtitleY = interpolate(frame, [20, 35], [20, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const lineWidth = interpolate(frame, [10, 30], [0, 300], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        background: backgroundColor
          || `linear-gradient(135deg, ${COLORS.black} 0%, ${COLORS.gray} 100%)`,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: FONTS.primary,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1
          style={{
            color: COLORS.gold,
            fontSize: 80,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 4,
            transform: `scale(${titleScale})`,
            margin: 0,
          }}
        >
          {title}
        </h1>
        <div
          style={{
            height: 4,
            backgroundColor: COLORS.red,
            width: lineWidth,
            margin: '20px auto',
            borderRadius: 2,
          }}
        />
        {subtitle && (
          <p
            style={{
              color: COLORS.white,
              fontSize: 36,
              opacity: subtitleOpacity,
              transform: `translateY(${subtitleY}px)`,
              margin: 0,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </AbsoluteFill>
  );
};
