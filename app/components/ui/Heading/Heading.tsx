import { FC } from "react";
import { Text } from "react-native";
import { Padding } from "../Padding";

interface HeadingProps {
  text: string
  isCenter?: boolean,
}

export const Heading: FC<HeadingProps> = ({
  text,
  isCenter,
}) => {
  return(
    <Padding>
      <Text
        style={{
          fontSize: 24,
          lineHeight: 32,
          fontWeight: 'bold',
          color: 'rgb(31 41 55)',
          textAlign: isCenter ? 'center' : 'auto',
        }}
      >
        {text}
      </Text>
    </Padding>
  )
}