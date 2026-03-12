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
