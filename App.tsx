import 'react-native-gesture-handler'; 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { ThemeProvider } from './src/context/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import DrawerNavigator from './src/navigation/DrawerNavigator';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider>
        <Provider store={store}>
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
        </Provider>
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;