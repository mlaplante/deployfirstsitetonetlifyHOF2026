import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { COLORS } from '../styles/theme';

type TransitionProps = {
  type?: 'fade' | 'wipe';
  color?: string;
};

export const Transition: React.FC<TransitionProps> = ({
  type = 'fade',
  color = COLORS.black,
}) => {
  const frame = useCurrentFrame();

  if (type === 'wipe') {
    const progress = interpolate(frame, [0, 15], [0, 100], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });

    return (
      <AbsoluteFill
        style={{
          background: `linear-gradient(90deg, ${color} ${progress}%, transparent ${progress}%)`,
        }}
      />
    );
  }

  const opacity = interpolate(
    frame,
    [0, 7, 8, 15],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: color, opacity }} />
  );
};
