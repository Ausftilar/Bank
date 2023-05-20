import { FC } from "react"
import { View } from "react-native"
import { AntDesign } from '@expo/vector-icons';

import { FooterItemProps } from "../../../../../../../../Layout/Footer/Footer.types"

interface IconProps extends Pick<FooterItemProps, 'iconName'> {}

export const Icon: FC<IconProps> = ({
  iconName,
}) => {
  return (
    <View style={{
      borderRadius: 9999,
      backgroundColor: 'rgb(59 130 246)',
      width: 32,
      height: 32,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <AntDesign name={iconName} size={19} color="#EDF4FE"/>
    </View>
  )
}