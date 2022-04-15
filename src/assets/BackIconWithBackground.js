import * as React from 'react';
import Svg, {G, Rect, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = props => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#a)">
      <Rect
        width={32}
        height={32}
        rx={10}
        fill="#F5F5F5"
        fillOpacity={0.5}
        style={{
          mixBlendMode: 'luminosity',
        }}
      />
    </G>
    <Path
      d="M11 16.5 18.5 9l1.05 1.05-6.45 6.45 6.45 6.45L18.5 24 11 16.5Z"
      fill="#173418"
    />
    <Defs></Defs>
  </Svg>
);

export default SvgComponent;
