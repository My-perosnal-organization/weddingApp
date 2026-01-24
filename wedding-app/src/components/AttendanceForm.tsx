import { useEffect, useState } from "react";
import { createAttendance } from "../app/services/attendance.service";

import confetti from "canvas-confetti";



type Props = {
  onCancel: () => void;
};

export function AttendanceForm({ onCancel }: Props) {
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [guests, setGuests] = useState("");
  const [comments, setComments] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);


  function launchFireworks() {
    const duration = 2500;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
  async function handleSubmit() {
    if (!name || !family || !guests) return;

    try {
      setLoading(true);
      await createAttendance({
        name,
        family,
        guests,
        comments,
      });
      launchFireworks();
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!success) return;

    const timer = setTimeout(() => {
      setSuccess(false);

      // limpiar campos
      setName("");
      setFamily("");
      setGuests("");
      setComments("");

      onCancel();
    }, 5000);

    return () => clearTimeout(timer);
  }, [success, onCancel]);

  if (success) {
    return (
      <p className="attendance-success">
        ¡Gracias por confirmar tu asistencia! 💛
      </p>
    );
  }

  return (
    <div className="attendance-form">
      <input
        placeholder="Nombre y apellido"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Familia"
        value={family}
        onChange={(e) => setFamily(e.target.value)}
      />

      <textarea
        placeholder="¿Cuántas personas asistirán?"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <textarea
        placeholder="Comentarios (opcional)"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />

      <p className="attendance-disclaimer">
        Les pedimos amablemente que los menores estén siempre
        acompañados y bajo la responsabilidad de sus adultos a cargo,
        para que todos podamos disfrutar de la celebración 💛
      </p>

      <div className="attendance-actions">
        <button
          type="button"
          className="ghost-btn"
          onClick={onCancel}
          disabled={loading}
        >
          Cancelar
        </button>

        <button
          className="rsvp-btn"
          disabled={loading}
          onClick={handleSubmit}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}
