import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const Search = () => {
  return (
    <Svg viewBox="0 0 26 20" fill="none" width={30} height={30} strokeWidth={2}>
      <Path d="M13.5 13.5L20.5 20.5" stroke="#000" stroke-linecap="round" />
      <Path
        d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
        fill="#000"
      />
      <Path
        d="M9 17.5C13.6944 17.5 17.5 13.6944 17.5 9C17.5 4.30558 13.6944 0.5 9 0.5C4.30558 0.5 0.5 4.30558 0.5 9C0.5 13.6944 4.30558 17.5 9 17.5Z"
        stroke="#000"
      />
    </Svg>
  );
};

export default Search;
