import React from 'react';
import 'react-native-gesture-handler';
import ProvidersWrapper from './ProvidersWrapper';
import {StatusBar, StyleSheet, View} from 'react-native';
import {MainNavigator} from 'navigation';
function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <MainNavigator />
    </View>
  );
}
const AppWithProvider = () => {
  return (
    <ProvidersWrapper>
      <App />
    </ProvidersWrapper>
  );
};
export default AppWithProvider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent: 'center',
  },
});
