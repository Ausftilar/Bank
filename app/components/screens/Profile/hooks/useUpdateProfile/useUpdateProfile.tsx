import { useState } from "react"
import { useAuth } from "../../../../../hooks/useAuth";
import { db } from "../../../../../firebase";
import { doc, updateDoc } from "firebase/firestore";

export const useUpdateProfile = (name: string, docId: string) => {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateProfile = async () => {
    if (!user) return;

    setIsLoading(true);

    try {
      const docRef = doc(db, 'users', docId)

      await updateDoc(docRef, {
        displayName: name,
      });

      setIsSuccess(true);

      setTimeout(() => {
        setIsLoading(false)
        setIsSuccess(false)
      }, 3000)
    } catch (error: any) {
      console.log('Error update profile: ', error.message);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    isSuccess,
    updateProfile,
  }
}