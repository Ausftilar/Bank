import { useEffect, useState } from "react"
import { Account } from "./useAccounts.types";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../../../../../firebase";
import { useAuth } from "../../../../../../../hooks/useAuth";

export const useAccounts = () => {
  const { user } = useAuth();

  const [accounts, setAccounts] = useState<Account[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => onSnapshot(
    query(
      collection(db, 'accounts'),
      where('userId', '==', user?.uid),
    ),
    snapshot => {
      setAccounts(snapshot.docs.map((d) => ({
        _id: d.id,
        ...d.data(),
      }) as Account));

      setIsLoading(false);
    }), []);

  return {
    accounts,
    isLoading,
  }
}