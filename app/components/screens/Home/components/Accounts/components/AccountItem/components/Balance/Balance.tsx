import { FC } from "react"
import { BalanceProps } from "./Balance.types"
import { StyleSheet, View, Text } from "react-native"

export const Balance: FC<BalanceProps> = ({
  account : {
    balance,
    currency,
    name,
  },
}) => {

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.currency}>
        {Intl.NumberFormat(undefined, {
          currency,
          style: 'currency',
        }).format(balance)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    width: '66.666667%',
  },
  title: {
    fontSize: 15,
  },
  currency: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 2,
  }
})