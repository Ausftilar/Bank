import { FC, useEffect, useMemo } from "react"
import { StyleSheet, View, Text } from "react-native"
import { MessageProps } from "./Message.types"
import { useAuth } from "../../../../../hooks/useAuth"

export const Message: FC<{ message: MessageProps }> = ({
  message,
}) => {
  const { user } = useAuth();

  const isMassageByAuthUser = user?.uid === message.userId;

  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 8,
      backgroundColor: isMassageByAuthUser ? 'rgb(59 130 246)' : 'rgb(229 231 235)',
      alignSelf: isMassageByAuthUser ? 'flex-end' : 'flex-start',
      marginVertical: 8,
      paddingVertical: 8,
      paddingHorizontal: 12,
    }}>
      <Text style={{
        color: isMassageByAuthUser ? 'rgb(255 255 255)' : 'rgb(31 41 55)',
      }}>
        {message.text}
      </Text>
      <Text style={{
        color: isMassageByAuthUser ? 'rgb(255 255 255)' : 'rgb(55 65 81)',
        opacity: 0.7,
        marginLeft: 8,
        fontSize: 10,
      }}>
        {'' + message.timestamp}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderRadius: 8,
    
  }
});