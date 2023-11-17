import 'react-native-gesture-handler';

import Navigation from "./src/navigation/Navigation";
import { Provider } from 'react-redux';

import { setupInterceptors } from './src/services/apiServices/config';
import store from './src/store/store';

import { ToastProvider } from "./src/components/toast/useToast";

setupInterceptors();

export default function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <Navigation />
      </ToastProvider>
    </Provider>
  );
}

