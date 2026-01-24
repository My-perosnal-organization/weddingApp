//import headerImage from "../assets/headerImage.jpeg"
import heroImage from "../assets/heroImagev2.png"
export function HeroSection() {
  return (
    <section className="hero-section">
      {/* IMAGEN */}
      <div className="hero-media">
        
         <img
            className="hero-image"
            src={heroImage}
            alt=""
        />

        <div className="hero-overlay">
          <span className="hero-eyebrow">NOS CASAMOS</span>
          <h1 className="hero-names">
            Melany <span className="amp">&</span> Alem
          </h1>
        </div>
      </div>

      {/* TEXTO BÍBLICO */}
      <div className="hero-text">
        <p>
          Creemos que el amor verdadero nace <br />
          cuando Dios ocupa el primer lugar.

          Hoy elegimos unir nuestras vidas, confiando en Su propósito y en
          la promesa de caminar juntos bajo Su guía.
        </p>

        <span className="hero-verse">Mateo 6:33</span>
      </div>
    </section>
  );
}
