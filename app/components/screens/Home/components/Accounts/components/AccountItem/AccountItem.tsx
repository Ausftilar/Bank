import { FC } from "react"
import { StyleSheet, View } from "react-native"
import { Account } from "../../hooks/useAccounts/useAccounts.types"
import { Currency } from "./components/Currency"
import { Balance } from "./components/Balance"
import { ImageCard } from "./components/ImageCard"

export const AccountItem: FC<{account: Account}> = ({ account }) => {
  return (
    <View style={styles.root}>
      <Currency currency={account.currency}/>
      <Balance account={account}/>
      <ImageCard account={account}/>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 28,
  }
})