import { FC } from "react";
import { Text, View } from "react-native";
import { Layout } from "../../Layout/Layout";
import { Header } from "./components/Header";
import { Stories } from "./components/Stories";
import { Accounts } from "./components/Accounts";
import { ApplyNewProducts } from "./components/ApplyNewProducts";

export const Home: FC = () => {
  return (
    <Layout>
      <Header/>
      <Stories/>
      <Accounts/>
      <ApplyNewProducts/>
    </Layout>
  )
}