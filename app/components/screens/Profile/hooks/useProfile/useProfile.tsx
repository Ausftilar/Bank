import { useEffect, useMemo, useState } from "react"
import { useAuth } from "../../../../../hooks/useAuth";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where
} from 'firebase/firestore';
import { db } from "../../../../../firebase";

export interface ProfileProps {
  _id: string,
  displayName: string,
  docId: string,
}

export const useProfile = () => {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState({} as ProfileProps);
  const [name, setName] = useState('');

  useEffect(() => onSnapshot(
    query(
      collection(db, 'users'),
      where('_id', '==', user?.uid),
      limit(1)
    ),
    snapshot => {
      const profile = snapshot.docs.map((item) => ({
        ...(item.data() as Omit<ProfileProps, 'docId'>),
        docId: item.id,
      }))[0];

      setProfile(profile);
      setName(profile.displayName);
      setIsLoading(false);
  }), []);

  const value = useMemo(() => ({
    profile,
    isLoading,
    name,
    setName,
  }), [profile, isLoading, name]);

  return value
}