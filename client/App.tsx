// App.tsx

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screens/HomeScreen'; 
import RegisterScreen from './Screens/RegisterScreen';
import Navbar from './componant/Navbar';

const Stack = createNativeStackNavigator();

export default function App(navigation) {

  return (
    <NavigationContainer>
      <Navbar 
        onPressHome={() => navigation.navigate('Home')}
        onPressRegister={() => navigation.navigate('Register')} 
      />
      
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
