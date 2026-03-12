import React from 'react';
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame } from 'remotion';
import { COLORS, FONTS, CaptionEntry } from '../styles/theme';
import { Browser } from '../components/Browser';
import { Caption } from '../components/Caption';

const captions: CaptionEntry[] = [
  { text: "Log into Netlify and click 'Add new site'.", startFrame: 30, endFrame: 250 },
  { text: "Select 'Import an existing project' and choose GitHub.", startFrame: 300, endFrame: 550 },
  { text: 'Pick your repository from the list.', startFrame: 900, endFrame: 1150 },
  { text: "Click 'Deploy site' — no build settings needed for HTML!", startFrame: 1200, endFrame: 1500 },
  { text: 'Your site is now live! Share the URL with anyone.', startFrame: 2000, endFrame: 2400 },
  { text: 'Congratulations — your first website is deployed!', startFrame: 2450, endFrame: 2650 },
];

const DeployButton: React.FC<{ frame: number }> = ({ frame }) => {
  const isClicked = frame > 1400;
  return (
    <div
      style={{
        backgroundColor: isClicked ? '#28a745' : '#00AD9F',
        color: 'white',
        padding: '12px 32px',
        borderRadius: 4,
        fontSize: 16,
        fontWeight: 600,
        display: 'inline-block',
        cursor: 'pointer',
        transform: isClicked ? 'scale(0.95)' : 'scale(1)',
        marginTop: 16,
      }}
    >
      {isClicked ? '✓ Deploying...' : 'Deploy site'}
    </div>
  );
};

export const NetlifyDeploy: React.FC = () => {
  const frame = useCurrentFrame();

  const progressWidth = interpolate(frame, [1500, 2000], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const liveUrlOpacity = interpolate(frame, [2000, 2100], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${COLORS.black} 0%, ${COLORS.gray} 100%)`,
      }}
    >
      {/* Part 1: Netlify dashboard — Add new site (frames 0-899) */}
      <Sequence from={0} durationInFrames={900}>
        <Browser url="app.netlify.com">
          <div style={{ padding: 32, fontFamily: FONTS.primary }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
              <div style={{
                backgroundColor: '#00AD9F',
                color: 'white',
                padding: '4px 12px',
                borderRadius: 4,
                fontSize: 14,
                fontWeight: 700,
              }}>
                Netlify
              </div>
            </div>
            <h2 style={{ margin: '0 0 24px', fontSize: 28, color: '#1a1a1a' }}>
              Add new site
            </h2>
            <div style={{
              border: '2px solid #00AD9F',
              borderRadius: 8,
              padding: 20,
              backgroundColor: '#f0fffe',
              cursor: 'pointer',
            }}>
              <h3 style={{ margin: '0 0 8px', fontSize: 18, color: '#1a1a1a' }}>
                Import an existing project
              </h3>
              <p style={{ margin: 0, fontSize: 14, color: '#586069' }}>
                Connect to GitHub, GitLab, or Bitbucket
              </p>
            </div>
          </div>
        </Browser>
      </Sequence>

      {/* Part 2: Select repo (frames 900-1499) */}
      <Sequence from={900} durationInFrames={600}>
        <Browser url="app.netlify.com/start">
          <div style={{ padding: 32, fontFamily: FONTS.primary }}>
            <h2 style={{ margin: '0 0 16px', fontSize: 24, color: '#1a1a1a' }}>
              Pick a repository
            </h2>
            <p style={{ margin: '0 0 16px', fontSize: 14, color: '#586069' }}>
              Choose the repo you want to deploy
            </p>
            {['my-portfolio', 'old-project', 'notes'].map((repo, i) => (
              <div
                key={repo}
                style={{
                  padding: '12px 16px',
                  border: `1px solid ${i === 0 ? '#00AD9F' : '#e1e4e8'}`,
                  borderRadius: 6,
                  marginBottom: 8,
                  backgroundColor: i === 0 ? '#f0fffe' : '#fff',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: 16, color: i === 0 ? '#00AD9F' : '#586069' }}>
                  {repo}
                </span>
                {i === 0 && (
                  <span style={{
                    marginLeft: 'auto',
                    color: '#00AD9F',
                    fontWeight: 600,
                    fontSize: 14,
                  }}>
                    Selected ✓
                  </span>
                )}
              </div>
            ))}
            <DeployButton frame={frame - 900} />
          </div>
        </Browser>
      </Sequence>

      {/* Part 3: Deploying + Live (frames 1500-2699) */}
      <Sequence from={1500} durationInFrames={1200}>
        <Browser url="app.netlify.com/sites/my-portfolio">
          <div style={{ padding: 32, fontFamily: FONTS.primary, textAlign: 'center' }}>
            <h2 style={{ margin: '0 0 24px', fontSize: 28, color: '#1a1a1a' }}>
              {progressWidth < 100 ? 'Deploying your site...' : 'Site is live!'}
            </h2>

            {/* Progress bar */}
            <div style={{
              width: '80%',
              height: 8,
              backgroundColor: '#e1e4e8',
              borderRadius: 4,
              margin: '0 auto 24px',
              overflow: 'hidden',
            }}>
              <div style={{
                width: `${progressWidth}%`,
                height: '100%',
                backgroundColor: progressWidth < 100 ? '#00AD9F' : '#28a745',
                borderRadius: 4,
                transition: 'background-color 0.3s',
              }} />
            </div>

            {/* Live URL */}
            <div style={{ opacity: liveUrlOpacity }}>
              <p style={{ fontSize: 14, color: '#586069', margin: '0 0 8px' }}>
                Your site is published at:
              </p>
              <a
                style={{
                  fontSize: 22,
                  color: '#00AD9F',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                https://my-portfolio-abc123.netlify.app
              </a>
              <div style={{
                marginTop: 24,
                fontSize: 48,
              }}>
                🎉
              </div>
            </div>
          </div>
        </Browser>
      </Sequence>

      <Caption captions={captions} />
    </AbsoluteFill>
  );
};
