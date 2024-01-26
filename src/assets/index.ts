import {ImageSourcePropType} from 'react-native';

type images = {
  [key: string]: ImageSourcePropType;
};

export const IMAGES: images = {
  me: require('./images/me.jpg'),
};
