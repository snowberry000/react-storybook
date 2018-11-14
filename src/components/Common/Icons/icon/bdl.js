import React from 'react';

const SvgBdl = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="bdl_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="bdl_svg__b" cx={16} cy={15} r={15} />
      <filter id="bdl_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="bdl_svg__e"
        d="M9.328 7.617c-.02-.147.118-.235.197-.335a436.69 436.69 0 0 0 2.968-2.965c-.014 2.716.008 5.432-.011 8.148 2.049-1.13 4.63-1.18 6.736-.168-.002.175-.002.349-.002.525-1.681-.904-3.748-1.02-5.541-.39-2.063.71-3.707 2.457-4.35 4.536.003-3.118-.001-6.234.003-9.351zm13.39 11.662a6.652 6.652 0 0 1-1.897 4.405 6.697 6.697 0 0 1-8.503.91c-1.48-.974-2.55-2.554-2.878-4.296-.285-1.38-.092-2.845.501-4.12a6.749 6.749 0 0 1 3.268-3.252c1.884-.888 4.18-.813 6.004.192-.011 1.494-.01 2.988.001 4.482-.298-.617-.74-1.169-1.325-1.535-1.157-.747-2.765-.712-3.882.098-1.23.846-1.785 2.524-1.296 3.935.437 1.391 1.82 2.412 3.282 2.396 1.406.035 2.763-.884 3.266-2.195.32-.743.24-1.564.247-2.35.006-4.055-.01-8.11-.008-12.164.001-.51.01-1.02-.02-1.528 1.09 1.074 2.17 2.161 3.25 3.246-.022 3.925 0 7.85-.01 11.777z"
      />
      <filter id="bdl_svg__d" width="126.1%" height="116.3%" x="-13%" y="-5.8%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#bdl_svg__a)" xlinkHref="#bdl_svg__b" />
      <use fill="#E54C40" xlinkHref="#bdl_svg__b" />
      <use
        fill="url(#bdl_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#bdl_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#bdl_svg__d)" xlinkHref="#bdl_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#bdl_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgBdl;
