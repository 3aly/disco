import React from "react";
import Svg, { Path } from "react-native-svg";

const Arrow = () => {
  return (
    <Svg height="24" viewBox="0 -960 960 960" width="24">
      <Path
        d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"
        fill={"white"}
      />
    </Svg>
  );
};

export default Arrow;
