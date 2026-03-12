import React from 'react';
import { Composition } from 'remotion';
import { Video } from './Video';
import { VIDEO, SCENE_DURATIONS } from './styles/theme';

const TRANSITION_FRAMES = 15;
const NUM_TRANSITIONS = 6;
const totalDuration = Object.values(SCENE_DURATIONS).reduce((a, b) => a + b, 0) + (TRANSITION_FRAMES * NUM_TRANSITIONS);

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="TutorialVideo"
      component={Video}
      durationInFrames={totalDuration}
      fps={VIDEO.fps}
      width={VIDEO.width}
      height={VIDEO.height}
    />
  );
};
