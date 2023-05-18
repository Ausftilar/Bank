import { Alert } from "react-native"
import { Padding } from "../../../../ui/Padding"
import { Button } from "../../../../ui/Button"
import { asyncAlert } from "./utils/AsyncAlert"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../../../../firebase"
import { useAuth } from "../../../../../hooks/useAuth"
import { getRandomCardNumber } from "../../../../../utils/GetRandomCardNumber"

export const ApplyNewProducts = () => {
  const { user } = useAuth();

  const registerHandler = async() => {
    try {
      const currency = await asyncAlert({
        title: 'Currency',
        message: 'Select account currency:',
        buttons: {
          text: 'RUB',
          resolveValue: 'RUB',
          textSecond: 'USD',
          resolveValueSecond: 'USD',
        },
      });

      const cardType = await asyncAlert({
        title: 'Card Type',
        message: 'Select card type:',
        buttons: {
          text: 'Black',
          resolveValue: 'Tinkoff Black',
          textSecond: 'All aitlines',
          resolveValueSecond: 'Tinkoff All Aitlines',
        },
      });

      const cardPaymentSystem = await asyncAlert({
        title: 'Payment System',
        message: 'Select payment system:',
        buttons: {
          text: 'Mastercard',
          resolveValue: 'Mastercard',
          textSecond: 'Visa',
          resolveValueSecond: 'Visa',
        },
      });

      await addDoc(collection(db, 'accounts'), {
        timestamp: serverTimestamp(),
        userId: user?.uid,
        balance: 0,
        cardNumber: getRandomCardNumber(),
        name: cardType,
        cardPaymentSystem,
        currency,
      })

      console.log(currency);
    } catch (error: any) {
      Alert.alert('Error apply new product', error);
    }
  }

  return (
    <Padding style={{ marginTop: 24 }}>
      <Button onPress={registerHandler} title="Apply for a new product"/>
    </Padding>
  )
}