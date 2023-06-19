import { FC, useState } from "react";
import { Alert, Pressable, TextInput, View } from "react-native";
import { useAuth } from "../../../../../hooks/useAuth";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../../../firebase";

export const Field: FC = () => {
  const { user } = useAuth();
  const [message, setMessage] = useState('');

  async function onPressSendMessageHandler() {
    try {
      await addDoc(
        collection(db, 'messages'), {
          timestamp: serverTimestamp(),
          userId: user?.uid,
          text: message
        });
    } catch (error: any) {
      Alert.alert('Err add new msg: ', error)
    } finally {
      setMessage('');
    }
  }
 
  return (
    <View style={{
      marginBottom: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 4,
    }}>
      <TextInput
        placeholder="Enter your message"
        onChangeText={setMessage}
        value={message}
        showSoftInputOnFocus={false}
        autoCapitalize="none"
        style={{
          width: '83.333333%',
          backgroundColor: 'rgb(249 250 251)',
          borderRadius: 16,
          padding: 12,
          height: 40,
        }}
      />
      <Pressable onPress={onPressSendMessageHandler}>
        <MaterialCommunityIcons
          name="send-circle-outline"
          size={42}
          style={{
            color: 'rgb(147 197 253)',
          }}
        />
      </Pressable>
    </View>
  )
}