import { FC } from "react";
import { Pressable, Text } from "react-native";
import { Contact } from "../../Contacts.type";
import { Avatar } from "../../../../../../ui/Avatar";
import { handleTransfer } from "../../../../utils/HandleTransfer";
import { useAccounts } from "../../../../../Home/components/Accounts/hooks/useAccounts";

export const ContactItem:FC<{contact: Contact}> = ({
  contact,
}) => {
  const { accounts } = useAccounts();

  return (
    <Pressable
      style={{
        marginLeft: 16,
        marginRight: 1,
        alignItems: 'center'
      }}
      onPress={handleTransfer.bind(this, accounts[0], contact.cardNumber)}
    >
      <Avatar name={contact.displayName} size="large"/>
      <Text
        style={{
          marginTop: 4,
          fontSize: 12,
          lineHeight: 16,
        }}
      >
        {contact.displayName}
      </Text>
    </Pressable>
  )
}