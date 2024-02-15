// App.tsx

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screens/HomeScreen';
import RegisterScreen from './Screens/RegisterScreen';
import Navbar from './component/Navbar'; 

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  fonts: {
    regular: 'Roboto',
    medium: 'RobotoMedium',
    light: 'RobotoLight',
    thin: 'RobotoThin'
  }
};

export default function App() {

  return (
    <PaperProvider> 
    <NavigationContainer>
      
      <Stack.Navigator 
        screenOptions={({ navigation }) => ({
          headerTitle: () => <Navbar navigation={navigation} />,
        })}
      >
        <Stack.Screen 
          name="Home"
          component={HomeScreen} 
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}
