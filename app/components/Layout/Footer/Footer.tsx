import { FC } from "react"
import { StyleSheet } from "react-native"
import { Padding } from "../../ui/Padding"
import { menu } from "./Menu"
import { NavItem } from "./components/NavItem"
import { FooterProps } from "./components/NavItem/NavItem.types"

export const Footer: FC<FooterProps> = ({
  navigate,
  currenyRoute,
}) => {
  return (
    <Padding style={styles.root}>
      {menu.map((item) => (
        <NavItem
          key={item.title}
          item={item}
          navigate={navigate}
          currenyRoute={currenyRoute}
        />
      ))}
    </Padding>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgb(249 250 251)',
    paddingHorizontal: 0,
    paddingBottom: 20,
    paddingTop: 8,
    borderColor: '#E1E1E1',
    borderWidth: 1,
  },
})