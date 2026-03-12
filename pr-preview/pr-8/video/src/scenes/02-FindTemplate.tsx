import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, Sequence } from 'remotion';
import { COLORS, FONTS, CaptionEntry } from '../styles/theme';
import { Browser } from '../components/Browser';
import { Caption } from '../components/Caption';

const captions: CaptionEntry[] = [
  { text: 'This repository includes everything you need to get started.', startFrame: 30, endFrame: 200 },
  { text: 'The portfolio-template.html file is your starting point.', startFrame: 250, endFrame: 450 },
  { text: "It's a fully responsive, professional portfolio template.", startFrame: 500, endFrame: 700 },
  { text: "Let's open it up and customize it!", startFrame: 750, endFrame: 950 },
];

const files = [
  { name: 'index.html', icon: '📄', size: '33 KB' },
  { name: 'portfolio-template.html', icon: '📄', size: '31 KB', highlight: true },
  { name: 'package.json', icon: '📦', size: '557 B' },
  { name: 'README.md', icon: '📖', size: '12 KB' },
];

export const FindTemplate: React.FC = () => {
  const frame = useCurrentFrame();

  const highlightOpacity = interpolate(frame, [200, 230], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${COLORS.black} 0%, ${COLORS.gray} 100%)`,
      }}
    >
      <Browser url="github.com/yourusername/deployfirstsitetonetlifyHOF2026">
        <div style={{ padding: 24, fontFamily: FONTS.primary }}>
          {/* Repo header */}
          <div style={{ borderBottom: '1px solid #e1e4e8', paddingBottom: 16, marginBottom: 16 }}>
            <h2 style={{ margin: 0, fontSize: 24, color: '#0366d6' }}>
              deployfirstsitetonetlifyHOF2026
            </h2>
            <p style={{ margin: '4px 0 0', fontSize: 14, color: '#586069' }}>
              Build & Deploy Your First Website — Full Sail Hall of Fame 2026
            </p>
          </div>

          {/* File list */}
          <div style={{ border: '1px solid #e1e4e8', borderRadius: 6, overflow: 'hidden' }}>
            {files.map((file, i) => (
              <div
                key={file.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px 16px',
                  borderBottom: i < files.length - 1 ? '1px solid #e1e4e8' : 'none',
                  backgroundColor: file.highlight
                    ? `rgba(253, 185, 19, ${highlightOpacity * 0.15})`
                    : '#fff',
                  borderLeft: file.highlight
                    ? `3px solid rgba(253, 185, 19, ${highlightOpacity})`
                    : '3px solid transparent',
                }}
              >
                <span style={{ marginRight: 8, fontSize: 16 }}>{file.icon}</span>
                <span
                  style={{
                    flex: 1,
                    fontSize: 16,
                    color: file.highlight ? '#0366d6' : '#24292e',
                    fontWeight: file.highlight ? 600 : 400,
                  }}
                >
                  {file.name}
                </span>
                <span style={{ fontSize: 13, color: '#586069' }}>{file.size}</span>
              </div>
            ))}
          </div>
        </div>
      </Browser>

      <Caption captions={captions} />
    </AbsoluteFill>
  );
};
