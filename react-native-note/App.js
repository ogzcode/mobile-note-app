import 'react-native-gesture-handler';

import Navigation from "./src/navigation/Navigation";
import { Provider } from 'react-redux';

import store from './src/store/store';

import { ToastProvider } from "./src/components/toast/useToast";
import { AuthProvider } from './src/context/useAuth';


export default function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </ToastProvider>
    </Provider>
  );
}

