interface LoadingIconProps {
  width?: string
  height?: string
}

const LoadingIcon: React.FC<LoadingIconProps> = ({ width, height }) => (
  <svg viewBox="0 0 24 24" style={{ width: width || '26px', height }} className="icon">
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

export {
  LoadingIcon
}