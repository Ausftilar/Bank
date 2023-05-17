import { View } from "react-native";

export function Padding({
  children,
  style = {},
} : {
  children: any,
  style?: any,
}) {
  return (
    <View style={{ paddingHorizontal: 16, ...style}}>
      {children}
    </View>
  )
}