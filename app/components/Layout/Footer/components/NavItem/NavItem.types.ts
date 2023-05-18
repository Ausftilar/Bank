import { TypeRootStackParamList } from "../../../../../navigation/types";
import { FooterItemProps } from "../../Footer.types";

export interface NavItemProps {
  item: FooterItemProps
  navigate: (screenName: keyof TypeRootStackParamList) => void,
  currenyRoute: string,
}

export interface FooterProps {
  navigate: (screenName: keyof TypeRootStackParamList) => void
  currenyRoute: string,
}