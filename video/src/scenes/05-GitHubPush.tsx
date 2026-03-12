import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { COLORS, FONTS, CaptionEntry } from '../styles/theme';
import { Terminal } from '../components/Terminal';
import { Browser } from '../components/Browser';
import { Caption } from '../components/Caption';

const captions: CaptionEntry[] = [
  { text: 'Create a repository on GitHub, then connect it to your local project.', startFrame: 30, endFrame: 250 },
  { text: 'Add the remote origin URL from your GitHub repo.', startFrame: 300, endFrame: 550 },
  { text: 'Push your code to GitHub with git push.', startFrame: 600, endFrame: 850 },
  { text: 'Your code is now on GitHub — anyone can see it!', startFrame: 1300, endFrame: 1600 },
  { text: 'All your files are safely stored in the cloud.', startFrame: 1700, endFrame: 2000 },
];

const terminalLines = [
  { text: 'git remote add origin https://github.com/you/my-portfolio.git', startFrame: 250, isCommand: true },
  { text: '', startFrame: 400 },
  { text: 'git push -u origin main', startFrame: 500, isCommand: true },
  { text: 'Enumerating objects: 5, done.', startFrame: 700, color: '#999' },
  { text: 'Counting objects: 100% (5/5), done.', startFrame: 730, color: '#999' },
  { text: 'Writing objects: 100% (5/5), 4.50 KiB | 4.50 MiB/s, done.', startFrame: 760, color: '#999' },
  { text: 'Branch \'main\' set up to track remote branch \'main\'.', startFrame: 820, color: '#6A9955' },
];

const repoFiles = [
  { name: 'index.html', icon: '📄', size: '31 KB' },
  { name: 'style.css', icon: '🎨', size: '8 KB' },
  { name: 'README.md', icon: '📖', size: '1 KB' },
];

export const GitHubPush: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${COLORS.black} 0%, ${COLORS.gray} 100%)`,
      }}
    >
      {/* Part 1: Terminal (frames 0-1199) */}
      <Sequence from={0} durationInFrames={1200}>
        <Terminal lines={terminalLines} title="Terminal — my-portfolio" />
      </Sequence>

      {/* Part 2: Browser showing GitHub repo (frames 1200-2249) */}
      <Sequence from={1200} durationInFrames={1050}>
        <Browser url="github.com/yourusername/my-portfolio">
          <div style={{ padding: 24, fontFamily: FONTS.primary }}>
            <div style={{ borderBottom: '1px solid #e1e4e8', paddingBottom: 16, marginBottom: 16 }}>
              <h2 style={{ margin: 0, fontSize: 24, color: '#0366d6' }}>
                my-portfolio
              </h2>
              <p style={{ margin: '4px 0 0', fontSize: 14, color: '#586069' }}>
                My first portfolio website
              </p>
            </div>
            <div style={{ border: '1px solid #e1e4e8', borderRadius: 6, overflow: 'hidden' }}>
              {repoFiles.map((file, i) => (
                <div
                  key={file.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px 16px',
                    borderBottom: i < repoFiles.length - 1 ? '1px solid #e1e4e8' : 'none',
                    backgroundColor: '#fff',
                  }}
                >
                  <span style={{ marginRight: 8, fontSize: 16 }}>{file.icon}</span>
                  <span style={{ flex: 1, fontSize: 16, color: '#0366d6' }}>{file.name}</span>
                  <span style={{ fontSize: 13, color: '#586069' }}>{file.size}</span>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: 16,
              padding: 12,
              backgroundColor: '#f6f8fa',
              borderRadius: 6,
              border: '1px solid #e1e4e8',
            }}>
              <span style={{ fontSize: 14, color: '#28a745' }}>✓</span>
              <span style={{ fontSize: 14, color: '#586069', marginLeft: 8 }}>
                Initial commit: My portfolio — 1 minute ago
              </span>
            </div>
          </div>
        </Browser>
      </Sequence>

      <Caption captions={captions} />
    </AbsoluteFill>
  );
};
