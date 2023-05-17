import { useEffect, useState } from "react"
import { Account } from "./useAccounts.types";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../../../../../../firebase";

export const useAccounts = () => {
  const [account, setAccount] = useState<Account[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => onSnapshot(
    query(
      collection(db, 'stories'),
    ),
    snapshot => {
      setAccount(snapshot.docs.map((d) => ({
        _id: d.id,
        ...d.data(),
      }) as Account));

      setIsLoading(false);
    }), []);

  return {
    account,
    isLoading,
  }
}