/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
/* import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen'; */
import IonIcons from '@react-native-vector-icons/ionicons';
import { FlexScreen } from './src/presentation/screens/FlexScreen';
import { FlexDirectionScreen } from './src/presentation/screens/FlexDirectionScreen';
import { HomeworkScreen } from './src/presentation/screens/HomeworkScreen';
/* import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen'; */
/* import { PositionScreen } from './src/presentation/screens/PositionScreen'; */



export const App = () => {

  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcons name={props.name} size={props.size} color={props.color} />,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/*  <PositionScreen /> */}
        {/* <FlexScreen /> */}
        {/* <FlexDirectionScreen /> */}
        <HomeworkScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
