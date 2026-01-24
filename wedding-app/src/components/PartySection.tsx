import glassesImg from "../assets/copas.png"; 

export function PartySection() {
  return (
    <section className="party-section">

      {/* ===== CEREMONIA ===== */}
      <div className="party-block">
        <h2 className="party-title">CEREMONIA</h2>

        <p className="ceremony-time">18:00 pm </p>
        <p className="ceremony-time">Sabado 21</p>

        <p className="ceremony-place">LA CHINCHILLA</p>

        <a
          className="rsvp-btn"
          href="https://maps.app.goo.gl/awA7xvE1J419qvDr8"
          target="_blank"
          rel="noopener noreferrer"
        >
          CÓMO LLEGAR
        </a>
      </div>

      {/* ===== FIESTA ===== */}
      <div className="party-block party-secondary">

        <h2 className="party-title">FIESTA</h2>

        <img
          src={glassesImg}
          alt=""
          className="party-icon"
        />

        <p className="ceremony-time">20:00 pm</p>

        <p className="ceremony-place">LA CHINCHILLA</p>
      </div>

    </section>
  );
}
