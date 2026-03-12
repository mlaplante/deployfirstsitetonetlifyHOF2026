import React from 'react';
import { AbsoluteFill } from 'remotion';
import { COLORS } from './styles/theme';

export const Video: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${COLORS.black} 0%, ${COLORS.gray} 100%)`,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ color: COLORS.gold, fontFamily: "'Helvetica Neue', sans-serif" }}>
        Tutorial Video Placeholder
      </h1>
    </AbsoluteFill>
  );
};
