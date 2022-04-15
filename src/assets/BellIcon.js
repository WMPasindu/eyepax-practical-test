import * as React from 'react';
import Svg, {
  Rect,
  Path,
  Ellipse,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={33}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect width={33} height={32} rx={16} fill="url(#a)" />
    <Path
      d="M18.056 22.765c-.582.823-1.308 1.235-2.18 1.235-.873 0-1.6-.412-2.181-1.235m6.616-1.236H11.44c-.255 0-.505-.063-.725-.184a1.4 1.4 0 0 1-.528-.505 1.3 1.3 0 0 1 .019-1.37 8.306 8.306 0 0 0 1.308-4.459v-.893c0-.874.368-1.712 1.022-2.33a3.596 3.596 0 0 1 2.467-.965h1.745c.925 0 1.813.348 2.467.965a3.203 3.203 0 0 1 1.022 2.33v.893a8.3 8.3 0 0 0 1.308 4.46c.132.206.203.441.206.682a1.3 1.3 0 0 1-.187.687c-.125.21-.307.383-.527.505-.22.12-.471.184-.726.184v0Z"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Ellipse cx={20.062} cy={10.823} rx={2.938} ry={2.824} fill="#FFE600" />
    <Defs>
      <LinearGradient
        id="a"
        x1={0}
        y1={0}
        x2={49.455}
        y2={29.034}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FF3A44" />
        <Stop offset={1} stopColor="#FF8086" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgComponent;
