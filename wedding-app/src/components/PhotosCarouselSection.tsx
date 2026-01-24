import imgCarrusel1 from "../assets/imgcarrusel1.jpeg";
import imgCarrusel2 from "../assets/imgcarrusel2.jpeg";
import imgCarrusel3 from "../assets/imgcarrusel3.jpeg";
import imgCarrusel4 from "../assets/imgcarrusel4.jpeg";
export function PhotosCarouselSection() {
  const images = [
    imgCarrusel1,
    imgCarrusel2,
    imgCarrusel3,
    imgCarrusel4,
  ];

  // duplicamos para efecto infinito
  const loopImages = [...images, ...images];

  return (
    <section className="carousel-section">
      <div className="carousel-track">
        {loopImages.map((src, index) => (
          <div className="carousel-item" key={index}>
            <img src={src} alt={`Foto ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}