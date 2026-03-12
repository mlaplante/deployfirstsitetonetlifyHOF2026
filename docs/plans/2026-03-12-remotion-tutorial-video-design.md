# Remotion Tutorial Video Design

**Date:** 2026-03-12
**Status:** Approved

## Overview

Create an 8-minute tutorial video using Remotion (React-based video framework) that teaches Full Sail HOF 2026 workshop attendees how to build and deploy their first website to Netlify. This video replaces the live presentation entirely.

## Key Decisions

| Aspect | Decision |
|--------|----------|
| Framework | Remotion (React-based programmatic video) |
| Structure | Monolithic, single `<Composition>` with `<Series>` sequencing |
| Scenes | 7 scenes, ~7.5 min total |
| Style | Branded animated slides + simulated browser/terminal/editor mockups |
| Branding | Full Sail colors — red (#E31837), gold (#FDB913), black (#000000) |
| Audio | Text captions + voiceover timing built in |
| Output | 1920x1080, 30fps, H.264 MP4 |

## Project Structure

```
video/
├── src/
│   ├── Root.tsx              # Main entry — registers the Composition
│   ├── Video.tsx             # Top-level component, sequences all scenes via <Series>
│   ├── components/
│   │   ├── BrandedSlide.tsx  # Title cards, section headers (Full Sail branding)
│   │   ├── Browser.tsx       # Simulated browser window mockup
│   │   ├── Terminal.tsx      # Simulated terminal with animated typing
│   │   ├── CodeEditor.tsx    # Simulated code editor with syntax highlighting
│   │   ├── Caption.tsx       # Text overlay captions (synced to voiceover timing)
│   │   └── Transition.tsx    # Wipe/fade transitions between scenes
│   ├── scenes/
│   │   ├── 01-Intro.tsx          # Title + "What we'll build today"
│   │   ├── 02-FindTemplate.tsx   # Show portfolio-template.html in repo
│   │   ├── 03-CustomizeHTML.tsx  # Edit HTML in code editor mockup
│   │   ├── 04-GitSetup.tsx       # git init, commit in terminal mockup
│   │   ├── 05-GitHubPush.tsx     # Push to GitHub, show repo in browser
│   │   ├── 06-NetlifyDeploy.tsx  # Connect repo, deploy, see live site
│   │   └── 07-Outro.tsx          # Next steps + call to action
│   ├── styles/
│   │   └── theme.ts          # Full Sail colors, fonts, shared constants
│   └── index.ts              # Remotion entry point
├── public/                   # Static assets (logos, screenshots if needed)
├── package.json
└── tsconfig.json
```

## Scene Breakdown & Timing

| # | Scene | Duration | Description |
|---|-------|----------|-------------|
| 1 | Intro | ~45s | Full Sail branded title card → "Build & Deploy Your First Website" → Preview of finished site |
| 2 | Find Template | ~60s | Browser mockup shows repo on GitHub → Highlights `portfolio-template.html` → Explains the template is included |
| 3 | Customize HTML | ~120s | Code editor mockup → Animated typing edits name, bio, colors, projects → Highlights `✏️ EDIT:` markers |
| 4 | Git Setup | ~60s | Terminal mockup → `git init`, `git add .`, `git commit` → Explains version control basics |
| 5 | Push to GitHub | ~75s | Terminal → `git remote add`, `git push` → Browser shows repo with files |
| 6 | Deploy to Netlify | ~90s | Browser → Netlify dashboard → "Import from GitHub" → Deploy → Live URL with portfolio |
| 7 | Outro | ~45s | "Next Steps" branded slide → Custom domain, keep improving → Full Sail HOF 2026 closing |

**Total: ~7.5 minutes**

## Component Design

### Theme (`theme.ts`)
- Full Sail colors: red `#E31837`, gold `#FDB913`, black `#000000`, gray `#231F20`
- Font: Helvetica Neue (matching existing presentation)
- Shared constants for padding, border-radius, shadow styles

### BrandedSlide
Full-screen slide with gradient background (black → gray). Animated title (spring scale-in), subtitle (fade + slide up). Used for Intro, section transitions, Outro.

### Browser
Mockup with gray title bar, traffic light dots, URL bar, and content area. Content animates in (scrolling, clicking). Used for GitHub, Netlify dashboard, live site.

### Terminal
Dark background, green/white monospace text. Typewriter effect with blinking cursor. Command output appears after delay. Used for git commands.

### CodeEditor
Dark theme with line numbers, syntax-highlighted HTML/CSS. Animated typing + highlighted regions that pulse when mentioned in captions. Used for editing `portfolio-template.html`.

### Caption
Bottom-third text overlay with semi-transparent dark background. Fades in/out per timing array. Serves as subtitle and voiceover script reference. Each scene gets a `captions` prop: `{ text: string, startFrame: number, endFrame: number }[]`.

### Transition
Short (0.5s / 15 frames) wipe or fade-to-black between scenes using brand colors.

## Animation Approach
- `spring()` for elements entering (natural bounce)
- `interpolate()` for opacity, position, and typing progress
- `<Series>` to sequence scenes with optional offset for transitions

## Rendering & Output
- **Resolution:** 1920x1080 @ 30fps
- **Codec:** H.264 (MP4)
- **Total frames:** ~13,500 (7.5 min × 30fps)
- **Render:** `npx remotion render src/index.ts TutorialVideo out/tutorial.mp4`
- **Preview:** `npx remotion studio` for live development preview

## Voiceover Workflow
After rendering the visual video:
1. Record narration matching caption timings
2. Either add audio as `<Audio>` component in Remotion and re-render, or mix externally
