import { FC } from "react";
import { Layout } from "../../Layout/Layout";
import { Heading } from "../../ui/Heading";
import { Contacts } from "./components/Contacts";
import { Other } from "./components/Other";

export const Payments: FC = () => {
  return (
    <Layout>
      <Heading text="Payments"/>
      <Contacts/>
      <Other/>
    </Layout>
  )
}