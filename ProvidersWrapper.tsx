import React, {ReactElement} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Provider} from 'react-redux';
import {store} from 'store/store';

export default function ProvidersWrapper({children}: {children: ReactElement}) {
  const queryClient = new QueryClient();

  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <SafeAreaProvider>
              <NavigationContainer>{children}</NavigationContainer>
            </SafeAreaProvider>
          </Provider>
        </QueryClientProvider>
      </GestureHandlerRootView>
    </>
  );
}
