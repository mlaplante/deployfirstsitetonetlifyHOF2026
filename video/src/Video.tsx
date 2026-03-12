import React from 'react';
import { AbsoluteFill, Series } from 'remotion';
import { COLORS, SCENE_DURATIONS } from './styles/theme';
import { Transition } from './components/Transition';
import { Intro } from './scenes/01-Intro';
import { FindTemplate } from './scenes/02-FindTemplate';
import { CustomizeHTML } from './scenes/03-CustomizeHTML';
import { GitSetup } from './scenes/04-GitSetup';
import { GitHubPush } from './scenes/05-GitHubPush';
import { NetlifyDeploy } from './scenes/06-NetlifyDeploy';
import { Outro } from './scenes/07-Outro';

const TRANSITION_FRAMES = 15;

export const Video: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${COLORS.black} 0%, ${COLORS.gray} 100%)`,
      }}
    >
      <Series>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.intro}>
          <Intro />
        </Series.Sequence>
        <Series.Sequence durationInFrames={TRANSITION_FRAMES}>
          <Transition type="fade" />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.findTemplate}>
          <FindTemplate />
        </Series.Sequence>
        <Series.Sequence durationInFrames={TRANSITION_FRAMES}>
          <Transition type="wipe" />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.customizeHTML}>
          <CustomizeHTML />
        </Series.Sequence>
        <Series.Sequence durationInFrames={TRANSITION_FRAMES}>
          <Transition type="fade" />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.gitSetup}>
          <GitSetup />
        </Series.Sequence>
        <Series.Sequence durationInFrames={TRANSITION_FRAMES}>
          <Transition type="fade" />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.githubPush}>
          <GitHubPush />
        </Series.Sequence>
        <Series.Sequence durationInFrames={TRANSITION_FRAMES}>
          <Transition type="wipe" />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.netlifyDeploy}>
          <NetlifyDeploy />
        </Series.Sequence>
        <Series.Sequence durationInFrames={TRANSITION_FRAMES}>
          <Transition type="fade" />
        </Series.Sequence>
        <Series.Sequence durationInFrames={SCENE_DURATIONS.outro}>
          <Outro />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
