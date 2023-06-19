import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../../firebase";
import { MessageProps } from "../../components/Message/Message.types";
import dayjs from "dayjs";

export const useMessages = () => {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => onSnapshot(
    query(
      collection(db, 'messages'),
    ),
    snapshot => {
      setMessages(snapshot.docs.map((doc) => doc.data()?.timestamp
      ? ({
        _id: doc.id,
        timestamp: dayjs.unix(doc.data()?.timestamp.seconds).format('L LT'),
        ...doc.data(),
      } as MessageProps)
      : ({
        _id: doc.id,
        ...doc.data(),
      } as MessageProps)));

      setIsLoading(false);
    }), []);

  return {
    messages,
    isLoading,
  }
}