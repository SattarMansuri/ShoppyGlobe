const Logo = ({className}) => {
  return (
    <svg width="250" height="60" viewBox="0 0 250 60" xmlns="http://www.w3.org/2000/svg" fill="none">
  <g transform="translate(5, 8)">
    <circle cx="20" cy="20" r="12" stroke="#1E40AF" strokeWidth="2"/>
    <line x1="8" y1="20" x2="32" y2="20" stroke="#1E40AF" strokeWidth="1.2"/>
    <ellipse cx="20" cy="20" rx="12" ry="5.5" stroke="#1E40AF" strokeWidth="1.2"/>
    <circle cx="14" cy="40" r="3" fill="#F59E0B"/>
    <circle cx="26" cy="40" r="3" fill="#F59E0B"/>
    <path d="M10 30 L30 30 L28 38 H12 Z" stroke="#F59E0B" strokeWidth="2" fill="none"/>
  </g>
  <text className={className} x="45" y="40" fontFamily="Poppins, sans-serif" fontWeight="600">
    <tspan fill="#1E40AF">Shoppy</tspan>
    <tspan fill="#F59E0B">Globe</tspan>
  </text>
</svg>
  )
}

export default Logo