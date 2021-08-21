import React, { CSSProperties } from 'react'

interface LoadingIconProps {
  width?: string
  height?: string
  style?: CSSProperties
}

export const LoadingIcon: React.FC<LoadingIconProps> = ({ width, height, style }) => (
  <svg viewBox="0 0 24 24" style={{ ...style, width, height }}>
    <defs>
      <linearGradient x1="28.154%" y1="63.74%" x2="74.629%" y2="17.783%" id="a">
        <stop stopColor="currentColor" offset="0%"></stop>
        <stop stopColor="#fff" stopOpacity="0" offset="100%"></stop>
      </linearGradient>
    </defs>
    <g transform="translate(2)" fill="none">
      <circle stroke="url(#a)" strokeWidth="2" cx="10" cy="12" r="10"></circle>
      <path d="M10 2C4.477 2 0 6.477 0 12" stroke="currentColor" strokeWidth="2"></path>
    </g>
    <animateTransform
      attributeType="xml"
      attributeName="transform"
      type="rotate"
      from="0 0 0"
      to="360 0 0"
      dur="0.5s"
      repeatCount="indefinite"
    />
  </svg>
)

export const CopyIcon = () => (
  <svg viewBox="0 0 24 24" style={{ width: '16px', height: '22px', cursor: 'pointer' }} className="icon">
    <path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
  </svg>
)

export const CheckIcon = () => (
  <svg viewBox="0 0 14 14" style={{ width: '16px', height: '22px' }} className="icon">
    <g fill="currentColor">
      <polygon points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"></polygon>
    </g>
  </svg>
)