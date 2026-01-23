import { useState } from "react";
import { createGiftSelection } from "../app/services/giftSelections.service";
import { selectGift } from "../app/services/gifts.service";

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  giftId: string;
  giftName: string;
};

export function GiftSelectionModal({
  open,
  onClose,
  onSuccess,
  giftId,
  giftName,
}: Props) {
  const [visibility, setVisibility] =
    useState<"public" | "anonymous">("anonymous");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // 👈 NUEVO

  if (!open) return null;

  async function handleConfirm() {
    try {
      setLoading(true);
      setError(null);

      await createGiftSelection({
        giftId,
        giftName,
        visibility,
        senderName: visibility === "public" ? name : undefined,
        message,
      });

      await selectGift(giftId); // 🚨 puede fallar por concurrencia

      onSuccess();
      onClose();
    } catch (e: unknown) {
      if (e instanceof Error) {
        if (e.message.includes("ya fue seleccionado")) {
          setError("Lo sentimos, alguien ya eligió este regalo 💛");
        } else {
          setError("Ocurrió un error, intentá nuevamente");
        }
      } else {
        setError("Ocurrió un error inesperado");
      }
    }finally {
      setLoading(false);
    }
  }

  return (
    <div className="gift-modal-overlay">
      <div className="gift-modal">
        <h3 className="gift-modal-title">{giftName}</h3>

        <div className="gift-radio">
          <label>
            <input
              type="radio"
              checked={visibility === "anonymous"}
              onChange={() => setVisibility("anonymous")}
            />
            Anónimo
          </label>

          <label>
            <input
              type="radio"
              checked={visibility === "public"}
              onChange={() => setVisibility("public")}
            />
            Público
          </label>
        </div>

        {visibility === "public" && (
          <input
            className="gift-input"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <textarea
          className="gift-textarea"
          placeholder="Mensaje opcional"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* 👇 MENSAJE DE ERROR */}
        {error && <p className="gift-error">{error}</p>}

        <div className="gift-actions">
          <button onClick={onClose} disabled={loading} className="ghost-btn">
            Cancelar
          </button>
          <button onClick={handleConfirm} disabled={loading} className="gift-btn">
            {loading ? "Confirmando…" : "Confirmar"}
          </button>
        </div>
      </div>
    </div>
  );
}
