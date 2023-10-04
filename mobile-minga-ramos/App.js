import Index from './components/Index';
import Register from './components/Register';
import Mangas from './components/Mangas';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Index}/>
        <Drawer.Screen name="Register" component={Register}/>
        <Drawer.Screen name="Mangas" component={Mangas}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

