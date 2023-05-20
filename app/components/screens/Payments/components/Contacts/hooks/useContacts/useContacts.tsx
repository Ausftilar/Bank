import { useEffect, useState } from "react"
import { Contact } from "../../Contacts.type";
import { useAuth } from "../../../../../../../hooks/useAuth";
import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../../../../../../firebase";
import { ProfileProps } from "../../../../../Profile/hooks/useProfile";

export const useContacts = () => {
  const { user } = useAuth();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => onSnapshot(
    query(
      collection(db, 'accounts'),
      where('userId', '!=', user?.uid),
    ),
    async snapshot => {
      const contactsFire = await Promise.all(
        snapshot.docs.map(async (userData) => {
          const data = userData.data() as Contact & {
            userId: string,
          }

          let displayName = '';

          const request = query(
            collection(db, 'users'),
            where('_id', '==', data.userId),
          );

          const querySnapshot = await getDocs(request)

          querySnapshot.forEach((doc) => {
            displayName = (doc.data() as ProfileProps).displayName;
          })

          return {
            ...data,
            _id: userData.id,
            displayName,
          }
        })
      )

      setContacts(
        contactsFire.filter(
          (contact, index, arr) => arr.findIndex((item) => item.displayName === contact.displayName) === index
        ).filter((item) => item.displayName),
      )

      setIsLoading(false);
    }), []);

  return {
    contacts,
    isLoading,
  }
}