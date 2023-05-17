import { FC } from "react"
import {
  ImageBackground,
  Pressable,
  View,
  Text,
} from "react-native"
import { Story } from "../../hooks/useStories/useStories.types"
import { useData } from "../../../../../../../hooks/useData"

export const StoryItem: FC<{story: Story}> = ({ story }) => {
  const {
    setActiveStories,
  } = useData();

  return(
    <Pressable onPress={() => setActiveStories(story.images)}>
      <View style={{
        width: 96,
        height: 96,
        borderRadius: 12,
        marginLeft: 16,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgb(96 165 250)',
        padding: 2,
      }}>
        <ImageBackground
          source={{uri: story.images[0]}}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'flex-end',
          }}
          imageStyle={{
            borderRadius: 12,
          }}
        >
          <Text style={{
            color: 'rgb(255, 255, 255)',
            fontSize: 12,
            margin: 8,
          }}>
            {story.heading}
          </Text>
        </ImageBackground>
      </View>
    </Pressable>
  )
}