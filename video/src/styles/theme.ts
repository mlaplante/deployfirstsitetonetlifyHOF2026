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
