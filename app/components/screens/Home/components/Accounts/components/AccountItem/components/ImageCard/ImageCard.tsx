import { FC } from "react"
import { ImageCardProps } from "./ImageCard.types"
import {
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
  Image,
  Text,
  View,
} from "react-native"

export const ImageCard: FC<ImageCardProps> = ({
  account: {
    name,
    cardNumber,
    cardPaymentSystem,
  }
}) => {
  const imageBlack: ImageSourcePropType = require('../../../../../../../../../../assets/image/black.png');
  const imageAirLines: ImageSourcePropType = require('../../../../../../../../../../assets/image/air-lines.png');

  const imageMastercard: ImageSourcePropType = require('../.././../../../../../../../../assets/icon/mastercard.png');
  const imageVisa: ImageSourcePropType = require('../.././../../../../../../../../assets/icon/visa.png');

  return (
    <ImageBackground
      source={name === 'Tinkoff Black' ? imageBlack : imageAirLines}
      resizeMode="contain"
      style={styles.image}
      borderRadius={7}
    >
      <View style={styles.cardCoinainer}>
        <Text style={styles.text}>
          {cardNumber.slice(-4)}
        </Text>
        <Image
          source={cardPaymentSystem === 'Mastercard' ? imageMastercard : imageVisa}
          resizeMode="contain"
          style={styles.paymentSystem}
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  image: {
    justifyContent: 'flex-end',
    width: 56,
    height: 40,
  },
  text: {
    fontSize: 11,
    fontWeight: '500',
    color: 'rgb(255, 255, 255)',
    marginLeft: 2,
    marginBottom: 2,
  },
  paymentSystem: {
    width: 15,
    height: 20,
  },
  cardCoinainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 1,
  }
})