import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export type GiftSelectionInput = {
  giftId: string;
  giftName: string;
  visibility: "public" | "anonymous";
  senderName?: string;
  message?: string;
};

export async function createGiftSelection(
  data: GiftSelectionInput
) {
  await addDoc(collection(db, "giftSelections"), {
    giftId: data.giftId,
    giftName: data.giftName,
    visibility: data.visibility,
    senderName:
      data.visibility === "public" ? data.senderName || "" : "",
    message: data.message || "",
    createdAt: serverTimestamp(),
  });
}
