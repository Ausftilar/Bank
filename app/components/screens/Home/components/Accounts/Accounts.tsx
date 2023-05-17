import { FC } from "react"
import { View } from "react-native"
import { useAccounts } from "./hooks/useAccounts";

export const Accounts: FC = () => {
  const { account, isLoading }= useAccounts();

  return (
    <View>

    </View>
  )
}