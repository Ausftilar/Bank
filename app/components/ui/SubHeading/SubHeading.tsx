import { FC } from "react"
import { Text } from "react-native"
import { Padding } from "../Padding"

interface SubHeadingProps {
  text: string
}

export const SubHeading: FC<SubHeadingProps> = ({
  text,
}) => {
  return(
    <Padding>
      <Text
        style={{
          fontSize: 20,
          lineHeight: 28,
          fontWeight: 'bold',
          color: 'rgb(31 41 55)',
        }}
      >
        {text}
      </Text>
    </Padding>
  )
}