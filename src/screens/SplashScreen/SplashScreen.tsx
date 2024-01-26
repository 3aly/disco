import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const SplashScreen = () => {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate('Home');
  }, 4000);

  return (
    <>
      <LottieView
        source={require('./discotech.json')} // Path to your Lottie animation file
        autoPlay
        loop
      />
    </>
  );
};

export default SplashScreen;
