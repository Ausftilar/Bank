import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Layout } from "../../Layout/Layout";
import { services } from "./constants";
import { ServiceItem } from "./components/ServiceItem";

export const Services: FC = () => {
  return (
    <Layout>
      <Text style={styles.title}>Moscow</Text>
      <View style={styles.container}>
        {services.map((service) => (
          <ServiceItem key={service.title} service={service}/>
        ))}
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 28,
    marginBottom: 24,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
});