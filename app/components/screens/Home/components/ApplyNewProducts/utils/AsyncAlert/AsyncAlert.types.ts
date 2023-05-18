export interface Buttons {
  text: string,
  resolveValue: string,
  textSecond: string,
  resolveValueSecond: string,
}

export interface AsyncAlertProps {
  title: string,
  message: string,
  buttons: Buttons,
}