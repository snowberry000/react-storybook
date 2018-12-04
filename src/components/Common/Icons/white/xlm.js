import React from 'react';

const SvgXlm = props => (
  <svg width={props.width || 64} height={props.height || 64} {...props}>
    <path
      fill="#FFF"
      fillRule="evenodd"
      d="M12.779 13.527c-1.689-.356-4.167-.057-6.64 3.167-.119.156-.178.392.147.289.782-.247 2.4-.53 4.352.423l-.053.096c-.374.664-.166 1.026.5 1.506l.002.001a2.585 2.585 0 0 0-.62.635c-.02.029-.036.059-.055.089-1.418 2.128-1.656 4.486-.518 5.306 1.138.822 3.225-.203 4.705-2.286.02-.028.043-.054.063-.082.176-.256.3-.533.377-.819l.053.039c.667.48 1.071.559 1.557-.025l.1-.118c1.579 1.54 1.868 3.188 1.902 4.017.014.34.211.206.315.042 2.19-3.48 1.555-5.95.625-7.41.818-.98 1.73-2.092 2.641-3.242 2.549-3.213.994-8.742.688-8.962l-.004.004.002-.006c-.305-.22-5.926.147-8.028 3.68a172.718 172.718 0 0 0-2.111 3.656zm-1.046 5.947l1.356.976 1.484 1.068a1.826 1.826 0 0 1-.173.303c-.014.02-.03.038-.045.057-1.042 1.434-2.504 2.143-3.296 1.586-.793-.559-.617-2.175.382-3.64.013-.02.024-.04.038-.06a1.82 1.82 0 0 1 .254-.29zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.665-21.296a2.245 2.245 0 0 1 3.164-.558 2.336 2.336 0 0 1 .549 3.219 2.245 2.245 0 0 1-3.164.558 2.337 2.337 0 0 1-.549-3.22z"
    />
  </svg>
);

export default SvgXlm;
