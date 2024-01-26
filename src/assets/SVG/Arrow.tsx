import React from "react";
import Svg, { Path } from "react-native-svg";

const Arrow = () => {
  return (
    <Svg width="6" height="10" viewBox="0 0 6 10" fill="none">
      <Path
        d="M0.825012 0.649994L5.17501 4.99999"
        stroke="white"
        stroke-linecap="round"
      />
      <Path
        d="M0.825012 9.35L5.17501 5"
        stroke="white"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default Arrow;
