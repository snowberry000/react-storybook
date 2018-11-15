import React from 'react';

const SvgEdoge = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="edoge_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="edoge_svg__b" cx={16} cy={15} r={15} />
      <filter id="edoge_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="edoge_svg__e"
        d="M9.471 8.016h5.432c2.154 0 3.224-.068 4.83.079 1.607.17 3.214.826 4.254 2.083 1.225 1.46 1.583 3.43 1.502 5.263-.08 1.823-.705 3.735-2.138 4.98-1.271 1.144-3.05 1.563-4.738 1.574-3.282.011-6.553 0-9.835 0-.358-.023-.763.011-1.04-.238-.485-.486-.196-1.528.578-1.483 1.826-.056 3.663 0 5.49-.034-.035-1.539-.012-3.078-.012-4.606-1.41-.012-2.809 0-4.218 0-.313-.012-.66-.012-.902-.216-.289-.26-.289-.701-.162-1.04.162-.374.601-.442.971-.442 1.433-.012 2.878 0 4.31 0 .024-1.404-.022-2.808.024-4.2-1.607-.011-3.213 0-4.82 0-.358-.011-.762-.011-1.04-.26-.288-.374-.23-.906.012-1.28.462-.226.994-.18 1.502-.18zm6.334 5.92c.658.011 1.317-.046 1.976.045.786.113.786 1.494-.012 1.607-.647.102-1.317.034-1.976.046.012 1.335 0 2.66 0 3.995.012.227.023.566.312.589.786.068 1.47.045 2.358.045 1.317.057 2.704-.35 3.628-1.313.948-1.007 1.295-2.41 1.318-3.747.035-1.482-.243-3.112-1.33-4.222-.981-.996-2.46-1.335-3.836-1.256-.784 0-1.456-.023-2.184.045-.231.068-.243.351-.254.555v3.61z"
      />
      <filter id="edoge_svg__d" width="119.4%" height="125%" x="-9.7%" y="-8.9%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#edoge_svg__a)" xlinkHref="#edoge_svg__b" />
      <use fill="#0FACF3" fillRule="evenodd" xlinkHref="#edoge_svg__b" />
      <use
        fill="url(#edoge_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#edoge_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#edoge_svg__d)" xlinkHref="#edoge_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#edoge_svg__e" />
    </g>
  </svg>
);

export default SvgEdoge;
