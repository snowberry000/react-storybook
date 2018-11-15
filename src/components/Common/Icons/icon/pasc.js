import React from 'react';

const SvgPasc = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pasc_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="pasc_svg__b" cx={15} cy={15} r={15} />
      <filter x="-5.8%" y="-4.2%" width="111.7%" height="111.7%" filterUnits="objectBoundingBox" id="pasc_svg__a">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={0.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#pasc_svg__a)" xlinkHref="#pasc_svg__b" />
        <use fill="#F7931E" xlinkHref="#pasc_svg__b" />
        <use
          fill="url(#pasc_svg__c)"
          style={{
            mixBlendMode: 'soft-light',
          }}
          xlinkHref="#pasc_svg__b"
        />
        <circle strokeOpacity={0.097} stroke="#000" strokeLinejoin="square" cx={15} cy={15} r={14.5} />
      </g>
      <path
        d="M16 4C9.925 4 5 8.925 5 15s4.925 11 11 11 11-4.925 11-11A11 11 0 0 0 16 4zm5.5 5.328c1.14 0 2.063.924 2.063 2.063v3.093c0 1.14-.924 2.063-2.063 2.063h-2.554l-.164.773a.448.448 0 0 1-.417.344h-.516a.27.27 0 0 1-.27-.344l.164-.773H16.54l-.164.773a.448.448 0 0 1-.417.344h-.516a.27.27 0 0 1-.27-.344l.164-.773h-1.29l-1.132 5.328h-2.75l2.01-9.453h2.75l-.44 2.062h5.296a1.03 1.03 0 0 0 1.032-1.03v-1.032c0-.57-.462-1.031-1.032-1.031H8.438l1.718-2.063h6.715l.165-.773a.448.448 0 0 1 .416-.344h.516a.27.27 0 0 1 .27.344l-.163.773h1.203l.164-.773a.448.448 0 0 1 .417-.344h.515a.27.27 0 0 1 .27.344l-.163.773H21.5z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgPasc;
