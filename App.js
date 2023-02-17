import { StatusBar, SafeAreaView, View } from 'react-native';
import Cart from './src/screens/Cart';
import {
  useFonts,
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';

export default function App() {
  // Impedir app renderizar sem a fonte
  const [ fontLoaded ] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fontLoaded) {
    return <View />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cart />
    </SafeAreaView>
  );
}

