import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  runTransaction,
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

/**
 * Suscripción en tiempo real a la lista de regalos
 */
export function subscribeToGifts(callback: (gifts: Gift[]) => void) {
  const q = query(giftsRef, orderBy("order", "asc"));

  return onSnapshot(q, (snapshot) => {
    const gifts: Gift[] = snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...(docSnap.data() as Omit<Gift, "id">),
    }));

    callback(gifts);
  });
}

/**
 * Marca un regalo como seleccionado de forma atómica
 * Evita que dos personas regalen el mismo regalo
 */
export async function selectGift(giftId: string) {
  const giftRef = doc(db, "gifts", giftId);

  await runTransaction(db, async (transaction) => {
    const giftSnap = await transaction.get(giftRef);

    if (!giftSnap.exists()) {
      throw new Error("El regalo no existe");
    }

    const data = giftSnap.data();

    if (data.selected) {
      throw new Error("Este regalo ya fue seleccionado");
    }

    transaction.update(giftRef, {
      selected: true,
      selectedAt: new Date(),
    });
  });
}
