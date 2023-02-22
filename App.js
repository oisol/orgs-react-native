import { StatusBar, SafeAreaView, View } from 'react-native';
import {
  useFonts,
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import Cart from './src/screens/Cart';
import mock from './src/mocks/cart';

export default function App() {
  // Impedir app renderizar sem a fonte
  const [ fontLoaded ] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fontLoaded) {
    return <AppLoading />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cart {...mock}/>
    </SafeAreaView>
  );
}

