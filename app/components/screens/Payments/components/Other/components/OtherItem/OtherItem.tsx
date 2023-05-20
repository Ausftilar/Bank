import { FC } from "react"
import { Text, Pressable } from "react-native"
import { OtherItemProps } from "../../Other.types"
import { Icon } from "./components/Icon"
import { BOX_SHADOW } from "../../../../../../../styles"
import { useAccounts } from "../../../../../Home/components/Accounts/hooks/useAccounts"
import { handleTransfer } from "../../../../utils/HandleTransfer"

const CASH_CARD_NUMBER = '5742 7826 2373 8456';

export const OtherItem: FC<{otherItem: OtherItemProps}> = ({
  otherItem,
}) => {
  const { accounts } = useAccounts();

  return (
    <Pressable
      style={{
        marginLeft: 16,
        borderRadius: 12,
        padding: 8,
        width: 96,
        height: 96,
        backgroundColor: 'rgb(255, 255, 255)',
        ...BOX_SHADOW
      }}
      onPress={handleTransfer.bind(this, accounts[0], CASH_CARD_NUMBER)}
    >
      <Icon iconName={otherItem.iconName}/>
      <Text style={{
        fontSize: 12,
        lineHeight: 16,
        marginTop: 6,
      }}>
        {otherItem.title}
      </Text>
    </Pressable>
  )
}