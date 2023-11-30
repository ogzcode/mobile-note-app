import 'react-native-gesture-handler';

import Navigation from "./src/navigation/Navigation";
import { Provider } from 'react-redux';

import store from './src/store/store';

import { ToastProvider } from "./src/components/toast/useToast";
import { AuthProvider } from './src/context/useAuth';

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Provider store={store}>
        <ToastProvider>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </ToastProvider>
      </Provider>
    </SafeAreaView>
  );
}

