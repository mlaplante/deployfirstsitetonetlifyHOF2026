import React from 'react';
import { AbsoluteFill } from 'remotion';
import { COLORS, CaptionEntry } from '../styles/theme';
import { Terminal } from '../components/Terminal';
import { Caption } from '../components/Caption';

const captions: CaptionEntry[] = [
  { text: 'Git tracks changes to your code over time.', startFrame: 30, endFrame: 200 },
  { text: 'First, initialize a new repository in your project folder.', startFrame: 250, endFrame: 500 },
  { text: 'Stage all your files with git add.', startFrame: 700, endFrame: 900 },
  { text: 'Create your first commit — a snapshot of your code.', startFrame: 1050, endFrame: 1350 },
  { text: 'Your code is now tracked by Git!', startFrame: 1500, endFrame: 1700 },
];

const terminalLines = [
  { text: 'git init', startFrame: 200, isCommand: true },
  { text: 'Initialized empty Git repository in /my-portfolio/.git/', startFrame: 280, color: '#999' },
  { text: '', startFrame: 300 },
  { text: 'git add .', startFrame: 600, isCommand: true },
  { text: '', startFrame: 680 },
  { text: 'git commit -m "Initial commit: My portfolio"', startFrame: 950, isCommand: true },
  { text: '[main (root-commit) abc1234] Initial commit: My portfolio', startFrame: 1100, color: '#999' },
  { text: ' 2 files changed, 450 insertions(+)', startFrame: 1130, color: '#999' },
  { text: ' create mode 100644 index.html', startFrame: 1160, color: '#6A9955' },
  { text: ' create mode 100644 style.css', startFrame: 1190, color: '#6A9955' },
];

export const GitSetup: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${COLORS.black} 0%, ${COLORS.gray} 100%)`,
      }}
    >
      <Terminal lines={terminalLines} title="Terminal — my-portfolio" />
      <Caption captions={captions} />
    </AbsoluteFill>
  );
};
