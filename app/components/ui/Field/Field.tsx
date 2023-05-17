import { FC } from "react"
import { TextInput } from "react-native"

interface FieldProps {
  onChange: (value: string) => void,
  value: string,
  placeholder: string,
  isSecure?: boolean,
}

export const Field: FC<FieldProps> = ({
  onChange,
  value,
  placeholder,
  isSecure,
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      secureTextEntry={isSecure}
      showSoftInputOnFocus={false}
      autoCapitalize="none"
      style={{
        borderRadius: 12,
        backgroundColor: 'rgb(243 244 246)',
        marginTop: 12,
        padding: 12,
        width: '100%',
      }}
    />
  )
}