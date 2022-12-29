import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import { Home, OnboardingScreen } from './screens';

const Stack = createNativeStackNavigator();

export default function componentName() {
  return (
    <TailwindProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="OnboardingScreen" component={OnboardingScreen} />
            <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
          </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
