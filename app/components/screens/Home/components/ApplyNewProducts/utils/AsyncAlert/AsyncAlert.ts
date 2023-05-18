import { Alert } from 'react-native';
import { AsyncAlertProps } from './AsyncAlert.types';

export const asyncAlert = ({
  title,
  message,
  buttons,
}: AsyncAlertProps) => new Promise(resolve => {
  Alert.alert(title, message, [
    {
      text: buttons.text,
      onPress: () => {
        resolve(buttons.resolveValue);
      }
    },
    {
      text: buttons.textSecond,
      onPress: () => {
        resolve(buttons.resolveValueSecond);
      }
    },
  ], {
    cancelable: false,
  })
})