import { FC } from "react";
import { ScrollView, View } from "react-native";
import { SubHeading } from "../../../../ui/SubHeading";
import { OtherItem } from "./components/OtherItem";
import { otherItems } from './constants';

export const Other: FC = () => {
  return (
    <View>
      <SubHeading text="Important transfers"/>
      <ScrollView
        style={{ paddingVertical: 20 }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {otherItems.map((otherItem) => (
          <OtherItem key={otherItem.title} otherItem={otherItem}/>
        ))}
      </ScrollView>
    </View>
  )
}