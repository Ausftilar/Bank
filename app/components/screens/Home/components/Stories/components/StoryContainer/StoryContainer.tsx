import { FC } from "react";
// @ts-ignore
import { StoryContainer as SC } from "react-native-stories-view";

import { useData } from "../../../../../../../hooks/useData";

export const StoryContainer: FC = () => {
  const {
    activeStories,
    setActiveStories,
  } = useData();

  return activeStories && (
    <SC
      visible
      enableProgress
      images={activeStories}
      duration={20}
      onComplete={() => setActiveStories(null)}
      containerStyle={{
        width: '100%',
        height: '100%',
      }}
    />
  )
}