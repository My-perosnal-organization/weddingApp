import { useState } from "react";

export function BankAccountSection() {
  const [showAccount, setShowAccount] = useState(false);
  const accountText = "CA (110461545-00001) BROU";
  const accountName = "Nombre: Melany Fagundez Leal"
  function copyAccount() {
    navigator.clipboard.writeText(accountText);
    alert("Número de cuenta copiado 🤍");
  }

  return (
    <section className="bank-section">
      <p className="bank-message">
        Tu presencia es lo más importante para nosotros.
        <br />
        Pero si deseas hacernos un regalo, puedes ayudarnos con nuestro próximo paso 💛
      </p>

      {!showAccount && (
        <button className="rsvp-btn" onClick={() => setShowAccount(true)}>
          VER DATOS BANCARIOS
        </button>
      )}

      {showAccount && (
        <div className="bank-info">
          <p className="bank-name">Banco República (BROU)</p>
          <p className="bank-account">{accountText}</p>
          <p className="bank-account">{accountName}</p>

          <button className="rsvp-btn primary" onClick={copyAccount}>
            COPIAR NÚMERO DE CUENTA
          </button>

          {/* 👇 botón nuevo */}
          <button
            className="rsvpnot-btn "
            onClick={() => setShowAccount(false)}
          >
            OCULTAR DATOS
          </button>
        </div>
      )}
    </section>
  );
}
