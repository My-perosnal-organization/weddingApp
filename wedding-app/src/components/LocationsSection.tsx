import { CeremonyCard } from "./CeremonyCard";
import { PartyCard } from "./PartyCard";

export function LocationsSection() {
  return (
    <section className="section locations-section">
      <div className="section-inner">
        <p className="section-label">Ubicaciones</p>
        <h2 className="section-title">Te esperamos en estos lugares</h2>
        <div className="locations-grid">
          <CeremonyCard />
          <PartyCard />
        </div>
      </div>
    </section>
  );
}
