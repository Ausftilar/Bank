import { FC } from "react";
import { Text, View } from "react-native";
import { Layout } from "../../Layout/Layout";
import { Heading } from "../../ui/Heading";
import { Padding } from "../../ui/Padding";
import { Currencies } from "./components/Currencies";
import { Menu } from "./components/Menu";

export const More: FC = () => {
  return (
    <Layout>
      <Heading text="More"/>
      <Padding>
        <Currencies />
        <Menu/>
        <Text style={{
          textAlign: 'center',
          opacity: 0.5,
          marginVertical: 16,
          color: 'rgb(107 114 128)',
        }}>
          Version 5.20.6
        </Text>
      </Padding>
    </Layout>
  )
}