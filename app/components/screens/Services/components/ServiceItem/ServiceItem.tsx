import { FC } from "react"
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from "react-native"
import { ServiceItemProps } from "./ServiceItem.types"
import { MaterialIcons } from '@expo/vector-icons';
import { Percent } from "./components/Percent";
import { getRandomGradient } from "../utils/GetRandomGradient";

export const ServiceItem: FC<ServiceItemProps> = ({
  service,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.circle}>
        <LinearGradient
          style={styles.gradient}
          colors={getRandomGradient()}
        >
          <Percent percent={service.percent}/>
          <MaterialIcons
            size={30}
            name={service.iconName}
            color="#FFFFFF"
          />
        </LinearGradient>
      </View>
      <Text style={styles.text}>{service.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  circle: {
    borderRadius: 12,
    overflow: 'hidden',
    width: 56,
    height: 56,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'center',
    marginTop: 6,
  },
  gradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})