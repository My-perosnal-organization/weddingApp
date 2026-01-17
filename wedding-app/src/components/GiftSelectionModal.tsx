import { useState } from "react";
import { createGiftSelection } from "../app/services/giftSelections.service";
import { selectGift } from "../app/services/gifts.service";

type Props = {
  open: boolean;
  onClose: () => void;
  giftId: string;
  giftName: string;
};

export function GiftSelectionModal({
  open,
  onClose,
  giftId,
  giftName,
}: Props) {
  const [visibility, setVisibility] =
    useState<"public" | "anonymous">("anonymous");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function handleConfirm() {
    try {
      setLoading(true);

      await createGiftSelection({
        giftId,
        giftName,
        visibility,
        senderName: visibility === "public" ? name : undefined,
        message,
      });

      // marcar regalo SOLO después de confirmar
      await selectGift(giftId);

      onClose();
      alert("¡Gracias por el regalo! 💛");
    } catch (e) {
      alert("Error al confirmar el regalo" + e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={overlay}>
      <div style={modal}>
        <h3>Regalar: {giftName}</h3>

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

        {visibility === "public" && (
          <input
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <textarea
          placeholder="Mensaje opcional"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={onClose} disabled={loading}>
            Cancelar
          </button>
          <button onClick={handleConfirm} disabled={loading}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

const overlay: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modal: React.CSSProperties = {
  background: "#fff",
  padding: 20,
  width: 320,
  borderRadius: 8,
};
