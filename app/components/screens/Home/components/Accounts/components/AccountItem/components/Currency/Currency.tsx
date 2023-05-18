import { FC } from "react";
import { FontAwesome } from '@expo/vector-icons';

import { View } from "react-native";
import { CurrencyProps } from "./Currency.types";

export const Currency: FC<CurrencyProps> = ({ currency }) => {
  return (
    <View style={{
      borderRadius: 9999,
      backgroundColor: 'rgb(59 130 246)',
      width: 36,
      height: 36,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <View style={{
        width: 20,
        height: 20,
        borderRadius: 9999,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EDF4FE',
      }}>
        <FontAwesome
          color="#488CF9"
          size={13}
          name={currency === 'RUB' ? 'ruble' : 'usd'}
        />
      </View>
    </View>
  )
}