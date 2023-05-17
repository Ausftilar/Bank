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

  const screensData = [
    {
      key: 1,
      name: 'Home',
      component: Home,
    },
    {
      key: 2,
      name: 'Profile',
      component: Profile,
    },
    {
      key: 3,
      name: 'Payments',
      component: Payments,
    },
    {
      key: 1,
      name: 'Services',
      component: Services,
    },
    {
      key: 4,
      name: 'Support',
      component: Support,
    },
    {
      key: 5,
      name: 'More',
      component: More,
    },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user
          ? (
            <>
              {screensData.map((screenData) => (
                <Stack.Screen { ...screenData}/>
              ))}
            </>
          )
          : <Stack.Screen name="Auth" component={Auth}/>}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;