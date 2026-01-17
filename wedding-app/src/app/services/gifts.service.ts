import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export type Gift = {
  id: string;
  name: string;
  imageUrl?: string;
  productUrl?: string;
  order: number;
  selected: boolean;
};

const giftsRef = collection(db, "gifts");

export function subscribeToGifts(callback: (gifts: Gift[]) => void) {
  const q = query(giftsRef, orderBy("order", "asc"));

  return onSnapshot(q, (snapshot) => {
    const gifts: Gift[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Gift, "id">),
    }));

    callback(gifts);
  });
}

export async function selectGift(giftId: string) {
  const ref = doc(db, "gifts", giftId);
  await updateDoc(ref, { selected: true });
}
