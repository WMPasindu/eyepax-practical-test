import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={10}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path d="M.5 8 8 .5l1.05 1.05L2.6 8l6.45 6.45L8 15.5.5 8Z" fill="#2E0505" />
  </Svg>
);

export default SvgComponent;
