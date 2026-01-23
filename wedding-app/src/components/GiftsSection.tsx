import { useEffect, useState } from "react";
import giftIcon from "../assets/gifts.png";
import { GiftSelectionModal } from "./GiftSelectionModal";
import {
  subscribeToGifts,
  type Gift,
} from "../app/services/gifts.service";

export function GiftsSection() {
  const [successMessage, setSuccessMessage] = useState(false);

  const [open, setOpen] = useState(false);
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  if (!open) return;

  const unsubscribe = subscribeToGifts((gifts) => {
    setGifts(gifts);
    setLoading(false);
  });

  return () => unsubscribe();
}, [open]);


  return (
    <section className="gifts-section">
      <img src={giftIcon} alt="" className="gifts-icon" />

      <h2 className="gifts-title">LISTA DE REGALOS</h2>

      <p className="gifts-text">
        Estamos construyendo nuestro hogar, <br />
        si querés ser parte, preparamos una lista de regalos
        para acompañarnos en este comienzo
      </p>

      <button
        className={`gifts-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Mostrar regalos"
      >
        ∨
      </button>
      {successMessage && (
        <div className="gift-success">
          ¡Gracias! Tu regalo fue confirmado 💛
        </div>
      )}

      {open && (
        <div className="gifts-list">
          {loading && (
            <span className="gifts-loading">Cargando regalos…</span>
          )}

          {!loading &&
            gifts.map((gift) => (
              <div key={gift.id} className="gift-card">
                <span className="gift-name">{gift.name}</span>

                {gift.selected ? (
                  <span className="gift-check" aria-label="Regalo seleccionado">
                    ✓
                  </span>
                ) : (
                  <button
                    className="gift-btn"
                    onClick={() => setSelectedGift(gift)}
                  >
                    REGALAR
                  </button>
                )}
              </div>
            ))}
        </div>
      )}

      {selectedGift && (
        <GiftSelectionModal
          open
          giftId={selectedGift.id}
          giftName={selectedGift.name}
          onClose={() => setSelectedGift(null)}
          onSuccess={() => {
            setSuccessMessage(true);
            setTimeout(() => setSuccessMessage(false), 3000);
          }}
        />
      )}

    </section>
  );
}
