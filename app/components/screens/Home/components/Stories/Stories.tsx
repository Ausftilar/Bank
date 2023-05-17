import { View, Text, ScrollView } from "react-native";

import { useStories } from "./hooks/useStories"
import { Loader } from "../../../../ui/Loader";
import { StoryItem } from "./components/StoryItem";
import { useEffect } from "react";

export const Stories = () => {
  const {
    stories,
    isLoading,
  } = useStories();

  return(
    <View style={{ marginVertical: 28}}>
      {isLoading
        ? <Loader/>
        : (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {stories.map((story) => (
              <StoryItem key={story._id} story={story} />
            ))}
          </ScrollView>
        )}
    </View>
  )
}