import { FC } from "react";
import { View, Text } from "react-native";

interface AvatarProps {
  name?: string | null
  size?: 'small' | 'large'
}

export const Avatar: FC<AvatarProps> = ({
  name,
  size = 'small',
}) => {
  const isSmall = size === 'small'

  return (
    <View
      style={{
        borderRadius: 9999,
        backgroundColor: 'rgb(209 213 219)',
        width: isSmall ? 36 : 48,
        height: isSmall ? 36 : 48,
        marginRight: isSmall ? 12 : undefined,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          color: 'rgb(255 255 255)',
          fontSize: isSmall ? 18 : 20,
          lineHeight: 28,
          fontWeight: "500",
        }}
      >
        {name?.slice(0, 1)}
      </Text>
    </View>
  )
}