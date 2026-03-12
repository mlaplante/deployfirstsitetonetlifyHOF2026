# Remotion Tutorial Video Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a ~7.5 minute tutorial video using Remotion that teaches students how to build and deploy their first website to Netlify, branded with Full Sail HOF 2026 styling.

**Architecture:** A single Remotion project in `video/` with reusable components (BrandedSlide, Browser, Terminal, CodeEditor, Caption, Transition) composed into 7 scenes, sequenced via `<Series>`. Each scene receives caption timing props for voiceover sync.

**Tech Stack:** Remotion 4.x, React 18, TypeScript

---

### Task 1: Scaffold Remotion Project

**Files:**
- Create: `video/package.json`
- Create: `video/tsconfig.json`
- Create: `video/src/index.ts`
- Create: `video/src/Root.tsx`
- Create: `video/src/Video.tsx`
- Create: `video/src/styles/theme.ts`

**Step 1: Initialize the Remotion project**

```bash
cd /Users/mlaplante/Sites/deployfirstsitetonetlifyHOF2026
mkdir -p video
cd video
npm init video --blank
```

This scaffolds the base Remotion project with package.json, tsconfig, and src/ structure.

**Step 2: Create the theme file**

Create `video/src/styles/theme.ts`:

```ts
export const COLORS = {
  red: '#E31837',
  gold: '#FDB913',
  black: '#000000',
  gray: '#231F20',
  lightGray: '#58595B',
  white: '#FFFFFF',
} as const;

export const FONTS = {
  primary: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  mono: "'SF Mono', 'Fira Code', 'Courier New', monospace",
} as const;

export const VIDEO = {
  width: 1920,
  height: 1080,
  fps: 30,
  durationInFrames: 13500, // ~7.5 min
} as const;

export const SCENE_DURATIONS = {
  intro: 45 * 30,         // 1350 frames
  findTemplate: 60 * 30,  // 1800 frames
  customizeHTML: 120 * 30, // 3600 frames
  gitSetup: 60 * 30,      // 1800 frames
  githubPush: 75 * 30,    // 2250 frames
  netlifyDeploy: 90 * 30, // 2700 frames
  outro: 45 * 30,         // 1350 frames
} as const;

export type CaptionEntry = {
  text: string;
  startFrame: number;
  endFrame: number;
};
```

**Step 3: Create the Root component**

Create `video/src/Root.tsx`:

```tsx
import { Composition } from 'remotion';
import { Video } from './Video';
import { VIDEO, SCENE_DURATIONS } from './styles/theme';

const totalDuration = Object.values(SCENE_DURATIONS).reduce((a, b) => a + b, 0);

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
```

**Step 4: Create a placeholder Video component**

Create `video/src/Video.tsx`:

```tsx
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
```

**Step 5: Update index.ts entry point**

Ensure `video/src/index.ts` contains:

```ts
import { registerRoot } from 'remotion';
import { RemotionRoot } from './Root';

registerRoot(RemotionRoot);
```

**Step 6: Verify it works**

```bash
cd /Users/mlaplante/Sites/deployfirstsitetonetlifyHOF2026/video
npx remotion studio
```

Expected: Remotion Studio opens in browser showing the placeholder text on a dark gradient.

**Step 7: Commit**

```bash
git add video/
git commit -m "feat: scaffold Remotion video project with theme and placeholder"
```

---

### Task 2: Build Caption Component

**Files:**
- Create: `video/src/components/Caption.tsx`

**Step 1: Create the Caption component**

Create `video/src/components/Caption.tsx`:

```tsx
import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { COLORS, FONTS, CaptionEntry } from '../styles/theme';

type CaptionProps = {
  captions: CaptionEntry[];
};

export const Caption: React.FC<CaptionProps> = ({ captions }) => {
  const frame = useCurrentFrame();

  const activeCaption = captions.find(
    (c) => frame >= c.startFrame && frame <= c.endFrame
  );

  if (!activeCaption) return null;

  const fadeIn = interpolate(
    frame,
    [activeCaption.startFrame, activeCaption.startFrame + 10],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const fadeOut = interpolate(
    frame,
    [activeCaption.endFrame - 10, activeCaption.endFrame],
    [1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'flex-end',
        alignItems: 'center',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          padding: '16px 32px',
          marginBottom: 60,
          borderRadius: 8,
          maxWidth: '80%',
          opacity: Math.min(fadeIn, fadeOut),
        }}
      >
        <span
          style={{
            color: COLORS.white,
            fontSize: 32,
            fontFamily: FONTS.primary,
            lineHeight: 1.4,
            textAlign: 'center',
          }}
        >
          {activeCaption.text}
        </span>
      </div>
    </AbsoluteFill>
  );
};
```

**Step 2: Verify in Remotion Studio**

Temporarily add `<Caption>` to `Video.tsx` with test captions to confirm fade in/out works.

**Step 3: Commit**

```bash
git add video/src/components/Caption.tsx
git commit -m "feat: add Caption component with fade in/out timing"
```

---

### Task 3: Build BrandedSlide Component

**Files:**
- Create: `video/src/components/BrandedSlide.tsx`

**Step 1: Create the BrandedSlide component**

Create `video/src/components/BrandedSlide.tsx`:

```tsx
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

  // Red accent line under title
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
```

**Step 2: Verify in Remotion Studio**

Preview the component to confirm title spring-in, red line animation, and subtitle fade.

**Step 3: Commit**

```bash
git add video/src/components/BrandedSlide.tsx
git commit -m "feat: add BrandedSlide component with spring and accent line animations"
```

---

### Task 4: Build Terminal Component

**Files:**
- Create: `video/src/components/Terminal.tsx`

**Step 1: Create the Terminal component**

Create `video/src/components/Terminal.tsx`:

```tsx
import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { COLORS, FONTS } from '../styles/theme';

type TerminalLine = {
  text: string;
  startFrame: number;
  isCommand?: boolean;  // true = typed with cursor, false = output (appears instantly)
  color?: string;
};

type TerminalProps = {
  lines: TerminalLine[];
  title?: string;
};

export const Terminal: React.FC<TerminalProps> = ({
  lines,
  title = 'Terminal',
}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 80,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1400,
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        }}
      >
        {/* Title bar */}
        <div
          style={{
            backgroundColor: '#3C3C3C',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FF5F57' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#28C840' }} />
          <span
            style={{
              color: '#999',
              fontSize: 13,
              marginLeft: 8,
              fontFamily: FONTS.mono,
            }}
          >
            {title}
          </span>
        </div>
        {/* Terminal body */}
        <div
          style={{
            backgroundColor: '#1E1E1E',
            padding: 24,
            minHeight: 400,
            fontFamily: FONTS.mono,
            fontSize: 22,
            lineHeight: 1.8,
          }}
        >
          {lines.map((line, i) => {
            if (frame < line.startFrame) return null;

            if (line.isCommand) {
              // Typewriter effect
              const charsToShow = Math.floor(
                interpolate(
                  frame,
                  [line.startFrame, line.startFrame + line.text.length * 2],
                  [0, line.text.length],
                  { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
                )
              );
              const visibleText = line.text.slice(0, charsToShow);
              const showCursor =
                frame >= line.startFrame &&
                (i === lines.length - 1 || frame < (lines[i + 1]?.startFrame ?? Infinity));

              return (
                <div key={i} style={{ color: line.color || '#28C840' }}>
                  <span style={{ color: COLORS.gold }}>$ </span>
                  {visibleText}
                  {showCursor && (
                    <span
                      style={{
                        opacity: Math.round(frame / 15) % 2 === 0 ? 1 : 0,
                        backgroundColor: '#28C840',
                        width: 10,
                        height: 22,
                        display: 'inline-block',
                        marginLeft: 2,
                      }}
                    />
                  )}
                </div>
              );
            }

            // Output line — appears instantly
            return (
              <div key={i} style={{ color: line.color || COLORS.white }}>
                {line.text}
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
```

**Step 2: Verify in Remotion Studio**

Test with sample git commands to confirm typewriter effect and cursor blinking.

**Step 3: Commit**

```bash
git add video/src/components/Terminal.tsx
git commit -m "feat: add Terminal component with typewriter effect and blinking cursor"
```

---

### Task 5: Build Browser Component

**Files:**
- Create: `video/src/components/Browser.tsx`

**Step 1: Create the Browser component**

Create `video/src/components/Browser.tsx`:

```tsx
import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { FONTS } from '../styles/theme';

type BrowserProps = {
  url: string;
  children: React.ReactNode;
  scrollY?: number;        // target scroll position to animate to
  scrollStartFrame?: number;
  scrollEndFrame?: number;
};

export const Browser: React.FC<BrowserProps> = ({
  url,
  children,
  scrollY = 0,
  scrollStartFrame = 0,
  scrollEndFrame = 30,
}) => {
  const frame = useCurrentFrame();

  const currentScroll = interpolate(
    frame,
    [scrollStartFrame, scrollEndFrame],
    [0, scrollY],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1500,
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          backgroundColor: '#FFFFFF',
        }}
      >
        {/* Chrome bar */}
        <div
          style={{
            backgroundColor: '#E8E8E8',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FF5F57' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#28C840' }} />
          <div
            style={{
              flex: 1,
              backgroundColor: '#FFFFFF',
              borderRadius: 6,
              padding: '6px 12px',
              marginLeft: 12,
              fontSize: 14,
              fontFamily: FONTS.mono,
              color: '#666',
            }}
          >
            {url}
          </div>
        </div>
        {/* Content area */}
        <div
          style={{
            height: 700,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              transform: `translateY(-${currentScroll}px)`,
              position: 'absolute',
              width: '100%',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
```

**Step 2: Verify in Remotion Studio**

Test with placeholder content and scroll animation.

**Step 3: Commit**

```bash
git add video/src/components/Browser.tsx
git commit -m "feat: add Browser mockup component with scroll animation"
```

---

### Task 6: Build CodeEditor Component

**Files:**
- Create: `video/src/components/CodeEditor.tsx`

**Step 1: Create the CodeEditor component**

Create `video/src/components/CodeEditor.tsx`:

```tsx
import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { COLORS, FONTS } from '../styles/theme';

type CodeLine = {
  text: string;
  color?: string;
  indent?: number;
};

type TypeAction = {
  lineIndex: number;
  newText: string;
  startFrame: number;
  color?: string;
};

type HighlightRegion = {
  startLine: number;
  endLine: number;
  startFrame: number;
  endFrame: number;
};

type CodeEditorProps = {
  fileName: string;
  lines: CodeLine[];
  typeActions?: TypeAction[];
  highlights?: HighlightRegion[];
};

export const CodeEditor: React.FC<CodeEditorProps> = ({
  fileName,
  lines,
  typeActions = [],
  highlights = [],
}) => {
  const frame = useCurrentFrame();

  // Apply type actions to get current state of lines
  const currentLines = lines.map((line, i) => {
    const action = typeActions.find((a) => a.lineIndex === i);
    if (!action || frame < action.startFrame) return line;

    const charsToShow = Math.floor(
      interpolate(
        frame,
        [action.startFrame, action.startFrame + action.newText.length * 2],
        [0, action.newText.length],
        { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
      )
    );

    return {
      ...line,
      text: action.newText.slice(0, charsToShow),
      color: action.color || line.color,
    };
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1500,
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        }}
      >
        {/* Editor title bar */}
        <div
          style={{
            backgroundColor: '#2D2D2D',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FF5F57' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#28C840' }} />
          <span
            style={{
              color: '#CCC',
              fontSize: 13,
              marginLeft: 12,
              fontFamily: FONTS.mono,
            }}
          >
            {fileName}
          </span>
        </div>
        {/* Code area */}
        <div
          style={{
            backgroundColor: '#1E1E1E',
            padding: '16px 0',
            fontFamily: FONTS.mono,
            fontSize: 20,
            lineHeight: 1.6,
            minHeight: 500,
          }}
        >
          {currentLines.map((line, i) => {
            const isHighlighted = highlights.some(
              (h) =>
                i >= h.startLine &&
                i <= h.endLine &&
                frame >= h.startFrame &&
                frame <= h.endFrame
            );

            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  backgroundColor: isHighlighted
                    ? 'rgba(253, 185, 19, 0.15)'
                    : 'transparent',
                  borderLeft: isHighlighted
                    ? `3px solid ${COLORS.gold}`
                    : '3px solid transparent',
                  transition: 'background-color 0.3s',
                }}
              >
                <span
                  style={{
                    width: 60,
                    textAlign: 'right',
                    paddingRight: 16,
                    color: '#555',
                    userSelect: 'none',
                  }}
                >
                  {i + 1}
                </span>
                <span
                  style={{
                    color: line.color || '#D4D4D4',
                    paddingLeft: (line.indent || 0) * 24,
                  }}
                >
                  {line.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
```

**Step 2: Verify in Remotion Studio**

Test with sample HTML lines, a type action, and a highlight region.

**Step 3: Commit**

```bash
git add video/src/components/CodeEditor.tsx
git commit -m "feat: add CodeEditor component with typing and highlight animations"
```

---

### Task 7: Build Transition Component

**Files:**
- Create: `video/src/components/Transition.tsx`

**Step 1: Create the Transition component**

Create `video/src/components/Transition.tsx`:

```tsx
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

  // Fade: in first half, out second half
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
```

**Step 2: Commit**

```bash
git add video/src/components/Transition.tsx
git commit -m "feat: add Transition component with fade and wipe modes"
```

---

### Task 8: Build Scene 1 — Intro

**Files:**
- Create: `video/src/scenes/01-Intro.tsx`

**Step 1: Create the Intro scene**

Create `video/src/scenes/01-Intro.tsx`:

```tsx
import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { COLORS, FONTS, CaptionEntry } from '../styles/theme';
import { Caption } from '../components/Caption';

const captions: CaptionEntry[] = [
  { text: 'Welcome to the Full Sail Hall of Fame 2026 Workshop!', startFrame: 30, endFrame: 150 },
  { text: "Today we'll build and deploy your first website.", startFrame: 170, endFrame: 320 },
  { text: "You'll have a live portfolio site by the end of this video.", startFrame: 340, endFrame: 500 },
  { text: "Let's get started!", startFrame: 520, endFrame: 650 },
];

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({ fps, frame: frame - 15, config: { damping: 100 } });
  const subtitleOpacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const subtitleY = interpolate(frame, [40, 60], [30, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Red accent line
  const lineWidth = interpolate(frame, [25, 50], [0, 500], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // "HOF 2026" badge
  const badgeOpacity = interpolate(frame, [60, 80], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${COLORS.black} 0%, ${COLORS.gray} 100%)`,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: FONTS.primary,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        {/* Badge */}
        <div
          style={{
            opacity: badgeOpacity,
            backgroundColor: COLORS.red,
            color: COLORS.white,
            padding: '8px 24px',
            borderRadius: 4,
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: 'uppercase',
            display: 'inline-block',
            marginBottom: 24,
          }}
        >
          Full Sail University — Hall of Fame 2026
        </div>

        {/* Title */}
        <h1
          style={{
            color: COLORS.gold,
            fontSize: 90,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 4,
            transform: `scale(${titleScale})`,
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Build & Deploy
        </h1>
        <h2
          style={{
            color: COLORS.white,
            fontSize: 60,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 2,
            transform: `scale(${titleScale})`,
            margin: '8px 0 0 0',
          }}
        >
          Your First Website
        </h2>

        {/* Accent line */}
        <div
          style={{
            height: 4,
            backgroundColor: COLORS.red,
            width: lineWidth,
            margin: '24px auto',
            borderRadius: 2,
          }}
        />

        {/* Subtitle */}
        <p
          style={{
            color: COLORS.lightGray,
            fontSize: 28,
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
            margin: 0,
          }}
        >
          From template to live site in minutes
        </p>
      </div>

      <Caption captions={captions} />
    </AbsoluteFill>
  );
};
```

**Step 2: Verify in Remotion Studio**

Preview to confirm title animation, accent line, badge, and caption timing.

**Step 3: Commit**

```bash
git add video/src/scenes/01-Intro.tsx
git commit -m "feat: add Intro scene with branded title animation and captions"
```

---

### Task 9: Build Scene 2 — Find Template

**Files:**
- Create: `video/src/scenes/02-FindTemplate.tsx`

**Step 1: Create the scene**

This scene shows a browser mockup of the GitHub repo, highlighting `portfolio-template.html`. Build a simulated GitHub file list inside the `<Browser>` component. Include captions explaining the template is already in the repo.

Key content:
- Browser URL: `github.com/yourusername/deployfirstsitetonetlifyHOF2026`
- File list showing: `index.html`, `portfolio-template.html` (highlighted after a delay), `README.md`, `package.json`
- Captions: "This repository includes a ready-to-use portfolio template", "Let's open portfolio-template.html and customize it"

Use `interpolate()` to animate a highlight appearing on the template file row.

**Step 2: Verify and commit**

```bash
git add video/src/scenes/02-FindTemplate.tsx
git commit -m "feat: add FindTemplate scene showing repo file list in browser mockup"
```

---

### Task 10: Build Scene 3 — Customize HTML

**Files:**
- Create: `video/src/scenes/03-CustomizeHTML.tsx`

**Step 1: Create the scene**

Uses `<CodeEditor>` to show editing `portfolio-template.html`. Show key sections:

1. First show the color variables (lines ~28-34) with a highlight
2. Type action: change `--primary-color` value
3. Show the hero section with a highlight
4. Type action: change the name and title
5. Show the about section briefly

Captions guide through each edit:
- "Look for the EDIT comments throughout the file"
- "Let's start by customizing the colors"
- "Now update the hero section with your name"

Duration: 3600 frames (120s). Break into subsequences using `<Sequence>`.

**Step 2: Verify and commit**

```bash
git add video/src/scenes/03-CustomizeHTML.tsx
git commit -m "feat: add CustomizeHTML scene with code editor typing animations"
```

---

### Task 11: Build Scene 4 — Git Setup

**Files:**
- Create: `video/src/scenes/04-GitSetup.tsx`

**Step 1: Create the scene**

Uses `<Terminal>` component. Lines:

```
$ git init
Initialized empty Git repository in /my-portfolio/.git/

$ git add .

$ git commit -m "Initial commit: My portfolio"
[main (root-commit) abc1234] Initial commit: My portfolio
 2 files changed, 450 insertions(+)
 create mode 100644 index.html
 create mode 100644 style.css
```

Captions:
- "Git tracks changes to your code over time"
- "First, initialize a new repository"
- "Stage all files and create your first commit"

**Step 2: Verify and commit**

```bash
git add video/src/scenes/04-GitSetup.tsx
git commit -m "feat: add GitSetup scene with terminal git commands"
```

---

### Task 12: Build Scene 5 — GitHub Push

**Files:**
- Create: `video/src/scenes/05-GitHubPush.tsx`

**Step 1: Create the scene**

Two parts using `<Sequence>`:
1. **Terminal** (first ~40s): `git remote add origin ...` → `git push -u origin main` with output
2. **Browser** (remaining ~35s): Shows GitHub repo page with the files listed, confirming successful push

Captions:
- "Create a repository on GitHub, then connect it"
- "Push your code to GitHub"
- "Your code is now on GitHub — anyone can see it"

**Step 2: Verify and commit**

```bash
git add video/src/scenes/05-GitHubPush.tsx
git commit -m "feat: add GitHubPush scene with terminal and browser mockups"
```

---

### Task 13: Build Scene 6 — Netlify Deploy

**Files:**
- Create: `video/src/scenes/06-NetlifyDeploy.tsx`

**Step 1: Create the scene**

Three-part sequence in `<Browser>`:
1. Netlify dashboard — "Add new site" → "Import from GitHub" (simulated UI with animated clicks)
2. Select repository from list (highlight animation)
3. "Deploy site" button click → Progress bar → Live URL appears with confetti-style gold sparkle

Captions:
- "Log into Netlify and click 'Add new site'"
- "Select 'Import an existing project' and choose GitHub"
- "Pick your repository and click 'Deploy site'"
- "Your site is now live! Share the URL with anyone"

**Step 2: Verify and commit**

```bash
git add video/src/scenes/06-NetlifyDeploy.tsx
git commit -m "feat: add NetlifyDeploy scene with dashboard mockup and deploy animation"
```

---

### Task 14: Build Scene 7 — Outro

**Files:**
- Create: `video/src/scenes/07-Outro.tsx`

**Step 1: Create the scene**

Uses `<BrandedSlide>` style layout. Animated list of next steps:
1. "Share it — add to your resume, LinkedIn, job applications"
2. "Keep improving — add blog posts, showcase projects"
3. "Learn more — freeCodeCamp, MDN, CSS-Tricks"

Each item fades/slides in with staggered timing. Ends with Full Sail HOF 2026 closing card.

Captions:
- "Congratulations! You've deployed your first website"
- "Here are some next steps to keep growing"
- "Thank you for joining the Full Sail Hall of Fame 2026 workshop!"

**Step 2: Verify and commit**

```bash
git add video/src/scenes/07-Outro.tsx
git commit -m "feat: add Outro scene with next steps and closing card"
```

---

### Task 15: Wire All Scenes into Video.tsx

**Files:**
- Modify: `video/src/Video.tsx`

**Step 1: Update Video.tsx to compose all scenes**

```tsx
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
```

**Step 2: Update Root.tsx total duration to include transitions**

Update the `totalDuration` calculation to account for 6 transitions × 15 frames = 90 extra frames.

**Step 3: Preview full video in Remotion Studio**

```bash
cd /Users/mlaplante/Sites/deployfirstsitetonetlifyHOF2026/video
npx remotion studio
```

Scrub through entire composition to verify scene flow and transitions.

**Step 4: Commit**

```bash
git add video/src/Video.tsx video/src/Root.tsx
git commit -m "feat: wire all 7 scenes with transitions into main Video composition"
```

---

### Task 16: Render Final Video

**Step 1: Render to MP4**

```bash
cd /Users/mlaplante/Sites/deployfirstsitetonetlifyHOF2026/video
mkdir -p out
npx remotion render src/index.ts TutorialVideo out/tutorial.mp4 --codec=h264
```

Expected: MP4 file at `video/out/tutorial.mp4`, ~7.5 minutes, 1920x1080.

**Step 2: Add out/ to .gitignore**

```bash
echo "out/" >> video/.gitignore
```

**Step 3: Watch the video end-to-end**

Verify all scenes play correctly, captions are timed well, animations are smooth.

**Step 4: Commit**

```bash
git add video/.gitignore
git commit -m "feat: add gitignore for rendered video output"
```
