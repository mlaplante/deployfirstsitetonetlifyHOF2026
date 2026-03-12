import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { COLORS, FONTS, CaptionEntry } from '../styles/theme';
import { CodeEditor } from '../components/CodeEditor';
import { Caption } from '../components/Caption';

const captions: CaptionEntry[] = [
  { text: 'Look for the EDIT comments throughout the template file.', startFrame: 30, endFrame: 200 },
  { text: "Let's start by customizing the colors to match your brand.", startFrame: 250, endFrame: 500 },
  { text: 'Change the primary color to any color you like!', startFrame: 550, endFrame: 800 },
  { text: 'Now update the hero section with your name and title.', startFrame: 1200, endFrame: 1500 },
  { text: 'Replace the placeholder text with your own bio.', startFrame: 1550, endFrame: 1800 },
  { text: 'Add your skills and projects to make it yours.', startFrame: 2400, endFrame: 2700 },
  { text: 'The template handles responsive design automatically!', startFrame: 2800, endFrame: 3100 },
  { text: "Great! Your portfolio is customized. Let's save and deploy it.", startFrame: 3200, endFrame: 3500 },
];

const colorLines = [
  { text: '/* ✏️ EDIT: Change these colors to match your brand */', color: '#6A9955' },
  { text: ':root {', color: '#D4D4D4' },
  { text: '    --primary-color: #E31837;', color: '#9CDCFE', indent: 1 },
  { text: '    --secondary-color: #FDB913;', color: '#9CDCFE', indent: 1 },
  { text: '    --dark-bg: #000000;', color: '#9CDCFE', indent: 1 },
  { text: '    --light-bg: #ffffff;', color: '#9CDCFE', indent: 1 },
  { text: '}', color: '#D4D4D4' },
];

const heroLines = [
  { text: '<!-- ✏️ EDIT: Your name and title -->', color: '#6A9955' },
  { text: '<section id="hero">', color: '#569CD6' },
  { text: '    <h1>Your Name Here</h1>', color: '#D4D4D4', indent: 1 },
  { text: '    <p class="tagline">Web Developer | Designer</p>', color: '#D4D4D4', indent: 1 },
  { text: '    <p>I build beautiful, responsive websites.</p>', color: '#D4D4D4', indent: 1 },
  { text: '</section>', color: '#569CD6' },
];

const skillsLines = [
  { text: '<!-- ✏️ EDIT: Add your skills -->', color: '#6A9955' },
  { text: '<div class="skills">', color: '#569CD6' },
  { text: '    <span class="skill-tag">HTML</span>', color: '#D4D4D4', indent: 1 },
  { text: '    <span class="skill-tag">CSS</span>', color: '#D4D4D4', indent: 1 },
  { text: '    <span class="skill-tag">JavaScript</span>', color: '#D4D4D4', indent: 1 },
  { text: '    <span class="skill-tag">React</span>', color: '#D4D4D4', indent: 1 },
  { text: '</div>', color: '#569CD6' },
];

export const CustomizeHTML: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${COLORS.black} 0%, ${COLORS.gray} 100%)`,
      }}
    >
      {/* Section 1: Edit Colors (frames 0-1199) */}
      <Sequence from={0} durationInFrames={1200}>
        <CodeEditor
          fileName="portfolio-template.html"
          lines={colorLines}
          highlights={[
            { startLine: 0, endLine: 0, startFrame: 30, endFrame: 200 },
            { startLine: 2, endLine: 2, startFrame: 500, endFrame: 900 },
          ]}
          typeActions={[
            { lineIndex: 2, newText: '    --primary-color: #4A90D9;', startFrame: 600, color: '#CE9178' },
          ]}
        />
      </Sequence>

      {/* Section 2: Edit Hero (frames 1200-2399) */}
      <Sequence from={1200} durationInFrames={1200}>
        <CodeEditor
          fileName="portfolio-template.html"
          lines={heroLines}
          highlights={[
            { startLine: 0, endLine: 0, startFrame: 0, endFrame: 150 },
            { startLine: 2, endLine: 4, startFrame: 200, endFrame: 600 },
          ]}
          typeActions={[
            { lineIndex: 2, newText: '    <h1>Jane Developer</h1>', startFrame: 300, color: '#CE9178' },
            { lineIndex: 3, newText: '    <p class="tagline">Full Stack Developer</p>', startFrame: 500, color: '#CE9178' },
          ]}
        />
      </Sequence>

      {/* Section 3: Edit Skills (frames 2400-3599) */}
      <Sequence from={2400} durationInFrames={1200}>
        <CodeEditor
          fileName="portfolio-template.html"
          lines={skillsLines}
          highlights={[
            { startLine: 0, endLine: 6, startFrame: 0, endFrame: 300 },
          ]}
        />
      </Sequence>

      <Caption captions={captions} />
    </AbsoluteFill>
  );
};
