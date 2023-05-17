import { FC } from "react"
import { TouchableHighlight, Text } from "react-native"

interface ButtonProps {
  onPress: () => void
  title: string
  colors?: [string, string]
}

export const Button: FC<ButtonProps> = ({
  onPress,
  title,
  colors = ['rgb(253 224 71)', '#FBBF24'],
}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors[1]}
      style={{
        backgroundColor: colors[0],
        borderRadius: 12,
        width: '100%',
        marginVertical: 16,
        paddingVertical: 12,
      }}
    >
      <Text style={{color: 'rgb(31 41 55)', textAlign: 'center'}}>
        {title}
      </Text>
    </TouchableHighlight>
  )
}