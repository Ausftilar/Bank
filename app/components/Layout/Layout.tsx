import { FC } from "react";
import { ScrollView, View } from "react-native";

interface LayoutProps {
  isScrollView?: boolean,
  children: JSX.Element,
}

export const Layout: FC<LayoutProps> = ({
  children,
  isScrollView = true,
}) => {

  return (
    <View style={{
      height: '100%',
      width: '100%',
      backgroundColor: '#fff',
      paddingTop: 16,
    }}>
      {isScrollView
        ? <ScrollView>{children}</ScrollView>
        : children
      }
    </View>
  )
}