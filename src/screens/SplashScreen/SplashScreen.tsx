import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import styles from './SplashScreen.styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainNavigatorParamList} from 'navigation';

const SplashScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<MainNavigatorParamList>>();

  setTimeout(() => {
    navigation.navigate('Home');
  }, 4500);

  return (
    <>
      <LottieView
        source={require('../../assets/animations/discotech.json')} // Path to your Lottie animation file
        autoPlay
        style={styles.container}
        loop
        speed={1.8}
      />
    </>
  );
};

export default SplashScreen;
