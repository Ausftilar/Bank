import { FooterItemProps } from "../../../../Layout/Footer/Footer.types";

export interface OtherItemProps extends Pick<FooterItemProps, 'iconName'> {
  title: string,
}