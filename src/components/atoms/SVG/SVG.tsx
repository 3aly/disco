import React from 'react';
import Home from 'assets/SVG/Home';
import {ViewStyle} from 'react-native';
import {Favorite, Note, Profile, Retail} from 'assets/SVG';
import Search from 'assets/SVG/Search';
import {SvgProps, svgType} from 'types';

const SVG = (props: SvgProps) => {
  const SVGNames: svgType = {
    Home: <Home />,
    Retail: <Retail />,
    Profile: <Profile />,
    Search: <Search />,
    Favorite: <Favorite />,
    Note: <Note />,
  };

  return SVGNames[props.source];
};

export default SVG;
