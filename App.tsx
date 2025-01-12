/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
/* import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen'; */
import IonIcons from '@react-native-vector-icons/ionicons';
import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen';



export const App = () => {

  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcons name={props.name} size={props.size} color={props.color} />,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <CounterM3Screen /> */}
        <BoxObjectModelScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
