import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store, { persistor } from './src/redux/store';
import { ThemeProvider } from './src/context/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import { PersistGate } from 'redux-persist/integration/react';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import { PermissionsAndroid, Platform } from 'react-native';

function App(): React.JSX.Element {

  // Function to request FCM token and handle permissions
  const getFCMToken = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      const token = await messaging().getToken();
      console.log('FCM Token:', token);
    } else {
      console.log('User did not grant permission for notifications');
    }
  };

  // Function to handle foreground notifications
  const handleForegroundNotification = () => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', remoteMessage);

      // Trigger local notification using react-native-push-notification
      PushNotification.localNotification({
        channelId: 'fcm_fallback_channel', // Ensure channel exists on Android
        title: remoteMessage.notification?.title,
        message: remoteMessage.notification?.body, // Correctly use 'message'
        sound: true,
        priority: 'high',
        vibrate: true,
      });
    });

    return unsubscribe;
  };

  useEffect(() => {

    requestNotificationPermission();
    
    // Create notification channel (Android-specific)
    PushNotification.createChannel(
      {
        channelId: 'fcm_fallback_channel', // Channel ID
        channelName: 'Default channel', // Channel Name
        importance: 4, // High importance
      },
      (created) => console.log(`Channel created: ${created}`) // Callback: `created` returns true if the channel was created, false if it already existed
    );

    // Request permission and get FCM token
    getFCMToken();

    // Handle foreground notifications
    const unsubscribeForeground = handleForegroundNotification();

    // Optional: Handle token refresh
    const unsubscribeTokenRefresh = messaging().onTokenRefresh(token => {
      console.log('New FCM Token:', token);
    });

    // Clean up on unmount
    return () => {
      unsubscribeForeground();
      unsubscribeTokenRefresh();
    };
  }, []);

const requestNotificationPermission = async () => {
  if (Platform.OS === 'android' && Platform.Version >= 33) {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Notification permission granted');
      } else {
        console.log('Notification permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
};

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
              <DrawerNavigator />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;