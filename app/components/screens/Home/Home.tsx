import { FC } from "react";
import { Text, View } from "react-native";
import { Layout } from "../../Layout/Layout";
import { Header } from "./components/Header";
import { Stories } from "./components/Stories";

export const Home: FC = () => {
  return (
    <Layout>
      <Header/>
      <Stories/>
      <Text>Home</Text>
    </Layout>
  )
}