/* eslint-disable react-native/no-inline-styles */
import { SafeAreaView } from 'react-native';
/* import { HelloWordScreen } from './src/presentation/screens/HelloWorldScreen'; */
import { CounterScreen } from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';



export const App = () => {

  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWordScreen name="France" /> */}
        <CounterScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
