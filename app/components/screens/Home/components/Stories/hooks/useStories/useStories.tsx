import { useEffect, useState } from "react"
import { Story } from "./useStories.types";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../../../../../../firebase";

export const useStories = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => onSnapshot(
    query(
      collection(db, 'stories'),
    ),
    snapshot => {
      setStories(snapshot.docs.map((d) => ({
        _id: d.id,
        ...d.data(),
      }) as Story));

      setIsLoading(false);
    }), []);

  return {
    stories,
    isLoading,
  }
}