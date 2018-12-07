import React from 'react';

const SvgBnty = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <defs>
      <linearGradient id="bnty_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="bnty_svg__b" cx={16} cy={15} r={15} />
      <filter id="bnty_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="bnty_svg__e"
        d="M25.195 18.4c.77.42 1.027 1.386.513 2.142-.427.756-1.41 1.008-2.18.588a1.632 1.632 0 0 1-.813-1.302H18.78l-1.882 3.191c0 .042-.043.084-.085.126.427.252.727.756.727 1.302 0 .84-.727 1.553-1.583 1.553-.855 0-1.582-.672-1.582-1.553 0-.546.3-1.008.727-1.302 0-.042-.043-.084-.086-.126l-1.881-3.19H9.2c-.043.545-.342 1.007-.813 1.3-.77.42-1.753.169-2.181-.587a1.558 1.558 0 0 1 .599-2.141c.513-.294 1.069-.294 1.54-.042.042-.042.042-.126.085-.168L10.355 15l-1.882-3.19a.316.316 0 0 1-.086-.169c-.47.21-1.069.252-1.54-.042a1.558 1.558 0 0 1-.598-2.141C6.676 8.702 7.66 8.45 8.43 8.87c.513.294.77.798.813 1.302h3.977l1.882-3.191c0-.042.043-.084.085-.126a1.53 1.53 0 0 1-.727-1.302c0-.84.727-1.553 1.583-1.553.855 0 1.582.672 1.582 1.553 0 .546-.3 1.008-.727 1.302 0 .042.043.084.086.126l1.881 3.19H22.8c.043-.545.342-1.007.813-1.3.77-.42 1.753-.169 2.181.587a1.558 1.558 0 0 1-.599 2.141c-.513.294-1.069.294-1.54.042-.042.042-.042.126-.085.168L21.688 15l1.882 3.19a.316.316 0 0 1 .086.169c.47-.21 1.069-.252 1.54.042zm-7.142-4.45c0-.881-.727-1.595-1.625-1.595h-2.053a.38.38 0 0 0-.385.378v4.534c0 .21.171.378.385.378h2.053c.898 0 1.625-.714 1.625-1.595 0-.378-.128-.756-.385-1.008.214-.336.385-.672.385-1.092z"
      />
      <filter id="bnty_svg__d" width="117.5%" height="115.9%" x="-8.8%" y="-5.7%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#bnty_svg__a)" xlinkHref="#bnty_svg__b" />
      <use fill="#FD7A3D" fillRule="evenodd" xlinkHref="#bnty_svg__b" />
      <use
        fill="url(#bnty_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#bnty_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#bnty_svg__d)" xlinkHref="#bnty_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#bnty_svg__e" />
    </g>
  </svg>
);

export default SvgBnty;
