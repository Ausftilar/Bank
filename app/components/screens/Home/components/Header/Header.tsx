import { FC } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';

import { Padding } from "../../../../ui/Padding";
import { Avatar } from "../../../../ui/Avatar";
import { useProfile } from "../../../Profile/hooks/useProfile";
import { Loader } from "../../../../ui/Loader";


export const Header: FC = () => {
  const {
    isLoading,
    name,
  } = useProfile();

  const { navigate } = useNavigation();

  return isLoading ? <Loader/> : (
    <Padding style={styles.root}>
      <Avatar name={name} />
      <TouchableOpacity
        onPress={() => navigate('Profile')}
        style={styles.avatarPress}
      >
        <Text
          style={styles.avatarText}
        >
          {name}
        </Text>
        <Entypo
          name="chevron-small-right"
          size={28}
          style={styles.avatarIcon}
        />
      </TouchableOpacity>
    </Padding>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarPress: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  avatarText: {
    color: 'rgb(31 41 55)',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  avatarIcon: {
    color: 'rgb(31 41 55)',
  },
})