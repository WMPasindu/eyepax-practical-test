import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={12}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M0 5.5c0-.276.205-.504.471-.54l.074-.006h9.589L6.67 1.506a.545.545 0 0 1 .708-.826l.062.053 4.4 4.381a.552.552 0 0 1 .073.09l.017.03a.337.337 0 0 1 .032.067.358.358 0 0 1 .023.073.407.407 0 0 1 .012.072A.48.48 0 0 1 12 5.5v.021l-.002.032L12 5.5a.548.548 0 0 1-.107.325l-.005.006a.532.532 0 0 1-.048.055l-4.4 4.382a.545.545 0 0 1-.823-.712l.053-.061 3.462-3.45H.545A.545.545 0 0 1 0 5.5Z"
      fill="#0080FF"
    />
  </Svg>
);

export default SvgComponent;
