import { FC, useEffect, useState } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAuth } from '../hooks/useAuth';
import { Auth } from '../components/screens/Auth';
import { Home } from '../components/screens/Home';
import { Payments } from '../components/screens/Payments';
import { Services } from '../components/screens/Services';
import { Support } from '../components/screens/Support';
import { More } from '../components/screens/More';
import { Profile } from '../components/screens/Profile';
import { Footer } from '../components/Layout/Footer';

const Stack = createNativeStackNavigator()

const Navigation: FC = () => {
  const { user } = useAuth();
  const ref = useNavigationContainerRef();

  const [name, setName] = useState<string | undefined>(undefined);

  useEffect(() => {
    const timeout = setTimeout(() => setName(ref.getCurrentRoute()?.name), 100);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const listener = ref.addListener('state', () => setName(ref.getCurrentRoute()?.name));

    return () => {
      ref.removeListener('state', listener);
    }
  }, []);

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
    <>
      <NavigationContainer ref={ref}>
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
      {user && name && <Footer navigate={ref.navigate} currenyRoute={name}/>}
    </>
  )
}

export default Navigation;