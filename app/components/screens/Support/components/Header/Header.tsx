import { StyleSheet, View, Image, Text } from "react-native"

export const Header = () => {
  return(
    <View style={styles.container}>
      <Image
        source={require('../../../../../../assets/image/logo.png')}
        style={styles.image}
      />
      <View>
        <Text style={styles.title}>Support</Text>
        <Text style={styles.subtitle}>We are there 24/7</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    marginBottom: 8,
    marginTop: 16,
  },
  image: {
    marginRight: 8,
    width: 44,
    height: 44,
    borderRadius: 9999,
  },
  title: {
    fontSize: 14,
    lineHeight: 20,
    color: 'rgb(31 41 55)',
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 16,
    color: 'rgb(107 114 128)',
  }
});