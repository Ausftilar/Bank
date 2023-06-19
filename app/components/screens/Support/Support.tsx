import { FC } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Layout } from "../../Layout/Layout";
import { Padding } from "../../ui/Padding";
import { Header } from "./components/Header";
import { Message } from "./components/Message";
import { useMessages } from "./hooks/useMessages";
import { Field } from "./components/Field";

export const Support: FC = () => {
  const { messages } = useMessages();

  return (
    <Layout isScrollView={false}>
      <Padding>
        <Header/>
        <ScrollView style={styles.chat}>
          {messages.map((message) => (
            <Message key={message._id} message={message}/>
          ))}
        </ScrollView>
        <Field/>
      </Padding>
    </Layout>
  )
}

const styles = StyleSheet.create({
  chat: {
    height: '83%',
  },
});