import { FC, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useAuth } from "../../../hooks/useAuth";
import { Loader } from "../../ui/Loader";
import { Field } from "../../ui/Field";
import { Button } from "../../ui/Button";

interface DataProps {
  email: string,
  password: string,
}

export const Auth: FC = () => {
  const { isLoading, login, register } = useAuth();

  const [data, setData] = useState<DataProps>({} as DataProps);
  const [isRegistration ,setIsRegistration] = useState(false);

  const authHander = async () => {
    const { email, password } = data;

    if (isRegistration) await register(email, password)
    else await login(email, password);

    setData({} as DataProps);
  }

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            {isRegistration ? 'Sign Up' : 'Sign In'}
          </Text>

          {isLoading
            ? <Loader />
            : (
              <>
                <Field
                  value={data.email}
                  placeholder="Enter"
                  onChange={(value) => setData({ ...data, email: value})}
                />
                <Field
                  value={data.password}
                  placeholder="Enter password"
                  onChange={(value) => setData({ ...data, password: value})}
                  isSecure
                />
                <Button
                  onPress={authHander}
                  title="Let's go"
                />

                <Pressable
                  onPress={() => setIsRegistration((prev) => !prev)}
                >
                  <Text style={styles.pressableText}>
                    {isRegistration ? 'Login' : 'Register'}
                  </Text>
                </Pressable>
              </>
            )}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    paddingTop: 16,
  },
  container: {
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  wrapper: {
    width: '75%',
  },
  title: {
    textAlign: 'center',
    color: 'rgb(31 41 55)',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  pressableText: {
    color: 'rgb(31 41 55)',
    opacity: 0.3,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'right',
  }
})