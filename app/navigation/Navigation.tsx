import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAuth } from '../hooks/useAuth';
import { Auth } from '../components/screens/Auth';
import { Home } from '../components/screens/Home';
import { Payments } from '../components/screens/Payments';
import { Services } from '../components/screens/Services';
import { Support } from '../components/screens/Support';
import { More } from '../components/screens/More';
import { Profile } from '../components/screens/Profile';

const Stack = createNativeStackNavigator()

const Navigation: FC = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user
          ? (
            <>
              <Stack.Screen name="Home" component={Home}/>
              <Stack.Screen name="Profile" component={Profile}/>
              <Stack.Screen name="Payments" component={Payments}/>
              <Stack.Screen name="Services" component={Services}/>
              <Stack.Screen name="Support" component={Support}/>
              <Stack.Screen name="More" component={More}/>
            </>
          )
          : <Stack.Screen name="Auth" component={Auth}/>}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;