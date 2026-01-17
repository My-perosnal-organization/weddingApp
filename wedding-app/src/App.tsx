import { useEffect, useState } from "react";
import {
  subscribeToGifts,
  type Gift,
} from "./app/services/gifts.service";
import { GiftSelectionModal } from "./components/GiftSelectionModal";

export default function App() {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);

  useEffect(() => {
    return subscribeToGifts(setGifts);
  }, []);

  return (
    <div>
      <h1>Lista de regalos</h1>

      {gifts.map((gift) => (
        <div key={gift.id}>
          <h4>{gift.name}</h4>

          {gift.selected ? (
            <span>🎁 Ya regalado</span>
          ) : (
            <button onClick={() => setSelectedGift(gift)}>
              Regalar
            </button>
          )}
        </div>
      ))}

      {selectedGift && (
        <GiftSelectionModal
          open={true}
          giftId={selectedGift.id}
          giftName={selectedGift.name}
          onClose={() => setSelectedGift(null)}
        />
      )}
    </div>
  );
}
