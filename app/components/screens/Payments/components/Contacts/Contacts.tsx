import { FC } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { useContacts } from "./hooks/useContacts";
import { SubHeading } from "../../../../ui/SubHeading";
import { Loader } from "../../../../ui/Loader";
import { ContactItem } from "./components/ContactItem";

export const Contacts: FC = () => {
  const { contacts, isLoading } = useContacts();

  return (
    <View style={styles.root}>
      <SubHeading text="Phone transfers" />
      {isLoading
        ? <Loader/>
        :  (
          <ScrollView
            style={styles.phoneTransfersWrapper}
            showsHorizontalScrollIndicator={false}
            horizontal
          >
            {contacts.map((contact) => (
              <ContactItem key={contact._id} contact={contact}/>
            ))}

          </ScrollView>
        )}
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    marginVertical: 32,
  },
  phoneTransfersWrapper: {
    marginTop: 20,
  }
})